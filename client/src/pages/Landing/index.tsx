import { AccountCircle, AddCircle } from "@mui/icons-material";
import Header from "../../components/Header";
import LinkCard from "./LinkCard";

function Landing() {
  return (
    <main>
      <Header />
      <div className="flex min-h-[calc(100vh-6.875)] flex-col items-center gap-4 p-4 md:min-h-[calc(100vh-4.5rem)]">
        <h1 className="text-3xl font-bold text-gray-700">Home</h1>
        <div className="flex h-[calc(100vh-12.125rem)] w-full flex-col gap-4 md:h-[calc(100vh-9.75rem)] md:flex-row">
          <LinkCard label="Create Room" path="/create-room">
            <AddCircle />
          </LinkCard>
          <LinkCard label="View Profile" path="/profile">
            <AccountCircle />
          </LinkCard>
        </div>
      </div>
    </main>
  );
}

export default Landing;
