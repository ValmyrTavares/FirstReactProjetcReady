import React from  'react'
import axios from 'axios'
import styles from './ProdutoEspecifico.module.css'

function ProdutoEspecifico(props){
    const [umArtigo, setUmArtigo] = React.useState(null)

    React.useEffect(()=>{
        axios.get(`http://localhost:3000/postagem/${props.texto}`)
        .then(r => r.data)
        .then(response => setUmArtigo(response))
    },[props.texto])
   

    if(umArtigo===null) return null
  
    return(
         <div className={styles.container}>
            
             <h1 className={styles.title}>{umArtigo.titulo}</h1>
            <h3  className={styles.subTitle}>{umArtigo.subtitulo}</h3>
             <img className={styles.picture} src={umArtigo.image} alt={umArtigo.titulo}/>
            <p className={styles.text}>{umArtigo.texto}</p>      
        
         </div>
    )
}
export default ProdutoEspecifico







