import GetStartedBanner from "@/components/home/GetStartedBanner";
import Hero from "@/ReusebaleComponent/Hero";
import bg from "../../assets/aboutimage/image.png";

const page = () => {
  return (
    <div>
      <Hero bgImage={bg.src} title="Our Service" subtitle="Home / service" />
      <GetStartedBanner />
    </div>
  );
};

export default page;
