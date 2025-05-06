import { useState } from "react";
import "./App.css";
import Navbar from "./components/header/navbar/navbar";
import Category from "./components/header/category-nav/category";
import Landing from "./components/view/pages/landing page/landing";
import Tranding from "./components/view/pages/trending/Tranding";
import FeaturedBrands from "./components/view/pages/featured brands/FeaturedBrands";
import NewProducts from "./components/view/pages/new arrival/NewProducts";
import Inspirration from "./components/view/pages/inspiration page/Inspiration";
import Birkenstock from "./components/view/pages/birkenstock/Birkenstock";
import KidSection from "./components/view/pages/kid section/KidSection";
import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import GetListing from "./components/view/pages/GetListing";
import Kiddo from "./components/view/pages/kid section/Kiddo";
import ProductDetails from "./components/view/pages/kid section/ProductDetails";

function App() {

  return (
    <>  
      <div className="overflow-hidden">
        <div className="p-5">
          <Navbar />
          <Category />  
        </div>

        <Routes>

          <Route path="/login" element={<Login />} />

          <Route
            path="/"
            element={
              <>
                <hr className="border-t-3 border-gray-300 w-full mt-1" />
                <Landing />
                <div className="p-5">
                  <Tranding />
                </div>
                <div className="bg-yellow-100">
                  <FeaturedBrands />
                </div>
                <div className="p-5">
                  <NewProducts />
                </div>
                <div className="bg-yellow-100">
                  <Inspirration />
                </div>
                <div className="p-5">
                  <Birkenstock />
                </div>
                <div className="bg-pink-300">
                  <KidSection />
                  
                  
                </div>
                <div className="p-5">
                  <Tranding />
                </div>
                <Kiddo />
              </>
            }
          />
  
          <Route path="/product/:id" element={<ProductDetails />}></Route>
        </Routes>
        {/* <GetListing/> */}
      </div>
    </>
  );
}

export default App;
