import { styles } from '@/utils/page'
import React from 'react'
import ProductName from './products/productName'
import ProductCards from './products/productCards'
import { productCards1 } from '@/constant/page'

function Popularcategories() {
  return (
    <div className={`${styles.container}`}>
      <ProductName title="Popular categories" />
      <div className="flex items-center justify-center md:justify-start gap-4 xl:gap-0 xl:justify-between py-2 md:py-4 flex-wrap">
        {
          productCards1.map(el => (
            <ProductCards key={el.id} image={el.image} title={el.title}/>
          ))
        }
      </div>
    </div>
  )
}

export default Popularcategories