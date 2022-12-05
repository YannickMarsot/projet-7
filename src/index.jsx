import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Page from './Pages/Page'
import Error from './Components/Error'
/*en attente dynamisation*/
import PageTemporaire from './Pages/PageTemporaire'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/AboutUs" element={<AboutUs />}></Route>
      <Route path="/PageTempo" element={<PageTemporaire />}></Route>
      <Route path="/Page/:id" element={<Page />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  </BrowserRouter>
)
