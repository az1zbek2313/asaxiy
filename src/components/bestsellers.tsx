import React from 'react'
import ProductName from './products/productName'
import { styles } from '@/utils/page'
import ProductsCategory from './products/productsCategory'
import { productCategory } from '@/constant/page'

function Bestsellers() {
  return (
    <div className={`${styles.container}`}>
    <ProductName title="Bestsellers" />
    <div className="flex items-center justify-center md:justify-between gap-4 py-2 md:py-4 flex-wrap">
      {
        productCategory.map(el => (
          <ProductsCategory key={el.id} image={el.image} title={el.title} price={el.price} desc={el.desc} rating={el.rating}/>
        ))
      }
    </div>
  </div>
  )
}

export default Bestsellers