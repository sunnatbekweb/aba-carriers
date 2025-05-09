"use client";

import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const DriveForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    cityState: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    const payload = {
      full_name: formData.fullName,
      city_state: formData.cityState,
      email: formData.email,
      phone_number: formData.phone,
    };

    try {
      await axios.post(
        `https://aba.abacarriers.com/api/v1/os/pre-quality-form/`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      setFormData({
        fullName: "",
        cityState: "",
        email: "",
        phone: "",
      });
      toast.success("Form submitted successfully! 🎉");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full lg:w-[70%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        <label htmlFor="fullName" className="flex flex-col gap-y-2.5">
          <span className="text-sm md:text-base text-[#FF0000] tracking-[0.08em]">
            Full Name
          </span>
          <input
            type="text"
            name="fullName"
            id="fullName"
            className="p-4 bg-white text-sm lg:text-base placeholder:text-[#828282] rounded-lg focus:outline-2 outline-red-500"
            placeholder="Enter your name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="cityState" className="flex flex-col gap-y-2.5">
          <span className="text-sm md:text-base text-[#FF0000] tracking-[0.08em]">
            City | State
          </span>
          <input
            type="text"
            name="cityState"
            id="cityState"
            className="p-4 bg-white text-sm lg:text-base placeholder:text-[#828282] rounded-lg focus:outline-2 outline-red-500"
            placeholder="Enter your city or state"
            value={formData.cityState}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="email" className="flex flex-col gap-y-2.5">
          <span className="text-sm md:text-base text-[#FF0000] tracking-[0.08em]">
            Your Email
          </span>
          <input
            type="email"
            name="email"
            id="email"
            className="p-4 bg-white text-sm lg:text-base placeholder:text-[#828282] rounded-lg focus:outline-2 outline-red-500"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="phone" className="flex flex-col gap-y-2.5">
          <span className="text-sm md:text-base text-[#FF0000] tracking-[0.08em]">
            Your Phone
          </span>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="p-4 bg-white text-sm lg:text-base placeholder:text-[#828282] rounded-lg focus:outline-2 outline-red-500"
            placeholder="Enter your phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <ToastContainer />
      <button
        type="submit"
        disabled={loading}
        className={`block w-full lg:w-[30%] mt-8 mx-auto py-3 px-6 rounded-lg text-lg font-bold transition ${
          loading
            ? "bg-red-400 cursor-not-allowed text-white"
            : "bg-[#FF0000] text-white hover:bg-red-700"
        }`}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};
