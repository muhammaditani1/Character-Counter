import Logo from "../characterLogo.png";
import "./Header.css";
export default function Header() {
  return (
    <div className="header_body">
      <div className="header_logo">
        <img src={Logo} alt="logo" />{" "}
      </div>
      <div className="Header_title">
        <h3>Character Counter</h3>
      </div>
    </div>
  );
}
