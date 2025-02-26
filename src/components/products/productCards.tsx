import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { FC } from "react"

interface ProductCardsProps {
  image:StaticImageData,
  title:string
}
const ProductCards:FC<ProductCardsProps> = ({image, title}) => {
  return (
    <Link href={"#"} className="flex transition-all duration-200 hover:scale-[1.02] flex-col items-center justify-center px-4 py-4 bg-[#F6F6F6] rounded-lg gap-4">
      <Image alt="image" src={image} />
      <p className="font-bold text-[#5C596D] text-2xl">{title}</p>
    </Link>
  )
}

export default ProductCards