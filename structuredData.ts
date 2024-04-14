// structuredData.ts
import {
  type Article,
  type Person,
  type WebSite,
  type WithContext,
} from "schema-dts";

import avatar from "/public/avatar.png";

import type { CollectionEntry } from "astro:content";

export const blogWebsite: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: `${import.meta.env.SITE}/blog/`,
  name: "Dzmitry Kozhukh blog",
  description: "Frontend insights",
  inLanguage: "en_US",
};

export const mainWebsite: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: import.meta.env.SITE,
  name: "Dzmitry Kozhukh - Personal page",
  description: "Dzmitry Kozhukh's contact page, portfolio and blog",
  inLanguage: "en_US",
};

export const personSchema: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dzmitry Kozhukh",
  url: "https://kozhuhds.com",
  image: `${import.meta.env.SITE}${avatar.src}`,
  sameAs: [
    "https://www.facebook.com/kozhuhds",
    "https://www.instagram.com/kozhuhds/",
    "https://www.linkedin.com/in/kozhuhds/",
  ],
  jobTitle: "Front-end developer",
  worksFor: {
    "@type": "Organization",
    name: "Grafana",
    url: "https://grafana.com",
  },
};

export function getArticleSchema(post: CollectionEntry<"blog">) {
  const imageObject = post.data.cover
  ? `${import.meta.env.SITE}${post.data.cover.src}`
  : undefined;

  const articleStructuredData: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.data.title,
    url: `${import.meta.env.SITE}/blog/${post.slug}/`,
    image: {
      "@type": "ImageObject",
      url: imageObject,
    },
    description: post.data.excerpt,
    datePublished: post.data.date.toString(),
    publisher: {
      "@type": "Person",
      name: "Dzmitry Kozhukh",
      url: import.meta.env.SITE,
      image: import.meta.env.SITE + avatar.src,
    },
    author: {
      "@type": "Person",
      name: "Dzmitry Kozhukh",
      url: import.meta.env.SITE,
      image: import.meta.env.SITE + avatar.src,
    },
  };
  return articleStructuredData;
}
