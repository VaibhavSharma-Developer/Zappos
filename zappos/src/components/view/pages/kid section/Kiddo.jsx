import React, { useState, useEffect }  from 'react'
import IMAGES from '../../../../assets/images/image'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function Kiddo() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect( () => {
        axios.get('https://dummyjson.com/products')
        .then(res => (
            setData(res.data.products)
        ))
        .catch(err => console.error(err) );
    },[]);
  return (
    <>
    <div className='p-5'>
        <p className='font-semibold text-2xl mt-8 mb-5 '>Dummy Products</p>
        <Swiper
        loop={true}
        centeredSlides={true}
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        className="rounded-lg"
      >
        <div className="mt-10 grid grid-cols-5 gap-4">
        {data.slice(0, 25).map(product => (
            <SwiperSlide key={product.id}>
          <div  onClick={()=>navigate(`/product/${product.id}`)} className='cursor-pointer'>
            <img src={product.thumbnail} alt={product.title} />
            <p className='mt-2 font-medium text-center'>{product.title}</p>
          </div>
          </SwiperSlide>
        ))}
      </div>
      </Swiper>
    </div>
      
    </>
  )
}
