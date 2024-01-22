import styled from "styled-components";
import brFlag from "../../assets/images/br.png"
import usFlag from "../../assets/images/us.png";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const Language = ({location, active}) => {
    const [dropDown, setDropDown] = useState(false);

    return (
        <Wrapper>
            <div className="flag-container">
                <div className="flag">
                    <img src={brFlag} alt="" />                    
                </div>
                <div className={`${dropDown ? "drop-down active" : "drop-down hide"}`}>
                    <div className="language">
                        <img src={usFlag} alt="" />
                        <p>English</p>
                    </div>
                    <div className="language">
                        <img src={brFlag} alt="" />
                        <p>Português</p>
                    </div>
                </div>
            </div>
            <div className="button" onClick={() => setDropDown(!dropDown)}>
                {!dropDown ? <FaArrowDown className={!active && (location == "/") ? "arrow" : "arrow-active"}/> : <FaArrowUp  className={!active && (location == "/") ? "arrow" : "arrow-active"}/>}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .flag-container {
        position: relative;
    }
    .flag {
        width: 2rem;
    }
    .button {
        cursor: pointer;
    }
    .hide {
        transition: 0.3s;
        transform: translateX(100rem);
        opacity: 0;
    }
    .active {
        opacity: 1;
    }
    .flag-container {
        width: 100%;
        height: 100%;
        position: relative;
    }
    img {
        width: 100%;
    }
    h5 {
        font-family: "Montserrat";
    }

    .drop-down {
        position: absolute;
        border-radius: 1rem;
        padding: 1rem;
        display: flex;
        justify-content: start;
        flex-direction: column;
        align-items: start;
        background-color: white;
        color: black;
    }

    .arrow {
        color: white;
    }

    .arrow-active {
        color: black;
    }

    .language {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 2rem;
            height: 2rem;
        }
    }
    p {
        color: black
    }
`

export default Language;