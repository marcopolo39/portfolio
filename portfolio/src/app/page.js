import { defineQuery } from "next-sanity";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const HOMEPAGE_QUERY = defineQuery(
  `*[_type == 'homePage'][0]{title, description, profileImg}`
);

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default async function Home() {
  const homepageData = await client.fetch(HOMEPAGE_QUERY);

  console.log(homepageData);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex gap-16">
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
          <div>{homepageData.description}</div>
          <div>
            <button>Learn More About Me</button>
            <button>Personal Projects</button>
          </div>
        </div>
      </div>
    </div>
  );
}
