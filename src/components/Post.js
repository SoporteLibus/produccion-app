const Post = ({ post }) => {
    
    return (
        <tr>
            <td data-label="Numero de operacion">{post.numero_de_operacion}</td>
            <td data-label="Codigo de producto">{post.codigo_de_producto}</td>
            <td data-label="Numero de Inyectora">{post.numero_de_inyectora}</td>
            <td data-label="Numero de molde">{post.numero_de_molde}</td>
            <td data-label="Tiempo de ciclo">{post.tiempo_de_ciclo}</td>
            <td data-label="Materia prima">{post.materia_prima}</td>
        </tr>
    )
}
export default Post