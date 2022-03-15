import "./HeaderTop.style.scss";
import {
  FaCreditCard,
  FaEmpire,
  FaMapPin,
  FaLock,
  FaExchangeAlt,
  FaPhone,
} from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="header-top">
      <div className="header-top__container">
        <div className="contents-left">
          <div className="item finalcial-services">
            <FaCreditCard />
            &nbsp; finalcial services
          </div>
          <div className="item wrewards">
            <FaEmpire />
            &nbsp; wrewards
          </div>
          <div className="item stores">
            <FaMapPin />
            &nbsp; stores
          </div>
          <div className="item customer-support">
            <FaPhone />
            &nbsp; customer support
          </div>
        </div>
        <div className="item contents-right">
          <div className="item safe-secure">
            <FaLock />
            &nbsp; safe & secure
          </div>
          <div className="item easy-returns">
            <FaExchangeAlt />
            &nbsp; easy returns
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
