import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";


//INTERNAL IMPORT
import Style from "../styles/reSellToken.module.css";
import formStyle from "../AccountPage/Form/Form.module.css";
import { Button, Loader } from "../components/componentsindex";

//IMPORT SMART CONTRACT
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";


const reSellToken = () => {
  const { createSale } = useContext(NFTMarketplaceContext);
  const [nftData, setNFTData] = useState({});
  const [price, setPrice] = useState("");
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const { id, tokenURI } = router.query;

  const fetchNFT = async () => {
    if (!tokenURI) return;
    const finalUrl = 'https://corsproxy.io/?' + encodeURIComponent(tokenURI);
    const { data } = await axios.get(finalUrl, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    setNFTData(data);
  };

  useEffect(() => {
    fetchNFT();
  }, [id]);

  const resell = async () => {
    try {
      await createSale(tokenURI, price, true, id);
      router.push("/author");
    } catch (error) {
      console.log("Error while resell", error);
    }
  };
  return (
    loader? <Loader/> :
    <div className={Style.reSellToken}>
      <div className={Style.reSellToken_box}>
        <div className={Style.reSellToken_nft}>
          <Image src={nftData.image} width={400} height={400} style={{
            borderRadius: "10px",
          }}/>
          <h1>{nftData.name}</h1>
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}>
        <div className={formStyle.Form_box_input_resell}>
          <input
            type="text"
            placeholder="Enter the resell price (in MATIC or ETH)" 
            className={formStyle.Form_box_input_userName}
            onChange={(e) => {
              setPrice(e.target.value)
            }}
          />
        </div>
        <div className={Style.reSellToken_box_btn}>
          <Button btnName="Resell NFT" handleClick={() => {
            setLoader(true);
            resell()}} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default reSellToken;
