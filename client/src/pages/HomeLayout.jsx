import { Outlet } from "react-router-dom";
import { useContext, createContext, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const uiContext = createContext();

const HomeLayout = () => {

    const [showSidebar, setShowSidebar] = useState(false);

    const location = window.location.pathname;
    
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    }

    return (
        <uiContext.Provider value={{
            showSidebar,
            toggleSidebar,
            location   
        }

        }>
            <main>
                <Navbar/>
                <Outlet/>
                <Footer/>
            </main>
        </uiContext.Provider>

    );
};

export const useUiContext = () => useContext(uiContext);

export default HomeLayout;