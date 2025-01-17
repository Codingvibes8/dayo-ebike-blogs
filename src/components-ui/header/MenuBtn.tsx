"use client"

import React, {useState} from 'react';
import Image  from 'next/image';
import Link from "next/link";

import {links, socialIcons} from '../../constants/constants'

import AuthLinks from '../authlinks/Authlinks'

const MenuBtn = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Image
                src={open ? '/close.svg' : '/hamburger.svg'}
                alt=''
                width={30}
                height={30}
                onClick={() => setOpen(!open)}
                className='cursor-pointer block md:hidden'
            />
            {open && (
                <div
                    className='text-white absolute left-0 top-[5rem] w-full h-screen flex
                flex-col gap-8 items-center justify-center text-2xl z-50
                 bg-cover bg-center bg-fixed overflow-hidden  bg-gray-300 bg-blend-multiply'
                    style={{backgroundImage: "url('/milkyWay.jpg')"}}
                    onClick={() => setOpen(false)}
                >
                             {/*logoDiv*/}
                    <div className='w-full mx-auto flex flex-col mb-4'>
                        <Link href='/' className='flex flex-col items-center justify-center font-bold font-serif'>
                        <span className='text-4xl text-white font-bold font-serif flex items-center shadow-amber-300'>
                        E-bike Blogs
                        </span>

                        </Link>

                    </div>
                           {/*socialDiv*/}
                    <div className='flex items-center justify-center gap-4 text-yellow-100'>
                        {socialIcons.map((item) => (

                            <Link key={item.id} href={item.path}>
                          <div className={'text-yellow-100'}>{item.icon}</div>
                            </Link>


                        ))}
                    </div>
                             {/*navLinks div*/}
                    <div className="flex flex-col gap-4 items-center justify-center text-white'">
                        {links.map((item) => (
                            <>
                            <Link href={item.path} key={item.id}>
                                <span>
                                {item.label}</span>
                            </Link>
                            <AuthLinks/>
                            </>
                        ))}
                    </div>

                </div>
            )}
        </div>
    );
};

export default MenuBtn;
