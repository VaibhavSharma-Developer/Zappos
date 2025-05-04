import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import IMAGES from "../../../../assets/images/image";

export default function NewArrival() {
    const [isShoeBlack, setIsShoeBlack] = useState(false);

    const handleImage = (isBlack) => {
        setIsShoeBlack(isBlack);
    }
    
  return (
    <div className="">
        <p className="font-semibold text-2xl mt-10 mb-5">New Arrival</p>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={0}
        slidesPerView={5}
        className="rounded-lg"
      >
        <SwiperSlide>
          <div className="">
            <img
              src={IMAGES.adriannaPapellFirst}
              alt="1"
              className="w-96 h-auto absolute inset-0 transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0 z-0"
            />
            <img
              src={IMAGES.adriannaPapellSecond}
              alt="2"
              className="w-96 h-auto absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 z-0"
            />
 
            <div className="relative z-10 bg-white bg-opacity-80 p-4 mt-[450px] flex text-left">
              <dl className="space-y-4">
                <div>
                  <p className="font-semibold text-md">Shop Cole Haan</p>
                  <p className="text-gray-600">Short Dress</p>
                </div>
                <div>
                  <p className="test-gray-600 text-md">Women's</p>
                  <p className="font-semibold">$138.95</p>
                </div>
              </dl>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="">
            
            <img
              src={isShoeBlack?IMAGES.miaBlackZommedOut:IMAGES.miaZommedOut}
              alt="1"
              className="w-96 h-auto absolute inset-0 transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0  z-0"
            />
            <img
              src={isShoeBlack?IMAGES.miaBlackZoomedIn:IMAGES.miaZommedIn}
              alt="2"
              className="w-96 h-auto absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100  z-0"
            />

            <div className="relative z-10 bg-white bg-opacity-80 p-4 mt-[380px] flex text-left">
              <dl className="space-y-4">
                <div>
                    <button type="button" onMouseEnter={() => handleImage(false)}><img src={IMAGES.miaZommedIn} alt="" className="w-10 rounded-full p-1 border-transparent border-2 hover:border-black transition-all transform-300 " /></button>
                    <button type="button" onMouseEnter={() => handleImage(true)}><img src={IMAGES.miaBlackZoomedIn} alt="" className="w-10 rounded-full p-1  border-transparent border-2 hover:border-black transition-all transform-300 " /></button>
                </div>
                <div>
                  <p className="font-semibold text-md">MIA</p>
                  <p className="text-gray-600"> Sybel</p>
                </div>
                <div>
                  <p className="text-gray-600 text-md">Women's</p>  
                  <p className="font-semibold">$59.95</p>
                </div>
              </dl>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="">
            <img
              src={IMAGES.kendraScott}
              alt="1"
              className="w-96 h-auto absolute inset-0 transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0  z-0"
            />
            <img
              src={IMAGES.kendraScottSecond}
              alt="2"
              className="w-96 h-auto absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100  z-0"
            />

            <div className="relative z-10 bg-white bg-opacity-80 p-4 mt-[450px] flex text-left">
              <dl className="space-y-4">
                <div>
                  <p className="font-semibold text-md">Shop Cole Haan</p>
                  <p className="text-gray-600">Short Dress</p>
                </div>
                <div>
                  <p className="test-gray-600 text-md">Women's</p>
                  <p className="font-semibold">$138.95</p>
                </div>
              </dl>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="">
            <img
              src={IMAGES.adriannaPapellZommedOut}
              alt="1"
              className="w-96 h-auto absolute inset-0 transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0 z-0"
            />
            <img
              src={IMAGES.adriannaPapellZommedIn}
              alt="2"
              className="w-96 h-auto absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 z-0"
            />
 
            <div className="relative z-10 bg-white bg-opacity-80 p-4 mt-[450px] flex text-left">
              <dl className="space-y-4">
                <div>
                  <p className="font-semibold text-md">Shop Cole Haan</p>
                  <p className="text-gray-600">Short Dress</p>
                </div>
                <div>
                  <p className="test-gray-600 text-md">Women's</p>
                  <p className="font-semibold">$138.95</p>
                </div>
              </dl>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="">
            <img
              src={IMAGES.blueByBetseyJohnsonFirst}
              alt="1"
              className="w-96 h-auto absolute inset-0 transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0  z-0"
            />
            <img
              src={IMAGES.blueByBetseyJohnsonSecond}
              alt="2"
              className="w-96 h-auto absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100  z-0"
            />

            <div className="relative z-10 bg-white bg-opacity-80 p-4 mt-[450px] flex text-left">
              <dl className="space-y-4">
                <div>
                  <p className="font-semibold text-md">Shop Cole Haan</p>
                  <p className="text-gray-600">Short Dress</p>
                </div>
                <div>
                  <p className="test-gray-600 text-md">Women's</p>
                  <p className="font-semibold">$138.95</p>
                </div>
              </dl>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="">
            <img
              src={IMAGES.pumaFirst}
              alt="1"
              className="w-96 h-auto absolute inset-0 transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0  z-0"
            />
            <img
              src={IMAGES.pumaSecond}
              alt="2"
              className="w-96 h-auto absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100  z-0"
            />

            <div className="relative z-10 bg-white bg-opacity-80 p-4 mt-[450px] flex text-left">
              <dl className="space-y-4">
                <div>
                  <p className="font-semibold text-md">Shop Cole Haan</p>
                  <p className="text-gray-600">Short Dress</p>
                </div>
                <div>
                  <p className="test-gray-600 text-md">Women's</p>
                  <p className="font-semibold">$138.95</p>
                </div>
              </dl>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="">
            <img
              src={IMAGES.donaldPlinerfirst}
              alt="1"
              className="w-96 h-auto absolute inset-0 transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0  z-0"
            />
            <img
              src={IMAGES.donaldPlinerSecond}
              alt="2"
              className="w-96 h-auto absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100  z-0"
            />

            <div className="relative z-10 bg-white bg-opacity-80 p-4 mt-[450px] flex text-left">
              <dl className="space-y-4">
                <div>
                  <p className="font-semibold text-md">Shop Cole Haan</p>
                  <p className="text-gray-600">Short Dress</p>
                </div>
                <div>
                  <p className="test-gray-600 text-md">Women's</p>
                  <p className="font-semibold">$138.95</p>
                </div>
              </dl>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="">
            <img
              src={IMAGES.steveMaddenfirst}
              alt="1"
              className="w-96 h-auto absolute inset-0 transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0  z-0"
            />
            <img
              src={IMAGES.steveMaddenSecond}
              alt="2"
              className="w-96 h-auto absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100  z-0"
            />

            <div className="relative z-10 bg-white bg-opacity-80 p-4 mt-[450px] flex text-left">
              <dl className="space-y-4">
                <div>
                  <p className="font-semibold text-md">Shop Cole Haan</p>
                  <p className="text-gray-600">Short Dress</p>
                </div>
                <div>
                  <p className="test-gray-600 text-md">Women's</p>
                  <p className="font-semibold">$138.95</p>
                </div>
              </dl>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="">
            
            <img
              src={isShoeBlack?IMAGES.madwellGrayFirst:IMAGES.madwellWhiteFirst}
              alt="1"
              className="w-96 h-auto absolute inset-0 transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0  z-0"
            />
            <img
              src={isShoeBlack?IMAGES.madwellGraySecond:IMAGES.madwellWhiteSecond}
              alt="2"
              className="w-96 h-auto absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100  z-0"
            />

            <div className="relative z-10 bg-white bg-opacity-80 p-4 mt-[380px] flex text-left">
              <dl className="space-y-4">
                <div>
                    <button type="button" onMouseEnter={() => handleImage(false)}><img src={IMAGES.madwellWhiteSecond} alt="" className="w-10 rounded-full p-1 border-transparent border-2 hover:border-black transition-all transform-300 " /></button>
                    <button type="button" onMouseEnter={() => handleImage(true)}><img src={IMAGES.madwellGraySecond} alt="" className="w-10 rounded-full p-1  border-transparent border-2 hover:border-black transition-all transform-300 " /></button>
                </div>
                <div>
                  <p className="font-semibold text-md">MIA</p>
                  <p className="text-gray-600"> Sybel</p>
                </div>
                <div>
                  <p className="text-gray-600 text-md">Women's</p>  
                  <p className="font-semibold">$59.95</p>
                </div>
              </dl>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className="">
            
            <img
              src={isShoeBlack?IMAGES.calvinKleinSilverFirst:IMAGES.calvinKleinDarkBlueFirst}
              alt="1"
              className="w-96 h-auto absolute inset-0 transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0  z-0"
            />
            <img
              src={isShoeBlack?IMAGES.calvinKleinSilverSecond:IMAGES.calvinKleinDarkBlueSecond}
              alt="2"
              className="w-96 h-auto absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100  z-0"
            />
            <img
              src={isShoeBlack?IMAGES.calvinKleinBlackFirst:IMAGES.calvinKleinWhiteFirst}
              alt="1"
              className="w-96 h-auto absolute inset-0 transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0  z-0"
            />
            <img
              src={isShoeBlack?IMAGES.calvinKleinBlackSecond:IMAGES.calvinKleinWhiteSecond}
              alt="2"
              className="w-96 h-auto absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100  z-0"
            />

            <div className="relative z-10 bg-white bg-opacity-80 p-4 mt-[380px] flex text-left">
              <dl className="space-y-4">
                <div>
                    <button type="button" onMouseEnter={() => handleImage(false)}><img src={IMAGES.calvinKleinDarkBlueSecond} alt="" className="w-10 rounded-full p-1 border-transparent border-2 hover:border-black transition-all transform-300 " /></button>
                    <button type="button" onMouseEnter={() => handleImage(true)}><img src={IMAGES.calvinKleinSilverSecond} alt="" className="w-10 rounded-full p-1  border-transparent border-2 hover:border-black transition-all transform-300 " /></button>
                    <button type="button" onMouseEnter={() => handleImage(false)}><img src={IMAGES.calvinKleinBlackSecond} alt="" className="w-10 rounded-full p-1 border-transparent border-2 hover:border-black transition-all transform-300 " /></button>
                    <button type="button" onMouseEnter={() => handleImage(true)}><img src={IMAGES.calvinKleinWhiteSecond} alt="" className="w-10 rounded-full p-1  border-transparent border-2 hover:border-black transition-all transform-300 " /></button>
                </div>
                <div>
                  <p className="font-semibold text-md">MIA</p>
                  <p className="text-gray-600"> Sybel</p>
                </div>
                <div>
                  <p className="text-gray-600 text-md">Women's</p>  
                  <p className="font-semibold">$59.95</p>
                </div>
              </dl>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}


