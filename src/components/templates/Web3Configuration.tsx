"use client";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";
import { PropsWithChildren } from "react";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "4291420d879100da04cc0cd1b8c64721";

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};

// 3. Create modal
const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet],
  projectId,
  enableAnalytics: false, // Optional - defaults to your Cloud configuration
});

export default function Web3Configuration({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}
