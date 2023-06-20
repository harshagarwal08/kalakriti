import React, { useState, useEffect, useContext } from "react";

// INTERNAL IMPORTS
import {
  HeroSection,
  Title,
  NFTCard,
  Loader,
} from "../components/componentsindex";

//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const Home = () => {
  const { checkIfWalletConnected, currentAccount } = useContext(
    NFTMarketplaceContext
  );
  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  const { fetchNFTs } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    if (currentAccount) {
    fetchNFTs().then((items) => {
      setNfts(items?.reverse());
    });
    }
  }, []);

  return (
    <>
      <HeroSection />
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in the marketplace."
      />
      {nfts?.length == 0 ? <Loader /> : <NFTCard NFTData={nfts} />}
    </>
  );
};

export default Home;
