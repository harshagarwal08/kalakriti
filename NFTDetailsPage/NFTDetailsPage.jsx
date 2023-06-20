import React, { useContext, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaWallet } from "react-icons/fa";
import Style from "./NFTDetailsPage.module.css";
import { Button, Loader } from "../components/componentsindex.js";
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const NFTDetailsPage = ({ nft }) => {
  const [loader, setLoader] = useState(false);
  const { buyNFT, currentAccount } = useContext(NFTMarketplaceContext);
  const router = useRouter();
  return loader ? (
    <Loader />
  ) : (
    nft.image && 
    <div className={Style.NFTDetailsContainer}>
      <Image
        src={nft.image}
        className={Style.NFTDetailsImage}
        alt="NFT Image"
        width={300}
        height={400}
        objectFit="cover"
      />
      <div className={Style.NFTDetailsInfo}>
        <div style={{
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#FFDF2B",
        }}>{nft.name}</div>
        <div style={{
          fontSize: "1rem",
        }}>
          Owner:{" "}
          <span
            style={{
              color: "#FFDF2B",
            }}
          >{nft.owner}
          </span>
        </div>
        <div style={{
          fontSize: "1rem",
        }}>
          Description:{" "}
          <span
            style={{
              color: "#FFDF2B",
            }}
          >
            {nft.description}
          </span>
        </div>
        <div style={{
          fontSize: "1rem",
        }}>
          Price:{" "}
          <span
            style={{
              color: "#FFDF2B",
            }}
          >
            {nft.price} MATIC
          </span>
        </div>
        <div className={Style.NFTDetailsButton}>
          {currentAccount == nft.seller.toLowerCase() ? (
            <p
              style={{
                color: "#FFDF2B",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              You can't buy your own NFT
            </p>
          ) : currentAccount == nft.owner.toLowerCase() ? (
            <Button
              icon={<FaWallet />}
              btnName="List on Marketplace"
              handleClick={() => {
                setLoader(true);
                router.push(
                  `/reSellToken?id=${nft.tokenId}&tokenURI=${nft.tokenURI}&price=${nft.price}`
                );
              }}
              classStyle={Style.button}
            />
          ) : (
            <Button
              icon={<FaWallet />}
              btnName="Buy NFT"
              handleClick={() => {
                setLoader(true);
                buyNFT(nft);
              }}
              classStyle={Style.button}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default NFTDetailsPage;
