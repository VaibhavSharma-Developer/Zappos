import React from 'react'

export default function Category() {
  return (
    <>
    <div className="parent flex justify-between items-center mt-5">
        <div className="left flex gap-1 font-bold text-md">
            <button className='rounded-full hover:bg-gray-100 px-4 py-2'><a href="">New</a></button>
            <button className='rounded-full hover:bg-gray-100 px-4 py-2'><a href="">Women</a></button>
            <button className='rounded-full hover:bg-gray-100 px-4 py-2'><a href="">Men</a></button>
            <button className='rounded-full hover:bg-gray-100 px-4 py-2'><a href="">Kids</a></button>
            <button className='rounded-full hover:bg-gray-100 px-4 py-2'><a href="">Brands</a></button>
            <button className='rounded-full hover:bg-gray-100 px-4 py-2'><a href="">Sports</a></button>
            <button className='rounded-full hover:bg-gray-100 px-4 py-2'><a href="">Collections</a></button>
            <button className='rounded-full hover:bg-gray-100 px-4 py-2'><a href="" className='text-red-600  hover:text-black'>Sale</a></button>
        </div>
        <div className="right font-bold text-md ">
            <a href="">Help & Support</a>
        </div>
    </div>
        
      
    </>
  )
}
