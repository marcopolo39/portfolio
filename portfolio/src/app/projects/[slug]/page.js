import Navbar from "@/components/Navbar";
import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";

const PROJECT_DATA_QUERY = `*[_type == "projects" && slug.current == $slug][0]`;

export default async function ProjectView({ params }) {
  const data = await client.fetch(PROJECT_DATA_QUERY, await params);
  console.log(data);
  return (
    <div className="flex justify-center w-full">
      <Navbar />
      <div className="flex flex-col items-center min-h-screen pt-25 px-15 max-w-4xl gap-6 w-full">
        Detailed Project View
      </div>
    </div>
  );
}
