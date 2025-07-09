import { defineField, defineType } from "sanity";

export const resumeType = defineType({
  name: "resume",
  title: "Resume",
  type: "document",
  fields: [
    defineField({
      name: "pdfFile",
      title: "PDF File",
      type: "file",
      options: {
        accept: "application/pdf",
      },
    }),
  ],
});
