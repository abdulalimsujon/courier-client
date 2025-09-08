import Container from "@/ReusebaleComponent/Container";
import SectionHeading from "@/ReusebaleComponent/SectionHeading";
import Image, { StaticImageData } from "next/image";
import icon1 from "../../assets/Home/Layer_1.png";
import icon2 from "../../assets/Home/Group (1).png";
import icon3 from "../../assets/Home/Group (2).png";
import icon4 from "../../assets/Home/Group (3).png";

// ✅ Reusable StepCard
interface StepCardProps {
  step: number;
  title: string;
  description: string;
  icon: StaticImageData;
  side?: "left" | "right";
}

const StepCard: React.FC<StepCardProps> = ({
  step,
  title,
  description,
  icon,
  side = "left",
}) => {
  const isLeft = side === "left";

  return (
    <div className="w-full flex flex-col md:mb-[30px]  lg:mb-0 lg:flex-row items-center">
      {/* left side */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mb-4 lg:mb-0">
        {isLeft && (
          <>
            {/* card */}
            <div className="w-full max-w-[600px] flex  justify-start">
              <div className="bg-[#F7F7F7] w-full h-auto sm:h-[280px] p-6 sm:p-8 rounded-[12px] border border-[#B2DDFF]">
                <div className="w-full flex justify-end">
                  <Image src={icon} width={26} height={26} alt="" />
                </div>
                <p className="text-[#717680] font-dm-sans text-[18px] leading-[160%] text-right">
                  Step {step}
                </p>
                <p className="w-full text-[#194185] font-open-sans font-semibold text-[20px] leading-[22px] text-right">
                  {title}
                </p>
                <p className="text-[#717680] font-dm-sans text-[18px] text-right">
                  {description}
                </p>
              </div>
            </div>

            {/* connector */}
            <div className="w-[59px] h-[18px] justify-center hidden lg:flex">
              <div className="w-[18px] h-[18px] rounded-full bg-[#102A56]"></div>
              <div className="w-[41px] h-[3px] bg-[#B2DDFF] mt-2"></div>
            </div>
          </>
        )}
      </div>

      {/* vertical line (LG only) */}
      <div className="w-px bg-gray-400 hidden lg:flex h-[280px] "></div>

      {/* right side */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        {!isLeft && (
          <>
            {/* connector */}
            <div className="w-[59px] h-[18px] justify-center hidden lg:flex">
              <div className="w-[41px] h-[3px] bg-[#B2DDFF] mt-2"></div>
              <div className="w-[18px] h-[18px] rounded-full bg-[#102A56]"></div>
            </div>

            {/* card */}
            <div className="w-full max-w-[600px] flex justify-end">
              <div className="bg-[#F7F7F7] w-full h-auto sm:h-[280px] p-6 sm:p-8 rounded-[12px] border border-[#B2DDFF]">
                <div className="w-full flex justify-start">
                  <Image src={icon} width={26} height={26} alt="" />
                </div>
                <p className="text-[#717680] font-dm-sans text-[18px] leading-[160%] text-left">
                  Step {step}
                </p>
                <p className="w-full text-[#194185] font-open-sans font-semibold text-[20px] leading-[22px] text-left">
                  {title}
                </p>
                <p className="text-[#717680] font-dm-sans text-[18px] text-left">
                  {description}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <div>
      <Container>
        <SectionHeading
          title="How it Works "
          description="A simple, reliable process for all your delivery needs. Follow these
            easy steps to get your package delivered safely and on time."
        />

        {/* Steps */}
        <StepCard
          step={1}
          title="Create an account"
          description="Sign up to create your account in minutes. Manage your addresses and restricted accounts for employees."
          icon={icon1}
          side="left"
        />
        <StepCard
          step={2}
          title="Add delivery details"
          description="Provide accurate delivery details to ensure smooth processing."
          icon={icon2}
          side="right"
        />
        <StepCard
          step={3}
          title="Track your package"
          description="Stay updated with real-time tracking and delivery notifications."
          icon={icon3}
          side="left"
        />
        <StepCard
          step={4}
          title="Receive your package"
          description="Get your package delivered safely and on time to your doorstep."
          icon={icon4}
          side="right"
        />
      </Container>
    </div>
  );
};

export default HowItWorks;
