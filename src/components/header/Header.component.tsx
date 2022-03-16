import HeaderTop from "./header-top";
import HeaderMid from "./header-mid";
import HeaderBottom from "./header-bottom";

const Header = () => {
  return (
    <div className="header">
      <HeaderTop />
      <HeaderMid />
      <HeaderBottom />
    </div>
  );
};

export default Header;
