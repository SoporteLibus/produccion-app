import Post from "./Post"
import { useState, useEffect } from "react"
import getPosts from '../api/axios';

const ListPage = () => {
    const [searchResults, setSearchResults] = useState([])
    const [loading,setLoading]=useState(true)

    useEffect(() => {
    getPosts().then(json => {
        setSearchResults(json)
        setLoading(false)
    })
    }, [])
    const results = searchResults && searchResults.map(post => <Post key={post._id} post={post}/>);
    const content = results ? results : <article><p>No Matching Posts</p></article>
    
   const cargarElementos = async ()=>{
    
   try{
    let Myelement1 = await document.forms['formulario']['numero_de_operacion']
    Myelement1.setAttribute('value', searchResults[0].numero_de_operacion);

    let Myelement2 = await document.forms['formulario']['codigo_de_producto']
    Myelement2.setAttribute('value', searchResults[0].codigo_de_producto);

    let Myelement3 = await document.forms['formulario']['numero_de_inyectora']
    Myelement3.setAttribute('value', searchResults[0].numero_de_inyectora);

    let Myelement4 = await document.forms['formulario']['numero_de_molde']
    Myelement4.setAttribute('value', searchResults[0].numero_de_molde);

    let Myelement5 = await document.forms['formulario']['tiempo_de_ciclo']
    Myelement5.setAttribute('value', searchResults[0].tiempo_de_ciclo);

    var Myelement6 = await document.forms['formulario'][`materia_prima`]
    Myelement6.setAttribute('value', searchResults[0].materia_prima)
   }catch(e){}
    
        
     }



cargarElementos()

if (loading) return <h1>LOADING...</h1>
    return (
        <div>
            <table>
            <thead>
                <tr>
                    <th>Numero de operacion</th>
                    <th>codigo del producto</th>
                    <th>Numero de Inyectora</th>
                    <th>Numero de Molde</th>
                    <th>Tiempo de ciclo</th>
                    <th>Materia Prima</th>
                </tr>
            </thead> 
            <tbody>{content}</tbody>
            
        </table>

        

        <br/>
        
        <form name="formulario">
            <div>
                <br/><label>Numero de operacion</label><br/>
                <input type="text" id="numero_de_operacion"  />
            </div>
            <div>
                <br/><label>Codigo de producto</label><br/>
                <input type="text" id="codigo_de_producto" />
            </div>
            <div>
                <br/><label>Numero de inyectora</label><br/>
                <input type="text" id="numero_de_inyectora" />
            </div>
            <div>
                <br/><label>Numero de molde</label><br/>
                <input type="text" id="numero_de_molde" />
            </div>
            <div>
                <br/><label>Tiempo de ciclo</label><br/>
                <input type="text" id="tiempo_de_ciclo" />
            </div>
            <div>
                <br/><label>Materia prima </label><br/>
                <input type="text" id="materia_prima" />
               
            </div> 
            <button id="agregar">Agregar</button>
            <div id="dinamic"></div>

        
        </form>
        </div>
       
    )
}
export default ListPage