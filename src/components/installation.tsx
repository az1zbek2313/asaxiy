import { styles } from '@/utils/page'
import Image from 'next/image'
import logotip from "@/assets/logotip.svg"
import appstore from "@/assets/installationLogo/Badge-1.svg"
import googleplay from "@/assets/installationLogo/Badge.svg"
import phone from "@/assets/installationLogo/Vectary texture.svg"
import phone1 from "@/assets/installationLogo/image 250.svg"
import phone2 from "@/assets/installationLogo/image 245.svg"
import Link from 'next/link'

function Installation() {
  return (
    <div className='bg-[#E0E8FF] hidden lg:block'>
      <div className={`${styles.container} md:py-0 flex items-center justify-between`}>
        <div className="flex flex-col gap-6 ">
          <div className="flex items-center gap-2">
            <Image alt='logo' src={logotip} width={134} />
            <span className='text-blue-600'>|</span>
            <span className='font-semibold'>mobile application</span>
          </div>
          <h1 className='text-[40px] font-bold text-[#1D1A2F]'>Order via
            mobile app</h1>
            <div className="flex gap-[10px] items-center">
            <Link href={"#"} >
              <Image alt='button' src={googleplay} />
            </Link>
            <Link href={"#"} >
              <Image alt='button' src={appstore} />
            </Link>
            </div>
        </div>
        <div className="flex items-center">
          <div className="relative">
          <Image alt='phone' src={phone} className='z-10'/>
          <div className="absolute z-50 top-32 left-[24%]">
          <Image alt='phone' src={phone1}/>
          <Image alt='phone' src={phone2}/>
          </div>
          </div>
          <span className="font-medium max-w-52 text-xl">Scan the QR code
          and install the application</span>
          
        </div>
      </div>
    </div>
  )
}

export default Installation