import { Outlet } from "react-router";
import Navbar from "./Header";
import { SidebarProvider } from "~/components/ui/sidebar";

export default function Layout() {
  return (
    <>
      <SidebarProvider>
        <Navbar />
        <main className="pt-22 px-7 sm:px-16 lg:px-24 2xl:px-46 pb-8 w-full">
          {/* Renders the content of the current route. */}
          <Outlet />
        </main>
      </SidebarProvider>
    </>
  );
}