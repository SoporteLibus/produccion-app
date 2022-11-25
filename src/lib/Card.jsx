import '../styles/home.css'
import {
    Link
  } from "react-router-dom";

export default function Card(prop){
    return (
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src={prop.image} alt="Maquina" />
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    {prop.children}
                    <Link to={prop.link}>Ver</Link>
                </div>
            </div>
        </div>
    )
}

