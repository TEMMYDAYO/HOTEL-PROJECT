import React from 'react'

const Card = ({Imagetext, H1Text,bgimage,textcolor}) => {
  return (
    <div className='relative hover: opacity-80 shadow-md transition-all cursor-pointer p-4 bg-blue-200/10 backdrop-blur-lg'>

      <div className={`${bgimage} w-full bg-cover bg-center h-5/6`}>
        <h1 className= {`absolute left-2/4 top-1/2 translate -translate-x-1/2 ${textcolor} uppercase text-2xl font-bold text-white`}>{Imagetext}</h1>
      </div>

      <div className=' text-white text-center font-bold uppercase'>
         <h1>{H1Text}</h1>
      </div>

    </div>
  )
}

export default Card