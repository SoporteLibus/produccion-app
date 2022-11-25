import '../styles/login.css'
import { FcGoogle } from 'react-icons/fc'

export default function Login(){
    return (
        <div className="login-box">
            <img src="/images/logo2.png" className="avatar" alt="Avatar" />
            <h1>Login</h1>
            <form>
            <label>Usuario</label>
            <input type="text" placeholder="Ingresar Usuario" required />
            <label>Contraseña</label>
            <input type="password" placeholder="Ingresar Contraseña" required />
            <div className="login-google">
                <button type="submit"><label>Ingresar con</label><FcGoogle /></button>
            </div>
            <input type="submit" value="Entrar" />
            </form>
        </div>
    )
}