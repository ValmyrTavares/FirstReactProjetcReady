import React from 'react'
import {Link, useParams} from 'react-router-dom'
import ProdutoEspecifico from './ProdutoEspecifico'
import styles from './Produto.module.css'



function Produto(){
    const [artigos, setArtigo] = React.useState(null)
    React.useEffect(()=> {
        fetch('http://localhost:3000/postagem')
        .then(r => r.json())
        .then(json =>setArtigo(json))       
       
    },[])

    
   
    const params = useParams() 
    const  [id, setId] = React.useState(null)

   const name = "Valmyr Tavares Malta de "
    if(artigos===null) return null
    if(id===null)  
    return(
        <div>          
           <section className={styles.containerArticle}>
            <ul>
            {artigos.filter(lux => lux.categoria=="dois").map((artigo) =>  ( 
            <li onClick={()=>setId(artigo.id)}key={artigo.id} to="/produto/'{artigo.id}'"> {artigo.titulo} </li>
            ))}
            </ul>            
           
           <div >                      
               <ProdutoEspecifico texto={artigos[0].id} /> 
           </div>
                 
       
           </section>
           
        </div>

    )
    return(
        <div>
             <section className={styles.containerArticle}>    
             <ul>
             {artigos.filter(lux => lux.categoria=="dois").map((artigo) =>  ( 
            <li onClick={()=>setId(artigo.id)}key={artigo.id} to="/produto/'{artigo.id}'"> {artigo.titulo} </li>
            ))}
            </ul>   
           <div >                
               <ProdutoEspecifico texto={id} />          
           </div>
       
           </section>
           
        </div>

    )
}
export default Produto