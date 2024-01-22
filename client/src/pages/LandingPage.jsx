import styled from "styled-components";
import HomeCover from "../components/HomeCover/HomeCover";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Youtube from "../components/Youtube/Youtube";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";


const LandingPage = () => {
  return (
    <Wrapper id="home">
        <HomeCover/>
        <About/>
        <Blog/>
        <Youtube/>
        <Contact/>
    </Wrapper>  
  )
}

const Wrapper = styled.div`
  overflow: hidden;

`

export default LandingPage;