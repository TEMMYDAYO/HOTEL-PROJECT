import React from 'react'
import Custombtn from './Element/Custombtn'

 export const Section = () => {
  return (
    <div  className='flex items-center justify-center w-full min-h-screen min-w-full bg-receptionist-img bg-cover bg-center'>
         <div className=' text-white text-center uppercase sm:w-3/4 lg:w-2/4 bg-black/50 rounded-lg p-6 space-y-4 ' >
            <h1 className=' res-font-sm font-semibold'> Best Travel and Resort Company on Earth</h1>
            <p className=' res-font font-bold py-2'>Travel or Book a Resort </p>
            <h3 className='res-font-usm p-2'> Join Samzonic for Unlimited Enjoyment</h3>
            <Custombtn 
            Children="Start"/>
         </div>
    </div>
  ) 
}  


