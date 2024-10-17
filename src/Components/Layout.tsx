import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout: React.FC <{children: React.ReactNode }> = ({children}) => {
    return ( 
        <>
        <NavBar />
        <main>{children}</main>
        <Footer />
        </>
     );
}
 
export default Layout;