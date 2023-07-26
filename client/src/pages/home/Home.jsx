import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Slider from '../../components/slider/Slider'
import Categories from '../../components/category/Categories'
import Products from '../../components/products/Products'
import Newsletter from '../../components/newsletter/Newsletter'
import Footer from '../../components/footer/Footer'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter />
      <Footer />
    </div>
  )
}
