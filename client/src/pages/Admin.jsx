import styled from "styled-components"
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";

const modules = {
    toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote'],
      
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
      
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'align': [] }],
        ["link", "image", "video"]
      

    ],
};

const Admin = () => {

    const [value, setValue] = useState("");

    return (
        <Wrapper>
            <div className="image"></div>
            <div className="content">
                <div className="row">
                    <div className="editor">
                        <ReactQuill 
                        theme="snow" 
                        value={value} 
                        onChange={setValue}
                        className="editor-input"
                        modules={modules}
                        />
                    </div>
                </div>
                </div>
                <button className="btn btn-block">
                    enviar
                </button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        font-family: "Montserrat";
    }
    img {
        max-width: 600px;
        max-height: 400px;
    }
    .image {
        height: 6rem;
    }
    .content {
        height: 100vh;
        position: relative;
        display: flex;
        justify-content: center;
    }
    .row {
        height: 100%;
        width: 1200px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .preview,
    .editor {
        position: relative;
        height: 100%;
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }

    .editor {
        border: 1px solid black;
        border-bottom: 0px;
    }

    .editor-input {
        height: 100%;
        width: 100%;
    }

    .btn {
        max-width: 600px;
        z-index: 2;
    }


`

export default Admin