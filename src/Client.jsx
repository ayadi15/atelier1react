import { useState } from "react"
const Client=()=>{
    const[code,setCode]=useState("001")
    const[email,setEmail]=useState("ayadiyoussef929@gmail.com")
    const[ville,setVille]=useState("Sfax")
    const handleChange=()=>{
        setCode("002")
        setEmail("Youssiif@gmail.com")
    }
    return (
        <>
        <h1>Page Client</h1>
        <h1>Code Client: {code} </h1>
        <h2>Email Client: {email} </h2>
        <h2>Ville Client: {ville} </h2>
        <button onClick={()=>handleChange()}>Modifier</button>
        </>
    )
}
export default Client