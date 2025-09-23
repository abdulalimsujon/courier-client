import Container from "@/ReusebaleComponent/Container";
import ReusableHeading from "@/ReusebaleComponent/ReusableHeading";
import SectionHeading from "@/ReusebaleComponent/SectionHeading";
import React from "react";

const demoData = [
  {
    id: "TKT001",
    customer: "Alice Smith",
    issue: "Cannot log in to account",
    status: "New",
  },
  {
    id: "TKT002",
    customer: "Bob Johnson",
    issue: "Payment not processed",
    status: "In Progress",
  },
  {
    id: "TKT003",
    customer: "Charlie Brown",
    issue: "Unable to update profile",
    status: "Resolved",
  },
  {
    id: "TKT004",
    customer: "Diana Prince",
    issue: "Error on checkout page",
    status: "New",
  },
  {
    id: "TKT005",
    customer: "Ethan Hunt",
    issue: "Cannot reset password",
    status: "In Progress",
  },
];

const SupportSystem = () => {
  return (
    <div className="w-full">
      <Container>
        <ReusableHeading text="Support system" />
        <div className="w-full flex flex-col gap-4">
          {demoData.map((ticket) => (
            <div
              key={ticket.id}
              className="w-full max-w-full rounded-[12px] flex justify-between opacity-100 p-[24px] border border-[#B2DDFF] gap-2"
            >
              <div className="w-[252px] h-[83px] max-h-[83px] rotate-0 opacity-100 sm:mb-3 mb-0">
                <div>
                  <p className="font-['DM_Sans'] font-bold text-[18px] text-[#EF6820]">
                    {ticket.issue}
                  </p>
                </div>
                <div>
                  <p className="font-['DM_Sans'] font-normal text-[16px]">
                    Customer: {ticket.customer}, ID: {ticket.id}
                  </p>
                </div>
                <div>
                  <p className="font-['DM_Sans'] font-normal text-[16px] leading-[160%] tracking-[0]">
                    status: {ticket.status}
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div className="w-[181px] text-white bg-[#EF6820] h-[52px] rounded-[8px] gap-[10px] rotate-0 opacity-100 px-[32px] py-[16px] flex justify-center items-center">
                  View details
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <div className=" w-full max-w-full top-[171px] left-[120px] rounded-[32px] rotate-0 opacity-100 bg-[#FFFFFF]">
        <Container>
          <SectionHeading title="Support Management" textColor="#194185" />
          <div className="w-full  max-w-full flex flex-col gap-8 p-[16px] ">
            <div className=" top-[108px] left-[101px] rotate-0 opacity-100">
              <p className="font-[\'Plus\ Jakarta\ Sans\'] text-[#194185] font-bold text-[32px] ">
                Ticket Details: TKTOOI
              </p>
            </div>
            <div className=" border-[#E9EAEB] top-[176px] left-[101px] rounded-[12px] rotate-0 opacity-100  border-[1px] p-[24px] gap-[16px] flex flex-col">
              <div className="">
                <p className="font-['DM_Sans'] text-[#194185] font-medium text-[24px] ">
                  Customer Information
                </p>
              </div>
              <div className="">
                <p className="font-['DM_Sans']  text-[18px]">
                  <span className="font-bold">Customer Name:</span> Alice Smith
                </p>
              </div>
              <div className="">
                <p className="font-['DM_Sans']  text-[18px] ">
                  <span className="font-bold">Email : </span>{" "}
                  alice.smith@example.com
                </p>
              </div>
              <div className="">
                <p className="font-['DM_Sans']  text-[18px] ">
                  <span className="font-bold"> Email :</span>{" "}
                  alice.smith@example.com
                </p>
              </div>
              <div className="">
                <p className="font-['DM_Sans']  text-[18px]">
                  <span className="font-bold"> Phone:</span> +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>
        </Container>

        <Container>
          <div className="w-full p-[16px]  opacity-100 flex gap-[32px]">
            <div className="w-full flex flex-col gap-2">
              <div className=" top-[108px] left-[101px] rotate-0 opacity-100">
                <p className="font-[\'Plus\ Jakarta\ Sans\'] text-[#194185] font-bold text-[32px] ">
                  Conversation history
                </p>
              </div>
              <div className="w-full max-w-full border-[#B2DDFF] rounded-[12px] border-[1px] p-[24px] gap-[16px] opacity-100 flex flex-col">
                <div className="">
                  <p className="font-['DM_Sans'] font-medium text-[24px] ">
                    Customer
                  </p>
                </div>
                <div className="">
                  <p className="font-['DM_Sans'] font-normal text-[18px] ">
                    My order #12345 has not arrived yet. It was supposed to be
                    delivered last week.
                  </p>
                </div>
              </div>
              <div className="w-full max-w-full border-[#B2DDFF] rounded-[12px] border-[1px] p-[24px] gap-[16px] opacity-100 flex flex-col">
                <div className="">
                  <p className="font-['DM_Sans'] font-medium text-[24px] ">
                    Admin
                  </p>
                </div>
                <div className="">
                  <p className="font-['DM_Sans'] font-normal text-[18px] ">
                    Hi Alice, I am looking into your issue. Please bear with me.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SupportSystem;
