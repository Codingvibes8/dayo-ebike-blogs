import { Lusitana } from 'next/font/google';
import Image from 'next/image';

export default function DLogo() {
  return (
    <div
      className={`${Lusitana.className} flex flex-row items-center leading-none text-white`}>
      <h1 className='text-[30px]'></h1>
      <Image
        src='/bikelogo.svg'
        alt='logo'
        width={80}
        height={50}
        className='text-white'
      />
      <p className='text-[44px] text-white'> E-CycleBlogs</p>
    </div>
  );
}
