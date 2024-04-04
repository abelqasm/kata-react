import Header from "./components/layouts/Header";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="w-full flex justify-center">
        <Outlet />
      </main>
      <footer className="absolute bottom-0 flex justify-center gap-10 bg-gray-200 w-full p-2">
        <span className="text-xs">© 2024 Belcom. All rights reserved</span>
      </footer>
    </>
  );
};

export default App;
