import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="flex flex-col min-h-screen p-4 overflow-auto items-center justify-center bg-gray-100">
      <header className="w-full p-4 bg-blue-600 text-white text-center">
        <h1 className="text-3xl">UFO Sightings USA</h1>
      </header>
      <Outlet />
      <footer className="w-full p-4 bg-blue-600 text-white text-center mt-auto">
        <p>&copy; 2023 UFO Sightings USA. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Layout;