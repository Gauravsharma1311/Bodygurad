"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="bg-black text-white py-20 px-6 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto ml-4">
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-16 max-w-5xl ml-4">
          Bodyguard provides discreet, high-level protection for executives,
          public figures, and innovators facing elevated risk. We assess
          threats, monitor digital exposure, and ensure readiness—so our clients
          operate confidently.
        </p>

        <div className="space-y-8 ml-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 ml-4">
              Let's Talk About Your Security
            </h2>
            <p className="text-gray-400 text-lg ml-4">
              We'll assess your exposure, vulnerabilities, and provide next
              steps.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end"
          >
            <Input
              type="text"
              name="firstName"
              placeholder="First Name*"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 h-14 rounded-full px-6"
            />
            <Input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleInputChange}
              className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 h-14 rounded-full px-6"
            />
            <Input
              type="email"
              name="email"
              placeholder="Email Address*"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 h-14 rounded-full px-6"
            />

            <Input
              type="text"
              name="lastName"
              placeholder="Last Name*"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 h-14 rounded-full px-6"
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Phone Number*"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 h-14 rounded-full px-6"
            />
            <Button
              type="submit"
              className="bg-white text-black hover:bg-gray-100 h-14 rounded-full font-medium text-base"
            >
              Request a Consultation
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
