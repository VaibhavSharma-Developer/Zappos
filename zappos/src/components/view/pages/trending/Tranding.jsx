import React from 'react'
import IMAGES from '../../../../assets/images/image'

export default function Tranding() {
  return (
    <>
    <div className='my-10 overflow-hidden'>
    <p className='font-semibold text-2xl mt-10 mb-5 '>Tranding Now</p>
    <div className='grid grid-cols-6 gap-4 cursor-pointer'>
        <div><img src={IMAGES.clogs} alt="" className='w-full h-auto' />
        <p className='text-center underline my-3 font-semibold'>Clogs</p>
        </div>
        <div><img src={IMAGES.sandals} alt="" className='w-full h-auto' />
        <p className='text-center underline my-3 font-semibold'>Sandals</p>
        </div>
        <div><img src={IMAGES.mothersdaygift} alt="" className='w-full h-auto' />
        <p className='text-center underline my-3 font-semibold'>Mother's Day Gift</p>
        </div>
        <div><img src={IMAGES.golf} alt="" className='w-full h-auto' />
        <p className='text-center underline my-3 font-semibold'>Golf Shoes</p>
        </div>
        <div><img src={IMAGES.kidsvacation} alt="" className='w-full h-auto' />
        <p className='text-center underline my-3 font-semibold'>Kid's Vacation</p>
        </div>
        <div><img src={IMAGES.flats} alt="" className='w-full h-auto' />
        <p className='text-center underline my-3 font-semibold'>Flats</p>
        </div>

    </div>
    </div>
      
    </>

  )
}
