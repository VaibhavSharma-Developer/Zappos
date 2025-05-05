import React from 'react'
import IMAGES from '../../../../assets/images/image'

export default function KidSection() {
  return (
    <>
    <div className='p-5'>
        <p className='font-semibold text-2xl mt-8 mb-5 '>Big Style, Little Sizes</p>
        <div className="grid grid-cols-2 gap-4 cursor-pointer">
            <div>
                <img src={IMAGES.kidsShoes} alt="" className=''/>
                <p className='font-semibold underline my-3'>Shop Kids' Sandals Under $50</p>
            </div>
            <div>
                <img src={IMAGES.kidsSection} alt="" className=''/>
                <p className='font-semibold underline my-3'>Shop All Kids'</p>
            </div>
        </div>
    </div>
      
    </>
  )
}
