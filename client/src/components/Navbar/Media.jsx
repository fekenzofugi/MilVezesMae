import styled from "styled-components";
import { ImInstagram } from "react-icons/im";
import { LuYoutube } from "react-icons/lu";
import Language from "./Language";


const Media = ({active, location}) => {
    return (
        <Wrapper>
            <div className="contentd">
                <a target="_blanc" href="https://www.instagram.com/milvezesmae">
                <ImInstagram className={!active ? "media1" : "media1 media-active"}/>
                </a>
                <a target="_blanc" href="https://www.youtube.com/@milvezesmae">
                <LuYoutube className={!active ? "media2" : "media2 media-active"} />
                </a>

                <Language active={active} location={location}/>
            </div>
        </Wrapper>
    )   
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        transition: 0.3s;
    }
    a::after {
        height: 0;
    }
    a:hover {
        scale: 1.1;
    }
    .contentd {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
    .media1 {
        font-size: 2rem;
    }
    .media2 {
        font-size: 2.5rem;
    }

    .media-active {
        color: black !important;
    }

    @media (max-width: 900px) {
        justify-content: end;
    }

`

export default Media;