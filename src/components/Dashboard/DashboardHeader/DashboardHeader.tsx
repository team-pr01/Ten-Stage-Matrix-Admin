/* eslint-disable @typescript-eslint/no-explicit-any */
// import { MdOutlineNotificationsNone } from "react-icons/md";
import { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";
import DashboardHamburgerMenu from "../../DashboardHamburgerMenu/DashboardHamburgerMenu";

declare global {
  interface Window {
    ethereum: any;
  }
}

const DashboardHeader = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [web3, setWeb3] = useState<Web3 | null>(null);
  
  console.log(web3);

  useEffect(() => {
    const init = async () => {
      const provider = await detectEthereumProvider();
      if (provider) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
      }
    };
    init();
  }, []);

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } else {
        alert("Please install MetaMask!");
      }
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
    }
  };

  return (
    <div className="bg-neutral-30 p-5 font-Outfit hidden lg:flex items-center justify-between">
      <h1 className="text-white font-medium text-2xl">Admin Dashboard</h1>

      <div className="flex items-center gap-[18px]">
        {/* <MdOutlineNotificationsNone className="text-neutral-25 text-3xl" /> */}
        <button
          onClick={connectWallet}
          className="text-white font-medium bg-primary-10 px-5 py-3 rounded-md"
        >
          {account
            ? `${account.slice(0, 6)}...${account.slice(-4)}`
            : "Connect wallet"}
        </button>
        <DashboardHamburgerMenu />
      </div>
    </div>
  );
};

export default DashboardHeader;
