import Image from "next/image"
import logo from "@/assets/logotip.svg"
import searchIcon from "@/assets/HeaderIcons/Vector.svg"
import pictureIcon from "@/assets/HeaderIcons/Vector-1.svg"
import { styles } from "@/utils/page"
import { headerFilterRight } from "@/constant/page"
import Link from "next/link"

function HeaderFilter() {
  return (
    <div className={`${styles.container} flex justify-between items-center md:py-3`}>
      {/* Logo */}
      <Link href={"/"}>
      <Image src={logo} alt='Logotip' className="w-[140] lg:w-[170] hidden md:block"/></Link>
      {/* Search */}
      <div className="px-4 py-3 bg-[#F6F6F6] w-full md:w-[44%] xl:w-1/2 flex justify-between items-center rounded">
        <div className="flex items-center gap-3 w-full">
          <label htmlFor="search" className="cursor-pointer">
          <Image src={searchIcon} alt="icon"/>
          </label>
          <input id="search" type="text" className="border-none cursor-text focus:outline-none bg-transparent w-full" placeholder="Product search"/>
        </div>
        <Image src={pictureIcon} alt="icon"/>
      </div>
      {/* Icons */}
      <ul className="items-center gap-6 lg:gap-8 hidden md:flex">
        {
          headerFilterRight.map(el => (
            <li key={el.id} className="flex flex-col transition-all duration-200 hover:scale-105 cursor-pointer hover:text-blue-600 items-center gap-1">
              <Image src={el.icon} alt="icon" className="w-5 h-5"/>
              <span className="text-[15px] hidden lg:inline">{el.title}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default HeaderFilter