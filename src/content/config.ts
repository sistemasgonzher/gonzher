// src/content/config.ts

import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    // using zod to define type-safe frontmatter of our mdx files
    // astro will generate types definitions for our project so we can use them in templates
    // also it will check every newly created frontmatter in the content/blog directory
    z.object({
      title: z.string(),
      tags: z.array(z.string()),
      cover: image().optional(),
      date: z.coerce.date(),
      excerpt: z.string(),
    }),
});

const authorCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      avatar: image().optional(),
    }),
});

// This key should match your collection directory name in "src/content"
export const collections = {
  blog: postsCollection,
  author: authorCollection,
};
