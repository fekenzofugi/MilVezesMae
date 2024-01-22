import styled from "styled-components";
import Logo from "../UI/Logo";
import { Link } from "react-router-dom";
import Media from "../Navbar/Media";

const Footer = () => {
    return (
        <Wrapper>
            <div className="content">
                <div className="exclusive">
                    <h5>MIL VEZES MÃE</h5>
                    <p>Faça parte da nossa comunidade para receber conteúdos exclusivos</p>
                    <Link className="link" to="/contato">Formulário</Link>
                </div>
                <div className="box">
                    <h5>Conteúdo</h5>
                    <ul>
                        <li><Link>Blog</Link></li>
                        <li>Últimos Vídeos</li>
                    </ul>
                </div>
                <div className="box">
                    <h5>Contato</h5>
                        <ul>
                            <li><Link to="/contato">Formulário</Link></li>
                            <li>E-mail</li>
                        </ul>
                    </div>
                <div className="box">
                    <h5>Redes sociais</h5>
                    <ul>
                        <li>@milvezesmae</li>
                        <li>youtube.com/milvezesmae</li>
                    </ul>
                </div>

            </div>
            <div className="terms">
                <div className="links">
                    <a href="">Terms</a>
                    <a href="">Privacy</a>
                    <a href="">Cookie Policy</a>
                    <a href="">Support</a>     
                    <a href="">Cookie Settings</a>               
                </div>
                <div className="copyright">
                    &copy; Mil Vezes Mãe 2024
                    <a target="_blanc" href="www.fernandofugihara.com.br">Desenvolvido por Fernando Fugihara</a>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    margin-top: 3rem;
    background-color: var(--background-footer-color);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .link {
        padding: 1rem 2rem;
        background-color: var(--background-secondary-color);
        text-align: center;
        color: black;
        transition: .3s;
        border-radius: 8px;
    }
    .link:hover {
        color: black !important;
        background-color: #D5B4B4;
    }
    a:hover {
        transition: 0.3s;
        color: var(--background-secondary-color) !important;
    }
    .content {
        max-width: 1200px;
        padding: 3rem 0 3rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        border-bottom: 1px solid white;
        gap: 2rem;

    }
    .formulario {
        font-family: "Montserrat";
        text-transform: uppercase;
    }

    .box {
        h5 {
            margin-bottom: 1rem;
        }
        color: white;
        display: flex;
        flex-direction: column;
        ul {
            display: flex;
            flex-direction: column;
            gap: .5rem;
        }
        a {
            color: white;
        }
    }

    .exclusive {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        color: white;
        margin-right: 3rem;
    }


    .terms {
        max-width: 1200px;
        display: grid;
        grid-template-columns: 1fr 1fr;

        padding: 2rem 0;
        align-items: center;

    }
    .links {
        display: grid;
        justify-content: space-around;
        gap: 2rem;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        a {
            color: white;
            font-family: "Montserrat";
        }
    }
    .copyright {
        color: white;
        display: flex;
        justify-content: end;
        align-items: center;
        flex-direction: column;
        text-align: center;
        gap: 1rem;
        a {
            color: white;
        }
    }

    @media (max-width: 900px) {
        padding: 0 2rem;
        .content {
            grid-template-columns: 1fr;
        }
        .terms {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
        .links {
            grid-template-columns: 1fr 1fr 1fr;
        }
        .copyright {
            justify-content: center;
        }
    }
`

export default Footer;