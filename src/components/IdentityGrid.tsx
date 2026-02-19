import { useState } from "react";
import { motion } from "framer-motion";
import athleteImg from "@/assets/u5.jpg";
import intellectImg from "@/assets/u4.jpg";
import dogDadImg from "@/assets/u1.jpg";
import communityImg from "@/assets/u9.jpg";
import profileImg from "@/assets/u3.png";
import portraitImg from "@/assets/u2.jpg";
import AthleteStoryModal from "./AthleteStoryModal";

interface IdentityCardProps {
  image: string;
  label: string;
  description: string;
  className?: string;
  index: number;
  onClick?: () => void;
}

const IdentityCard = ({ image, label, description, className = "", index, onClick }: IdentityCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className={`group relative overflow-hidden bg-card ${onClick ? "cursor-pointer" : ""} ${className}`}
    onClick={onClick}
  >
    <img
      src={image}
      alt={label}
      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      loading="lazy"
    />
    <div className="absolute inset-0 overlay-dark opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
    <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
      <span className="mb-1 text-xs font-body uppercase tracking-[0.3em] text-primary">
        {label}
      </span>
      <p className="text-sm font-light text-foreground/80 max-w-xs">
        {description}
      </p>
      {onClick && (
        <span className="mt-3 text-xs uppercase tracking-[0.2em] text-primary/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Read the story →
        </span>
      )}
    </div>
  </motion.div>
);

const identities = [
  {
    image: athleteImg,
    label: "The Athlete",
    description: "Discipline forged in sweat. Strength is a lifestyle, not a hobby.",
    hasStory: true,
  },
  {
    image: intellectImg,
    label: "The Intellectual",
    description: "Always learning. A mind that never rests, fueled by curiosity.",
  },
  {
    image: dogDadImg,
    label: "The Dog Dad",
    description: "Proud fur father. Unconditional love goes both ways.",
  },
  {
    image: portraitImg,
    label: "The Spoken Word Artist",
    description: "Words that move. Poetry as a weapon of truth and healing.",
  },
  {
    image: communityImg,
    label: "The Community",
    description: "Surrounded by people who build each other up.",
  },
  {
    image: profileImg,
    label: "The Businessman",
    description: "Sharp mind, sharper vision. Building empires with intention.",
  },
];

const IdentityGrid = () => {
  const [athleteOpen, setAthleteOpen] = useState(false);

  return (
    <>
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
              Many Faces. <span className="text-gradient-gold">One Man.</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-light">
              Every dimension tells a story.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <IdentityCard
              {...identities[0]}
              index={0}
              className="aspect-[3/4] sm:row-span-2"
              onClick={() => setAthleteOpen(true)}
            />
            <IdentityCard {...identities[1]} index={1} className="aspect-square" />
            <IdentityCard {...identities[2]} index={2} className="aspect-square" />
            <IdentityCard {...identities[3]} index={3} className="aspect-square" />
            <IdentityCard {...identities[4]} index={4} className="aspect-video lg:col-span-2" />
            <IdentityCard {...identities[5]} index={5} className="aspect-square sm:hidden lg:block" />
          </div>
        </div>
      </section>

      <AthleteStoryModal isOpen={athleteOpen} onClose={() => setAthleteOpen(false)} />
    </>
  );
};

export default IdentityGrid;
