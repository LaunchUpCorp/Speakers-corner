import { Link } from "react-router-dom";

interface Props {
  label: string;
  path: string;
  children: JSX.Element;
}

function LinkCard({ label, path, children }: Props) {
  return (
    <Link
      className="flex h-1/2 min-h-[14.5rem] w-full animate-cardHoverOff flex-col items-center justify-center gap-6 rounded-xl border-2 border-sky-300 bg-sc-blue text-white hover:animate-cardHover hover:bg-sc-dark-blue md:h-full md:min-h-[27.5rem] md:gap-10"
      to={path}
    >
      {children}
      <h2 className="text-2xl uppercase md:text-3xl">{label}</h2>
    </Link>
  );
}

export default LinkCard;
