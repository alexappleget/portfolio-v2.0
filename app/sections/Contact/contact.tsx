import { ContactForm } from "@/app/components/ContactForm/contact-form";
import { motion, useInView } from "framer-motion";
import { Calendar, Zap } from "lucide-react";
import { useRef } from "react";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="contact" className="w-full py-12 md:py-24 text-[#f8fafc]">
      <motion.div
        ref={ref}
        className="px-4 md:px-6"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Get in Touch
            </h2>
            <p className="text-[#cbd5e1] md:text-lg">
              Not sure where to start? Feel free to reach out with your ideas or
              questions. Let&apos;s create something amazing together!
            </p>
            <div className="space-y-2 pt-4">
              <p className="flex items-center">
                <Calendar
                  className="mr-2 h-5 w-5 text-[#38bdf8]"
                  aria-label="Project availability"
                />
                <span>Available for projects starting May 2025</span>
              </p>
              <p className="flex items-center">
                <Zap
                  className="mr-2 h-5 w-5 text-[#38bdf8]"
                  aria-label="Response time"
                />
                <span>Quick response within 24-48 hours</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </motion.div>
    </section>
  );
};
