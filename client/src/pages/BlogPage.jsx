import { Link } from "react-router-dom";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from "react";
import api from "../utils/axios";

const Blog = () => {

    const [data, setData] = useState();


    useEffect(() => {
        const fetchPosts = async () => {
            try{
                const response = await api.get("/shirts");
                setData(response.data);
                console.log(response.data);
            } catch(error) {
                console.log(error.response.data);
            }
        }
        fetchPosts();

    }, [])

    return (
        <Wrapper>
            <div className="image">

            </div>
            <div className="container-blog">
                <div className="content">
                    <header>
                        <Link className="link" to="/login">Login</Link>
                        <Link className="link" to="/registro">Registrar</Link>
                    </header>
                    {data && data.map((item) => {
                        return (
                            <div key={item.ShirtId} className="items">
                                <h1>
                                    {item.Brand}
                                </h1>
                            </div>
                        )
                    })}
                </div>
            </div>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    .content {
        display: flex;
        justify-content: center;
        max-width: 1200px;
    }
    .image {
        height: 6rem;
        background-color: red;
    }

    .container-blog {
        display: flex;
        justify-content: center;
    }

    header {
        display: flex;
        justify-content: end;
        max-width: 1200px;
    }

    .link {
        padding: 1rem;
        background-color: var(--background-secondary-color);
        border-radius: 1rem;
        transition: 0.3s;
        color: black;
    }
    .link:hover {
        background-color: var(--background-footer-color);
        color: white;
    }
`

export default Blog;