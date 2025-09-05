import Container from "@/ReusebaleComponent/Container";
import SectionHeading from "@/ReusebaleComponent/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <Container>
        <div className="w-full flex flex-col gap-6">
          <SectionHeading title="Frequently Asked Questions" />

          <Accordion type="single" collapsible className="w-full ">
            <AccordionItem value="item-1" className="w-full border-b-0">
              <div className="w-full flex mb-3 justify-between items-center rounded-[12px] border text-[#717680] p-[24px] opacity-100 h-[74px] data-[state=open]:h-[120px] transition-all duration-300">
                <span>Is it accessible?</span>
                <AccordionTrigger className="text-xl cursor-pointer"></AccordionTrigger>
              </div>
              <AccordionContent className="w-full p-6 text-[#4B4B4B]">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="w-full border-b-0">
              <div className="w-full  mb-3 flex justify-between items-center rounded-[12px] border text-[#717680] p-[24px] opacity-100 h-[74px] data-[state=open]:h-[120px] transition-all duration-300">
                <span>Can I use it on mobile?</span>
                <AccordionTrigger className="text-xl cursor-pointer"></AccordionTrigger>
              </div>
              <AccordionContent className="w-full p-6 text-[#4B4B4B]">
                Yes, it works fully on mobile and tablet.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="w-full border-b-0">
              <div className="w-full  mb-3 flex justify-between items-center rounded-[12px] border text-[#717680] p-[24px] opacity-100 h-[74px] data-[state=open]:h-[120px] transition-all duration-300">
                <span>Is it customizable?</span>
                <AccordionTrigger className="text-xl cursor-pointer"></AccordionTrigger>
              </div>
              <AccordionContent className="w-full p-6 text-[#4B4B4B]">
                Absolutely! You can style it as needed.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
