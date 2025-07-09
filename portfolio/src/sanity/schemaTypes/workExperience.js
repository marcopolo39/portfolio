import { defineField, defineType } from "sanity";

export const workExperienceType = defineType({
  name: "workExperience",
  title: "Work Experience",
  type: "document",
  fields: [
    defineField({
      name: "jobTitle",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "company",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "dates",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "startDate",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
  ],
});
