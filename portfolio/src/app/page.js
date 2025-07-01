import { defineQuery } from "next-sanity";
import { client } from "@/sanity/lib/client";

const HOMEPAGE_QUERY = defineQuery(
  `*[_type == 'homePage'][0]{title, description, profileImg}`
);

export default async function Home() {
  const homepageData = await client.fetch(HOMEPAGE_QUERY);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex">
        <img></img>
        <div>content</div>
      </div>
    </div>
  );
}
