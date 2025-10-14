"use server"

import axiosInstance from "@/lib/axiosInstance";

export const registerUser = async (userData: unknown) => {
  try {
    const res = await axiosInstance.post("/auth/register", userData);
    return res.data;
  } catch (error: unknown) {
    throw error;
  }
};
