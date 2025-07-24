import { Link, NavLink } from "react-router"
import { Gamepad2 } from "lucide-react"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "~/components/ui/menubar"
export default function Navbar () {
    return (
        <header className="mb-14 z-10 fixed w-full">
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger>
                        <Link to='/' className="flex justify-between items-center gap-2 font-bold">
                            <Gamepad2 /> 
                            <span>Gameshelf</span>
                        </Link>
                    </MenubarTrigger>
                    <MenubarTrigger>
                        <NavLink className={({isActive}) => isActive ? 'text-black' : 'text-gray-600'} to="/">Discorver</NavLink>
                    </MenubarTrigger>
                    <MenubarTrigger>
                        <NavLink className={({isActive}) => isActive ? 'text-black' : 'text-gray-600'} to="collection">Collection</NavLink>
                    </MenubarTrigger>
                    <MenubarTrigger>
                        <NavLink className={({isActive}) => isActive ? 'text-black' : 'text-gray-600'} to="wishlist">Wishlist</NavLink>
                    </MenubarTrigger>
                </MenubarMenu>
            </Menubar>
        </header>
    )
}