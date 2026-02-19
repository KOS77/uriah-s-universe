import { motion } from "framer-motion";
import heroImg from "@/assets/u10.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Uriah"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 overlay-dark" />
        <div className="absolute inset-0 overlay-dark-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-end pb-24 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 text-sm font-body uppercase tracking-[0.4em] text-muted-foreground"
        >
          Athlete · Intellectual · Artist · Entrepreneur · Dog Dad
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-6xl font-bold tracking-tight sm:text-8xl md:text-9xl"
        >
          <span className="text-gradient-gold">URIAH</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 max-w-lg text-lg font-light text-muted-foreground"
        >
          Multi-dimensional. Unapologetically authentic.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="h-10 w-6 rounded-full border border-muted-foreground/40 flex items-start justify-center pt-2"
          >
            <div className="h-2 w-1 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
