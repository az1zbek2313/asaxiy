"use client"

import MenuIcon from '@mui/icons-material/Menu';
import { headerTopList, headerTopListRight, languages } from "@/constant/page";
import { styles } from "@/utils/page";
import Image from "next/image";
import { useState } from "react";
import logo from "@/assets/logotip.svg"
import { MenuItem, Select, FormControl, Box } from "@mui/material";

function HeaderTop() {
  const [language, setLanguage] = useState("en");

  return (
    <div className={`${styles.container} shadow-[inset_0_-1px_0_#EEE] ${styles.flex}`}>
      <div className="flex justify-between w-full md:hidden">
        <Image src={logo} alt='Logotip' width={120} height={30}/>
        <MenuIcon />
      </div>
      <ul className="hidden md:flex gap-4 items-center">
        {
          headerTopList.map(el => (
            <li key={el.id} className="hover:text-blue-600 transition-all duration-200 cursor-pointer">{el.title}</li>
          ))
        }
      </ul>
      <ul className="hidden md:flex gap-8 items-center">
        {
          headerTopListRight.map(el => (
            <li key={el.id} className="hover:text-blue-600 transition-all duration-200 cursor-pointer flex items-center gap-1">
              <Image src={el.icon} alt="icon" className="w-4 h-4" />
              <span>{el.title}</span>
            </li>
          ))
        }
        <FormControl sx={{ minWidth: 100 }} className='hidden md:block'>
          <Select
            className="border-none"
            labelId="language-select-label"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            displayEmpty
            sx={{
              "& fieldset": { border: "none" }, // ✅ Borderni olib tashlaydi
              "& .MuiSelect-select": { padding: "8px 12px" }, // ✅ Paddingni o‘zgartirish
            }}
          >
            {languages.map((lang) => (
              <MenuItem key={lang.code} value={lang.code}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Image src={lang.flag} alt="flag" width={24} />
                  {lang.name}
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </ul>
    </div>
  );
}

export default HeaderTop;
