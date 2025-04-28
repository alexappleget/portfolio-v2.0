"use client";

import { Input } from "@/components/Input/input";
import { Label } from "@/components/Label/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select/select";
import { Textarea } from "@/components/TextArea/textarea";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();

    toast.success("Your message has been sent successfilly!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-[#f1f5f9]">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="bg-[#262b35] text-[#f1f5f9] border border-[#334155] rounded-lg focus:ring-[#4f46e5] focus:border-[#4f46e5]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-[#f1f5f9]">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Your email"
            className="bg-[#262b35] text-[#f1f5f9] border border-[#334155] rounded-lg focus:ring-[#4f46e5] focus:border-[#4f46e5]"
          />
        </div>
      </div>

      <div className="space-y-2 sm:col-span-2">
        <Label htmlFor="project-type" className="text-[#f1f5f9]">
          Project Type
        </Label>
        <Select name="project-type" required>
          <SelectTrigger className="bg-[#262b35] text-[#f1f5f9] border border-[#334155] rounded-lg focus:ring-[#4f46e5] focus:border-[#4f46e5]">
            <SelectValue placeholder="Select project type" />
          </SelectTrigger>
          <SelectContent className="bg-[#262b35] border border-[#334155] rounded-lg shadow-lg">
            <SelectItem
              value="saas"
              className="px-4 py-2 text-[#f1f5f9] hover:bg-[#334155] hover:text-white cursor-pointer"
            >
              SaaS Development
            </SelectItem>
            <SelectItem
              value="website"
              className="px-4 py-2 text-[#f1f5f9] hover:bg-[#334155] hover:text-white cursor-pointer"
            >
              Custom Website
            </SelectItem>
            <SelectItem
              value="optimization"
              className="px-4 py-2 text-[#f1f5f9] hover:bg-[#334155] hover:text-white cursor-pointer"
            >
              Web App Optimization
            </SelectItem>
            <SelectItem
              value="other"
              className="px-4 py-2 text-[#f1f5f9] hover:bg-[#334155] hover:text-white cursor-pointer"
            >
              Other
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-[#f1f5f9]">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell me about your project or idea"
          className="bg-[#262b35] text-[#f1f5f9] border border-[#334155] rounded-lg focus:ring-[#4f46e5] focus:border-[#4f46e5] min-h-[120px]"
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center px-4 py-2 bg-[#4f46e5] text-white rounded-lg hover:bg-[#6366f1] transition hover:shadow-md"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      <Toaster position="bottom-center" reverseOrder={false} />
    </form>
  );
};
