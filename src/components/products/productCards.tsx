import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { FC } from "react"

interface ProductCardsProps {
  image:StaticImageData,
  title:string,
  styled:string
}
const ProductCards:FC<ProductCardsProps> = ({image, title, styled}) => {
  return (
    <Link href={"#"} className={`${styled} flex transition-all duration-200 hover:scale-[1.02] flex-col items-center justify-center py-6 bg-[#F6F6F6] rounded-lg gap-4`}>
      <Image alt="image" src={image} />
      <p className="font-bold text-[#5C596D] text-2xl">{title}</p>
    </Link>
  )
}

export default ProductCards