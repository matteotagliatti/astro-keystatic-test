import { collection, config, fields } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: {
      owner: "matteotagliatti",
      name: "astro-keystatic-test",
    },
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: "src/assets/images/posts",
            publicPath: "../../assets/images/posts/",
          },
        }),
      },
    }),
  },
});
