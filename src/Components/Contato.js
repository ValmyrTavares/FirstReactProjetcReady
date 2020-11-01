import React from 'react'
import styles from './Contato.module.css'



function Contato(){
 
    const name="maquina de escrever"
    const imagem = "https://i.pinimg.com/564x/b7/4c/89/b74c899d6f094687c6e723eb05b67d38.jpg"
    return(
      <section className={styles.contato}>
          <img src={imagem} alt={name} />
          <div  className={styles.adress} >
              <h1>Entre em contato</h1>
              <ul className={styles.dados}>
                  <li>Email:  <b>valmyr@tavares.com</b> </li>
                  <li>Fone 9999 9999</li>
                  <li>Rua Gabriele D´annurzio 255</li>
                  <li>Campo Belo São Paulo SP</li>
              </ul>
               
          </div>

      </section>
    )
}
export default Contato