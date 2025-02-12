import Navbar from "../navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="contendor-principal min-h-screen">
                {children}
            </div>
            <Footer />
        </>
        
    );
};

export default Layout;