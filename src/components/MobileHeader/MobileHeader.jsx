import { useState } from "react";
import LoggedMenu from "../LoggedMenu/LoggedMenu";
import "./MobileHeader.scss";

const MobileHeader = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className="mobile-header">
      <div className="left">
        <h2>Virtual Curriculum</h2>
      </div>
      <div className="logo">
        <img src="./logo192.png" alt="logo" />
      </div>
      <div className="right">
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </div>
      <div className={menu_class}>
        <LoggedMenu/>
      </div>
    </div>
  );
};

export default MobileHeader;
