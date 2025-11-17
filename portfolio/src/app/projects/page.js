import Navbar from "@/components/Navbar";
import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import urlFor from "../utils/url";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import GitHubIcon from "@/components/icons/GitHubIcon";

const PROJECTS_QUERY = defineQuery(
  `*[_type == 'projects'  && defined(slug.current)] |{title, description, tags, images, githubLink, slug}`
);

export default async function Projects() {
  const projects = await client.fetch(PROJECTS_QUERY);

  return (
    <div className="flex justify-center w-full">
      <Navbar />
      <div className="flex flex-col items-center min-h-screen pt-25 px-15 max-w-4xl gap-6 w-full">
        <div className="text-[4rem] leading-none pt-6">Projects</div>
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex bg-[var(--secondary)]/30 backdrop-blur-md rounded-[25px] px-3 py-3 w-[70rem] gap-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img
              className="rounded-[25px]"
              src={urlFor(project.images[0])
                .height(400)
                .width(600)
                .quality(100)
                .url()}
            ></img>
            <div className="w-full flex flex-col">
              <div className="text-center text-[2.5rem]">{project.title}</div>
              <div className="flex flex-row flex-wrap gap-3 mb-4">
                {project.tags.map((tag) => (
                  <div
                    className=" bg-[#FFF2E6]/40 backdrop-blur-md px-2 py-1.5 rounded-[10px] font-semibold border border-white/40 whitespace-nowrap shadow-md"
                    key={tag}
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <div className="flex-1">{project.description}</div>
              <div className="flex flex-row justify-center gap-4">
                <a
                  href={project.githubLink}
                  className="w-[145px] h-[40px] bg-[#FFF2E6]/40 backdrop-blur-sm rounded-[10px] border border-white/30 flex items-center justify-center gap-2 shadow-sm hover:bg-[#FFF2E6]/60 hover:shadow-md transition-all duration-300"
                >
                  <GitHubIcon size={20} />
                  <span>View Code</span>
                </a>
                <Link
                  href={`projects/${project.slug.current}`}
                  className="w-[145px] h-[40px] bg-[var(--primary)] text-[var(--secondary)] rounded-[10px] flex items-center justify-center gap-2"
                >
                  <BookOpen size={20} />
                  <span>Learn More</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
