import styled from "styled-components";
import logo6 from "../../assets/images/logo6.png";
import logo3 from "../../assets/images/logo3.png";

const Logo = ({active, location}) => {
    return(
        <Wrapper>
            <div className={`${active || (location != "/") ? "image-div aactive" : "image-div"}`}>
                <img src={active || (location != "/") ? logo6 : logo3} alt="" />            
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .image-div {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        width: 13rem;

    }
    img {
        width: 100%;
    }
    .image-div.aactive {
        transform: scale(0.8);
        color: black;
    }

    @media (max-width: 900px) {
        .image-div {
            width: 13rem;
        }
    }

`

export default Logo;