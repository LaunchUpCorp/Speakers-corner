import { Link, useNavigate } from "react-router-dom";
import { Error, Home, ArrowBack } from "@mui/icons-material";
import Header from "../../components/Header";

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main className="flex justify-center">
        <div className="flex min-h-[calc(100vh-6.875rem)] w-full max-w-7xl flex-col items-center justify-center gap-4 p-4 md:min-h-[calc(100vh-4.5rem)]">
          <h1 className="text-center text-xl font-bold italic text-gray-700">
            Sorry, the page requested does not exist
          </h1>
          <div className="flex gap-4">
            <div
              className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-sky-300 bg-sc-blue px-4 py-2 text-white hover:bg-sc-dark-blue"
              onClick={() => navigate(-1)}
            >
              <ArrowBack />
              <span className="text-sm uppercase">Go Back</span>
            </div>
            <Link
              className="flex items-center justify-center gap-2 rounded-lg border border-sky-300 bg-sc-blue px-4 py-2 text-white hover:bg-sc-dark-blue"
              to="/"
            >
              <Home />
              <span className="text-sm uppercase">Go Home</span>
            </Link>
          </div>
          <div className="w-full border-2 border-sc-blue">
            <div className="flex h-[50vh] animate-xTranslation justify-end">
              <div className="flex animate-yTranslation items-end text-[3.375rem] text-sc-blue">
                <Error fontSize="inherit" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default NotFound;
