import GetStartedBanner from "@/components/home/GetStartedBanner";
import Hero from "@/ReusebaleComponent/Hero";
import bg from "../../../assets/aboutimage/image.png";
import GetInTouch from "@/components/contact/GetInTauch";

const page = () => {
  return (
    <div>
      <Hero bgImage={bg.src} title="Contact" subtitle="Home / Contact" />
      <GetInTouch />
      <GetStartedBanner />
    </div>
  );
};

export default page;
