import { ServiceCard } from "@/app/components/ServiceCard/ServiceCard";
import { JSX, useRef } from "react";
import { motion, useInView } from "framer-motion";

export const Services = (): JSX.Element => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="services" className="pt-8 pb-16 md:pt-16 md:pb-32">
      <motion.div
        ref={ref}
        className="mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Section header*/}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#f8fafc] mb-6">
            My Services
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[#cbd5e1] max-w-[800px]">
            I specialize in delivering tailored solutions to help businesses
            thrive in the digital landscape. Explore how I can help you achieve
            your goals.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="SaaS Development"
            description="I create scalable, user-friendly SaaS platforms that help businesses streamline operations, improve efficiency, and retain more customers."
            icon="Layers"
          />
          <ServiceCard
            title="Custom Websites"
            description="I design responsive, visually stunning websites that engage visitors, build trust, and drive conversions."
            icon="Globe"
          />
          <ServiceCard
            title="Web App Optimization"
            description="I optimize web applications to improve speed, reliability, and user satisfaction, ensuring your app performs at its best."
            icon="Zap"
          />
        </div>
      </motion.div>
    </section>
  );
};
