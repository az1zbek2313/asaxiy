import phoneIcon from "@/assets/HeaderIcons/phone.svg";
import locationIcon from "@/assets/HeaderIcons/location_on.svg";
import uzFlag from "@/assets/uz.svg"; // O'zbek bayrog'i
import ruFlag from "@/assets/ru.svg"; // Rossiya bayrog'i
import usFlag from "@/assets/us.svg"; // AQSH bayrog'i
import comparison from "@/assets/HeaderIcons/Group.svg"
import basket from "@/assets/HeaderIcons/Vector-2.svg"
import login from "@/assets/HeaderIcons/login.svg"
import heart from "@/assets/HeaderIcons/heart.svg"
import banner from "@/assets/banner.png"
// product cards 
import smartphone from "@/assets/popularcategoriesImage/2385 1.png"
import monitors from "@/assets/popularcategoriesImage/2385 1-1.png"
import computers from "@/assets/popularcategoriesImage/2385 1-2.png"
import accessories from "@/assets/popularcategoriesImage/2385 1-3.png"
// Appliances 
import embedded from "@/assets/appliances/aspirador 1.png"
import vacuum from "@/assets/appliances/aspirador 1-1.png"
import washing from "@/assets/appliances/aspirador 1-2.png"
import refrigerators from "@/assets/appliances/aspirador 1-3.png"
import conditioners from "@/assets/appliances/aspirador 1-4.png"
import Bestsellers from "@/components/bestsellers";
// Bestsellers
import bestproduct from "@/assets/BestsellerImages/image 5.png"
import bestproduct1 from "@/assets/BestsellerImages/image 5-1.png"
// popular brands 
import brand1 from "@/assets/popularbrands/Frame 59102-1.svg"
import brand2 from "@/assets/popularbrands/Frame 59102.svg"
import brand3 from "@/assets/popularbrands/Frame 59103-1.svg"
import brand4 from "@/assets/popularbrands/Frame 59103.svg"
import brand5 from "@/assets/popularbrands/brands-1.svg"
import brand6 from "@/assets/popularbrands/brands.svg"
// footer list 
import karta1 from "@/assets/FooterIcons/image 247.svg"
import karta2 from "@/assets/FooterIcons/image 248.svg"
import karta3 from "@/assets/FooterIcons/image 249.svg"
import social1 from "@/assets/FooterIcons/linkedin.svg"
import social2 from "@/assets/FooterIcons/instagram.svg"
import social3 from "@/assets/FooterIcons/twitter.svg"
import social4 from "@/assets/FooterIcons/facebook.svg"

export const languages = [
  { code: "uz", name: "Uzb", flag: uzFlag },
  { code: "ru", name: "Rus", flag: ruFlag },
  { code: "en", name: "Eng", flag: usFlag },
];

export const headerTopList = [
    {
        id:1,
        title:"About shop"
    },
    {
        id:2,
        title:"Leave feedback"
    },
    {
        id:3,
        title:"Delivery"
    },
]

export const headerTopListRight = [
    {
        id:1,
        title:"+998 97 778-17-08",
        icon:phoneIcon
    },
    {
        id:2,
        title:"Tashkent",
        icon:locationIcon
    }
]

export const headerFilterRight = [
    {
        id:1,
        icon:basket,
        title:"Basket"
    },
    {
        id:2,
        icon:heart,
        title:"Favorites"
    },
    {
        id:3,
        icon:comparison,
        title:"Comparison"
    },
    {
        id:4,
        icon:login,
        title:"To come in"
    },
]

export const navbarTitle = [
    {
        id:1,
        title:"Promotions and discounts"
    },
    {
        id:2,
        title:"Smartphones and gadgets"
    },
    {
        id:3,
        title:"TVs and audio"
    },
    {
        id:4,
        title:"Kitchen Appliances"
    },
    {
        id:5,
        title:"Beauty and Health"
    },
    {
        id:6,
        title:"Laptops and computers"
    },
]

export const heroImages = [
    {
        id:1,
        banner:banner
    },
    {
        id:2,
        banner:banner
    },
    {
        id:3,
        banner:banner
    },
]

export const productCards1 = [
    {
        id:1,
        title:"Smartphones",
        image:smartphone
    },
    {
        id:2,
        title:"Monitors",
        image:monitors
    },
    {
        id:3,
        title:"Computers",
        image:computers
    },
    {
        id:4,
        title:"Accessories",
        image:accessories
    },
]

export const productCards2 = [
    {
        id:1,
        title:"Embedded technique",
        image:embedded
    },
    {
        id:2,
        title:"Vacuum cleaners",
        image:vacuum
    },
    {
        id:3,
        title:"Washing cars",
        image:washing
    },
    {
        id:4,
        title:"Refrigerators",
        image:refrigerators
    },
    {
        id:5,
        title:"Air conditioners",
        image:conditioners
    },
]

export const productCategory = [
    {
        id:1,
        desc:"From 385 000 sum/12 months",
        image:bestproduct,
        price:3144000 ,
        rating:3,
        title:"Samsung Galaxy A41 Red 64 GB"
    },
    {
        id:2,
        desc:"From 385 000 sum/12 months",
        image:bestproduct,
        price:3144000 ,
        rating:3,
        title:"Samsung Galaxy A41 Red 64 GB"
    },
    {
        id:3,
        desc:"From 385 000 sum/12 months",
        image:bestproduct,
        price:3144000 ,
        rating:3,
        title:"Samsung Galaxy A41 Red 64 GB"
    },
    {
        id:4,
        desc:"From 385 000 sum/12 months",
        image:bestproduct1,
        price:3144000 ,
        rating:3,
        title:"Samsung Galaxy A41 Red 64 GB"
    },
]

export const popularbrends = [
    {
        id:1,
        title:"Phones"
    },
    {
        id:2,
        title:"Accessories"
    },
    {
        id:3,
        title:"Premium"
    },
    {
        id:4,
        title:"Sport"
    },
    {
        id:5,
        title:"Toys"
    },
    {
        id:6,
        title:"Beauty"
    },
    {
        id:7,
        title:"Books"
    },
    {
        id:8,
        title:"Shoes"
    },
]

export const FirstClient = [
    {
      id:1,
      img:brand6
    },
    {
      id:2,
      img:brand4
    },
    {
      id:3,
      img:brand2
    },
    {
      id:4,
      img:brand2
    },
    {
      id:5,
      img:brand2
    },
    {
      id:6,
      img:brand2
    },
    {
      id:7,
      img:brand2
    },
  ]
  
  export const SecondClient = [
    {
      id:1,
      img:brand1
    },
    {
      id:2,
      img:brand3
    },
    {
      id:3,
      img:brand5
    },
    {
      id:4,
      img:brand5
    },
    {
      id:5,
      img:brand5
    },
    {
      id:6,
      img:brand5
    },
    {
      id:7,
      img:brand5
    },
  ]

  export const footerList = [
    {
        id:1,
        title:"Company",
        list:["About company", "Store addresses"],
        category:"word"
    },
    {
        id:2,
        title:"Information",
        list:["Installment plan", "Delivery", "Bonuses"],
        category:"word"
    },
    {
        id:3,
        title:"Help for the buyer",
        list:["Questions and answers", "How to place an order on the site", "Exchange and return"],
        category:"word"
    },
    {
        id:4,
        title:"Payment method",
        list:[karta1, karta2, karta3],
        category:"image"
    },
    {
        id:5,
        title:"We are in social networks",
        list:[social1, social2, social3, social4],
        category:"image"
    },
  ]