import React from 'react'


const Banner = ({name}) => {
  return (
    <div className='mt-4 xl:mt-7 text-white '>
    <div id='cro' className=" items-center bg-black    text-center  flex w-auto  h-28    xl:h-48 rounded  ">
    
    <img src="pexels-pixabay-326576.jpg" width={100} height={100}  className='xl:w-64 rounded-3xl    '  alt="Description of the image" />
    <h1 className='xl:text-5xl text-lg w-screen xl:w-screen  text-center     flex  font-serif '>Career Routes 101</h1>

   </div>

   <div  className=' w-auto justify-center items-center flex rounded-full  mt-3 bg-black h-10   text-white '     >
   <h1 className='xl:text-2xl mt-1 text-base font-semibold   text-center  font-serif  accent-zinc-950 animate-bounce  '>
   Career Routes 101: Navigating Your Future
   </h1>
</div>


   </div>
  )
}

export default Banner
