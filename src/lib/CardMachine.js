import { FcDataSheet } from 'react-icons/fc'
import { AiOutlineForm } from 'react-icons/ai'
import '../styles/machines.css'
import { Link } from "react-router-dom";


export default function CardMachine(prop){
    return (
        <div className="card1">
            <img src={prop.image} alt="Maquinas" />
            <div className="container1">
                <div className="button-div">
                <Link to="/formpage"><AiOutlineForm /></Link>
                <Link to="/listpage"><FcDataSheet /></Link>
                </div>
            </div>
        </div>
    )
}