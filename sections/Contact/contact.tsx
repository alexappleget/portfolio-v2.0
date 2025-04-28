import { ContactForm } from "@/components/ContactForm/contact-form";

export const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-[#f1f5f9]">
          Contact Me
        </h2>
        <p className="text-xl text-[#94a3b8] max-w-[600px]">
          Not sure where to start? Feel free to reach out with your ideas or
          questions. Let&apos;s create something amazing together!
        </p>
      </div>
      <div className="max-w-[600px] mx-auto mb-12">
        <ContactForm />
      </div>
    </section>
  );
};
