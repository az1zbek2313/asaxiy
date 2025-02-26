import { footerList } from '@/constant/page'
import { styles } from '@/utils/page'
import Image from 'next/image'
import Link from 'next/link'

function FooterList() {
  return (
    <div className={`${styles.container} flex justify-between flex-wrap mt-12 mb-8`}>
      {
        footerList.map(el => (
          <ul key={el.id} className='flex flex-col gap-4'>
            <h2 className='font-medium text-xl text-[#1D1A2F]'>{el.title}</h2>
            <div className="flex flex-col gap-2">
              {
                el.category === "word" &&
                el.list.map((item, index) => (
                  <li key={index} className="">
                    <Link href={"#"} className="transition-all duration-200 hover:underline hover:text-blue-600">{item}</Link>
                  </li>
                ))
              }
            </div>
            <div className="flex gap-4">
              {
                el.category === "image" &&
                el.list.map((item, index) => (
                  <li key={index} className="">
                    <Link href={"#"} className="transition-all duration-200 hover:scale-110">
                      <Image alt='icon' src={item} />
                    </Link>
                  </li>
                ))
              }
            </div>
          </ul>
        ))
      }
    </div>
  )
}

export default FooterList