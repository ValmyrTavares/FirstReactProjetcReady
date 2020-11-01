import React from 'react'
import styles from './Home.module.css'
import Input from '../form/Inputs'
import Select from '../form/Select'
import Radio from '../form/Radio'
import CheckBox from '../form/CheckBox'

function Home(){
    const [nome, setNome]= React.useState("")
    const [email, setEmail]= React.useState("")
    const [produto, setProduto]= React.useState('')
    const [pais, setPais]= React.useState('')
    const [fruta, setFruta]= React.useState([])
    const img1 = "https://i.pinimg.com/564x/3d/a6/da/3da6da19e2e51df8be001a765aacec38.jpg"
    const img2 = "https://i.pinimg.com/564x/e3/94/5c/e3945c93bc160d14c78d0255b60f6641.jpg"
    const img3 = "https://i.pinimg.com/564x/d4/55/51/d455511b1b1ef948bf8c862f1437d063.jpg"
    const img4 = "https://i.pinimg.com/564x/2c/6d/12/2c6d12b831d920aab207f48c82dccaeb.jpg"
   
   
   
    return(
    <div className={styles.containerImagemHome}>       
        <img className={styles.imagem} src={img1} alt="imagem home"/>
        <img className={styles.imagem} src={img2} alt="imagem home"/>
        <img className={styles.imagem} src={img3} alt="imagem home"/>
        <img className={styles.imagem} src={img4} alt="imagem home"/>
        {/* <form>
            <CheckBox options={['Uva','Laranja','Morango']} value={fruta} setValue={setFruta}/>
            <Radio options={['Italia','França','Grécia']} value={pais} setValue={setPais}/>
            <Select options={['smartphone', 'tablet']} value={produto} setValue={setProduto} />
            <Input id="Nome"label="Nome" value={nome} setValue={setNome}/>
            <Input id="Email" label="Email" value={email} setValue={setEmail} />
        </form> */}

    </div>
        
    )
}
export default Home