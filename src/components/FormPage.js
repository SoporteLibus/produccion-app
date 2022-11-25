import Form from '../lib/Form'
import Input from '../lib/Input';
import '../styles/formPage.css'
import styled from "styled-components";

export const MobileForm = styled.div`
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`;

export default function FormPage(){
    return (
        <div>
        <Form title="Formulario" action="#" method="POST" name="formFormulario" 
        classButton="div-enviar" nameButton="Enviar" >
        <MobileForm>
        <Input title="Numero de Orden" id="orden" placeholder="Ingresar" required="required" />
        <Input title="Numero de Producto" id="producto" placeholder="Ingresar" required="required" />
        <Input title="Materia Prima" id="materia" placeholder="Ingresar" required="required" />
        <Input title="Numero de Inyectorra" id="inyectora" placeholder="Ingresar" required="required" />
        <Input title="Numero de Molde" id="molde" placeholder="Ingresar" required="required" />
        <Input title="Tiempo de ciclo" id="ciclo" placeholder="Ingresar" required="required" />
        {/* <Select title="Materia Prima" >
        <option value="op1">Estandar</option>
        <option value="op2">Boq. Cobre</option>
        <option value="op3">Valv. A 2</option>
        <option value="op4">Otro</option>
        <option value="op5">Diametro</option>
        </Select> */}
        </MobileForm>
        </Form>
        </div>
    )
}

