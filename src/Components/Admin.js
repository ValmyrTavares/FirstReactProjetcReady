import React from 'react'
import axios from 'axios'
import{NavLink} from 'react-router-dom'
import styles from './Admin.module.css'


function Admin(){
    const [postagem, setPostagem] = React.useState({
        titulo:"",
        subtitulo:"",
        categoria:"",
        image:"",
        texto:""
    })
    function handleSubmit(event){
        event.preventDefault()
        console.log(postagem)
        axios.post('http://localhost:3000/postagem', postagem)

        // async function publicandoArtigos(){
        //     await  api.post("postagem", postagem)         
        //  }
    }
    function handleChange({target}){
        const{id, value} = target;
        setPostagem({...postagem, [id]:value})
    }

    return(
        <div className={styles.container}>
            <h1>Novo Artigo</h1>
            <form onSubmit={handleSubmit}>
            <fieldset>
            <legend>Publique seus dados</legend>
                <label>Titulo do Artigo</label>
                <input type="text" id="titulo" value={postagem.titulo} onChange={handleChange}/>
                <label>Sub-Titulo do Artigo</label>
                <input type="text" id="subtitulo"  value={postagem.subtitulo} onChange={handleChange}/>
                <label>URL da Imagem</label>
                <input type="text" id="image"  value={postagem.image} onChange={handleChange}/>
                <label>Descrição</label>
                <input type="text" id="texto"   value={postagem.texto} onChange={handleChange}/>
            </fieldset>
                <fieldset>
                <legend>Escolha a categoria do seu artigo</legend>
                <label>Categoria</label>
                <select id="categoria" value={postagem.categoria} onChange={handleChange}>
                    <option  value="Artigos">Artigos</option>
                    <option value="Desenhos">Desenhos</option>                   
                </select> 
               </fieldset> 
               <span>
                    <button>Enviar</button>
                    <button> 
                        <NavLink to="/editarConteudo" end activeStyle={{color:'red'}} >Editar Conteudo</NavLink>
                    </button>      
               </span>

            </form>

        </div>
    )
}

export default Admin