import React from 'react'
import { Link } from 'react-router-dom'
import {Close}from "@material-ui/icons"

 export const NavMobile = ({Active, ShowMenu}) => {

  return (

        <ul className= {Active?'flex-col fixed inset-0 gap-5 left-1/3 uppercase underline font-bold flex items-center justify-center bg-transparent backdrop-blur-md z-10000 lg:hidden':'hidden'}>
         <li>  <Link to ='/' >Home</Link> </li>
         <li>  <Link to ='/'>Pricing</Link></li>
         <li>  <Link to ='/'>Works</Link></li> 
         <li>  <Link to ='/'>Clients</Link></li>
         <li>  <Link to ='/'>Testimonials</Link></li>
         <li>  <Link to ='/'>About</Link></li>
         <li>  <Link to ='/Login'>Login</Link></li>
         <Close onClick={ShowMenu} className='scale-150 cursor-pointer'/>
        </ul>

  )
}

