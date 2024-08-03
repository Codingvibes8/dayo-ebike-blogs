import Image from 'next/image';

const Blog = () => {
  return (
    <div
      className='
     min-h-screen
      
      max-w-[1536px]
       text-white 
       relative'>
      <div
        className='w-full 
      px-[80px] 
      py-80px] 
      mr-auto 
      ml-auto'>
        <h1 className='flex items-center justify-center'>Featured Blog</h1>
        {/* imgcontainer */}
        <div
          className='
         flex
         items-center 
         gap-[50px] 
         mt-[60px] 
         flex-col'>
          <div className='flex-1 h-10 relative'>
            <Image
              src='/bikelogo.svg'
              width={300}
              height={300}
              alt='blog-picture'
            />
          </div>
          {/* textcontainer */}
          <div className='flex-1 text-gray-800 dark:text-white flex flex-col gap-[20px]'>
            <h1 className='text-[1.05rem] font-normal'>
              Pedal Assisted City Commuting
            </h1>
            <p className='text-[.9rem]'>Harum unde sit culpa debitis.</p>
            <p className='text-xs'>November 6 2023</p>
          </div>
        </div>
        <button
          className='
         px-[20px]
         py-[16px]
         mt-8 
         border-0 
         rounded-[5px]
         flex
         items-center 
         justify-center bg-blue-500'>
          Read More
        </button>
      </div>
    </div>
  );
};

export default Blog;
