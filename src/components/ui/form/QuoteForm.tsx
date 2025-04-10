"use client";

import { Equipment } from "@/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const QuoteForm = () => {
  const [formData, setFormData] = useState<{
    full_name: string;
    email: string;
    phone: string;
    company: string;
    trailer_type: string;
    equipment: number;
    commodity: string;
    weight: string;
    description: string;
    pick_up_zip_code: string;
    pick_up_date: string;
    delivery_zip_code: string;
    delivery_date: string;
  }>({
    full_name: "",
    email: "",
    phone: "",
    company: "",
    trailer_type: "",
    equipment: 0,
    commodity: "",
    weight: "",
    description: "",
    pick_up_zip_code: "",
    pick_up_date: "",
    delivery_zip_code: "",
    delivery_date: "",
  });
  const [loading, setLoading] = useState(false);
  const [equipment, setEqiipment] = useState<Equipment>();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === "equipment" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/get-qoute/`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        company: "",
        trailer_type: "",
        equipment: 0,
        commodity: "",
        weight: "",
        description: "",
        pick_up_zip_code: "",
        pick_up_date: "",
        delivery_zip_code: "",
        delivery_date: "",
      });
      toast.success("Form submitted successfully! 🎉");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit the form.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/equipment/`)
      .then((response) => setEqiipment(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {[
          { label: "Full Name", name: "full_name", type: "text" },
          { label: "E-mail", name: "email", type: "email" },
          { label: "Phone", name: "phone", type: "tel" },
        ].map(({ label, name, type }) => (
          <div key={name}>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              {label}
            </label>
            <input
              type={type}
              name={name}
              placeholder={`Enter your ${label.toLowerCase()}`}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:outline-2 outline-red-500"
              value={formData[name as keyof typeof formData]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Company
          </label>
          <input
            type="text"
            name="company"
            placeholder="Enter your Company"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:outline-2 outline-red-500"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Equipment
          </label>
          <select
            name="equipment"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:outline-2 outline-red-500 bg-white"
            value={formData.equipment}
            onChange={handleChange}
          >
            <option value="0" disabled>
              Select Equipment
            </option>
            {equipment?.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Trailer Type
          </label>
          <input
            type="text"
            name="trailer_type"
            placeholder="Enter Trailer Type"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:outline-2 outline-red-500"
            value={formData.trailer_type}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {[
          { label: "Commodity", name: "commodity" },
          { label: "Weight", name: "weight" },
          { label: "Description", name: "description" },
        ].map(({ label, name }) => (
          <div key={name}>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              {label}
            </label>
            <input
              type="text"
              name={name}
              placeholder={`Enter ${label}`}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:outline-2 outline-red-500"
              value={formData[name as keyof typeof formData]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
        {[
          {
            label: "Pick Up Zip Code",
            name: "pick_up_zip_code",
            type: "text",
          },
          { label: "Pick Up Date", name: "pick_up_date", type: "date" },
          {
            label: "Delivery Zip Code",
            name: "delivery_zip_code",
            type: "text",
          },
          { label: "Delivery Date", name: "delivery_date", type: "date" },
        ].map(({ label, name, type }) => (
          <div key={name}>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              {label}
            </label>
            <input
              type={type}
              name={name}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:outline-2 outline-red-500"
              value={formData[name as keyof typeof formData]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
      </div>
      <div className="pt-4">
        <button
          type="submit"
          className="w-full sm:w-auto px-10 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-sm transition-colors"
        >
          {loading ? "Submitting..." : "Submit request"}
        </button>
      </div>
    </form>
  );
};
