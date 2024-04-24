import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import cx from "classnames";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { AiOutlineMenu } from "react-icons/ai";

const menuItems = [
  { title: "drives", icon: "" },
  { title: "profile", icon: "" },
  { title: "notifications", icon: "" },
  { title: "applied drives", icon: "" },
];

const menuItems2 = [
  { title: "create drive", icon: "" },
  { title: "active drives", icon: "" },
  {title: "create notification", icon: ""},
];

const Sidebar = ({ USER }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
  <div className={cx("sidebar", { "sidebar-closed": !isOpen })}>
      <button className={"sidebar__button"} onClick={() => setIsOpen(!isOpen)}>
        <AiOutlineMenu style={{ height: 30, width: 30 }} />
      </button>
   
  <div className="newdiv">

 <div className="side-bar">
      {USER === "admin" ? (
        <ul>
          {menuItems2.map((item) => (
            <li key={item.title}>
              <div className={"sidebar__listItem"}>
                <CSSTransition
                  in={isOpen}
                  timeout={200}
                  classNames={"fade"}
                  unmountOnExit
                  >
                  <span>
                    <Link
                      to={item.title}
                      style={{ textDecoration: "none", color: "white" }}
                      >
                      {item.title.toUpperCase()}
                    </Link>
                  </span>
                </CSSTransition>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          {menuItems.map((item) => (
            <li key={item.title}>
              <div className={"sidebar__listItem"}>
                <CSSTransition
                  in={isOpen}
                  timeout={200}
                  classNames={"fade"}
                  unmountOnExit
                  >
                  <span>
                    <Link
                      to={item.title}
                      style={{ textDecoration: "none", color: "white" }}
                      >
                      {item.title.toUpperCase()}
                    </Link>
                  </span>
                </CSSTransition>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
    <div className="log-out">
        <CSSTransition
                  in={isOpen}
                  timeout={200}
                  classNames={"fade"}
                  unmountOnExit
                  >
          {/* <i class='bx bxs-log-out'></i> */}
          <div className="log-out-inner">
          <i className='bx bxs-log-out'></i>
            <label>LOG OUT</label>
          </div>
          
        </CSSTransition>

    </div>
  </div>
      </div>
  );
};

export default Sidebar;
