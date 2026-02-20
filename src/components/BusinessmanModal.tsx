import { motion, AnimatePresence } from "framer-motion";
import { X, Briefcase, GraduationCap, Award, BookOpen, Users, Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import profileImg from "@/assets/u3.png";

interface BusinessmanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SectionHeader = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-primary/15">
      <Icon className="h-4 w-4 text-primary" />
    </div>
    <h3 className="font-display text-xl font-semibold tracking-wide">{title}</h3>
  </div>
);

const ExperienceItem = ({
  title,
  company,
  period,
  location,
  description,
}: {
  title: string;
  company: string;
  period: string;
  location?: string;
  description?: string;
}) => (
  <div className="relative pl-6 pb-8 last:pb-0 border-l border-border/50 last:border-transparent">
    <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-primary/70" />
    <h4 className="font-display text-sm font-semibold text-foreground">{title}</h4>
    <p className="text-sm text-primary/80 font-medium">{company}</p>
    <p className="text-xs text-muted-foreground mt-0.5">
      {period}{location ? ` · ${location}` : ""}
    </p>
    {description && (
      <p className="text-sm text-foreground/70 mt-2 leading-relaxed font-light">{description}</p>
    )}
  </div>
);

const BusinessmanModal = ({ isOpen, onClose }: BusinessmanModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 backdrop-blur-sm p-4 sm:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-3xl my-4 rounded-sm overflow-hidden bg-card shadow-2xl border border-border/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative">
              <div className="h-28 bg-gradient-to-r from-secondary via-card to-secondary" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-sm bg-background/50 backdrop-blur-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="px-8 -mt-14 flex items-end gap-6 pb-6">
                <img
                  src={profileImg}
                  alt="Uriah"
                  className="h-28 w-28 rounded-sm object-cover border-4 border-card shadow-lg"
                />
                <div className="pb-1">
                  <h2 className="font-display text-2xl font-bold tracking-wide">Uriah</h2>
                  <p className="text-sm text-foreground/70 font-light leading-relaxed max-w-lg mt-1">
                    Experienced Business Leader with a demonstrated history in retail and publishing. Skilled in Talent Development, Community Mobilization, Financial Acumen, and Media Relations.
                  </p>
                </div>
              </div>
            </div>

            <Separator className="opacity-30" />

            {/* Content */}
            <div className="p-8 space-y-10">
              {/* Experience */}
              <section>
                <SectionHeader icon={Briefcase} title="Experience" />
                <div className="ml-1 space-y-0">
                  <ExperienceItem
                    title="Founder / Publisher"
                    company="Rising Voices Press"
                    period="Nov 2009 – Present · 16+ years"
                    description="Poet, spoken word artist, writer, activist, and publisher. Puts ideas into prose, performs spoken word, and publishes work that bypasses mainstream media and the status quo."
                  />
                  <ExperienceItem
                    title="Area Director"
                    company="WeWork"
                    period="Apr 2019 – Apr 2024 · 5 years"
                    location="Atlanta, GA"
                  />
                  <ExperienceItem
                    title="Editor-in-Chief"
                    company="TRUTH Magazine"
                    period="Oct 2011 – Jun 2021 · 9 years"
                    location="Boston, MA"
                    description="A bi-monthly national publication promoting, empowering, and celebrating the lives, culture, and talents of LGBT people of color through arts, health, spirituality, politics, and education."
                  />
                  <ExperienceItem
                    title="District Manager"
                    company="Barnes & Noble, Inc."
                    period="May 2017 – Apr 2019 · 2 years"
                    location="Atlanta Metropolitan Area"
                  />
                  <ExperienceItem
                    title="General Manager"
                    company="Staples"
                    period="May 2008 – Apr 2017 · 9 years"
                    location="New York City Metropolitan Area"
                    description="Drove sales, services, and operational effectiveness. 2012 & 2015 U.S. Retail President's Club Winner."
                  />
                </div>
              </section>

              {/* Education */}
              <section>
                <SectionHeader icon={GraduationCap} title="Education" />
                <div className="space-y-4 ml-1">
                  <div>
                    <h4 className="font-display text-sm font-semibold">Yoga Vida NYC</h4>
                    <p className="text-xs text-muted-foreground">200-Hour Yoga Teacher Certification (Vinyasa) · 2017</p>
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold">Wayne State University</h4>
                    <p className="text-xs text-muted-foreground">B.A., Finance · 2001–2005 · GPA: 3.6</p>
                  </div>
                </div>
              </section>

              {/* Skills & Publications in two columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <section>
                  <SectionHeader icon={Star} title="Top Skills" />
                  <div className="flex flex-wrap gap-2">
                    {["People Development", "Public Speaking", "Talent Development", "Event Management", "Financial Acumen", "Media Relations", "Fundraising"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs rounded-sm bg-secondary text-secondary-foreground border border-border/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>

                <section>
                  <SectionHeader icon={BookOpen} title="Publications" />
                  <div className="space-y-3 ml-1">
                    <div>
                      <h4 className="font-display text-sm font-semibold">TRUTH Magazine</h4>
                      <p className="text-xs text-muted-foreground">Rising Voices Press · 2012</p>
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-semibold">Mood Swings: Poems and Other Rants</h4>
                      <p className="text-xs text-muted-foreground">Rising Voices Press · 2011</p>
                    </div>
                  </div>
                </section>
              </div>

              {/* Awards */}
              <section>
                <SectionHeader icon={Award} title="Honors & Awards" />
                <div className="space-y-4 ml-1">
                  {["2015–2016", "2012–2013"].map((year) => (
                    <div key={year} className="flex gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-primary/50 shrink-0" />
                      <div>
                        <h4 className="font-display text-sm font-semibold">{year} U.S. Retail President's Club Winner</h4>
                        <p className="text-xs text-muted-foreground">
                          Staples — Awarded to top 3% of company leadership for excellence in profit, sales, service, operations, and people development.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Recommendations */}
              <section>
                <SectionHeader icon={Users} title="Recommendations" />
                <div className="space-y-6 ml-1">
                  <blockquote className="border-l-2 border-primary/30 pl-4">
                    <p className="text-sm text-foreground/80 italic font-light leading-relaxed">
                      "Uriah has the unique ability to lead effectively and empathetically without sacrificing his moral code… Uriah is not just a strong business operator, he is the total package of someone who will grow all aspects of your business."
                    </p>
                    <footer className="mt-2 text-xs text-muted-foreground">
                      — <span className="text-foreground/70 font-medium">James Ervin</span>, Regional Director @ Curbio
                    </footer>
                  </blockquote>
                  <blockquote className="border-l-2 border-primary/30 pl-4">
                    <p className="text-sm text-foreground/80 italic font-light leading-relaxed">
                      "He has a confident level-headed presence & approach. He creates safe spaces for his team… Uriah is a shining star, a joy to work with, & a forward-thinking leader."
                    </p>
                    <footer className="mt-2 text-xs text-muted-foreground">
                      — <span className="text-foreground/70 font-medium">Kayla Parchia</span>, Property Marketing Strategist, CBRE
                    </footer>
                  </blockquote>
                </div>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BusinessmanModal;
