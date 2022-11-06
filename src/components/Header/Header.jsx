import "./Header.scss";

const Header = () => {
  return (
  <div className="header">
    <div className="left">
        <h2>Virtual Curriculum</h2>
    </div>
    <img src="./logo192.png" alt="logo"/>
    <div className="right">
        <ul>
            <li>
                login    
            </li>
            <li>
                signup
            </li>
        </ul>
    </div>
  </div>)
};

export default Header;
