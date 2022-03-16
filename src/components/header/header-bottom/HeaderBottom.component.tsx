import "./HeaderBottom.style.scss";
import { dataNav } from "./HeaderBottom.config";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderBottom = () => {
  return (
    <div className="header-bottom">
      <div className="content-container">
        <ul>
          {dataNav.map((item) => {
            if (item.expand.length > 0 || item.expandMenu.length > 0)
              return (
                <li className="item-1" key={item.title}>
                  <Link to="#">
                    {item.title} <FaAngleDown />
                  </Link>

                  {item.expand.length > 0 && (
                    <ul className="menu-2">
                      {item.expand.map((item1) => (
                        <li className="item-1" key={item1}>
                          <Link to="#">{item1}</Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.expandMenu.length > 0 && (
                    <div className="menu-dropdown">
                      {item.expandMenu.map((column) => (
                        <div className="column" key={column.title}>
                          <h6>{column.title}</h6>
                          <ul>
                            {column.expand.map((row) => (
                              <li key={row}>{row}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              );

            return (
              <li className="item-1" key={item.title}>
                <Link to="#">{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HeaderBottom;
