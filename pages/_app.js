import "../styles/globals.css";
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";
import Provider from "streamr-client-react";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";
import { polygonMumbai } from "wagmi/chains";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import BundlrContextProvider from "../state/bundlr.context";

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

const { chains, provider } = configureChains(
  [polygonMumbai],
  [
    jsonRpcProvider({
      rpc: () => ({ http: process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL }),
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Bundlr arweave testnet demo",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

const options = {
  auth: { privateKey: process.env.NEXT_PUBLIC_PRIVATE_KEY },
  // or authenticate with user wallet
  // auth: { ethereum: window.ethereum }
};

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ChakraProvider theme={theme}>
          <BundlrContextProvider>
            <Provider {...options}>
              <LivepeerConfig client={client} theme={livepeerTheme}>
                <Component {...pageProps} />
              </LivepeerConfig>
            </Provider>
          </BundlrContextProvider>
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
