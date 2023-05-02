import { Link, NavLink } from "react-router-dom";
import blueLogo from "../../assets/logos/white-logo-blue-bg.png";

function Header() {
  return (
    <header className="flex flex-col items-center gap-2 bg-speakers-corner-blue p-2 sm:flex-row sm:items-center sm:justify-between">
      <Link to="/">
        <img className="h-14 w-fit" src={blueLogo} alt="speakers corner logo" />
      </Link>
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-sm text-white sm:gap-3">
        <NavLink
          className="rounded border border-white  px-2 py-1 hover:bg-white hover:text-speakers-corner-blue"
          to="/"
          end
        >
          Home
        </NavLink>
        <NavLink
          className="rounded border border-white  px-2 py-1 hover:bg-white hover:text-speakers-corner-blue"
          to="/create-room"
        >
          Create Room
        </NavLink>
        <NavLink
          className="rounded border border-white  px-2 py-1 hover:bg-white hover:text-speakers-corner-blue"
          to="/profile"
        >
          Profile
        </NavLink>
        <NavLink
          className="rounded border border-white  px-2 py-1 hover:bg-white hover:text-speakers-corner-blue"
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          className="rounded border border-white  px-2 py-1 hover:bg-white hover:text-speakers-corner-blue"
          to="/sign-up"
        >
          Sign Up
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
