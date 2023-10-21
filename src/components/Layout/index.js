import { BrowserRouter } from "react-router-dom";
import Routers from "../../routers";
import Footer from "../Footer";
import Header from "../Header";

const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div>
          <Routers />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Layout;
