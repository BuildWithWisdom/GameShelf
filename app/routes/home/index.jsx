import GameCard from "../../components/game_card";

export function meta() {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <section className="grid max-md:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <GameCard />
    <GameCard />
    <GameCard />
    <GameCard />
    </section>
  );

}
