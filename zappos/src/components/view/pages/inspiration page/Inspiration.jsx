import React from 'react'
import IMAGES from '../../../../assets/images/image'

export default function Inspirration() {
  return (
    <>
    <div className='p-5'>
        <p className='font-bold text-2xl mt-8 mb-5 '>Want inspiration? Visit The Style Room for styling tips and fashion trends.</p>
        <div className="grid grid-cols-3 gap-4 cursor-pointer">
            <div>
                <img src={IMAGES.happyHour} alt="" className='w-full h-auto'/>
                <p className=' text-lg my-3'>Raise your style, so you can raise your glass.</p>
                <p className='font-semibold underline my-3'>Shop For Happy Hour</p>
            </div>
            <div>
                <img src={IMAGES.laidBackSandle} alt="" className='w-full h-auto'/>
                <p className=' text-lg my-3'>Laid-back pieces are perfect for the journey.</p>
                <p className='font-semibold underline my-3'>Shope For Trip There</p>
            </div>
            <div>
                <img src={IMAGES.vacationShoesForHim} alt="" className='w-full h-auto'/>
                <p className=' text-lg my-3'>Set the vacation mood with a cool ensemble.</p>
                <p className='font-semibold underline my-3'>Shop For Him</p>
                
            </div>
        </div>
    </div>
      
    </>
  )
}
