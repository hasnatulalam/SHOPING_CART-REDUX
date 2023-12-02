import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <div>
        <nav className="bg-[#171C2A] py-4">
    <div className="navBar">
       
    <Link to="/home" className="navHome" id="lws-home"> 
    
    <img src="./images/logo.png" alt="HOME" className="max-w-[140px]" />
     </Link>
       
    

      <div className="flex gap-4">
      
        <Link to="/cart" className="navHome" id="lws-home">
           
          <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
          <span id="lws-totalCart">0</span>
        </Link>

        
       
      </div>
    </div>
  </nav>
    
    </div>
  )
}
