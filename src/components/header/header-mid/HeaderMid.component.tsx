import "./HeaderMid.style.scss";
import { FaSearch } from "react-icons/fa";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";

const HeaderMid = () => {
  return (
    <div className="header-mid">
      <div className="header-mid__container">
        <div className="header-mid__logo">
          <Link to="/">
            <img src={logo} alt="aluminum" />
          </Link>
        </div>
        <div className="header-mid__actions">
          <div className="groups-search">
            <input type="text" placeholder="Search item ..." />
            <button>
              <FaSearch />
            </button>
          </div>
          <div className="user-action">
            <p className="login">Login</p>
            <p className="register">Register</p>
          </div>
        </div>
      </div>
    </div>
    // <>
    //   <Row>
    //     <Col>
    //       <img src={logo} alt="aluminum" />
    //     </Col>
    //     <Col>
    //       <div className="groups-search">
    //         <input type="text" placeholder="Search item ..." />
    //         <button>
    //           <FaSearch />
    //         </button>
    //       </div>
    //     </Col>
    //     <Col>
    //       <div className="user-action">
    //         <p className="login">Login</p>
    //         <p className="register">Register</p>
    //       </div>
    //     </Col>
    //   </Row>
    // </>
  );
};

export default HeaderMid;
