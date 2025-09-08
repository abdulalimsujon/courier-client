import Container from "@/ReusebaleComponent/Container";
import SectionHeading from "@/ReusebaleComponent/SectionHeading";
import React from "react";
import img from "../../assets/auth/image.png";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-gray-100  flex items-center justify-center">
      <Container>
        <SectionHeading
          title="Sign Up"
          description="We guarantee reliable delivery of your products to your customers, at the right location in the right time through our efficient distribution channel."
        />

        <div className="w-full gap-2  mx-auto mt-6 p-6 bg-white rounded-lg shadow-md flex  items-center">
          <form className="space-y-4 w-full">
            <div className="border-2  p-4 rounded-md">
              <div className="py-6 border-[#B2DDFF]">
                <label className="block text-sm font-medium text-gray-700">
                  Your business name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Your business name"
                />
              </div>
              <div className="py-6 border-[#B2DDFF]">
                <label className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Your Name"
                />
              </div>
              <div className="py-6 border-[#B2DDFF]">
                <label className="block text-sm font-medium text-gray-700">
                  Address of your pickup location
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Address of your pickup location"
                />
              </div>
              <div className="py-6 border-[#B2DDFF]">
                <label className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Your Name"
                />
              </div>
              <div className="py-6 border-[#B2DDFF]">
                <label className="block text-sm font-medium text-gray-700">
                  Phone number
                </label>
                <input
                  type="tel"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="792 112 56"
                />
              </div>
              <div className="py-6 border-[#B2DDFF]">
                <label className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Email address"
                />
              </div>
              <div className="py-6 border-[#B2DDFF]">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Password"
                />
              </div>
              <div className="py-6 border-[#B2DDFF]">
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="mt-1 block w-full border-[#B2DDFF] rounded-md  p-2"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600"
            >
              Sign Up
            </button>
            <p className="text-sm text-gray-600 text-center">
              By clicking Sign Up you are agreeing with our Terms & Condition
            </p>
            <p className="text-sm text-gray-600 text-center">
              Already have an account?{" "}
              <a href="#" className="text-blue-500">
                Login here
              </a>
            </p>
          </form>
          <div className="mt-6  hidden lg:block">
            <Image src={img} width={282} height={617} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
