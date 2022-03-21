import "./Layout.style.scss";
import Header from "components/header";
import Footer from "components/footer";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <div className="layout">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
