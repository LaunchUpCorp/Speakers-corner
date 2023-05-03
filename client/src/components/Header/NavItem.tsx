import { NavLink } from "react-router-dom";

interface Props {
  label: string;
  path: string;
  endPath: boolean;
}

function NavItem({ label, path, endPath }: Props) {
  return endPath ? (
    <NavLink
      className="rounded border border-white  px-2 py-1 hover:bg-white hover:text-sc-blue"
      to={path}
      end
    >
      {label}
    </NavLink>
  ) : (
    <NavLink
      className="rounded border border-white  px-2 py-1 hover:bg-white hover:text-sc-blue"
      to={path}
    >
      {label}
    </NavLink>
  );
}

export default NavItem;
