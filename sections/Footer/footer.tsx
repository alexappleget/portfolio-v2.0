import { GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { JSX } from "react";

export const Footer = (): JSX.Element => {
  return (
    <footer className="border-t border-[#334155] flex flex-wrap gap-6 items-center justify-between py-8">
      <p className="text-sm font-medium text-[#cbd5e1]">
        &copy; {new Date().getFullYear()} Alex Appleget. All rights reserved.
      </p>
      <div className="flex gap-4">
        <Link
          href="https://github.com/alexappleget"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <GithubIcon
            className="text-[#38bdf8] hover:text-[#6366f1] transition-colors hover:cursor-pointer"
            aria-hidden="true"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/alex-appleget/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <LinkedinIcon
            className="text-[#38bdf8] hover:text-[#6366f1] transition-colors hover:cursor-pointer"
            aria-hidden="true"
          />
        </Link>
      </div>
    </footer>
  );
};
