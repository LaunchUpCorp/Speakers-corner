import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import RoleAssignmentPage from "./pages/RoleAssignmentPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="*"
          element={
            <main>
              <Header />
              <div className="flex min-h-[calc(100vh-4.5rem)] items-center justify-center">
                <h1 className="rounded-xl border bg-gray-200 px-8 py-4 text-lg font-bold text-gray-700 shadow">
                  Page Not Found
                </h1>
              </div>
            </main>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/role-assignment" element={<RoleAssignmentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
