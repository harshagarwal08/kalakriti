import React, { useState } from "react";

//INTERNAL IMPORT
import Style from "./AuthorNFTCardBox.module.css";
import { NFTCardTwo } from "../../collectionPage/collectionIndex";


const AuthorNFTCardBox = ({
  collectiables,
  created,
  nfts,
  myNFTS
}) => {
  return (
    <div className={Style.AuthorNFTCardBox}>
      {nfts? (collectiables && <NFTCardTwo NFTData={nfts} />): (collectiables && <h3 style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>You don't have any NFTs to list</h3>)}
      {myNFTS? (created && <NFTCardTwo NFTData={myNFTS} />): (created && <h3 style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>You don't own any NFTs</h3>) }
    </div>
  );
};

export default AuthorNFTCardBox;
