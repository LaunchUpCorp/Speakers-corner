import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex min-h-screen items-center justify-center">
              <h1 className="mb-5 rounded-xl border bg-gray-200 px-16 py-8 text-3xl font-bold text-gray-700 shadow">
                Hello World !
              </h1>
            </div>
          }
        />
        <Route />
        <Route />
        <Route />
        <Route />
        <Route />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
