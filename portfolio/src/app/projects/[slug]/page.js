import Navbar from "@/components/Navbar";
import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import urlFor from "../../utils/url";
import GitHubIcon from "@/components/icons/GitHubIcon";

const PROJECT_DATA_QUERY = defineQuery(
  `*[_type == "projects" && slug.current == $slug][0]`
);

function getYouTubeVideoId(url) {
  const urlObj = new URL(url);
  return urlObj.searchParams.get("v");
}

export default async function ProjectView({ params }) {
  const project = await client.fetch(PROJECT_DATA_QUERY, await params);

  console.log(project);
  return (
    <div className="flex justify-center w-full">
      <Navbar />
      <div className="flex flex-col pt-25 px-4 md:px-8 gap-6 w-full max-w-[80vw] mx-auto">
        <Link
          href="/projects"
          className="flex gap-2 hover:bg-[var(--secondary)]/50 w-fit p-3 rounded-[10px] hove:border hover:border-white/20 hover:shadow-sm transition-all duration-300"
        >
          <ArrowLeft />
          <span>Back to Projects</span>
        </Link>
        <div className="text-[3rem] leading-none">{project.title}</div>
        <div className="flex flex-row flex-wrap gap-3">
          {project.tags.map((tag) => (
            <div
              className=" bg-[#FFF2E6]/40 backdrop-blur-md px-2 py-1.5 rounded-[10px] font-semibold border border-white/40 whitespace-nowrap shadow-md"
              key={tag}
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <div className="w-[60%]">
            <div className="text-[2rem]">The Problem</div>
            <div>{project.problem}</div>
            <div className="text-[2rem]">The Solution</div>
            <div>{project.solution}</div>
            <div className="text-[2rem]">What I Learned</div>
            <div>{project.outcome}</div>
          </div>
          <div className="bg-[var(--secondary)]/30 backdrop-blur-md rounded-[10px] self-start sticky top-20 border border-white/20 shadow-lg">
            <img
              className="rounded-t-[10px] w-full h-auto object-cover"
              src={urlFor(project.images[0])
                .height(250)
                .width(350)
                .quality(100)
                .url()}
            ></img>
            <div className="p-4 flex flex-col gap-4">
              <a
                href={project.demoLink}
                className=" h-[2.5rem] bg-[var(--primary)] text-[var(--secondary)] rounded-[10px] border border-[#EFDFD3] flex items-center justify-center gap-2"
              >
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </a>
              <a
                href={project.githubLink}
                className="h-[2.5rem] bg-[#FFF2E6]/40 backdrop-blur-sm rounded-[10px] border border-white/30 flex items-center justify-center gap-2 shadow-sm hover:bg-[#FFF2E6]/60 hover:shadow-md transition-all duration-300"
              >
                <GitHubIcon size={20} />
                <span>GitHub Repo</span>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[var(--secondary)]" />
        <div className="flex flex-col items-center">
          <div className="text-[2.5rem]">Demo Video</div>
          <div className="w-full max-w-4xl aspect-video p-5 bg-[var(--secondary)]/20 backdrop-blur-sm rounded-[15px] border border-white/20 shadow-lg">
            <iframe
              src={`https://www.youtube.com/embed/${getYouTubeVideoId(project.video.url)}`}
              title="YouTube video player"
              allowFullScreen
              className="p-5 w-full h-full rounded-[10px]"
            ></iframe>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[var(--secondary)]" />
        <div className="flex flex-col items-center pb-[3rem]">
          <div className="text-[2.5rem]">Screenshots</div>
          <div className="grid grid-cols-2 gap-8 p-5">
            {project.images.map((img, index) => (
              <div
                key={index}
                className="w-full overflow-hidden bg-[var(--secondary)]/20 backdrop-blur-sm rounded-[15px] border border-white/20 shadow-lg p-2"
              >
                <img
                  className="w-full h-auto object-contain rounded-[10px]"
                  src={urlFor(img).width(1200).quality(100).url()}
                  alt={`Screenshot ${index + 1}`}
                ></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
