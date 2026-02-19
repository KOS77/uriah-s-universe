import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import yoga1 from "@/assets/yoga1.jpg";
import yoga2 from "@/assets/yoga2.jpg";

interface AthleteStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const paragraphs = [
  "My journey to the mat has been an interesting one to say the least. I honestly didn't have the intention of being the yogi you see before you today. What had happened was… a friend of mine was looking for a way to diversify her fitness routine. In complete candor, I was extremely apprehensive about taking a yoga class because a few years earlier, I'd attended a class in Boston and found the experience so unsavory, I was pretty certain I was never taking another yoga class. However, my friends mean a lot to me — I even have the word \"friendship\" inked on my collar bone. And so, in support of my friend, I went into this yogic situation to celebrate her efforts. Boy, was I in for an awakening.",
  "The thing with yoga is that with a consistent practice you discover, uncover, and find new ways of being. Yoga really is transformative. It changes your approach and connection to everything. My practice became more consistent as I found more peace on my mat than off of it. By showing up to my mat on a regular basis, I gained insight into how I needed to show up for myself and let go of things I had been holding onto. Within learning about certain yogic principles, I was able to look at my past and release things that were no longer serving me.",
  "Yoga left me unfettered and I was no longer so tied to who I thought Uriah needed to be. I learned that I had a choice in literally how I looked at the world, and yoga gave me the ability to make better choices every day.",
  "I have always worked hard and been a bit of a perfectionist, and while there is nothing wrong with that, yoga gave me insight on how being kind to myself and loving myself in a different way was imperative to being a better man. Yoga gave me another way to love myself and in turn, love those around me.",
  "Yoga taught me that I was enough. And it is that gift I hope to share with you. You are perfect in every way just the way you are. You are exactly where you are supposed to be in this moment. And you are a child of the universe, and deserve to be celebrated and uplifted for being. Yoga does that and I hope that you will celebrate with me in this practice."
];

const AthleteStoryModal = ({ isOpen, onClose }: AthleteStoryModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-background/95 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-full max-w-4xl px-6 py-16 sm:py-24"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="fixed top-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12 text-center"
            >
              <span className="text-xs font-body uppercase tracking-[0.4em] text-primary">
                The Athlete · The Yogi
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl md:text-6xl">
                Journey to the <span className="text-gradient-gold">Mat</span>
              </h2>
            </motion.div>

            {/* Hero yoga image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-12 overflow-hidden rounded-sm"
            >
              <img
                src={yoga1}
                alt="Uriah practicing yoga"
                className="w-full object-cover max-h-[500px]"
              />
            </motion.div>

            {/* Story paragraphs with staggered animation */}
            <div className="mx-auto max-w-2xl space-y-8">
              {paragraphs.slice(0, 3).map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                  className="text-base leading-relaxed text-foreground/80 font-light font-body"
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Second yoga image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="my-12 overflow-hidden rounded-sm"
            >
              <img
                src={yoga2}
                alt="Uriah in yoga class"
                className="w-full object-cover max-h-[500px]"
              />
            </motion.div>

            {/* Remaining paragraphs */}
            <div className="mx-auto max-w-2xl space-y-8">
              {paragraphs.slice(3).map((text, i) => (
                <motion.p
                  key={i + 3}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.15, duration: 0.5 }}
                  className="text-base leading-relaxed text-foreground/80 font-light font-body"
                >
                  {text}
                </motion.p>
              ))}

              {/* Pull quote */}
              <motion.blockquote
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="border-l-2 border-primary pl-6 py-2 my-12"
              >
                <p className="font-display text-xl italic text-foreground sm:text-2xl">
                  "Yoga taught me that I was enough."
                </p>
              </motion.blockquote>
            </div>

            {/* Back button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="mt-16 text-center"
            >
              <button
                onClick={onClose}
                className="border border-border px-8 py-3 text-xs font-body uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Back to Dimensions
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AthleteStoryModal;
