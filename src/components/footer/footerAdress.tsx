import { styles } from '@/utils/page'
import Image from 'next/image'
import mail from "@/assets/FooterIcons/image 253.svg"
import Link from 'next/link'

function FooterAdress() {
  return (
    <div className={`${styles.container} md:py-0 flex gap-8 md:gap-16 flex-wrap mb-20`}>
      <ul className='list-none flex flex-col gap-3'>
        <li className="text-2xl text-[#1D1A2F] font-semibold">Single call center</li>
        <Link href={"#"} className="text-xl">+99871-200-01-05 </Link>
      </ul>
      <ul className='list-none flex flex-col gap-3'>
        <li className="text-2xl text-[#1D1A2F] font-semibold">Mail for wishes and suggestions</li>
        <Link href={"#"} className="text-xl flex items-center gap-2">
          <Image alt='icon' src={mail}/>
          <span>info@asaxiy.uz</span>  
        </Link>
      </ul>
    </div>
  )
}

export default FooterAdress