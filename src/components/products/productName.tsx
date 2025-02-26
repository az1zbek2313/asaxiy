import { FC } from "react"

interface ProductNameProps {
  title: string;
}

const ProductName : FC<ProductNameProps> = ({title}) => {
  return (
    <h2 className="font-bold text-2xl mt-4">{title}</h2>
  )
}

export default ProductName