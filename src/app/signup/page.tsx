"use client";

import Container from "@/ReusebaleComponent/Container";
import SectionHeading from "@/ReusebaleComponent/SectionHeading";
import React from "react";
import img from "../../assets/auth/image.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { registerUser } from "@/services/authService";

type FormInputs = {
  confirmPassword: string;
  businessName: string;
  username: string;
  address: string;
  phone: string;
  email: string;
  password: string;
};

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormInputs>();

 const onSubmit = async (data: FormInputs) => {
  if (data.password !== data.confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  try {
    const res = await registerUser({ ...data, role: "MERCHANT" });
    alert("Registration successful:");
    reset(); // reset form
  } catch (error: unknown) {
    alert(error.response?.data?.message || "Registration failed.");
  }
};

  return (
    <div className="bg-gray-100 flex items-center justify-center">
      <Container>
        <SectionHeading
          title="Sign Up"
          description="We guarantee reliable delivery of your products to your customers, at the right location in the right time through our efficient distribution channel."
        />

        <div className="w-full gap-2 mx-auto mt-6 p-6 bg-white rounded-lg shadow-md flex items-center">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
            <div className="border-2 p-4 rounded-md">
              <div className="py-4">
                <label className="block text-sm font-medium text-gray-700">
                  Your business name
                </label>
                <input
                  {...register("businessName", { required: "Business name is required" })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Your business name"
                />
                {errors.businessName && <p className="text-red-500 text-sm">{errors.businessName.message}</p>}
              </div>

              <div className="py-4">
                <label className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  {...register("username", { required: "Name is required" })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Your Name"
                />
                {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
              </div>

              <div className="py-4">
                <label className="block text-sm font-medium text-gray-700">
                  Pickup Address
                </label>
                <input
                  {...register("address", { required: "Address is required" })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Pickup location"
                />
                {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
              </div>

              <div className="py-4">
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  {...register("phone", { required: "Phone is required" })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="792 112 56"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
              </div>

              <div className="py-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Email address"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>

              <div className="py-4">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Minimum 6 characters" },
                  })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Password"
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
              </div>

              <div className="py-4">
                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                  })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Confirm Password"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 disabled:opacity-50"
            >
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </button>

            <p className="text-sm text-gray-600 text-center">
              By clicking Sign Up you are agreeing with our Terms & Conditions
            </p>
            <p className="text-sm text-gray-600 text-center">
              Already have an account?{" "}
              <a href="#" className="text-blue-500">
                Login here
              </a>
            </p>
          </form>

          <div className="mt-6 hidden lg:block">
            <Image src={img} width={282} height={617} alt="Signup illustration" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
