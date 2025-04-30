import { ContactForm } from "@/components/ContactForm/contact-form";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="contact" className="py-12 md:py-24">
      <motion.div
        ref={ref}
        className="flex flex-col items-center text-center mb-12"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-[#f1f5f9]">
          Contact Me
        </h2>
        <p className="text-xl text-[#94a3b8] max-w-[600px]">
          Not sure where to start? Feel free to reach out with your ideas or
          questions. Let&apos;s create something amazing together!
        </p>
      </motion.div>
      <motion.div
        ref={ref}
        className="max-w-[600px] mx-auto mb-12"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <ContactForm />
      </motion.div>
    </section>
  );
};
