/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        header: ["24px", "29px"],
        p: ["14px", "17px"],
        username: ["12px", "15px"],
        followerCount: ["56px", "48px"],
        statistics: ['14px','17px'],
        statisticsNumber: ['32px','39px']
      },
      gridTemplateRows: {
        socialMedia: "repeat(1,1fr)",
      },
      gridTemplateColumns: {
        socialMedia: "repeat(auto-fit, minmax(255px, 1fr))",
      },
    },
  },
  plugins: [],
};
