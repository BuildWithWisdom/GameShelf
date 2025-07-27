import { Outlet } from "react-router";
import Navbar from "./Header";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="pt-22 px-7 sm:px-16 pb-8">
        <Outlet />
      </main>
    </>
  );
}
