"use client";
import Container from "@/ReusebaleComponent/Container";
import SectionHeading from "@/ReusebaleComponent/SectionHeading";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Container>
        <SectionHeading
          title="Add parcel"
          textColor="#194185"
          description="Fill in the details below to start your delivery. We’ll take care of the rest."
        ></SectionHeading>
        <div className="w-full max-w-[380px] lg:w-[380px] px-2  h-[56px] flex gap-[24px] opacity-100">
          <div className="bg-[#EF6820] w-[181px] h-[56px] flex items-center justify-center rounded-[8px] text-white font-medium">
            Regular
          </div>

          <div className="bg-white w-[180px] h-[56px] flex items-center justify-center rounded-[8px] border border-[#B2DDFF] text-[#344054] font-medium">
            Express
          </div>
        </div>
        <Container>
          <div className="w-full max-w-[792px] lg:max-w-[792px] text-[#717680]   rotate-0 opacity-100 flex flex-col  gap-[16px] p-4 ">
            <input
              className="bg-white w-full  p-[16px] h-[56px] rounded-[8px] border border-[#B2DDFF] pt-[8px] pr-[24px] pb-[8px] pl-[24px] gap-[16px] rotate-0 opacity-100"
              placeholder="Parcel Name"
            ></input>
            <input
              className="bg-white w-full p-[16px] h-[56px] rounded-[8px] border border-[#B2DDFF] pt-[8px] pr-[24px] pb-[8px] pl-[24px] gap-[16px] rotate-0 opacity-100"
              placeholder="Parcel Weight"
            ></input>
            <textarea
              rows={5}
              cols={20}
              className="bg-white w-full  h-[113px] rounded-[8px]  pt-[8px] pr-[24px] pb-[8px] pl-[24px] gap-[16px] rotate-0 opacity-100 border border-[#B2DDFF] "
              placeholder="Description"
            ></textarea>
            <input
              className="bg-white w-full p-[16px] h-[56px] rounded-[8px] border border-[#B2DDFF] pt-[8px] pr-[24px] pb-[8px] pl-[24px] gap-[16px] rotate-0 opacity-100"
              placeholder="(Invoice If any)"
            ></input>
            <input
              className="bg-white w-full p-[16px] h-[56px] rounded-[8px] border border-[#B2DDFF] pt-[8px] pr-[24px] pb-[8px] pl-[24px] gap-[16px] rotate-0 opacity-100"
              placeholder="Notes"
            ></input>

            <select className="bg-white p-[16px] h-[56px] rounded-[8px] border border-[#B2DDFF] pt-[8px] pr-[24px] pb-[8px] pl-[24px] gap-[16px] rotate-0 opacity-100">
              <option value="">Select your Address</option>
              <option value="invoice1">Invoice 1</option>
              <option value="invoice2">Invoice 2</option>
            </select>
            {/* <select className="bg-white  p-[16px] h-[56px] rounded-[8px] border border-[#B2DDFF] pt-[8px] pr-[24px] pb-[8px] pl-[24px] gap-[16px] rotate-0 opacity-100">
              <option className="w-full" value="">
                Select your customer
              </option>
              <option value="invoice1">Invoice 1</option>
              <option value="invoice2">Invoice 2</option>
            </select> */}
            <div className="flex">
              <div className="w-full  h-[56px] ">Height (kg)</div>
              <div className="w-full">
                <input className="w-full lg:w-[670px] max-w-[670px]  bg-white p-[16px] h-[56px] rounded-l-0 rounded-[8px] border border-[#B2DDFF] pt-[8px] pr-[24px] pb-[8px] pl-[24px] gap-[16px] rotate-0"></input>
              </div>
            </div>
            <div className="flex">
              <div className="w-full  h-[56px] ">Weight (kg)</div>
              <div className="w-full">
                <input className="w-full lg:w-[670px] max-w-[670px]  bg-white p-[16px] h-[56px] rounded-l-0 rounded-[8px] border border-[#B2DDFF] pt-[8px] pr-[24px] pb-[8px] pl-[24px] gap-[16px] rotate-0"></input>
              </div>
            </div>
            <div className="flex">
              <div className="w-full  h-[56px] ">Length (kg)</div>
              <div className="w-full">
                <input className="w-full lg:w-[670px] max-w-[670px]  bg-white p-[16px] h-[56px] rounded-l-0 rounded-[8px] border border-[#B2DDFF] pt-[8px] pr-[24px] pb-[8px] pl-[24px] gap-[16px] rotate-0"></input>
              </div>
            </div>

            <button
              className="bg-[#EF6820] text-white w-full  h-[56px] rounded-[8px] 
             pt-[16px] pr-[120px] pb-[16px] pl-[120px] gap-[10px] 
             opacity-100  transition"
            >
              Next
            </button>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default page;
