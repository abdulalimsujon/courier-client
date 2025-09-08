import AboutUs from "@/components/home/AboutUs";
import AskedQuestion from "@/components/home/AskedQuestion";
import CustomerSay from "@/components/home/CustomerSay";
import GetStartedBanner from "@/components/home/GetStartedBanner";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";

export default function Home() {
  return (
    <div className="">
      <div className="bg-gradient-to-br from-teal-500 to-blue-600 w-full flex justify-center items-center">
        <HeroSection />
      </div>
      <AskedQuestion />
      <AboutUs></AboutUs>
      <HowItWorks />
      <CustomerSay />
      <GetStartedBanner />
    </div>
  );
}
