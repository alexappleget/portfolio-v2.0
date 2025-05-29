import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { JSX, useRef } from "react";
import { motion } from "framer-motion";
import { siteMetadata } from "@/app/data/siteMetadata";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <LinkedinIcon className="h-5 w-5" />,
    href: siteMetadata.linkedin,
  },
  {
    name: "Twitter",
    icon: <TwitterIcon className="h-5 w-5" />,
    href: siteMetadata.twitter,
  },
  {
    name: "GitHub",
    icon: <GithubIcon className="h-5 w-5" />,
    href: siteMetadata.github,
  },
];

export const Footer = (): JSX.Element => {
  const ref = useRef(null);

  return (
    <footer
      ref={ref}
      className="relative flex flex-wrap gap-6 items-center justify-between py-8 px-8 md:px-16 lg:px-32 bg-slate-900 text-white border-t border-purple-500"
    >
      <p className="text-sm font-medium">
        &copy; {new Date().getFullYear()} Alex Appleget. All rights reserved.
      </p>
      <div className="flex gap-4">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-400 transition-all hover:text-white hover:bg-white/10"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            aria-label={social.name}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </footer>
  );
};
