 'use client';
 import React,{useState,useEffect} from "react";
 import {useTheme} from "next-themes";
 import Link from "next/link";

 import ToggleButton from '../themeButton/ToggleButton'
 import MenuBtn from "./MenuBtn";
 import {socialIcons} from '../../constants/constants';
 import {links} from '../../constants/constants';
 import AuthLinks from "../authlinks/Authlinks";
 import {  lusitana } from '../fonts/fonts';




 const Navbar = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => { setMounted(true) },[]);

    if (!mounted) return null;


  return (
      <nav className="flex items-center justify-center fixed top-0 left-0 w-full text-gray-900  dark:bg-green-300 bg-indigo-500 px-6 h-20">

                     {/*logo*/}
          <div className={'flex items-center justify-between mx-auto  w-full'}>
              <Link href='/' className={`${lusitana.className} text-center text-2xl font-bold justify-start cursor-pointer`}>
                  E-bike Blogs
              </Link>

              {/*icons div*/}
              <div className="gap-2 items-center justify-center hidden md:flex">
                  {socialIcons.map((item) => (
                      <Link key={item.id} href={item.path}>
                         <div>{item.icon}</div>
                      </Link>
                  ))}
              </div>
              {/*links div*/}
              <div className="md:flex hidden gap-4 items-center justify-center cursor-pointer">
                  {links.map((item) => (
                      <>
                      <Link href={item.path} key={item.id}>
                          {item.label}
                      </Link>
                      <AuthLinks/>
                      </>
                  ))}
              </div>


              <div>
                  <ToggleButton
                      onClick={() =>
                          setTheme(resolvedTheme === "dark" ? "light" : "dark")
                      }
                      selectedTheme={resolvedTheme}
                  />
              </div>
              {/* MOBILE MENU */}

              <div className='flex bg-white text-yellow-300 rounded-full p-2 md:hidden'>
                  <MenuBtn/>
              </div>

          </div>

      </nav>
  );
};

 export default Navbar;








