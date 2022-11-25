import React, { useState } from 'react';
import Form from '../lib/Form'
import Swal from 'sweetalert2'

export default function LoadFile() {
    const [ text, setText ] = useState("")
    let extraccion = []; 
    let Myelement1 = [];
    const readFile = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const fileReader = new FileReader();
        fileReader.readAsText( file )
        fileReader.onload = () => {
            const astext = fileReader.result
            let arrayDelTexto = astext.split('\n')
            for (let i = 0; i < 100; i++) {
                //metemos cada linea en un array y el array lo divimos con el \t 
                extraccion.push(arrayDelTexto[i].split('\t'));
                //nos salteamos el cabezal
                if (i > 0) {
                    //eliminamos lineas vacias
                    if (extraccion[i][0] === '') {
                        break
                    }
                    Myelement1[i] = JSON.stringify({
                        'numero_de_operacion': extraccion[i][0],
                        'codigo_de_producto': extraccion[i][1],
                        'materia_prima': extraccion[i][9],
                        'numero_de_inyectora': extraccion[i][7],
                        'numero_de_molde': extraccion[i][3],
                        'tiempo_de_ciclo': extraccion[i][6]
                    })
                    // eslint-disable-next-line
                    const post = async () => {
                        try {
                            const data = {
                                'numero_de_operacion': extraccion[i][0],
                                'codigo_de_producto': extraccion[i][1],
                                'materia_prima': extraccion[i][9],
                                'numero_de_inyectora': extraccion[i][7],
                                'numero_de_molde': extraccion[i][3],
                                'tiempo_de_ciclo': extraccion[i][6]
                            }
                            let options = {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': 'Bearer 123456'
                                },
                                body: JSON.stringify(data)
                            }
                            const url = 'http://172.18.6.136:3001/api/v1/items'
                            const envio = await fetch(url, options)
                            const result = await envio.json()
                            console.log(result)
                        } catch (error) {
                            console.log(error)
                            Swal.fire({
                                icon: 'error',
                                title: 'Error',
                                text: 'No se a podido realizar la carga!',
                            })
                        }
                    }
                    post()
                }
            }
            setText(Myelement1);
            Swal.fire({
                icon: 'success',
                title: 'Carga exitosa!',
                showConfirmButton: false,
                timer: 2000
            })
        }
        fileReader.onerror = () => {
            console.log( fileReader.error )
        }
    }
    console.log()
return (
    <div>
    <Form title="Carga de datos" action="#" method="POST" name="formFormulario" 
        nameButton="Recargar" classButton="display-none" >
        <input type="file" onChange={ readFile } />
        <br />
        <div>
        <p>Info en formato JSON: <br />
        <textarea name="carga" value={ text } 
        onChange={(e) => setText(e.target.value)} />
        <br />
        </p>
        </div>
    </Form>
    </div>
)
}