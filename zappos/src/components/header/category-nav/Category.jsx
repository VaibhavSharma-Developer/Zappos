import React from "react";
import { useState } from "react";
import IMAGES from "../../../assets/images/image";

export default function Category() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const categories = [
    "New",
    "Women",
    "Men",
    "Kids",
    "Brands",
    "Sports",
    "Collections",
    "Sale",
  ];

  const handleToggle = (category) => {
    setActiveDropdown((prev) => (prev === category ? null : category));
  };
  return (
    <>
      <div className="parent flex justify-between items-center mt-5">
        <div className="left flex gap-1 font-bold hover:underline cursor-pointer text-md">
          {categories.map((category) => (
            <div key={category} className="relative">
              <button
                onClick={() => handleToggle(category)}
                className={`rounded-full  px-4 py-2  
                  ${category === "Sale" ? "text-red-600 hover:text-black" : ""}
                  ${activeDropdown === category ? "bg-gray-950 text-white ": "hover:bg-gray-100 hover:text-black "}
                  `}
              >
                {category}
              </button>

              {activeDropdown === category && (
                <div>
                  {category === "New" && (
                    <div className="absolute top-full left-0 mt-2 w-[1150px] bg-white border shadow-lg rounded-md z-10 flex space-x-12 p-4 ">
                      <ul className="text-md space-y-6">
                        <li className="font-bold hover:underline cursor-pointer">
                          New Collection
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Shoes
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          clothing
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Bags
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Accessories
                        </li>
                      </ul>
                      <ul className="text-md space-y-6">
                        <li className="font-bold hover:underline cursor-pointer">
                          The Style Room
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          The Vacation Edit
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Birkenstock
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Dasert Pastels
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          {" "}
                          Elevated Everyday
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          {" "}
                          Spring Break Mode
                        </li>
                      </ul>
                      <ul className="text-md space-y-6">
                        <li className="font-bold hover:underline cursor-pointer">
                          New Brands
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          All Birds
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Birdies
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Converse
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          {" "}
                          Free Fly
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          {" "}
                          Journee Collections
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          {" "}
                          KIZIK
                        </li>
                      </ul>
                      <ul className="text-md space-y-6">
                        <li className="font-bold hover:underline cursor-pointer">
                          New & Now
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Women's Sandals
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Women's Vacation Styles
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Best KIZIK Slip-Ons
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Top 10 Hiking Shoes
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          {" "}
                          Brooks Glycerin Series
                        </li>
                      </ul>
                      <div className="w-px max-h-screen bg-gray-300"></div>
                      <div className="grid grid-rows-2 gap-3 ">
                        <div className="flex flex-col items-center">
                          <img
                            src={IMAGES.laidBackSandle}
                            alt=""
                            className="h-64 w-64"
                          />
                          <button className="bg-gray-900 hover:bg-gray-950 font-normal text-white font-sm w-full">
                            Shop Laid Sandals
                          </button>
                        </div>
                        <div className="flex flex-col items-center">
                          <img
                            src={IMAGES.sandals}
                            alt=""
                            className="h-64 w-64"
                          />
                          <button className="bg-gray-900 hover:bg-gray-950 font-normal text-white font-sm w-full">
                            Shop Cole Haan Sandals
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {category === "Women" && (
                    <div className="absolute top-full -left-16 mt-2 w-[1200px] bg-white border shadow-lg rounded-md z-10 flex space-x-12 p-4 ">
                      <ul className="text-md space-y-6">
                        <li className="font-bold hover:underline cursor-pointer">
                          Shoes
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          All Women's Shoes
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Sneakers & Athletic
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Boots & Booties
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Clogs
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Flats
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Slippers
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Mules
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Loafers
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Sandals
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Cowboy Boots
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Composite Toe
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Safety Shoes
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Work Shoes
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Heels
                        </li>
                      </ul>
                      <ul className="text-md space-y-6">
                        <li className="font-bold hover:underline cursor-pointer">
                          Clothing
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          All Women's Clothing
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Dresses
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Shirts & Tops
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Jeans & Denim
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Jumpsuits & Rompers
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Shorts
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Skirts
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Swimwear
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Pants
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Activewear
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Sleepwear
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Coats & Outerwear
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Plus Size
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Work & Duty Apparel
                        </li>
                      </ul>
                      <ul className="text-md space-y-6">
                        <li className="font-bold hover:underline cursor-pointer">
                          Accessories & More
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          All Women's Accessories
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Handbags
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Bagpacks
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Wallets
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Sunglasses
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Hats
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Jewelry
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Gloves
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Belts
                        </li>
                      </ul>
                      <ul className="text-md space-y-6">
                        <li className="font-bold hover:underline cursor-pointer">
                          Tranding Brands
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Birkenstocks
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Brooks
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Hoka
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Madewell
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          New Balance
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          On
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Sam Edelman
                        </li>
                      </ul>

                      <ul className="text-md space-y-6">
                        <li className="font-bold hover:underline cursor-pointer">
                          Shop By
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          All Womens
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Bestsellers
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          New Arrivals
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Spring Sandals
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Spring Fashion
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Eye-Catching Handbags
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Sale
                        </li>
                        <li className="font-bold hover:underline hover:text-blue-700">
                          Gift Cards
                        </li>
                      </ul>
                      <div className="w-px max-h-screen bg-gray-300"></div>
                      <div className="grid grid-rows-3 gap-1 ">
                        <div className="flex flex-col items-center">
                          <img
                            src={IMAGES.steveMadden}
                            alt=""
                            className="h-64 w-64"
                          />
                          <button className="bg-gray-900 hover:bg-gray-950 font-normal text-white font-sm w-full">
                            Shop Steve Madden
                          </button>
                        </div>
                        <div className="flex flex-col items-center border">
                          <img
                            src={IMAGES.wacoal}
                            alt=""
                            className="h-64 w-64"
                          />
                          <button className="bg-gray-900 hover:bg-gray-950 font-normal text-white font-sm w-full">
                            Shop Wacoal
                          </button>
                        </div>
                        <div className="flex flex-col items-center">
                          <img
                            src={IMAGES.dolceVita}
                            alt=""
                            className="h-64 w-64"
                          />
                          <button className="bg-gray-900 hover:bg-gray-950 font-normal text-white font-sm w-full">
                            Shop Dolce Vita
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {category === "Men" && (
                    <div className="absolute top-full -left-36 mt-2 w-[1150px] bg-white border shadow-lg rounded-md z-10 flex space-x-12 p-4 ">
                      <ul className="text-md space-y-6">
                        <li className="font-bold hover:underline cursor-pointer">
                          Shoes
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          All Men's Shoes
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Sneakers & Athletic
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Boots
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Loafers
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Oxfords
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Sandals
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Slippers
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Hiking
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Work & Safety Sneakers
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Work & Duty Boots
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Adaptive
                        </li>
                      </ul>
                      <ul className="text-md space-y-6">
                        <li className="font-bold hover:underline cursor-pointer">
                          Clothing
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          All Men's Clothing
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Shirts & Tops
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Pants
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Coats & Outerwear
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Shorts
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Big & Tall
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Activewear
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Work & Duty Apparal
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Sleepwear
                        </li>
                      </ul>
                      <ul className="text-md space-y-6">
                        <li className="font-bold hover:underline cursor-pointer">
                          Accessories & More
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          All Men's Accessories
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Hats
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Bags
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Belts
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Watches
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Sunglasses & Eyewear
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Wallets
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Gloves
                        </li>
                      </ul>
                      <ul className="text-md space-y-6">
                        <li className="font-bold hover:underline cursor-pointer">
                          Trending Brands
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Adidas
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Birkenstock
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Brooks
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Converse
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Hey Dude
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Merrell
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          The North Face
                        </li>
                      </ul>
                      <ul className="text-md space-y-6">
                        <li className="font-bold hover:underline cursor-pointer">
                          Shop By
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          All Mens
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Bestsellers
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          New Arrival
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          5-Star-Rating
                        </li>
                        <li className="font-normal hover:underline hover:text-blue-700">
                          Sale
                        </li>
                        <li className="font-bold hover:underline hover:text-blue-700">
                          Gift cards
                        </li>
                      </ul>
                      <div className="w-px max-h-screen bg-gray-300"></div>
                      <div className="grid grid-rows-2 gap-3 ">
                        <div className="flex flex-col items-center">
                          <img
                            src={IMAGES.northFace}
                            alt=""
                            className="h-64 w-64"
                          />
                          <button className="bg-gray-900 hover:bg-gray-950 font-normal text-white font-sm w-full">
                            Shop Men's North Face
                          </button>
                        </div>
                        <div className="flex flex-col items-center">
                          <img
                            src={IMAGES.vacationShoesForHim}
                            alt=""
                            className="h-64 w-64"
                          />
                          <button className="bg-gray-900 hover:bg-gray-950 font-normal text-white font-sm w-full">
                            Shop Vacation shoes For Him
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="right font-bold text-md cursor-pointer rounded-full hover:bg-gray-100 px-4 py-2">
          <a href="">Help & Support</a>
        </div>
      </div>
    </>
  );
}
