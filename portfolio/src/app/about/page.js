import Navbar from "@/components/Navbar";
import { Briefcase } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import WorkExperienceCard from "@/components/WorkExperienceCard";
import DownloadResumeButton from "@/components/DownloadResumeButton";

const WORK_QUERY = defineQuery(
  `*[_type == 'workExperience'] | order(startDate desc) {jobTitle, company, dates, description}`
);

const RESUME_QUERY = `*[_type == "resume"][0]{file{asset->{url}}}`;

export default async function About() {
  const workExperience = await client.fetch(WORK_QUERY);

  return (
    <div className="flex justify-center w-full">
      <Navbar />
      <div className="flex flex-col items-center min-h-screen pt-25 px-15 max-w-4xl gap-6 w-full">
        <div className="text-[4rem] leading-none pt-6">Work Experience</div>
        <div className="flex w-full justify-end">
          <DownloadResumeButton />
        </div>
        <div>
          {workExperience.map((item, index) => (
            <div className="grid grid-cols-[auto_1fr] gap-6 w-full" key={index}>
              <div className="relative w-full h-full flex justify-center mr-[1.5rem]">
                {/* <div className="absolute w-[0.25rem] h-full bg-[var(--secondary)]/30 backdrop-blur-sm"></div>
              <div className="absolute bg-[var(--primary)]/80 backdrop-blur-sm rounded-full border-[0.25rem] border-white/30 p-[0.25rem] shadow-md"> */}
                <div className="absolute w-[0.25rem] h-full bg-[var(--secondary)]"></div>
                <div className="absolute bg-[var(--primary)] rounded-full border-[0.25rem] border-[var(--secondary)] p-[0.25rem]">
                  <Briefcase color="var(--secondary)" size={16} />
                </div>
              </div>

              <div
                className={index !== workExperience.length - 1 ? "mb-6" : ""}
              >
                <WorkExperienceCard data={item} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
