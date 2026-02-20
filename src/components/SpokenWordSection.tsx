import { useState } from "react";
import { motion } from "framer-motion";
import epiphanyImg from "@/assets/epiphany-book.jpeg";
import moodSwingsImg from "@/assets/mood-swings-book.jpeg";
import readingImg from "@/assets/uriah-reading.jpeg";
import speakingImg from "@/assets/uriah-speaking.jpeg";
import truthLogo from "@/assets/truth-logo.png";
import BookPurchaseModal from "./BookPurchaseModal";

const books = [
  { title: "Epiphany", subtitle: "Poems in the Key of Love", image: epiphanyImg },
  { title: "Mood Swings", subtitle: "Poems & Other Rants — Second Edition", image: moodSwingsImg },
];

const SpokenWordSection = () => {
  const [selectedBook, setSelectedBook] = useState<typeof books[0] | null>(null);

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-card">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Words as <span className="text-gradient-gold">Weapons.</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-light max-w-2xl mx-auto">
            Poet. Author. Speaker. Uriah's pen cuts deep — two published collections and
            countless stages where truth meets rhythm.
          </p>
        </motion.div>

        {/* Artifact Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {/* Book Covers - tall cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0 }}
            className="group relative overflow-hidden row-span-2 rounded-sm cursor-pointer"
            onClick={() => setSelectedBook(books[0])}
          >
            <img
              src={epiphanyImg}
              alt="Epiphany — Poems in the Key of Love by Uriah Bell"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 overlay-dark opacity-0 transition-opacity duration-500 group-hover:opacity-60" />
            <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-xs font-body uppercase tracking-[0.3em] text-primary">
                Epiphany
              </span>
              <p className="text-xs font-light text-foreground/80">
                Poems in the Key of Love
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative overflow-hidden row-span-2 rounded-sm cursor-pointer"
            onClick={() => setSelectedBook(books[1])}
          >
            <img
              src={moodSwingsImg}
              alt="Mood Swings — Poems and Other Rants by Uriah Bell"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 overlay-dark opacity-0 transition-opacity duration-500 group-hover:opacity-60" />
            <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-xs font-body uppercase tracking-[0.3em] text-primary">
                Mood Swings
              </span>
              <p className="text-xs font-light text-foreground/80">
                Poems &amp; Other Rants — Second Edition
              </p>
            </div>
          </motion.div>

          {/* Performance shots */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative overflow-hidden aspect-square rounded-sm"
          >
            <img
              src={readingImg}
              alt="Uriah reading from Mood Swings on stage"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 overlay-dark opacity-40 transition-opacity duration-500 group-hover:opacity-70" />
            <div className="absolute inset-0 flex flex-col justify-end p-4">
              <span className="text-xs font-body uppercase tracking-[0.3em] text-primary">
                On Stage
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative overflow-hidden aspect-square rounded-sm"
          >
            <img
              src={speakingImg}
              alt="Uriah speaking passionately at an event"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 overlay-dark opacity-40 transition-opacity duration-500 group-hover:opacity-70" />
            <div className="absolute inset-0 flex flex-col justify-end p-4">
              <span className="text-xs font-body uppercase tracking-[0.3em] text-primary">
                Speaking Truth
              </span>
            </div>
          </motion.div>

          {/* Truth logo - spans bottom right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-2 flex items-center justify-center bg-background/50 p-8 rounded-sm"
          >
            <img
              src={truthLogo}
              alt="TRUTH — ...stand in yours"
              className="max-h-48 w-auto object-contain"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
      <BookPurchaseModal
        isOpen={!!selectedBook}
        onClose={() => setSelectedBook(null)}
        book={selectedBook || books[0]}
      />
    </section>
  );
};

export default SpokenWordSection;
