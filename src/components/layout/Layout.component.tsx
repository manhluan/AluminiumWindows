import "./Layout.style.scss";
import Header from "components/header";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <div className="layout">{children}</div>
    </>
  );
};

export default Layout;
