import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import AboutUs from './Pages/AboutUs/AboutUs'
import Page from './Pages/Page/Page'
import Error from './Components/Error/Error'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/AboutUs" element={<AboutUs />}></Route>
      <Route path="/Page/:id" element={<Page />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
)
