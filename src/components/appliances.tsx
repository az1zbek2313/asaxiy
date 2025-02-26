import React from 'react'
import ProductName from './products/productName'
import { styles } from '@/utils/page'
import ProductCards from './products/productCards'
import { productCards2 } from '@/constant/page'

function Appliances() {
  return (
    <div className={`${styles.container}`}>
    <ProductName title="Home Appliances" />
    <div className="flex items-center justify-center md:justify-between gap-4 py-2 md:py-4 flex-wrap">
      {
        productCards2.map(el => (
          <ProductCards key={el.id} image={el.image} title={el.title}/>
        ))
      }
    </div>
  </div>
  )
}

export default Appliances