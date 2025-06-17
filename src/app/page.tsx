import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "../components/FeaturedCourses"
import WhyChoooseUS from "@/components/WhyChoooseUS";
import MovingCards from "@/components/MovingCards";
export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection/>
   <FeaturedCourses/>
   <WhyChoooseUS/>
   <MovingCards/>
   </main>
  );
}
