import { Link, NavLink } from "react-router";
import { Gamepad2 } from "lucide-react";
import { Menubar, MenubarMenu, MenubarTrigger } from "~/components/ui/menubar";
import { Folder, Home, Bookmark, Settings } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger
} from "~/components/ui/sidebar"
export default function Navbar({children}) {
  return (
    <header className="mb-14 z-10 fixed w-full">
      <LargeScreen />
      <SmallScreen />
      <div>
        <SidebarTrigger className="max-sm:absolute max-sm:top-2.5 max-sm:pl-1 sm:hidden"/>
        {children}
      </div>
    </header>
  );
}

export function SmallScreen() {
  const items = [
  {
    title: "Discovery",
    url: "/",
    icon: Home,
  },
  {
    title: "Collection",
    url: "collection",
    icon: Folder,
  },
  {
    title: "Wishlist",
    url: "wishlist",
    icon: Bookmark,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mb-3 mt-2">
            <Link
              to="/"
              className="flex justify-between items-center gap-2 font-bold"
            >
              <Gamepad2 />
              <span className="text-lg">Gameshelf</span>
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export function LargeScreen () {
  return (
    <Menubar className="max-sm:pl-8">
        <MenubarMenu>
          <MenubarTrigger>
            <Link
              to="/"
              className="flex justify-between items-center gap-2 font-bold"
            >
              <Gamepad2 />
              <span>Gameshelf</span>
            </Link>
          </MenubarTrigger>
          <MenubarTrigger className="max-sm:hidden">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-black" : "text-gray-600"
              }
              to="/"
            >
              Discorver
            </NavLink>
          </MenubarTrigger>
          <MenubarTrigger className="max-sm:hidden">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-black" : "text-gray-600"
              }
              to="collection"
            >
              Collection
            </NavLink>
          </MenubarTrigger>
          <MenubarTrigger className="max-sm:hidden">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-black" : "text-gray-600"
              }
              to="wishlist"
            >
              Wishlist
            </NavLink>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
  )
}
