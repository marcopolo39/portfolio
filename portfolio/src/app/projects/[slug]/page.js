import Navbar from "@/components/Navbar";
import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const PROJECT_DATA_QUERY = defineQuery(
  `*[_type == "projects" && slug.current == $slug][0]`
);

export default async function ProjectView({ params }) {
  const project = await client.fetch(PROJECT_DATA_QUERY, await params);
  return (
    <div className="flex justify-center w-full">
      <Navbar />
      <div className="flex flex-col min-h-screen pt-25 px-15 gap-6 w-full">
        <Link
          href="/projects"
          className="flex gap-2 hover:bg-[var(--secondary)] w-fit p-3 rounded-[10px]"
        >
          <ArrowLeft />
          <span>Back to Projects</span>
        </Link>
        <div className="text-[3rem] leading-none">{project.title}</div>
        <div className="flex flex-row gap-3">
          {project.tags.map((tag) => (
            <div
              className=" bg-[#FFF2E6] px-2 rounded-[10px] font-semibold border border-[#EFDFD3]"
              key={tag}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
