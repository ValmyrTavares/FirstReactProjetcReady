import React from 'react'
import {useParams, NavLink, useNavigate} from 'react-router-dom'
import Axios from 'axios';

function Edit() {
    const [edit, setEdit]= React.useState(null)
    const navegar = useNavigate();
    const params = useParams();
    
    React.useEffect(()=>{
        Axios.get(`http://localhost:3000/postagem/${params.id}`)
        .then(res => setEdit(res.data))
        console.log(edit)
    },[])

    function handleSubmit(event){
        event.preventDefault()
        console.log(edit)
        Axios.put(`http://localhost:3000/postagem/${params.id}`,edit)
        navegar('/produto')
    }
    function handleChange({target}){
       const{id, value}= target;
       setEdit({...edit,[id]:value })
    }
    if(edit==null)return null

    return (
        <div>
           <h1>Pagina de edição de artigos</h1>
           <form onSubmit={handleSubmit}>
                <input type="text" id="titulo" value={edit.titulo} onChange={handleChange}/>
                <input type="text" id="subtitulo" value={edit.subtitulo} onChange={handleChange}/>
                <input type="text" id="image" value={edit.image} onChange={handleChange}/>
                <input type="text" id="texto" value={edit.texto} onChange={handleChange}/>
                <button>Enviar</button>
            </form>
           
        </div>
    )
}

export default Edit
