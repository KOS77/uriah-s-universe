import HeroSection from "@/components/HeroSection";
import IdentityGrid from "@/components/IdentityGrid";
import SpokenWordSection from "@/components/SpokenWordSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <IdentityGrid />
      <SpokenWordSection />
      <Footer />
    </main>
  );
};

export default Index;
