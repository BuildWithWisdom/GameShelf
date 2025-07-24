import { Outlet } from "react-router";
import Navbar from "./Header";

export default function Layout() {
    return (
        <>
        <Navbar />
        <main className="pt-28 px-16 pb-8">
            <Outlet />
        </main>
        </>
    )
}