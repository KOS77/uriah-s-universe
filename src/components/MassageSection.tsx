import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import yogaImg1 from "@/assets/yoga1.jpg";
import yogaImg2 from "@/assets/yoga2.jpg";

const SQUARE_BOOKING_URL = "https://debonair-aesthetic-dba.square.site/";

const MassageSection = () => {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Healing <span className="text-gradient-gold">Hands.</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-light max-w-2xl mx-auto">
            Licensed massage therapist bringing restoration to the body.
            Book your session and experience the difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Image card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden aspect-[3/4] rounded-sm"
          >
            <img
              src={yogaImg1}
              alt="Uriah providing massage therapy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 overlay-dark opacity-40 transition-opacity duration-500 group-hover:opacity-70" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <span className="text-xs font-body uppercase tracking-[0.3em] text-primary">
                Restore
              </span>
              <p className="text-sm font-light text-foreground/80">
                Body work that heals from within
              </p>
            </div>
          </motion.div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center justify-center bg-card rounded-sm p-8 sm:p-12 text-center"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Book a Session
            </h3>
            <p className="text-sm text-muted-foreground mb-8 max-w-xs">
              Ready to feel the difference? Browse available times and book
              your massage appointment online.
            </p>
            <Button asChild size="lg" className="group">
              <a
                href={SQUARE_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </motion.div>

          {/* Image card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative overflow-hidden aspect-[3/4] rounded-sm sm:col-span-2 lg:col-span-1"
          >
            <img
              src={yogaImg2}
              alt="Wellness and bodywork session"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 overlay-dark opacity-40 transition-opacity duration-500 group-hover:opacity-70" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <span className="text-xs font-body uppercase tracking-[0.3em] text-primary">
                Renew
              </span>
              <p className="text-sm font-light text-foreground/80">
                Strength meets serenity
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MassageSection;
