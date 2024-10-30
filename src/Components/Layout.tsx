import NavBar from "./NavBar";
import Footer from "./Footer";

import HeaderBar from "./HeaderBar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <HeaderBar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
