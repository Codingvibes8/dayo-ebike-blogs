import React from 'react';
import Image from 'next/image';

import Link from 'next/link';
import { inter, lusitana } from '../fonts/fonts';

const Hero = () => {
  return (
    <section className='flex flex-col  max-w-[1536px] mx-auto
    min-h-screen md:p-0'>
     <div className='items-center justify-center w-full pt-[80px]'>
      {/*  title*/}
        <h1
            className={`${lusitana.className} text-4xl text-gray-700 dark:text-white md:text-6xl
           md:leading-normal text-center mb-6`}>
          Beyond Pedals: Riding the Wave of E-Bike Excitement
        </h1>
     </div>
      {/*  subtitle*/}
        <h2
            className={`${lusitana.className} text-2xl  text-gray-700 dark:text-white capitalize  mb-2 text-center`}>
          Fueling Passion, Inspiring Stories: Become a Voice in the E-Bike
          Movement
        </h2>
      {/* desc div */}
        <div className={'flex flex-col items-center justify-center'}>
        <p
            className={`${inter.className} p-10  text-xl max-w-prose w-full
                     `}>
          Are you ready to dive into the exhilarating world of e-bikes?<br/>
          Our blog is a dynamic hub for e-bike enthusiasts, where stories come to life
          and the electric buzz never fades. Become a part of our community,
      f  </p>
        <p className={`${inter.className} p-10  text-xl max-w-prose w-full`}>


          contribute your unique perspective, and be a driving force behind the
          e-bike movement. Your journey begins here.
        </p>
          <p
              className={`${lusitana.className} flex items-center justify-center mb-4`}>
            Join our Growing Membership by clicking below
          </p>
        </div>
      {/*  CTA*/}
          <div className='flex  justify-center items-center gap-8'>
            <Link href='/blogs'>
              <button
                  className='mx-auto flex items-center justify-center px-8 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-800 hover:scale-[1.3] duration-500 text-2xl'>
                Blogs
              </button>
            </Link>
            <Link href='/login'>
              <button
                  className='mx-auto flex items-center justify-center px-8 py-2 rounded-lg bg-blue-500 hover:bg-blue-800 hover:scale-[1.3] duration-500 text-white text-2xl'>
                Signup
              </button>
            </Link>
          </div>
      </section>

);
};

export default Hero;
