import Link from "next/link";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  return (
    <div className="flex fixed top-0 left-0 w-full z-50  justify-between px-8 py-4">
      <div className="flex gap-6 text-[1.5rem] font-medium ">
        <Link
          href="/"
          className="transition-transform duration-300 hover:scale-105"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="transition-transform duration-300 hover:scale-105"
        >
          About Me
        </Link>
        <Link
          href="/projects"
          className="transition-transform duration-300 hover:scale-105"
        >
          Personal Projects
        </Link>
        <Link
          href="/contact"
          className="transition-transform duration-300 hover:scale-105"
        >
          Contact Me
        </Link>
      </div>
      <div className="flex gap-2 ">
        <a
          href="https://www.linkedin.com/in/mmaldonado2/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-105"
        >
          <LinkedInLogoIcon className="w-[2rem] h-[2rem]" />
        </a>
        <a
          href="https://github.com/marcopolo39"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-105"
        >
          <GitHubLogoIcon className="w-[2rem] h-[2rem]" />
        </a>
      </div>
    </div>
  );
}
