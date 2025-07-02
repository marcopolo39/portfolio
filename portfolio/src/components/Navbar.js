import Link from "next/link";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  return (
    <div className="flex fixed top-0 left-0 w-full z-50  justify-between px-8 py-4">
      <div className="flex gap-6 text-[1.5rem] font-medium ">
        <Link
          href="/"
          className="hover:text-[var(--secondary)] transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="hover:text-[var(--secondary)] transition-colors duration-300"
        >
          About Me
        </Link>
        <Link
          href="/projects"
          className="hover:text-[var(--secondary)] transition-colors duration-300"
        >
          Personal Projects
        </Link>
        <Link
          href="/contact"
          className="hover:text-[var(--secondary)] transition-colors duration-300"
        >
          Contact Me
        </Link>
      </div>
      <div className="flex gap-2 ">
        <a
          href="https://www.linkedin.com/in/mmaldonado2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInLogoIcon className="w-[2rem] h-[2rem]" />
        </a>
        <a
          href="https://github.com/marcopolo39"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubLogoIcon className="w-[2rem] h-[2rem]" />
        </a>
      </div>
    </div>
  );
}
