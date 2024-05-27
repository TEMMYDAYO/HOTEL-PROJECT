import React from 'react'
import Card from './Card'

const Pricing = () => {
  return (
    <div className='w-full h-screen grid place-items-center lg:grid-cols-2 bg-hotel-img bg-cover bg-center children:w-11/12 children:h-5/6 text-center p-4'>
      <Card Imagetext="Dubai" H1Text="See More" bgimage='bg-hotel1-img' textcolor='text-white'/>
      <Card Imagetext="London" H1Text="See More" bgimage='bg-hotel2-img' textcolor='text-white'/>
      <Card Imagetext="Paris" H1Text="See More" bgimage='bg-hotel3-img' textcolor='text-white'/>
      <Card Imagetext="Lons Angeles" H1Text="See More" bgimage='bg-hotel4-img'textcolor='text-white'/> 
    </div>
  )
}

export default Pricing
