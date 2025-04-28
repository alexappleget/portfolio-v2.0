import { ServiceCard } from "@/components/ServiceCard/ServiceCard";
import { JSX } from "react";

export const Services = (): JSX.Element => {
  return (
    <section id="services" className="py-12 md:py-24">
      <div className="mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-[#f1f5f9]">
            My Services
          </h2>
          <p className="text-[#94a3b8] md:text-xl max-w-[800px]">
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
      </div>
    </section>
  );
};
