import { useState } from 'react'
import './App.css'
import Navbar from './components/header/navbar/navbar'
import Category from './components/header/category-nav/category'
import Landing from './components/view/pages/landing page/landing'
import Tranding from './components/view/pages/trending/Tranding'
import FeaturedBrands from './components/view/pages/featured brands/FeaturedBrands'
import NewArrival from './components/view/pages/new arrival/NewArrival'
import NewProducts from './components/view/pages/new arrival/NewProducts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='p-5'>
    <Navbar />
    <Category />
    </div>
    <hr className='border-t-3 border-gray-300 w-full mt-1' />
    <Landing />
    <div className='p-5'>
      <Tranding />
    </div>
      <div className='bg-yellow-100'><FeaturedBrands /></div>
      <div className='p-5'>
      {/* <NewArrival /> */}
      <NewProducts />
    
    </div>
    </>
  )
}

export default App
