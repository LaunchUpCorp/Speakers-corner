import { Link } from "react-router-dom";

interface Props {
  label: string;
  path: string;
  children: JSX.Element;
}

function LinkCard({ label, path, children }: Props) {
  return (
    <Link
      className="relative flex h-1/2 min-h-[14.5rem] w-full animate-cardHoverOff flex-col items-center justify-center rounded-xl border-2 border-sky-300 bg-sc-blue text-white hover:animate-cardHover hover:bg-[#00629e] md:h-full md:min-h-[27.5rem]"
      to={path}
    >
      <div className="mb-10 scale-[5.75]">{children}</div>
      <h2 className="absolute bottom-6 text-xl uppercase md:bottom-28 md:text-2xl">
        {label}
      </h2>
    </Link>
  );
}

export default LinkCard;
