import Navbar from "@/components/Navbar";
import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import urlFor from "../utils/url";
import { BookOpen } from "lucide-react";
import Link from "next/link";

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
            className="flex bg-[var(--secondary)] rounded-[25px] px-3 py-3 w-[70rem] gap-6"
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
              <div className="flex flex-row flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <div
                    className=" bg-[#FFF2E6] px-2 rounded-[10px] font-semibold border border-[#EFDFD3] whitespace-nowrap"
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
                  className="w-[145px] h-[40px] bg-[#FFF2E6] rounded-[10px] border border-[#EFDFD3] flex items-center justify-center gap-2"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 98 98"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                      fill="#404040"
                    />
                  </svg>
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
