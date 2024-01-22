import styled from "styled-components";
import contact from "../assets/images/contact.png"

const ContactPage = () => {
    return (
        <Wrapper>
            <div className="container-contact">

                <div className="content">
                    <header>
                        <h2>Envie uma mensagem</h2>
                        <p>Entraremos em contato o mais rápido possível</p>
                    </header>
                        <div className="form-row">
                            <input type="text" id="name" placeholder="Nome" className="form-input" required/>                        
                        </div>
                        <div className="form-row">
                        
                            <input type="email" id="email" placeholder="E-mail" className="form-input" required />
                        </div>
                        <div className="form-row">
                           
                            <input type="text" id="phone" placeholder="Telefone" className="form-input" required />                        
                        </div>

                        <textarea className="form-textarea" name="" id="message" cols="30" rows="10" placeholder="Escreva sua mensagem"></textarea>
                        <button type="submit" className="btn btn-block">Enviar</button>
                </div>                
            </div>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    header {
        margin-bottom: 1rem;
    }

    .container-contact {
        max-width: 1200px;
        display: flex;
        justify-content: center;
        padding: 2rem;
    }
    .content {
        box-shadow: var(--shadow-2);
        padding: 2rem;
    }

    input {
        font-family: "Montserrat";
    }

    .img {
        width: 100%;
    }
    .image {
    
    }

`

export default ContactPage;