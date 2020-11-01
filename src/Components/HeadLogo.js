import React from 'react'
import styles from './HeadLogo.module.css'
import logo from   '../img/logo.png'



function HeadLogo() { 
   
    return (
        <div className={styles.containerLogo}>
            <img  className={styles.picture} src={logo}/>
        </div>
    )
}

export default HeadLogo
