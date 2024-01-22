import styled from "styled-components";
import Logo from "../UI/Logo";
import navLinks from "../../utils/NavbarLinks";
import { useState, useEffect } from "react";
import Media from "./Media";
import { useUiContext } from "../../pages/HomeLayout";

const Navbar = () => {


    const {toggleSidebar, showSidebar} = useUiContext();
    const location = window.location.pathname;;

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener("scroll", changeBackground)

    return(
        <Wrapper>
            <div className={`${navbar || (location != "/") ? "content active" : "content"}`}>
                <div className="container">
                    <Logo active={navbar} location={location}/>
                    <ul>
                        {navLinks.map((link) => {
                            return <li className={`${location === "/" + link.link ? "li-active" : ""}`} key={link.name}><a className={navbar || (location != "/") ? "link-active" : ""} href={`/${link.link}`}>{link.name}</a></li>
                        })}
                    </ul>
                    <Media active={navbar} location={location}/>     
                    <button className={`${!showSidebar ? "nav-btn" : "nav-btn aactive"}`} onClick={toggleSidebar}>
                    <svg stroke={navbar || (location != "/") ? "black" : "white"} fill='none' className='hamburguer' viewBox='-10 -10 120 120' width="60">
                        <path
                            className='line'
                            d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeLinejoin='round'
                        >
                        </path>
                        <line 
                            className="line bottom"
                            x1="80" x2="20"
                            y1="20" y2="20"
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeDasharray="80"
                            strokeDashoffset="0"
                            >
                        </line>
                    </svg>
                    </button>
                </div>   
            </div>
        </Wrapper>    
    )
}

const Wrapper = styled.nav`
    .nav-btn {
      border: transparent;
      background: transparent;
      cursor: pointer;
      z-index: 9999;
      overflow: hidden;
      --button-color: var(--text-color);
      display: none;
    }

    .nav-btn .hamburguer {
      transition: translate 1s, rotate 1s;
    }

    .nav-btn.aactive .hamburguer {
      translate: 10px -10px;
      rotate: .125turn
    }

    .nav-btn .line {
      transition: 1s;
      stroke-dasharray: 60 31.5 60 1000;
      transition: 1s;
    }

    .nav-btn.aactive .line {
      stroke-dasharray: 60 105 60 1000;
      stroke-dashoffset: -90;
    }

    .content {
        display: flex;
        background-color: transparent;
        height: 8rem;
        justify-content: center;
        align-items: center;
        position: fixed;
        width: 100%;  
        transition: 0.3s;
        z-index: 10;
    }

    .container {
        max-width: 1200px;
        display: grid;
        grid-template-columns: 1fr 3fr 1fr
    }

    .active {
        transition: 0.3s ;
        background: white;
        height: 6rem;

        a {
            font-size: 1.2rem;
            color: black;
        }
        box-shadow: var(--shadow-1);
    }

    ul {
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
    }
    li {
        position: relative;
    }
    .li-active {
        
    }
    .li-active a::after {
        transform: scale(1);
    }
    .li-active .link-active::after {
        transform: scale(1);
        background-color: black !important;
    }
    a {
        font-family: var(--font-family);
        font-weight: 100 ;
        font-size: 1.2rem;
        text-transform: uppercase;
        color: white;
    }
    ul li a::after {
        content: "";
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: -5px;
        left: 0;
        background-color: var(--background-secondary-color) !important;
        transition: 0.3s;
        transform-origin: left;
        transform: scaleX(0);
        
    }

    ul li a:hover::after {
        transform: scaleX(1);
    }

    .link-active:hover::after {
        background-color: black !important;
    }

    @media (max-width: 900px) {
        ul {
            display: none;
        }
        
        .container {
            grid-template-columns: 1fr 3fr 1fr;
        }

        .nav-btn {
            display: flex;
            align-items: center;
            justify-content: end;
        }
    }
`

export default Navbar;