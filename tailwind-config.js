tailwind.config = {
  theme: {
    extend: {
      colors: {
        ivory: "#FAF7F1",
        parchment: { DEFAULT: "#F1E9DB", deep: "#E9DDC8" },
        sage: { DEFAULT: "#6F8D76", deep: "#3F5744", pale: "#DCE6DD" },
        mauve: { DEFAULT: "#B08497", pale: "#EFDFE4" },
        ink: { DEFAULT: "#26302A", soft: "#5B6259" },
        line: "#DDD2BE",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Karla", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
};
