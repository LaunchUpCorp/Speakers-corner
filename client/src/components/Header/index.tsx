import { Link } from "react-router-dom";
import blueLogo from "../../assets/logos/white-logo-blue-bg.png";
import NavItem from "./NavItem";

function Header() {
  return (
    <header className="flex justify-center bg-sc-blue p-2">
      <div className="flex w-full max-w-7xl flex-col items-center gap-2 md:flex-row md:items-center md:justify-between">
        <Link to="/">
          <img
            className="h-14 w-fit"
            src={blueLogo}
            alt="speakers corner logo"
          />
        </Link>
        <nav className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-sm text-white md:gap-3">
          <NavItem label="Home" path="/" endPath={true} />
          <NavItem label="Create Room" path="/create-room" endPath={true} />
          <NavItem label="Profile" path="/profile" endPath={true} />
          <NavItem label="Login" path="/login" endPath={true} />
          <NavItem label="Sign Up" path="/signup" endPath={true} />
        </nav>
      </div>
    </header>
  );
}

export default Header;
