import { Link } from 'react-router-dom'
import '../styles/404.css'

export default function Error(){
    return (
        <div className="init">
            <p>HTTP: <span>404</span></p>
            <code><span>this_page</span>.<em>not_found</em> = true;</code>
            <code><span>if</span>(<b>you_spelt_it_wrong</b>){<span>try_again()</span>}</code>
            <center><Link to={"/"}>INICIO</Link></center>
        </div>
    )
}