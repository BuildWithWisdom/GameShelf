import { Welcome } from "../../welcome/welcome";

export function meta() {
  return [
    { title: "Wishlist" },
    { name: "description", content: "Welcome to Wishlist" },
  ];
}

export default function Home() {
  return <Welcome text="Welcome to wishlist" />;
}
