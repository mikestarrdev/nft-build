import { useRef, useEffect, useState } from "react";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import Navbar from "../components/Navbar";
import Uploader from "../components/Uploader";

export default function Home() {
  const [web3Modal, setWeb3Modal] = useState({});
  const account = useRef("");
  const [userAccount, setUserAccount] = useState();

  useEffect(() => {
    // if (Web3Modal.cachedProvider) connect();
    if (typeof window !== "undefined") {
      const web3modal = new Web3Modal({
        network: "rinkeby", // optional
        cacheProvider: true, // optional
        providerOptions, // required
      });
      setWeb3Modal(web3modal);
    }
  }, []);

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: process.env.REACT_APP_INFURA_ID, // required
      },
    },
  };

  const connect = async () => {
    try {
      const instance = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      const signer = provider.getSigner();
      const accounts = await provider.listAccounts();
      account.current = accounts[0];
      setUserAccount(account.current);
    } catch (err) {
      console.log(err);
    }
  };

  const disconnect = async () => {
    try {
      await web3Modal.clearCachedProvider();
      account = null;
      console.log(account);
      setUserAccount(null);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar connect={connect} disconnect={disconnect} account={userAccount} />
      <h1 className="font-bold text-3xl text-center mx-auto my-3">NFT Gram</h1>
      <h3 className="text-center text-xl">
        Mint your own NFT's with 1 click! Drag & Drop, create an NFT with 1
        click
      </h3>
      <Uploader />
    </>
  );
}
