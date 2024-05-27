import React from 'react'
import Inputbox from '../Element/Inputbox'
import Custombtn from '../Element/Custombtn'

const SendMessage = () => {
  return (
    <div >
      <div className='py-3 justify-center'>
         <Inputbox Value={"Name"} Placevalue={"Input your Name...."}/>
         <Inputbox Value={"Email"} Placevalue={"samzonic@gmail.com"}/>
         <Inputbox Value={"Message"} Placevalue={"Type your Message...."}/>
      </div>
      <div className='py-3'>
        <Custombtn Children=" Send Message"/>
      </div>
    </div>
  )
}

export default SendMessage
