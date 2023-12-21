module.exports = {
  plugins: [
    require.resolve("prettier-plugin-tailwindcss", "prettier-plugin-astro"),
  ],
  tailwindConfig: "./tailwind.config.cjs",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
