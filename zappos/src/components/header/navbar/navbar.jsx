import React from 'react'
import IMAGES from '../../../assets/images/image'
import Login from '../../auth/Login'
import { useNavigate } from 'react-router-dom'
import {Link} from "react-router-dom"

export default function navbar() {
    const navigate = useNavigate();
  return (
    <>
    <div className="nav flex justify-between items-center mt-1 ">
        <div className="right flex gap-8">
            <div className="logo cursor-pointer">
                <Link to="/">
                <img src={IMAGES.logo2} alt="" />
                </Link>
            </div>
            <div className="searchBar relative items-center justify-center">
                <i className="fa-solid fa-magnifying-glass absolute left-3 top-[13px] text-gray-600"></i>
                <input type="text" placeholder='Search for shoes, clothes, etc.' className='border border-r-0 border-black w-[500px] pl-10 py-2 rounded-l-full text-gray-600 focus:outline-none focus:ring  focus:border-blue-800' />
                <button className='absolute -right-50 py-2 text-black font-bold border border-black px-6 rounded-r-full hover:border-blue-600 hover:text-blue-800'>Search</button>
            </div>
        </div>
        <div className="left">
            <div className="btn flex gap-4 items-center justify-center text-black">
            <button onClick={() => navigate("/login")}><i className="fa-regular fa-user border-2 rounded-full p-2 hover:bg-gray-200 cursor-pointer"></i></button>
            <button><i className="fa-regular fa-bag-shopping border-1 p-2 rounded-full hover:bg-gray-200 cursor-pointer"></i></button>
            </div>
        </div>
    </div>

      
    </>
  )
}
