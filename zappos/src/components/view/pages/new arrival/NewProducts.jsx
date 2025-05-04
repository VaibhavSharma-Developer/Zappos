import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import IMAGES from "../../../../assets/images/image";

const products = [
  {
    name: "MIA",
    price: "$49.99",
    type: "Women's",
    txt: "New Color",
    color: "blue-300",
    variants: [
      {
        img1: IMAGES.miaBlackZommedOut,
        img2: IMAGES.miaBlackZoomedIn,
        thumb: IMAGES.miaBlackZoomedIn,
      },
      {
        img1: IMAGES.miaZommedOut,
        img2: IMAGES.miaZommedIn,
        thumb: IMAGES.miaZommedIn,
      },
    ],
  },

  {
    name: "MIA",
    price: "$49.99",
    type: "Women's",
    txt:"Leaving Soon",
    color:"yellow-300",
    variants: [
      {
        img1: IMAGES.psdBlackFirst,
        img2: IMAGES.psdBlackSecond,
        thumb: IMAGES.psdBlackSecond,
      },
      {
        img1: IMAGES.psdPinkFirst,
        img2: IMAGES.psdPinkSecond,
        thumb: IMAGES.psdPinkSecond
      },
    ],
  },

  {
    name: "Betsey Johnson",
    price: "$49.99",
    type: "Women's",
    txt: "New Arraival",
    color:"purple-300",
    variants: [
      {
        img1: IMAGES.blueByBetseyJohnsonFirst,
        img2: IMAGES.blueByBetseyJohnsonSecond,
        thumb: IMAGES.blueByBetseyJohnsonSecond,
      },
    ],
  },



  {
    name: "Adrianna Papell",
    price: "$59.99",
    type: "Women's",
    txt: "new",
    color:"red-500",
    variants: [
      {
        img1: IMAGES.adriannaPapellFirst,
        img2: IMAGES.adriannaPapellSecond,
        thumb: IMAGES.adriannaPapellSecond,
      },
      {
        img1: IMAGES.adriannaPapellZommedOut,
        img2: IMAGES.adriannaPapellZommedIn,
        thumb: IMAGES.adriannaPapellZommedIn,
      },
    ],
  },

  {
    name: "Adrianna Papell",
    price: "$59.99",
    type: "Women's",
    txt: "new",
    color:"orange-300",
    variants: [
      {
        img1: IMAGES.calvinKleinBlackFirst,
        img2: IMAGES.calvinKleinBlackSecond,
        thumb: IMAGES.calvinKleinBlackSecond,
      },
      {
        img1: IMAGES.calvinKleinDarkBlueFirst,
        img2: IMAGES.calvinKleinDarkBlueSecond,
        thumb: IMAGES.calvinKleinDarkBlueSecond,
      },
      {
        img1: IMAGES.calvinKleinSilverFirst,
        img2: IMAGES.calvinKleinSilverSecond,
        thumb: IMAGES.calvinKleinSilverSecond,
      },
      {
        img1: IMAGES.calvinKleinWhiteFirst,
        img2: IMAGES.calvinKleinWhiteSecond,
        thumb: IMAGES.calvinKleinWhiteSecond,
      },
    ],
  },

  {
    name: "MIA",
    price: "$49.99",
    type: "Women's",
    txt: "new",
    color:"blue-300",
    variants: [
      {
        img1: IMAGES.donaldPlinerfirst,
        img2: IMAGES.donaldPlinerSecond,
        thumb: IMAGES.donaldPlinerSecond,
      },
    ],
  },

  {
    name: "MIA",
    price: "$49.99",
    type: "Women's",
    txt: "new",
    color:"yellow-300",
    variants: [
      {
        img1: IMAGES.kendraScott,
        img2: IMAGES.kendraScottSecond,
        thumb: IMAGES.kendraScott,
      },
    ],
  },

  {
    name: "MIA",
    price: "$49.99",
    type: "Women's",
    txt: "new",
    color:"red-500",
    variants: [
      {
        img1: IMAGES.madwellGrayFirst,
        img2: IMAGES.madwellGraySecond,
        thumb: IMAGES.madwellGraySecond,
      },
      {
        img1: IMAGES.madwellWhiteFirst,
        img2: IMAGES.madwellWhiteSecond,
        thumb: IMAGES.madwellWhiteSecond,
      },
    ],
  },

  {
    name: "MIA",
    price: "$49.99",
    type: "Women's",
    txt: "new",
    color:"blue-300",
    variants: [
      {
        img1: IMAGES.steveMaddenfirst,
        img2: IMAGES.steveMaddenSecond,
        thumb: IMAGES.steveMaddenSecond,
      },
    ],
  },

  {
    name: "MIA",
    price: "$49.99",
    type: "Women's",
    txt: "new",
    color:"orange-300",
    variants: [
      {
        img1: IMAGES.madwellToteBag,
        img2: IMAGES.madwellToteBagSecond,
        thumb: IMAGES.madwellToteBagSecond
      },
    ],
  },



  {
    name: "MIA",
    price: "$49.99",
    type: "Women's",
    txt: "new",
    color:"purple-300",
    variants: [
      {
        img1: IMAGES.pumaFirst,
        img2: IMAGES.pumaSecond,
        thumb: IMAGES.pumaSecond,
      },
    ],
  },
];

