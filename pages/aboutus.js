import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "../styles/aboutus.module.css";
import kalakritiGif from "../img/kalakriti-vector.gif";

const aboutus = () => {

  const factsArray = [
    {
      title: "Artist Empowerment",
      info: "Articles have been public around  We prioritize the needs of artists and creators, providing them with a user-friendly platform to showcase and monetize their work. Through the tokenization of their creations, artists can establish verifiable ownership and sell their NFTs directly to interested buyers.",
    },
    {
      title: "Curated Collection",
      info: "Our marketplace features a carefully curated collection of Indian art and cultural assets. We strive to promote diversity and inclusivity by highlighting the rich tapestry of India's artistic heritage and contemporary creative expressions.",
    },
    {
      title: "Environmental Consciousness",
      info: "We are committed to sustainability and minimizing the environmental impact of blockchain technology. We aim to explore and implement eco-friendly solutions for NFT creation and transactions, such as utilizing energy-efficient blockchains and supporting carbon offset initiatives.",
    },
  ];
  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>👋 About Us.</h1>
            <p>
            Welcome to our Indian NFT Marketplace, a pioneering platform that combines the power of blockchain technology with the vibrant artistic and cultural landscape of India. Our marketplace is dedicated to showcasing and trading Non-Fungible Tokens (NFTs), which have revolutionized the way digital assets are bought, sold, and owned.

            At our Indian NFT Marketplace, we believe in the transformative potential of NFTs and their ability to empower artists, creators, and collectors. We aim to provide a secure and transparent platform where Indian artists can tokenize their unique creations, ranging from digital artworks, music, videos, virtual real estate, collectibles, and much more.
            </p>
          </div>
          <div className={Style.aboutus_box_hero_right}>
            <Image src={kalakritiGif} width={500} height={500}/>
          </div>
        </div>


        <div className={Style.aboutus_box_title}>
          <h2>🚀 Key Features</h2>
        </div>

        <div className={Style.aboutus_box_facts}>
          <div className={Style.aboutus_box_facts_box}>
            {factsArray.map((el, i) => (
              <div className={Style.aboutus_box_facts_box_info}>
                <div style={{
                 fontSize: "1.5rem",
                  fontWeight: "bold",
                }}>{el.title}</div>
                <p>{el.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutus;
