import React, { useState } from "react";
import Image from "next/image";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./NFTCardTwo.module.css";

const NFTCardTwo = ({ NFTData}) => {
  const NFTsToShow = NFTData?.filter((el) => el.image !== undefined);
  return (
    <div className={Style.NFTCardTwo}>
      {NFTsToShow?.map((el, i) => {
        return <Link href={{ pathname: "/NFT-details", query: el }} key={i + 1}>
          <div className={Style.NFTCardTwo_box} key={i + 1}>
            <div className={Style.NFTCardTwo_box_like}>
              <div className={Style.NFTCardTwo_box_like_box}>
                <div className={Style.NFTCardTwo_box_like_box_box}>
                  <BsImage className={Style.NFTCardTwo_box_like_box_box_icon} />
                </div>
              </div>
            </div>

            <div className={Style.NFTCardTwo_box_img}>
              <Image
                src={el.image}
                alt="NFT"
                width={500}
                height={500}
                objectFit="cover"
                className={Style.NFTCardTwo_box_img_img}
              />
            </div>

            <div className={Style.NFTCardTwo_box_info}>
                <p>{el.name}</p>
            </div>

            <div className={Style.NFTCardTwo_box_price}>
              <div className={Style.NFTCardTwo_box_price_box}>
                <small>Current Price</small>
                <p>{el.price} MATIC</p>
              </div>
            </div>
          </div>
        </Link>
      })}
    </div>
  );
};

export default NFTCardTwo;
