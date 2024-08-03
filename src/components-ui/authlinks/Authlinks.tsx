import Link from 'next/link';
import React from 'react';

const Authlinks = () => {
  const status = 'unauthenticated';
  return (
    <>
      {status === 'unauthenticated' ? (
        <Link
          href='/login'
          className='text-white hover:bg-white hover:text-black rounded-lg p-2  ease-in-out duration-300 bg-blue-400 font-bold'>
          Login
        </Link>
      ) : (
        <>
          <Link
            href='/write'
            className='text-white hover:bg-white hover:text-black rounded-lg p-2  ease-in-out duration-300 bg-blue-400 font-bold'>
            Write
          </Link>
          <span className='cursor-pointer'>Logout</span>
        </>
      )}
    </>
  );
};

export default Authlinks;
