"use client";

import { Rating } from "@mui/material";
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { FC, useState } from "react"
import cart from "@/assets/HeaderIcons/cart.svg"
import converter from "@/assets/HeaderIcons/Group.svg"
import heart from "@/assets/HeaderIcons/heart.svg"

interface ProductsCategoryProps {
  image: StaticImageData,
  price: number,
  desc: string,
  title: string,
  rating: number
}

const ProductsCategory: FC<ProductsCategoryProps> = ({ image, title, price, rating, desc }) => {
  const [checkrating, setRating] = useState<number>(rating);

  return (
    <Link href={"#"} className="flex transition-all duration-200 p-6 hover:scale-[1.02] flex-col items-center justify-between shadow-md rounded-lg gap-3">
      <Image alt="image" src={image} />
      <div className="flex flex-col gap-5">
        {/* card about */}
        <div className="flex flex-col gap-4">
          <p className="text-base">{title}</p>
          <div className="flex flex-col gap-1">
            <h2 className="font-semibold text-xl text-[#1D1A2F]">{price.toLocaleString("ru-RU")} сум</h2>
            <span className="text-base text-[#5C596D]">{desc}</span>
          </div>
          <Rating
            name="simple-controlled"
            value={checkrating}
            onChange={(e, newValue) => {
              e.preventDefault();
              console.log(36, newValue);

              if (newValue !== null) {
                setRating(newValue);
              }
            }}

          />
        </div>
        {/* card seller */}
        <div className="flex items-center justify-between">
          <button className="flex rounded py-2 px-4 gap-3 items-center bg-[#1B5BF7] text-white transition-all duration-200 hover:text-[#1B5BF7] hover:bg-[#E0E8FF]">
            <Image alt="icon" src={cart} className="block hover:hidden"/>
            <span>Add to cart</span>
          </button>
          <div className="flex items-center gap-3">
            <Image alt="icon" src={converter} className="transition-all duration-200 hover:scale-110"/>
            <Image alt="icon" src={heart} className="transition-all duration-200 hover:scale-110"/>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductsCategory