import logo from "../media/logo.svg";
import "./Header.scss";

function Header() {
  return (
    <header className="desktop-header">
      <img className="desktop-header__image" src={logo} alt="logo"></img>
    </header>
  );
}
export default Header;
