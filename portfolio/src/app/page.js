import { defineQuery } from "next-sanity";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import urlFor from "./utils/url";

const HOMEPAGE_QUERY = defineQuery(
  `*[_type == 'homePage'][0]{title, description, profileImg}`
);

export default async function Home() {
  const homepageData = await client.fetch(HOMEPAGE_QUERY);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex gap-25 items-center px-10">
          <div>
            <div className="w-[23.5625rem] h-[23.5625rem]">
              <img
                className="rounded-full"
                src={urlFor(homepageData.profileImg).quality(100).url()}
              ></img>
            </div>
          </div>
          <div>
            <div className="text-[4rem]">Marco Maldonado</div>
            <div className="text-[2.25rem]">{homepageData.title}</div>
            <div className="max-w-[35rem] py-3">{homepageData.description}</div>
            <div className="flex justify-evenly w-full">
              <Link
                href="/about"
                className="px-6 py-3 rounded-[15px] bg-[var(--primary)] text-[var(--secondary)] transition-transform duration-300 hover:scale-105"
              >
                Learn More
              </Link>
              <Link
                href="/projects"
                className="px-6 py-3 rounded-[15px] bg-[var(--primary)] text-[var(--secondary)] transition-transform duration-300 hover:scale-105"
              >
                Personal Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
