import styled from "styled-components";
import cover1 from "../../assets/images/cover1.jpg";
import cover2 from "../../assets/images/cover2.jpg";
import cover3 from "../../assets/images/cover3.jpg";

const HomeCover = () => {
    return(
        <Wrapper>
            <div className="image">
                <div className="overlay">
                    <div className="description">
                        <div className="d-container">
                            <h2>" Inspirando mães a levarem a maternidade
de forma mais leve e respeitosa "</h2>
                            <button className="btn">E-book gratuíto</button>                                             
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    .image {
        background-size: cover;
        width: 100%;
        height: 100%;
        animation: changeImage 12s ease-in-out forwards infinite;
        transform-origin: top left;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
    }
    .overlay {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.4);
        color: white;
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
    }
    .btn {
        background-color: var(--background-secondary-color);
        color: black;
        font-family: "Montserrat";
        margin-top: 1rem;
        padding: 1rem 2rem;
        border-radius: 1rem;
    }
    .btn:hover {
        scale: 1.1;
        color: white;
        background-color: var(--background-footer-color);
    }
    .description {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .d-container {
        max-width: 1200px;
    }
    h2 {
        font-size: 4rem;
        width: 80%;
    }

    //animations
    @keyframes changeImage {
        0% {
            background-image: url(${cover1});
        }
        33% {
            background-image: url(${cover2});
        }
        66% {
            background-image: url(${cover3});
        }
        100% {
            background-image: url(${cover1});
        }
    }

    @media (max-width: 900px) {
        h2 {
            font-size: 2rem;
        }
        .d-container {
            padding: 2rem;
        }
    }
`;

export default HomeCover;