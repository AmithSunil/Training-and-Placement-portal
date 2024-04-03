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
];

const Sidebar = ({ USER }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={cx("sidebar", { "sidebar-closed": !isOpen })}>
      <button className={"sidebar__button"} onClick={() => setIsOpen(!isOpen)}>
        <AiOutlineMenu style={{ height: 30, width: 30 }} />
      </button>

 
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
  );
};

export default Sidebar;
