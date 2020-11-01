import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Produto from './Components/Produto'
import Contato from './Components/Contato'
import Header from './Components/Header'
import Pagina404 from   './Components/Pagina404'
import Admin from './Components/Admin'
import EditarExcluir from './Components/EditarExcluir'
import Edit from './Components/Edit'
import HeadLogo from './Components/HeadLogo'


function App(){
  return(
    <BrowserRouter>
      <HeadLogo/>   
      <Header/>   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contato" element={<Contato/>}/>
      <Route path="/produto" element={<Produto/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/produto/:id" element={<Produto/>}/>
      <Route path="*" element={<Pagina404/>}/>
      <Route path="/editarConteudo" element={<EditarExcluir/>}/>
      <Route path="edit/:id" element={<Edit/>}/>
    </Routes>
   
    
    </BrowserRouter>
  )
}
export default App