import AboutUs from "@/components/home/AskedQuestion";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <div className=" mx-auto">
      <div className="bg-gradient-to-br from-teal-500 to-blue-600 w-full flex justify-center items-center">
        <HeroSection />
      </div>
      <AboutUs />
    </div>
  );
}
