import styled from "styled-components";
import profile from "../../assets/images/milvezesmae-1.png"
import { Link } from "react-router-dom";
import {useInView} from "react-intersection-observer";
import sobre from "../../assets/images/sobre.png";
import brush from "../../assets/images/brush2.png";

const About = () => {

    const {ref: h1Ref, inView: h1IsVisible}  = useInView();
    const {ref: barRef, inView: barIsVisible}  = useInView();

    return(
        <Wrapper id="sobre-mim">
            <header ref={barRef} className={`${barIsVisible ? "grow" : "hide"}`}>
                <h2 ref={h1Ref} className={`${h1IsVisible ? " animat" : "hide"}`}><img src={sobre}/></h2>                
            </header>

            <div className="content">
                <img className="about-brush" src={brush} alt="" />
                <div className="image">
                    <img src={profile} alt="" />
                </div>
                <div className="description">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique earum, totam corrupti repudiandae sed excepturi asperiores esse, reprehenderit quidem impedit unde nulla deserunt minima distinctio nisi inventore doloremque aperiam consectetur?
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae minima, quos porro ratione totam perferendis necessitatibus eaque saepe eum obcaecati!
                    </p>
                    <Link to="./sobre-mim">Saiba Mais</Link>
                </div>
            </div>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    background: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-top: 3rem;
    padding-bottom: 3rem;
    .about-brush {
        position: absolute;
        width: 20rem;
        bottom: -5rem;
        right: 0rem;
    }
    .hide {
        opacity: 0;
    }
    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        max-width: 1200px;
        position: relative;
    }
    .image {
        border-radius: 10rem !important;
    }
    img {

    }

    .description {
        line-height: 2;
        display: flex;
        flex-direction: column;
    }


    a {
        margin-top: 1rem;
        background-color: var(--background-secondary-color);
        max-width: 50%;
        font-family: "Montserrat";
        text-align: center;
        transition: 0.3s;
        color: black;
        padding: 8px 5px;
        border-radius: 1rem;
    }

    a:hover {
        color: white;
        box-shadow: var(--shadow-1);
        background-color: var(--background-footer-color);
        scale: 1.1;
    }

    header {
        position: relative;
        max-width: 1200px;
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
        
    }
    h2 {
        z-index: 1;
        background-color: white;
        padding: 0 1rem;
    }
    header h2 img {
        width: 100%;
    }

    .animat {
        animation: popUp cubic-bezier(0.645, 0.045, 0.355, 1) 1s;
    }

    @keyframes popUp {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }

    @media (max-width: 900px) {
        .content {
            flex-direction: column;
        }
        .description {
            padding: 3rem;
        }
    }
`

export default About;