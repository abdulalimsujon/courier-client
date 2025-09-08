import Container from "@/ReusebaleComponent/Container";
import SectionHeading from "@/ReusebaleComponent/SectionHeading";
import Image from "next/image";
import React from "react";
import rider from "../../assets/auth/rider.svg"; // adjust path if needed

const Login = () => {
  return (
    <div className="w-full   flex items-center justify-center bg-gray-50">
      <Container>
        {/* Card */}
        <div className="relative bg-white shadow-lg rounded-[20px] px-8 py-12 w-full max-w-[1200px] mx-auto">
          {/* Section Heading */}
          <SectionHeading
            title="Login"
            description="We guarantee reliable delivery of your products to your customers, at the right location in the right time through our efficient distribution channel."
          />

          {/* Form */}
          <form className="mt-8 w-full  max-w-[792px] flex flex-col gap-[32px] mx-auto">
            {/* Phone Number */}
            <input
              type="text"
              placeholder="Phone number"
              className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-4 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Login
            </button>
          </form>

          {/* Rider Image */}
          <div className="absolute -left-1 bottom-0 hidden lg:block">
            <Image
              src={rider}
              alt="Delivery Rider"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
