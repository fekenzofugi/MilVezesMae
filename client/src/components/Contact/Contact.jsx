import styled from "styled-components";
import brush from "../../assets/images/brush.png";


const Contact = () => {

    return(
        <Wrapper id="contact">
            <div className="content">
                <div className="form">
                <img className="brush" src={brush} alt="" />
                <img className="brush2" src={brush} alt="" />
                    <header>
                        <h5>Comunidade Mil Vezes Mãe</h5>
                        <p>
                            Inscreva-se para receber novidades e conteúdos exclusivos
                        </p>
                    </header>
                    <div className="form-row">
                        <input type="text" id="name" placeholder="Digite seu Nome" className="form-input" required/>                        
                    </div>
                    <div className="form-row">
                        <input type="email" id="email" placeholder="Digite seu E-mail" className="form-input" required />
                    </div>
                    <button type="submit" className="btn btn-block">Inscrever</button>
                </div>
            </div>

        </Wrapper>
    )
};

const Wrapper = styled.section`
    overflow: hidden;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    height: 60vh;
    position: relative;
    .brush {
        position: absolute;
        z-index: -1;
        right: 22rem;
        bottom: 5rem;
    }
    .brush2 {
        position: absolute;
        z-index: -1;
        left: 20rem;
        bottom: -10rem;
    }
    h5 {
        font-family: "Montserrat";
    }
    .content {
        display: flex;
        flex-direction: column;
        position: relative;
        justify-content: center;
    }
    header {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 2rem;
        text-align: center;
    }
    .form {
        background-color: white;
    }
    input {
        font-family: "Montserrat";
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
    }
    p {
        margin-top: 1rem;
    }

    .hide {
        opacity: 0;
    }
    header h1 {
        z-index: 1;
        background-color: var(--background-color);
        padding: 0 1rem;
    }

    header h1.animated {
        animation: drop 1.1s forwards;
    } 

    @keyframes drop {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }
    header {
        width: 100%;
        position: relative;
        display: flex;
        justify-content: center;
    }
    header.grow::before {
        content: "";
        background-color: orangered;
        height: 2px;
        width: 100%;
        position: absolute;
        top: 42%; 
        left: 0;
        z-index: -1;
        animation: grow-bar 1s 0.8s forwards;
        transform-origin: left;
        opacity: 0;
    }
    header.grow::after {
        content: "";
        background-color: orangered;
        height: 2px;
        width: 100%;
        position: absolute;
        top: 42%; 
        right: 0;
        z-index: -1;
        animation: grow-bar 1.1s 0.8s forwards;
        transform-origin: right;
        opacity: 0;
    }

    @keyframes grow-bar {
        0% {
            opacity: 1;
            transform: scaleX(0);
        }
        100% {
            opacity: 1;
            transform: scaleX(1);
        }
    }

    button{
        font-family: "Montserrat";
        padding: 1rem 0;
        text-transform: uppercase;

    }
    
    @media (max-width: 700px) {
    }

`;



export default Contact;