import HeroBanner from "@components/HeroBanner";
import RoleCards from "@components/RoleCards";
import MilestoneSection from "@components/MilestoneSection";
import Footer from "@components/Footer";

export default function LandingPage() {
  return (
    <main>
      <HeroBanner />
      <RoleCards />
      <MilestoneSection />
      <Footer />
    </main>
  );
}
