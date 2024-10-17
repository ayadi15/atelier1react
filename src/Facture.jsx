import { useState } from "react"
const Facture=()=>{
const[fact,setFact]=useState({
        numfact:1,
        datefact:"10/10/2024",
        montant:500
    }
    )
    const handleUpdate=()=>{
        // setFact({numfact:3}) //hedhiia hakka tefsakkhh kolchayy w thot ken hekia
        setFact({...fact,numfact:3,montant:200,datefact:"Lyouma"})//hakka twalli tkhalihom lkol kima houma w tbadel ken li kotelha alihomm

    }
    return(
        <>
        <h1>numero de facture : {fact.numfact}</h1>
        <h1>date de facture : {fact.datefact}</h1>
        <h1>montant de facture : {fact.montant}</h1>
        <button onClick={()=>handleUpdate()}>Modifier</button>

        </>
    )
}
export default Facture