import { Link } from "react-router-dom";
import blueLogo from "../../assets/logos/white-logo-blue-bg.png";
import NavItem from "./NavItem";

function Header() {
  return (
    <header className="flex flex-col items-center gap-2 bg-sc-blue p-2 sm:flex-row sm:items-center sm:justify-between">
      <Link to="/">
        <img className="h-14 w-fit" src={blueLogo} alt="speakers corner logo" />
      </Link>
      <nav className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-sm text-white sm:gap-3">
        <NavItem label="Home" path="/" endPath={true} />
        <NavItem label="Create Room" path="/create-room" endPath={true} />
        <NavItem label="Profile" path="/profile" endPath={true} />
        <NavItem label="Login" path="/login" endPath={true} />
        <NavItem label="Sign Up" path="/signup" endPath={true} />
      </nav>
    </header>
  );
}

export default Header;
