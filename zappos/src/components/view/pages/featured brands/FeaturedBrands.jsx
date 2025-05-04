import React from 'react'
import IMAGES from '../../../../assets/images/image'

export default function FeaturedBrands() {
  return (
    <>
    <div className='p-5'>
        <p className='font-semibold text-2xl mt-8 mb-5 '>Featured Brands</p>
        <div className="grid grid-cols-3 gap-4 cursor-pointer">
            <div>
                <img src={IMAGES.coleHaan} alt="" className='w-full h-auto'/>
                <p className='font-semibold underline my-3'>Shop Cole Haan</p>
            </div>
            <div>
                <img src={IMAGES.samEdelman} alt="" className='w-full h-auto'/>
                <p className='font-semibold underline my-3'>Shop Sam Edelman</p>
            </div>
            <div>
                <img src={IMAGES.heyDude} alt="" className='w-full h-auto'/>
                <p className='font-semibold underline my-3'>Shop HEYDUDE</p>
            </div>
        </div>
    </div>
      
    </>
  )
}
