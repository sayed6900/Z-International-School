import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import LogoBar from "../LogoBar/LogoBar";


const Root = () => {
    return (
        <div className=" lg:ml-10 lg:mr-10 lg:mb-10">
            <LogoBar></LogoBar>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;