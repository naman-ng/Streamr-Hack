import "@/styles/globals.css";
import {
  LivepeerConfig,
  ThemeConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";

const client = createReactClient({
  // provider: studioProvider({ apiKey: "e38a3718-a600-4686-8ae8-f83e103396e7" }),
  provider: studioProvider({ apiKey: process.env.NEXT_PUBLIC_KEY }),
});

const livepeerTheme = {
  colors: {
    accent: "rgb(0, 145, 255)",
    containerBorderColor: "rgba(0, 145, 255, 0.9)",
  },
  fonts: {
    display: "Inter",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <LivepeerConfig client={client} theme={livepeerTheme}>
      <Component {...pageProps} />
    </LivepeerConfig>
  );
}
