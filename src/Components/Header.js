import React from 'react'
import {NavLink} from 'react-router-dom'
import { FaHome } from "react-icons/fa"
import { FaAngellist } from "react-icons/fa"
import { SiActigraph } from "react-icons/si";
import { GrArticle } from "react-icons/gr";
import { GrUserAdmin } from "react-icons/gr";
import { AiTwotoneMail } from "react-icons/ai";
// import { RiArticleLine } from "react-icons/fa"
import styles from './Header.module.css'




function Header(){
    //const novaRota = useNavigate();

  
    return(
        <div className={styles.teste}>        
            <NavLink to="/" end activeStyle={{color:'red'}}> <FaHome  size={40} color="black"/> Home</NavLink>
           <div className={styles.category}>
            <p ><GrArticle  size={40} color="black"/>Categorias</p>
            <span>
            <NavLink  to="/produto"> Artigo</NavLink>
            <NavLink  to="/produto" > Desenhos</NavLink>
            </span>

           </div>
            <NavLink to="/admin" activeStyle={{color:'pink'}}><GrUserAdmin  size={40} color="black"/>Admin</NavLink>
            <NavLink to="/contato" activeStyle={{color:'green'}}><AiTwotoneMail  size={40} color="black"/>Contato</NavLink>

          
            
             
        </div>
    )
}
export default Header