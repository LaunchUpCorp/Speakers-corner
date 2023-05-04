import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Header />
              <div className="flex min-h-[calc(100vh-4.5rem)] items-center justify-center">
                <h1 className="rounded-xl border bg-gray-200 px-8 py-4 text-lg font-bold text-gray-700 shadow">
                  Hello World !
                </h1>
              </div>
            </main>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
