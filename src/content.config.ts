import { file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  loader: file("src/data/projects.json"),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    date: z.string(),
    link: z.string().url(),
    image: z.string(),
  }),
});

export const collections = { projects };
