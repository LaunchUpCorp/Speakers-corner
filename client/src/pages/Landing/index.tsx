import { AccountCircle, AddCircle } from "@mui/icons-material";
import Header from "../../components/Header";
import LinkCard from "./LinkCard";

function Landing() {
  return (
    <>
      <Header />
      <main className="flex justify-center">
        <div className="flex min-h-[calc(100vh-6.875)] w-full max-w-7xl flex-col items-center gap-4 p-4 md:min-h-[calc(100vh-4.5rem)]">
          <h1 className="text-3xl font-bold text-gray-700">Home</h1>
          <div className="flex h-[calc(100vh-12.125rem)] w-full flex-col gap-4 text-[7.5rem] md:h-[calc(100vh-9.75rem)] md:flex-row md:text-[10rem]">
            <LinkCard label="Create Room" path="/create-room">
              <AddCircle fontSize="inherit" />
            </LinkCard>
            <LinkCard label="View Profile" path="/profile">
              <AccountCircle fontSize="inherit" />
            </LinkCard>
          </div>
        </div>
      </main>
    </>
  );
}

export default Landing;
