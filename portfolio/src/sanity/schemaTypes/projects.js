import { defineField, defineType } from "sanity";

export const projectsType = defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "images",
      type: "array",
      of: [
        defineField({
          name: "image",
          type: "image",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        }),
      ],
      options: {
        layout: "grid", // Optional: displays images in a grid in Studio
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "githubLink",
      type: "url",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "demoLink",
      type: "url",
    }),
    defineField({
      name: "problem",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "solution",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "lessonsLearned",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "video",
      type: "object",
      fields: [
        defineField({
          name: "videoLabel",
          type: "string",
        }),
        defineField({
          name: "url",
          type: "string",
          title: "URL",
        }),
      ],
    }),
  ],
});
