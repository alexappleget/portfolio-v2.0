"use client";

import { Input } from "../Input/input";
import { Label } from "../Label/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../Select/select";
import { Textarea } from "../TextArea/textarea";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setForm({
      ...form,
      projectType: value,
    });
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      projectType: "",
      message: "",
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (result) {
        toast.success("Your message has been sent successfully!");
      }

      resetForm();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occured. Please try again.", {
        style: {
          background: "#ef4444",
          color: "#f8fafc",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium text-[#f8fafc]">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="bg-[#262b35] text-[#f8fafc] border placeholder-[#cbd5e1] border-[#334155] rounded-lg focus:ring-[#f59e0b] focus:border-[#f59e0b]"
            onChange={handleChange}
            value={form.name}
            aria-label="name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-[#f8fafc]">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Your email"
            className="bg-[#262b35] text-[#cbd5e1] border placeholder-[#cbd5e1] border-[#334155] rounded-lg focus:ring-[#f59e0b] focus:border-[#f59e0b]"
            onChange={handleChange}
            value={form.email}
            aria-label="email"
          />
        </div>
      </div>

      <div className="space-y-2 sm:col-span-2">
        <Label
          htmlFor="project-type"
          className="text-sm font-medium text-[#f8fafc]"
        >
          Project Type
        </Label>
        <Select
          name="project-type"
          required
          onValueChange={handleSelectChange}
          value={form.projectType}
        >
          <SelectTrigger className="bg-[#262b35] text-[#f8fafc] border border-[#334155] rounded-lg focus:ring-[#f59e0b] focus:border-[#f59e0b]">
            <SelectValue placeholder="Select project type" />
          </SelectTrigger>
          <SelectContent className="bg-[#262b35] border border-[#334155] rounded-lg shadow-lg">
            <SelectItem
              value="saas"
              className="px-4 py-2 text-[#f8fafc] hover:bg-[#334155] hover:text-white cursor-pointer"
            >
              SaaS Development
            </SelectItem>
            <SelectItem
              value="website"
              className="px-4 py-2 text-[#f8fafc] hover:bg-[#334155] hover:text-white cursor-pointer"
            >
              Custom Website
            </SelectItem>
            <SelectItem
              value="optimization"
              className="px-4 py-2 text-[#f8fafc] hover:bg-[#334155] hover:text-white cursor-pointer"
            >
              Web App Optimization
            </SelectItem>
            <SelectItem
              value="other"
              className="px-4 py-2 text-[#f8fafc] hover:bg-[#334155] hover:text-white cursor-pointer"
            >
              Other
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium text-[#f8fafc]">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell me about your project or idea"
          className="bg-[#262b35] text-[#f8fafc] placeholder:text-[#cbd5e1] border border-[#334155] rounded-lg focus:ring-[#f59e0b] focus:border-[#f59e0b] min-h-[120px]"
          onChange={handleChange}
          value={form.message}
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center px-4 py-2 bg-[#f59e0b] text-base font-medium text-[#20242d] rounded-lg hover:bg-[#fbbf24] transition hover:shadow-md hover:cursor-pointer"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      <Toaster position="bottom-center" reverseOrder={false} />
    </form>
  );
};
