import { Link } from "react-router-dom";
import { useRef, useState } from 'react';
import styled from "styled-components";

// Componente del boton del NavBar
export const MobileIcon = styled.button`
  display: none;
  border: none;
  width: 5rem;
  background-color: transparent;
  outline: none;
  @media screen and (max-width: 800px) {
    display: block;
    cursor: pointer;
  }
`;

export default function Nav(){
    // Usado para desplegar el panel derecho en la version mobile
    const burgerRef = useRef();
    const navRef = useRef();
    const setBurger = () => {
        burgerRef.current.classList.toggle("active");
        navRef.current.classList.toggle("nav-active");
    }
    // Efecto del boton del NavBar
    const navlinks = document.querySelectorAll('.navlinks li');
    navlinks.forEach((link,index) => {
        if (link.style.animation){
            link.style.animation='';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
        }
    });
    // Comprobacion del estado del boton del NavBar
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    return (
        <div>
        <nav>
        <div className="logo">
            <Link to="/"><img src="/images/logo2.png" alt="Logo Argul" /></Link>
            <h4>Argul y Cia</h4>
        </div>
        <ul className="navlinks" ref={navRef} >
            <li>
                <Link to="/info">Info</Link>
            </li>
            <li>
                <Link to="/inyectoras">Inyectoras</Link>
            </li>
        </ul>
        <MobileIcon ref={burgerRef} className="burger" onClick={() => {
            setShowMobileMenu(!showMobileMenu)
            setBurger()
        }}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </MobileIcon>
    </nav>
    </div>
    )
}