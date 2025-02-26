'use client'

import Appliances from "@/components/appliances"
import Bestsellers from "@/components/bestsellers"
import Buyerschoise from "@/components/buyerschoise"
import Hero from "@/components/hero"
import Installation from "@/components/installation"
import Popularbrands from "@/components/popularbrands"
import Popularcategories from "@/components/popularcategories"

function Home() {
  return (
    <>
      <Hero />
      <Popularcategories />
      <Bestsellers />
      <Appliances/>
      <Buyerschoise />
      <Popularbrands />
      <Installation />
    </>
  )
}

export default Home