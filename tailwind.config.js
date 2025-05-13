/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,scss}"],
  theme: {
    extend: {
      colors: {
        Primary: "#220054",
        PrimaryText: "#152C5B",
        SecondText: "#777E90",
        thirdText: "#48546D",
        fourthText: "#878787",
        border: "#eeeeee",
        error: "#f44336",
        SecondBorder: "#EDEDED",
        featureBg: "#eef2f3",
        Perimum: "#C8A45D",
        heartColor: "#243543",
        featurePrimaryText: "#1B2534",
        featureSecondText: "#737680",
        newsBg: "#F2F6FF",
        newsPrimaryText: "#737680",
        newsSecondText: "#1B2534",
        newsThirdText: "#484B50",
        footerBg: "#330066",
        footerIconBg: "#663366",
        footerActiveIconBg: "#cc9966",
        jimmy: "#000000"
      },
    },
  },
  plugins: [],
};
