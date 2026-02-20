import HeroSection from "@/components/HeroSection";
import IdentityGrid from "@/components/IdentityGrid";
import SpokenWordSection from "@/components/SpokenWordSection";
import MassageSection from "@/components/MassageSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <IdentityGrid />
      <SpokenWordSection />
      <MassageSection />
      <Footer />
    </main>
  );
};

export default Index;
