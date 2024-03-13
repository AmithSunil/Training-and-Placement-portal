import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import cx from "classnames";

import './sidebar.css';

const menuItems = [
  { title: "Drives", icon:"" },
  { title: "Profile", icon: "" },
  { title: "Notifications", icon: "" },
  { title: "Applied drives", icon: "" },

];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);



  return (
    <div className={cx("sidebar", { "sidebar-closed": !isOpen })}>
      <button className={"sidebar__button"} onClick={() => setIsOpen(!isOpen)}>
       </button>
      <ul>
        {menuItems.map(item => (
          <li key={item.title}>
            <div className={"sidebar__listItem"}>
               <CSSTransition
                in={isOpen}
                timeout={200}
                classNames={"fade"}
                unmountOnExit
              >
                <span>{item.title}</span>
              </CSSTransition>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
