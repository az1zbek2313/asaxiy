"use client"

import { styles } from '@/utils/page'
import ProductName from './products/productName'
import { FirstClient, popularbrends, SecondClient } from '@/constant/page'
import { useState } from 'react'
import Marquee from "react-fast-marquee";
import Image from 'next/image';

function Popularbrands() {
  const [check, setCheck] = useState<number>(1);

  return (
    <div className={`${styles.container}`}>
      <ProductName title='Популярные бренды' />
      <div className="flex justify-center md:justify-start lg:justify-between flex-wrap my-6 gap-3 xl:gap-0">
        {
          popularbrends.map(el => (
            <button key={el.id} onClick={() => {setCheck(el.id)}} className={`rounded border py-1 md:py-2 px-2 md:px-4 bg-[#F6F6F6] text-sm md:text-base  md:w-36 transition-all duration-200 hover:text-blue-600 hover:border-blue-600 ${check === el.id && "text-blue-600 border-blue-600"}`}>{el.title}</button>
          ))
        }
      </div>
      <div className="">
      <Marquee speed={10} className="my-2 sm:my-4">
        <div className="flex gap-3 sm:gap-6 w-full h-full">
          {FirstClient.map((el) => (
           <div key={el.id} className="hidden sm:inline-block transition-all duration-500">
             <Image
              width={210}
              height={126}
              key={el.id}
              src={el.img}
              alt="icon"
              className={`${el.id == 7 && "mr-6"}`}
            />
           </div>
          ))}
          {FirstClient.map((el) => (
           <div key={el.id} className="sm:hidden inline-block transition-all duration-500">
             <Image
              width={130}
              height={95}
              key={el.id}
              src={el.img}
              alt="icon"
              className={`${el.id == 7 && "mr-6"}`}
            />
           </div>
          ))}
        </div>
      </Marquee>
      <Marquee speed={10} direction="right" className="my-2 sm:my-4">
        <div className="flex gap-3 sm:gap-6 w-full h-full">
        {SecondClient.map((el) => (
           <div key={el.id} className="hidden sm:inline-block transition-all duration-500">
             <Image
              width={210}
              height={126}
              key={el.id}
              src={el.img}
              alt="icon"
              className={`${el.id == 7 && "mr-6"}`}
            />
           </div>
          ))}
          {SecondClient.map((el) => (
           <div key={el.id} className="sm:hidden inline-block  transition-all duration-500">
             <Image
              width={130}
              height={95}
              key={el.id}
              src={el.img}
              alt="icon"
              className={`${el.id == 7 && "mr-6"}`}
            />
           </div>
          ))}
        </div>
      </Marquee>
      </div>
    </div>
  )
}

export default Popularbrands