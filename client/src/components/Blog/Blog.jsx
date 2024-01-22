import styled from "styled-components";
import { useInView } from "react-intersection-observer";


const Blog = () => {

    const {ref: h1Ref, inView: myElementIsVisible} = useInView()

    return(
        <Wrapper>
            <div className="content">
                <header>
                    <h1 ref={h1Ref} className={`${myElementIsVisible ? "animate" : "hide"}`}>BLOG</h1>       
                </header>
            </div>
        </Wrapper>
        
    )
}

const Wrapper = styled.div`
    background-color: var(--background-secondary-color);
    height: 100vh;

    header {
        max-width: 1200px;
    }
    h1 {
        width: fit-content;
    }

    .hide {
        visibility: hidden;
        opacity: 0;
    }

    .animate {
        animation: left-to-right 0.5s forwards 0.5s;
        transform: scaleX(0);
        transform-origin: left;
    }

    .animate::before {
        position: absolute;
        width: 100%;
        height: 100%;
        content: "";
        background-color: var(--text-color);
        animation: right-to-left 0.5s forwards 1s;
        transform: scaleX(1);
        transform-origin: right;
    }

    @keyframes left-to-right {
        100% {
            transform: scaleX(1);
        }

    }

    @keyframes right-to-left {
        100% {
            transform: scaleX(0);
        }
    }
    header.grow::before {
        content: "";
        background-color: var(--background-footer-color);
        height: 2px;
        width: 100%;
        position: absolute;
        top: 42%; 
        left: 0;
        z-index: 0;
        animation: grow-bar 1s 1s forwards;
        transform-origin: left;
        opacity: 0;
    }
    header.grow::after {
        content: "";
        background-color: var(--background-footer-color);
        height: 2px;
        width: 100%;
        position: absolute;
        top: 42%; 
        right: 0;
        z-index: 0;
        animation: grow-bar 1s 1s forwards;
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
`


export default Blog;