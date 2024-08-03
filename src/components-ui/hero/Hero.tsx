import React from 'react';
import Link from 'next/link';

import {  lusitana } from '../fonts/fonts';

const Hero = () => {
  return (
    <section className='flex flex-col max-w-[1536px] mx-auto
   md:p-0 z-30 py-20'>
     <div className='items-center justify-center w-full'>
               {/*  title*/}
        <h1
            className={`${lusitana.className} font-bold  pt-14 md:pt-28 text-center text-[1.625rem] text-gray-700 dark:text-white md:text-4xl
           md:leading-relaxed `}>
          Riding The Wave Of E-Bike Excitement.
        </h1>
     </div>
                 {/*  subtitle*/}
        <div className='items-center justify-center w-full'>
          <h2 className={`${lusitana.className} font-semibold text-[1.375rem] text-gray-700 dark:text-white mb-2 text-center`}>
            Become A Voice In The E-Bike Movement
          </h2>
          </div>

                  {/* desc div */}
        <div className={'flex flex-col items-center justify-center'}>
        <p className={`${lusitana.className} p-4 text-[1.125rem] max-w-md mx-auto w-full`}>
           Our blog is a dynamic hub for e-bike enthusiasts, where stories come to life
          and the electric buzz never fades.
       </p>
        <p className={`${lusitana.className} p-4 text-[1.125rem] max-w-md mx-auto w-full mb-4 flex items-center justify-center`}>
          Contribute your unique perspective, and be a driving force behind the
          e-bike movement. Your journey begins here.
        </p>
          <p
              className={`${lusitana.className} flex items-center justify-center text-[1rem] mb-4`}>
            Join our Growing Membership by clicking below
          </p>
        </div>
      {/*  CTA*/}
          <div className='flex  justify-center items-center gap-8 md:mb-6'>
            <Link href='/blogs'>
              <button
                  className='mx-auto flex items-center justify-center px-8 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-800 hover:scale-[1.1] duration-500 text-lg'>
                Blogs
              </button>
            </Link>
            <Link href='/login'>
              <button
                  className='mx-auto flex items-center justify-center px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-800 hover:scale-[1.1] duration-500 text-white text-lg'>
                Signup
              </button>
            </Link>
          </div>
      </section>

);
};

export default Hero;
