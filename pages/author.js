import React, { useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/author.module.css";
import { Banner } from "../collectionPage/collectionIndex";
import images from "../img";
import {
  AuthorTaps,
  AuthorNFTCardBox,
} from "../authorPage/componentIndex";
import { Loader } from "../components/componentsindex";

//IMPORT SMART CONTRACT DATA
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const author = () => {
  const [collectiables, setCollectiables] = useState(true);
  const [created, setCreated] = useState(false);

  //IMPORT SMART CONTRACT DATA
  const { fetchMyNFTsOrListedNFTs, currentAccount } = useContext(
    NFTMarketplaceContext
  );

  const [nfts, setNfts] = useState([]);
  const [myNFTs, setMyNFTs] = useState([]);

  useEffect(() => {
    fetchMyNFTsOrListedNFTs("fetchItemsListed").then((items) => {
      setNfts(items);
    });
    fetchMyNFTsOrListedNFTs("fetchMyNFTs").then((items) => {
      setMyNFTs(items);
    });
  }, []);

  console.log('nfts', nfts, 'myNfts', myNFTs);

  return (
    <div style={{
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    {(nfts || myNFTs)? <div className={Style.author}>
      <Banner bannerImage={images.creatorbackground2} />
      <AuthorTaps
        setCollectiables={setCollectiables}
        setCreated={setCreated}
        currentAccount={currentAccount}
        />
      <AuthorNFTCardBox
        collectiables={collectiables}
        created={created}
        nfts={nfts}
        myNFTS={myNFTs}
        />
    </div>
    : <Loader/>
    }
  </div>
  );
};

export default author;
