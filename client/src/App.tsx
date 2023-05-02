import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex min-h-[calc(100vh-4.5rem)] items-center justify-center">
                <h1 className="rounded-xl border bg-gray-200 px-8 py-4 text-lg font-bold text-gray-700 shadow">
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
          <Route />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
