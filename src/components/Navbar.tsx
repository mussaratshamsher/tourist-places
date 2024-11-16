


"use client"  

import Image from "next/image";  
import Link from "next/link";  
import React, { useState } from 'react';  

import tour from "./../../public/tour.png";  

export default function Navbar() {  
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);  

  const toggleMobileMenu = () => {  
    setMobileMenuOpen(!isMobileMenuOpen);  
  };  

  return (  
    <div>  
      <main>  
        <header className="flex items-center justify-between p-4 " id="header">  
          <Image   
            src={tour}   
            alt=""   
            width={100}   
            height={200}   
            data-aos="fade-right"  
            data-aos-offset="300"  
            data-aos-easing="ease-in-sine"   
            className="md:w-48 md:h-48"  />  
          
          
          <button   
            className="md:hidden flex items-center "  
            onClick={toggleMobileMenu}  
            aria-label="Toggle navigation" >


            <i className={`bx ${isMobileMenuOpen ? 'bx-x' : 'bx-menu'} text-2xl`} />  
          </button>  

         
          <nav className={`md:block ${isMobileMenuOpen ? 'block' : 'hidden'} 
            absolute md:static right-0 bg-green-300 md:bg-transparent top-12 w-25 md:w-30`}> 

            <ul id="navitems" className="flex flex-col md:flex-row">  
              <li className="p-2"><Link href="/">Home</Link></li>  
              <li className="p-2"><Link href="/about">About</Link></li>  
              <li className="p-2"><Link href="/views">Views</Link></li>  
              <li className="p-2"><Link href="/more">More</Link></li>  
            </ul>  
          </nav>  
        </header>  
      </main>  
    </div>  
  );  
}