import { Button } from "@/app/components/Button/button";
import { Input } from "@/app/components/Input/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/Select/select";
import { Textarea } from "@/app/components/TextArea/textarea";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, Loader2, Send } from "lucide-react";
import { useRef, useState } from "react";

const projectTypes = [
  "Web Application",
  "Mobile App",
  "E-commerce Site",
  "SaaS Platform",
  "Portfolio Website",
  "Custom Solution",
];

export const Contact = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
      throw error;
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -40,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Unified input field styling
  const inputFieldClasses =
    "w-full h-12 rounded-md border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 focus:outline-none transition-all duration-200 text-base";

  return (
    <section
      id="contact"
      ref={containerRef}
      className="w-full py-12 md:py-24 text-[#f8fafc] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>
      </div>

      <motion.div
        ref={ref}
        className="mx-auto relative z-10 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Enhanced Section Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-8 md:mb-12"
          variants={headerVariants}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 px-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let&apos;s{" "}
            <motion.span
              className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Work Together
            </motion.span>
          </motion.h2>

          <motion.p
            className="mx-auto max-w-3xl text-lg sm:text-xl md:text-2xl text-blue-100 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s
            grab a coffee (virtual or real) and discuss how we can bring your
            ideas to life.
          </motion.p>

          {/* Animated subtitle accent */}
          <motion.div
            className="flex items-center justify-center mt-4 space-x-2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={itemVariants}
          className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 md:p-8 backdrop-blur-md mx-auto max-w-4xl"
        >
          <h3 className="mb-6 text-xl sm:text-2xl font-bold text-center sm:text-left">
            Send me a message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-300"
                >
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputFieldClasses}
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300"
                >
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputFieldClasses}
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Company and Project Type Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-slate-300"
                >
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={inputFieldClasses}
                  placeholder="Your company (optional)"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-slate-300"
                >
                  Project Type
                </label>
                <Select
                  value={formData.projectType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, projectType: value })
                  }
                >
                  <SelectTrigger
                    id="projectType"
                    className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all duration-200 text-base hover:border-white/30 hover:bg-white/15"
                    style={{ height: "3rem" }}
                  >
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 text-white rounded-md border border-white/20">
                    {projectTypes.map((type) => (
                      <SelectItem
                        key={type}
                        value={type}
                        className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer"
                      >
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-300"
              >
                Message *
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full min-h-[120px] rounded-md border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 focus:outline-none transition-all duration-200 text-base resize-y"
                placeholder="Tell me about your project, goals, timeline, or anything else you'd like to discuss..."
              />
            </div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="pt-2"
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full h-12 sm:h-14 overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-base sm:text-lg font-semibold text-white transition-all hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed rounded-md"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                )}
              </Button>
            </motion.div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start sm:items-center gap-2 rounded-lg bg-green-500/20 p-3 text-green-300 text-sm sm:text-base"
              >
                <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5 sm:mt-0" />
                <span>
                  Message sent successfully! I&apos;ll get back to you soon.
                </span>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start sm:items-center gap-2 rounded-lg bg-red-500/20 p-3 text-red-300 text-sm sm:text-base"
              >
                <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5 sm:mt-0" />
                <span>
                  Something went wrong. Please try again or email me directly.
                </span>
              </motion.div>
            )}
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};
