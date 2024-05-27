import React from 'react'
import Inputbox from '../Element/Inputbox'
import Custombtn from '../Element/Custombtn'

const Reservation = () => {
  return (
    <div>
      <div className='py-3 justify-center'>
         <Inputbox Value={"Name"} Placevalue={"Input your Name...."}/>
         <Inputbox Value={"Email"} Placevalue={"samzonic@gmail.com"}/>
         <Inputbox Value={"Account Number"} Placevalue={"99 999 9999 99999"}/>
         <Inputbox Value={"Phone Number"} Placevalue={"+234 80 99 999 999"}/>
      </div>
      <div className='py-3'>
        <Custombtn Children=" Make Reservation"/>
      </div>
    </div>
  )
}

export default Reservation
