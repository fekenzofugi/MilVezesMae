import { Link } from "react-router-dom";
import styled from "styled-components";
import brush from "../assets/images/brush.png"

const Login = () => {
    return(

        <Wrapper>
            <div className="content">
                <div className="image">

                </div>
                <div className="content">
                    <div className="form">
                        <img className="brush" src={brush} alt="" />
                        <img className="brush2" src={brush} alt="" />
                        <header>
                            <h4>LOGIN</h4>
                        </header>
                        <div className="form-row">
                            <input type="email" id="email" placeholder="Digite seu E-mail" className="form-input" required />
                        </div>
                        <div className="form-row">
                            <input type="password" id="password" placeholder="Digite sua senha" className="form-input" required/>                        
                        </div>
                        <button type="submit" className="btn btn-block">Inscrever</button>
                        <p>
                            Ainda não tem uma conta?
                            <Link to="/registro">Cadastre-se</Link>
                        </p>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    .brush {
        position: absolute;
        z-index: -1;
        left: 20rem;
    }
    .brush2 {
        position: absolute;
        z-index: -1;
        top: -10rem;
        right: 20rem;
    }
    .image {
        height: 6rem;
    }
    header {
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
    }
    .content {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .form {
        position: relative;
        background-color: white;
        button {
            background-color: var(--background-secondary-color);
            color: black;
        }
        button:hover {
            background-color: var(--background-footer-color);
            color: white;
        }
        p {
            margin-top: 2rem;
        }
        a {
            margin-left: 0.5rem;
            color: black;
            font-weight: 700;
        }
        a:hover {
            opacity: 0.8;
        }
    }
`

export default Login;