import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, DollarSign, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";

const addressSchema = z.object({
  fullName: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  street: z.string().trim().min(1, "Street address is required").max(200),
  city: z.string().trim().min(1, "City is required").max(100),
  state: z.string().trim().min(1, "State is required").max(50),
  zip: z.string().trim().min(1, "ZIP code is required").max(20),
});

type AddressForm = z.infer<typeof addressSchema>;

interface BookPurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  book: {
    title: string;
    subtitle: string;
    image: string;
  };
}

const BOOK_PRICE = 12;

const BookPurchaseModal = ({ isOpen, onClose, book }: BookPurchaseModalProps) => {
  const [form, setForm] = useState<AddressForm>({
    fullName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof AddressForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof AddressForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = () => {
    const result = addressSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof AddressForm, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof AddressForm;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitted(true);
  };

  const handleClose = () => {
    setForm({ fullName: "", email: "", street: "", city: "", state: "", zip: "" });
    setErrors({});
    setSubmitted(false);
    onClose();
  };

  const orderSummary = encodeURIComponent(
    `${book.title} ($${BOOK_PRICE}) — Ship to: ${form.fullName}, ${form.street}, ${form.city}, ${form.state} ${form.zip}`
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full max-w-md rounded-lg border border-border bg-card p-6 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Book Info */}
            <div className="flex gap-4 mb-6">
              <img
                src={book.image}
                alt={book.title}
                className="h-28 w-20 object-cover rounded-sm"
              />
              <div className="flex flex-col justify-center">
                <h3 className="font-display text-lg font-bold text-foreground">
                  {book.title}
                </h3>
                <p className="text-sm text-muted-foreground">{book.subtitle}</p>
                <p className="mt-2 text-xl font-bold text-primary">${BOOK_PRICE}.00</p>
              </div>
            </div>

            {!submitted ? (
              <>
                <h4 className="text-sm font-body uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Shipping Address
                </h4>

                <div className="space-y-3">
                  {([
                    { key: "fullName", label: "Full Name", placeholder: "Your full name" },
                    { key: "email", label: "Email", placeholder: "your@email.com", type: "email" },
                    { key: "street", label: "Street Address", placeholder: "123 Main St" },
                    { key: "city", label: "City", placeholder: "City" },
                  ] as const).map(({ key, label, placeholder, ...rest }) => (
                    <div key={key}>
                      <Label htmlFor={key} className="text-xs text-muted-foreground">
                        {label}
                      </Label>
                      <Input
                        id={key}
                        value={form[key]}
                        onChange={(e) => updateField(key, e.target.value)}
                        placeholder={placeholder}
                        className="mt-1 bg-background border-border"
                        {...rest}
                      />
                      {errors[key] && (
                        <p className="text-xs text-destructive mt-1">{errors[key]}</p>
                      )}
                    </div>
                  ))}

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="state" className="text-xs text-muted-foreground">
                        State
                      </Label>
                      <Input
                        id="state"
                        value={form.state}
                        onChange={(e) => updateField("state", e.target.value)}
                        placeholder="State"
                        className="mt-1 bg-background border-border"
                      />
                      {errors.state && (
                        <p className="text-xs text-destructive mt-1">{errors.state}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="zip" className="text-xs text-muted-foreground">
                        ZIP Code
                      </Label>
                      <Input
                        id="zip"
                        value={form.zip}
                        onChange={(e) => updateField("zip", e.target.value)}
                        placeholder="ZIP"
                        className="mt-1 bg-background border-border"
                      />
                      {errors.zip && (
                        <p className="text-xs text-destructive mt-1">{errors.zip}</p>
                      )}
                    </div>
                  </div>
                </div>

                <Button onClick={handleSubmit} className="w-full mt-6" size="lg">
                  <DollarSign className="h-4 w-4" />
                  Continue to Payment — ${BOOK_PRICE}.00
                </Button>
              </>
            ) : (
              <>
                <h4 className="text-sm font-body uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Choose Payment Method
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Shipping to: <span className="text-foreground">{form.fullName}</span><br />
                  {form.street}, {form.city}, {form.state} {form.zip}
                </p>

                <div className="space-y-3">
                  <a
                    href={`https://venmo.com/?txn=pay&amount=${BOOK_PRICE}&note=${orderSummary}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full rounded-md border border-border bg-background px-4 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors"
                  >
                    <span>Pay with Venmo</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </a>
                  <a
                    href={`https://cash.app/$pay/${BOOK_PRICE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full rounded-md border border-border bg-background px-4 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors"
                  >
                    <span>Pay with Cash App</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </a>
                </div>

                <p className="mt-4 text-xs text-muted-foreground text-center">
                  Include "<strong>{book.title}</strong>" in your payment note so Uriah knows which book to send.
                </p>

                <Button variant="ghost" onClick={handleClose} className="w-full mt-4">
                  Done
                </Button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookPurchaseModal;
