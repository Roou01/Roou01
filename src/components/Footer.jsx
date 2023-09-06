import { telegram, vk, instagram, youtube } from "./variables/svgs.js";
import "./Footer.scss";

function Footer(props) {
  return (
    <footer className="desktop-footer">
      <p>About me</p>
      <nav>
        <ul>
          <li className={props.activeClassWeb} onClick={props.webSectionActive}>
            WebDev
          </li>
          <li
            className={props.activeClassHome}
            onClick={props.homeSectionActive}
          >
            Home
          </li>
          <li
            className={props.activeClassPhoto}
            onClick={props.photoSectionActive}
          >
            Photo
          </li>
        </ul>
      </nav>
      <div className="socials">
        <a href="https://t.me/Roou02" target="_blank" rel="noreferrer">
          {telegram}
        </a>
        <a href="https://vk.com/roou01" target="_blank" rel="noreferrer">
          {vk}
        </a>
        <a
          href="https://instagram.com/roou01?igshid=NTc4MTIwNjQ2YQ=="
          target="_blank"
          rel="noreferrer"
        >
          {instagram}
        </a>
        <a
          href="https://youtube.com/@beligrim"
          target="_blank"
          rel="noreferrer"
        >
          {youtube}
        </a>
      </div>
    </footer>
  );
}
export default Footer;
