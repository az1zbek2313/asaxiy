"use client"

import { navbarTitle } from "@/constant/page"
import { styles } from "@/utils/page"

function Navbar() {
  return (
    <div className='hidden xl:block bg-[#F8F8F8]'>
      <ul className={`${styles.container} flex flex-wrap items-center`}>
        {
          navbarTitle.map(el => (
            <li className="px-2 lg:px-4 py-2 cursor-pointer transition-all duration-200 hover:text-blue-600" key={el.id}>{el.title}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Navbar