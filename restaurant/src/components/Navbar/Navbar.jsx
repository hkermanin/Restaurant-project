import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { GrRestaurant } from "react-icons/gr";


export default function Navbar() {
  return (
    <div className='shadow-md bg-white duration-200'>
        <div className='container py-3 sm:py-0'>
          <div className='flex justify-between items-center'>
            <div className='flex justify-between items-center gap-4'>
              <button className='bg-gradient-to-r text-white from-yellow-200 
              to-yellow-600 py-1 px-4 rounded-full flex items-center gap-3'>
                سفارش
                <FaCartShopping/>
              </button>

              <ul className='hidden sm:flex items-center gap-4'>
                <li>
                  <a className='hover:text-yellow-200 inline-block p-4' href="#">
                    خدمات
                  </a>
                </li>

                <li>
                  <a className='hover:text-yellow-200 inline-block p-4' href="#">
                    درباره ما
                  </a>
                </li>

                <li>
                  <a className='hover:text-yellow-200 inline-block p-4' href="#">
                    بلاگ
                  </a>
                </li>

              </ul>

            </div>

            <div>
              <a href="#" className='font-bold text-2xl sm:text-3xl flex items-center gap-2'>
                کرمانی
                <GrRestaurant className='text-yellow-600'/>
              </a>
            </div>

          </div>
        </div>
        
    </div>
  )
}
