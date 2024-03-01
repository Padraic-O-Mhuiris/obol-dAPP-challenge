import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
import Button from "../atoms/Button";

export default function ConnectButton({
  className = "",
}: {
  className?: string;
}) {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useWeb3ModalAccount();

  return (
    <Button className={`${className}`} onClick={() => open()}>
      {isConnected
        ? `${address?.slice(0, 6)}...${address?.slice(address.length - 4, address.length)}`
        : "Connect"}
    </Button>
  );
}
