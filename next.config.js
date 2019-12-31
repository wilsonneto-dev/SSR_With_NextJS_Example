// next.config.js
const withSass = require("@zeit/next-sass");
const api = require("axios");

module.exports = withSass({
  /* config options here */

  exportTrailingSlash: true,
  exportPathMap: async () => {
    const paths = {
      "/": { page: "/" },
      "/about": { page: "/about" }
    };

    const { data } = await api.get(
      "https://api.tvmaze.com/search/shows?q=batman"
    );
    const shows = data.map(i => i.show);

    shows.forEach(show => {
      paths[`/batman/${show.id}`] = {
        page: "/batman/[id]",
        query: { id: show.id }
      };
    });

    return paths;
  }
});
