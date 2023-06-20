import React, {useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button } from "../componentsindex";
import nftsGif from "../../img/nfts.gif";

//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const HeroSection = () => {
  const { titleData } = useContext(NFTMarketplaceContext);
  const router = useRouter();
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <div style={{
            fontSize: "3rem",
            fontWeight: "bold",
          }}>Discover the Vibrant World of <span style={{
            color: "#FFDF2B",
          }}>Indian NFTs</span>: Where Art and Blockchain Collide.
          </div>
          <p style={{
            fontSize: "1.2rem",
          }}>
          Welcome to Kalakriti, where the realms of art and blockchain converge to unlock new horizons of creativity and ownership. Join us on this revolutionary journey and be a part of redefining the future of art and collectibles in India.
          </p>
          <Button
            btnName="Start your search"
            handleClick={() => router.push("/searchPage")}
          />
        </div>
        <div className={Style.heroSection_box_right}>
          <Image src={nftsGif} alt="Hero section" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
