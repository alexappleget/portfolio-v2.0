import { GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { JSX } from "react";

export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-[#20242d] border-t border-[#334155] py-6 md:py-8 px-6 md:px-8 flex flex-wrap gap-4 items-center justify-between">
      <p className="text-sm text-[#94a3b8]">
        &copy; {new Date().getFullYear()} Alex Appleget. All rights reserved.
      </p>
      <div className="flex gap-4">
        <Link
          href=""
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <GithubIcon
            className="text-[#94a3b8] hover:text-[#7dd3fc] transition-colors hover:cursor-pointer"
            aria-hidden="true"
          />
        </Link>
        <Link
          href=""
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <LinkedinIcon
            className="text-[#94a3b8] hover:text-[#7dd3fc] transition-colors hover:cursor-pointer"
            aria-hidden="true"
          />
        </Link>
      </div>
    </footer>
  );
};
