import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Product from './pages/Product'
import Contact from './pages/Contact'
import ProductDetail from './pages/productDetail'
import About from './pages/About'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RootLayout></RootLayout>}>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/product' element={<Product></Product>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/detail/:id' element={<ProductDetail></ProductDetail>}></Route>
            <Route path='/about' element={<About></About>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

