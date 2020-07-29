import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Produtos from './Components/Produtos'


function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Produtos />}></Route>
            
        </Routes>

      </BrowserRouter>
     


      
    </div>
  )
}

export default App
