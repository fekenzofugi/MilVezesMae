import { useEffect, useState } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import last_videos from "../../assets/images/last_video.png";

const Youtube = () => {

    const {ref: h1Ref, inView: h1IsVisible}  = useInView();
    const {ref: barRef, inView: barIsVisible}  = useInView();

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=6&playlistId=UUENOHn8gcJ8jtEas7dkrICQ&key=AIzaSyBcEMuXXrE6YsWZzfti0b3FlQERMN-XJEA").then(res => res.json()).then(data => {
            setPosts(data.items);
        })        
    }, [])


    return (
        <Wrapper>
            <header ref={barRef} className={`${barIsVisible ? "grow" : "hide"}`}>
                <h2 ref={h1Ref} className={`${h1IsVisible ? " animat" : "hide"}`}><img src={last_videos}/></h2>                
            </header>
            <div className="content">{posts && posts.map((obj) => 
            {
                return(
                    <div className="video" key={obj.snippet.title}>
                
                        <h5 key={obj.snippet.title}>{obj.snippet.title}</h5>
                        <a href={`https://www.youtube.com/watch?v=${obj.snippet.resourceId.videoId}`}><img className="img" src={`${obj.snippet.thumbnails.high.url}`} alt="" />  </a>
                
                    </div>
                ) 
            })}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
    background-color: white;

    .content {
        max-width: 1200px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 3rem;
        padding: 0 2rem;
    }

    .hide {
        opacity: 0;
    }
    header {
        position: relative;
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
        align-items: center;
        max-width: 1200px;
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
    .video {
    }
    a {
        display: flex;
        justify-content: center;
    }
    h5 {
        height: 3rem;
        margin-bottom: 2rem;
        font-family: "Montserrat";
        text-align: center;
        font-size: 1.1rem;
        border-bottom: 1px solid black;
    }
    .img {
        transition: 0.3s;
        width: 100%;
        border-radius: 1rem;
        border: 1px solid transparent;
    }

    .img:hover {
        scale: 1.05;
        border: 2px solid var(--background-secondary-color);
    }
    @media (max-width: 900px) {
        .content {
            grid-template-columns: 1fr;
        }
    }
`

export default Youtube;