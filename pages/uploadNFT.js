import React, { useEffect, useState, useContext } from "react";
import { Loader } from "../components/componentsindex";

//INTERNAL IMPORT
import Style from "../styles/upload-nft.module.css";
import { UploadNFT } from "../UploadNFT/uploadNFTIndex";

//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const uploadNFT = () => {
  const [loader, setLoader] = useState(false);
  const { uploadToIPFS, createNFT } = useContext(NFTMarketplaceContext);
  return (
    loader ? <Loader/> :
    <div className={Style.uploadNFT}>
      <div className={Style.uploadNFT_box}>
        <div className={Style.uploadNFT_box_heading}>
          <h1>Create New NFT</h1>
        </div>
         <div className={Style.uploadNFT_box_form}>
          <UploadNFT uploadToIPFS={uploadToIPFS} createNFT={createNFT} setLoader={setLoader}/>
        </div>
      </div>
    </div>
  );
};

export default uploadNFT;
