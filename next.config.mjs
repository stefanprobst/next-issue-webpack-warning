import withSlugs from "rehype-slug";

const config = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: "@mdx-js/loader",
          options: {
            rehypePlugins: [withSlugs],
          },
        },
      ],
    });

    return config;
  },
};

export default config;
