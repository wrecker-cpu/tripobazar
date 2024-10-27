import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
const Layout = ({ children }) => {
    return (
      <>
        <Navbar />

        <main className ="content">{children}</main>
       
      </>
    );
  };
  
  export default Layout;