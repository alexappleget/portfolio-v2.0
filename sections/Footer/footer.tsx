import { GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { JSX } from "react";

export const Footer = (): JSX.Element => {
  return (
    <footer className="border-t py-6 md:py-8 px-6 md:px-8 flex flex-wrap gap-4 items-center justify-between">
      <p className="text-sm text-gray-500">
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
            className="text-gray-500 hover:text-gray-900 transition-colors hover:cursor-pointer"
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
            className="text-gray-500 hover:text-gray-900 transition-colors hover:cursor-pointer"
            aria-hidden="true"
          />
        </Link>
      </div>
    </footer>
  );
};
