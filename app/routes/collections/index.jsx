import { Welcome } from "../../welcome/welcome";

export function meta() {
  return [
    { title: "Collection" },
    { name: "description", content: "Welcome to Collections!" },
  ];
}

export default function Home() {
  return <Welcome text="Welcome to Collections"/>;
}
