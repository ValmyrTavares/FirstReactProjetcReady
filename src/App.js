import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Produtos from './Components/Produtos'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Contato from './Components/Contato'



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Produtos />}></Route> 
          <Route path="contato" element={<Contato />}></Route>               
        </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

     


      