export default function NewProducts() {
  const [selectedVariants, setSelectedVariants] = useState(
    Array(products.length).fill(0)
  );

  const handleHover = (productIndex, variantIndex) => {
    const newSelection = [...selectedVariants];
    newSelection[productIndex] = variantIndex;
    setSelectedVariants(newSelection);
  };

  const shadowColorMap = {
    "blue-300": "shadow-blue-300",
    "yellow-300": "shadow-yellow-300",
    "red-500": "shadow-red-500",
    "purple-300": "shadow-purple-300",
    "orange-300": "shadow-orange-300",
  };

  return (
    <div className="my-10 px-4">
      <p className="font-semibold text-2xl mt-10 mb-5">New Arrival</p>

      <Swiper
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
        {products.map((product, index) => {
          const variant = product.variants[selectedVariants[index]];
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center w-full max-w-xs mx-auto">
                {/* Image hover container */}
                <div className="relative aspect-[3/4] w-full overflow-hidden group border-2 ">
                  <img
                    src={variant.img1}
                    alt={`${product.name} front`}
                    className="w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0 z-10 cursor-pointer"
                  />
                  <img
                    src={variant.img2}
                    alt={`${product.name} hover`}
                    className="w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 z-10 cursor-pointer"
                  />
                </div>

                {/* Variant buttons and product info */}
                <div className="w-full text-left py-4">
                  <div className="flex gap-2 mb-2">
                    {product.variants.map((v, i) => (
                      <button
                        key={i}
                        onMouseEnter={() => handleHover(index, i)}
                        className={`rounded-full border-2 transition-all ${
                          selectedVariants[index] === i
                            ? "border-gray-800"
                            : "border-transparent"
                        }`}
                      >
                        <img
                          src={v.thumb}
                          alt={`Variant ${i + 1}`}
                          className="w-10 h-10 object-cover rounded-full"
                        />
                      </button>
                    ))}
                  </div>
                  <p className="font-semibold text-md">{product.name}</p>
                  <p className="text-gray-600">{product.type}</p>
                  <p className="font-semibold">{product.price}</p>
                </div>
                <div className="">
                    <button className={`mt-2 mx-2 border-2 px-5 py-2 shadow-md ${shadowColorMap[product.color]} bg-white absolute top-0 left-0 z-30 text-xs rounded-3xl`}>{product.txt}</button>
                    <button className={`mt-2 mx-2 border-2 px-5 py-2 shadow-md ${shadowColorMap[product.color]} bg-white absolute top-0 right-0 z-30 text-xs rounded-3xl hover:bg-blue-500`}><i className="fa-solid fa-heart"></i></button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
