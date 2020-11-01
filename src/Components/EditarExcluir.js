import React from "react";
import axios from "axios";
import { useNavigate, Link} from "react-router-dom";
import styles from './EditarExcluir.module.css'


function EditarExcluir() {
  const navegar = useNavigate();
  const [artigoEditavel, setArtigoEditavel] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [atualiza, setAtualiza] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("http://localhost:3000/postagem")
      .then((r) => r.data)
      .then((response) => setArtigoEditavel(response));
      console.log(atualiza)
  }, [atualiza]);


  React.useEffect(() => {
     excluiArtigo()
    console.log(atualiza)
  }, [id]);

  async function excluiArtigo(){
   await axios.delete(`http://localhost:3000/postagem/${id}`);
    await setAtualiza(!atualiza)
 }

  if (artigoEditavel == null) return null;

  return (
    <div className={styles.container}>
      {artigoEditavel.map((item) => (
      <fieldset>
        <div key={item.id}>
          <h1>{item.titulo}</h1>
          <span>
          <button onClick={() => setId(item.id)}>Excluir</button>
         <button> <Link to={`/edit/${item.id}`} >Editar</Link></button>
          </span>
        </div>
      </fieldset>
      ))}
      <p>{atualiza}</p>
    </div>


  );
}

export default EditarExcluir;
