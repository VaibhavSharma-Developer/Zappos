import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import IMAGES from "../../../../assets/images/image";

const products = [
  {
    name: "Florida",
    price: "$49.99",
    type: "Women's",
    color: "blue-300",
    variants: [
      {
        img1: IMAGES.floridaNubuckHexSageFirst,
        img2: IMAGES.floridaNubuckHexSageSecond,
        thumb: IMAGES.floridaNubuckHexSageSecond,
      },
      {
        img1: IMAGES.floridaNubuckSandFirst,
        img2: IMAGES.floridaNubuckSandSecond,
        thumb: IMAGES.floridaNubuckSandSecond,
      },
    ],
  },

  {
    name: "Papillio",
    price: "$49.99",
    type: "Women's",
    color:"yellow-300",
    variants: [
      {
        img1: IMAGES.papillioDarkTeaFirst,
        img2: IMAGES.papillioDarkTeaSecond,
        thumb: IMAGES.papillioDarkTeaSecond,
      },
      {
        img1: IMAGES.papillioEucalyptusFirst,
        img2: IMAGES.papillioEucalyptusSecond,
        thumb: IMAGES.papillioEucalyptusSecond,
      },
      {
        img1: IMAGES.papillioPuresageFirst,
        img2: IMAGES.papillioPuresageSecond,
        thumb: IMAGES.papillioPuresageSecond,
      },
      {
        img1: IMAGES.papillioZinfandelFirst,
        img2: IMAGES.papillioZinfandelSecond,
        thumb: IMAGES.papillioZinfandelSecond,
      },
    ],
  },

  {
    name: "Madrid",
    price: "$49.99",
    type: "Women's",
    color:"purple-300",
    variants: [
      {
        img1: IMAGES.madridBlackFirst,
        img2: IMAGES.madridBlackSecond,
        thumb: IMAGES.madridBlackSecond,
      },
      {
        img1: IMAGES.madridEcruFirst,
        img2: IMAGES.madridEcruSecond,
        thumb: IMAGES.madridEcruSecond,
      },
      {
        img1: IMAGES.madridRoseFirst,
        img2: IMAGES.madridRoseSecond,
        thumb: IMAGES.madridRoseSecond,
      },
      {
        img1: IMAGES.madridStoneFirst,
        img2: IMAGES.madridStoneSecond,
        thumb: IMAGES.madridStoneSecond,
      },
      
    ],
  },

  {
    name: "Sydney",
    price: "$59.99",
    type: "Women's",
    variants: [
      {
        img1: IMAGES.sydneyLuxeBucklePurpleFirst,
        img2: IMAGES.sydneyLuxeBucklePurpleSecond,
        thumb: IMAGES.sydneyLuxeBucklePurpleSecond,
      },
      {
        img1: IMAGES.sydneyLuxeBuckleWhiteFirst,
        img2: IMAGES.sydneyLuxeBuckleWhiteSecond,
        thumb: IMAGES.sydneyLuxeBuckleWhiteSecond,
      },
    ],
  },

  {
    name: "Mayari",
    price: "$59.99",
    type: "Women's",
    txt: "Leaving Soon",
    color:"orange-300",
    variants: [
      {
        img1: IMAGES.mayariBirkoBlackFirst,
        img2: IMAGES.mayariBirkoBlackSecond,
        thumb: IMAGES.mayariBirkoBlackSecond,
      },
      {
        img1: IMAGES.mayariBirkoMochaFirst,
        img2: IMAGES.mayariBirkoMochaSecond,
        thumb: IMAGES.mayariBirkoMochaSecond,
      },
      {
        img1: IMAGES.mayariBirkoSandFirst,
        img2: IMAGES.mayariBirkoSandSecond,
        thumb: IMAGES.mayariBirkoSandSecond,
      },
      {
        img1: IMAGES.mayariBirkoStoneFirst,
        img2: IMAGES.mayariBirkoStoneSecond,
        thumb: IMAGES.mayariBirkoStoneSecond,
      },
      {
        img1: IMAGES.mayariBirkoWhiteFirst,
        img2: IMAGES.mayariBirkoWhiteSecond,
        thumb: IMAGES.mayariBirkoWhiteSecond,
      },
    ],
  },

  {
    name: "Tokio",
    price: "$49.99",
    type: "Women's",
    txt: "New",
    color:"blue-300",
    variants: [
      {
        img1: IMAGES.tokioSageFirst,
        img2: IMAGES.tokioSageSecond,
        thumb: IMAGES.tokioSageSecond,
      },
      {
        img1: IMAGES.tokioSandFirst,
        img2: IMAGES.tokioSandSecond,
        thumb: IMAGES.tokioSandSecond,
      },
    ],
  },

  {
    name: "Nubuck",
    price: "$49.99",
    type: "Women's",
    txt: "New",
    color:"yellow-300",
    variants: [
      {
        img1: IMAGES.nubuckSageFirst,
        img2: IMAGES.nubuckSageSecond,
        thumb: IMAGES.nubuckSageSecond,
      },
      {
        img1: IMAGES.nubuckSandFirst,
        img2: IMAGES.nubuckSandSecond,
        thumb: IMAGES.nubuckSandSecond,
      },
    ],
  },

  {
    name: "Silky Zebra",
    price: "$49.99",
    type: "Women's",
    txt: "Popular",
    color:"red-500",
    variants: [
      {
        img1: IMAGES.silkyBlackFirst,
        img2: IMAGES.silkyBlackSecond,
        thumb: IMAGES.silkyBlackSecond,
      },
      {
        img1: IMAGES.silkyPecanFirst,
        img2: IMAGES.silkyPecanSecond,
        thumb: IMAGES.silkyPecanSecond,
      },
    ],
  },
];

export default function Birkenstock() {
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
    <div className="my-10 px-4 overflow-hidden">
      <p className="font-semibold text-2xl mt-10 mb-5">Shop New Birkenstock</p>
<div className="overflow-hidden">
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
                    <button className={`mt-2 mx-2 border-2 px-5 py-2 shadow-md ${shadowColorMap[product.color]} bg-white absolute top-0 right-0 z-30 text-xs rounded-3xl hover:bg-blue-500`}><i className="fa-solid fa-heart"></i></button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      </div>
    </div>
  );
}
