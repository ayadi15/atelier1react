

//rafce taatik l structure mtteha hadhra
import { useState } from "react"
import Form from 'react-bootstrap/Form';
const Livre = () => {
    
      const[livre,setLivre]=useState([
            {
                isbn:"677888",
                titre:"Bases de donnees",
                auteur:"john",
                prix:70,
                couverture:"zoro.png"            },
            {
                isbn:"645536",
                titre:"React",
                auteur:"Samir",
                prix:100,
                couverture:"zoro.png"

            },
            {
                isbn:"98523",
                titre:"Laravel",
                auteur:"Mounir",
                prix:50,
                couverture:"zoro.png"

            },
            {
                isbn:"975365",
                titre:"IA",
                auteur:"Alen",
                prix:200,
                couverture:"zoro.png"

            },
            {
                isbn:"225488",
                titre:"Devops",
                auteur:"Taieb",
                prix:500,
                couverture:"zoro.png"
                
            }
        ])
    const handleDelete=(isbn)=>{
        setLivre(livre.filter(l=>l.isbn!=isbn))
    }
    const[liv,setLiv]=useState({
                isbn:"952",
                titre:"3aw",
                auteur:"rerr",
                prix:1000,
                couverture:"zoro.png"
    })
    const handleAdd=()=>{
        setLivre([liv,...livre])
    }
  return (
    <div>
        <Form>
            <Form.Group className="mb-3" >
        
                 <Form.Control type="text" placeholder="ISBN" />
            </Form.Group>
            <Form.Group className="mb-3" >
        
                 <Form.Control type="text" placeholder="Titre" />
            </Form.Group>
            <Form.Group className="mb-3" >
        
                 <Form.Control type="text" placeholder="Auteur" />
            </Form.Group>
            <Form.Group className="mb-3" >
        
                 <Form.Control type="number" placeholder="Prix" />
            </Form.Group>
            <Form.Group className="mb-3" >
        
                 <Form.Control type="text" placeholder="Couverture" />
            </Form.Group>
            <Form.Group className="mb-3" >
        
                 <Form.Control type="text" placeholder="ISBN" />
            </Form.Group>
        
            
        </Form>
        <button className="btn btn-success btn-sm" onClick={()=>handleAdd()}>Ajouter</button>
        <table className="table table-striped">
            <thead>
                <tr>
                <th>ISBN</th>
                <th>Titre</th>
                <th>Auteur</th>
                <th>Prix</th>
                <th>Couverture</th>
                <th>Update</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    livre.map((l,index)=>
                    <tr>
                        <td>{l.isbn}</td>
                        <td>{l.titre}</td>
                        <td>{l.auteur}</td>
                        <td>{l.prix}</td>
                        <td><img src={l.couverture} width={70} height={70}/></td>
                        <td><button className="btn btn-warning btn-sm">Update</button></td>
                        <td><button className="btn btn-danger btn-sm"onClick={()=>handleDelete(l.isbn)}>Delete</button></td>
                        
                    </tr>
                    
                    
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default Livre
