import { ServiceCard } from "@/components/ServiceCard/ServiceCard";
import { JSX, useRef } from "react";
import { motion, useInView } from "framer-motion";

export const Services = (): JSX.Element => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="services" className="mt-10 md:mt-20">
      <motion.div
        ref={ref}
        className="mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#f8fafc] mb-6">
            My Services
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[#cbd5e1] max-w-[800px]">
            I offer a range of services to help businesses grow and succeed in
            the digital landscape.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="SaaS Development"
            description="I help businesses build scalable, user-friendly platforms that streamline operations and increase customer retention."
            icon="Layers"
          />
          <ServiceCard
            title="Custom Websites"
            description="I design responsive, beautiful websites that help businesses convert visitors into customers."
            icon="Globe"
          />
          <ServiceCard
            title="Web App Optimization"
            description="I optimize existing web apps to improve performance and user experience."
            icon="Zap"
          />
        </div>
      </motion.div>
    </section>
  );
};
