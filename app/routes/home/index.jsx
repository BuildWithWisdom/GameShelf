import { useSearchParams } from "react-router";
import GameCard from "../../components/game_card";
import NextPrevPage from "../../components/pagination";

export function meta() {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({request}) {
  const url = new URL(request.url)
  const page = Number(url.searchParams.get('page') || 1)
  const apiKey = import.meta.env.VITE_RAWG_API_KEY
  const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}&page=${page}&page_size=30`)
  const data = await response.json()
  return {games: data.results, nextPage: data.next ? page + 1 : null, prevPage: data.previous ? page - 1 : null}
}

export default function Home({loaderData}) {
  const {games, nextPage, prevPage} = loaderData
  return (
    <>
    <section className="grid max-md:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {games.map(game => {
        return <GameCard key={game.id} game={game}/>
      })}
    </section>
    <section className="mt-4">
      <NextPrevPage nextPage={nextPage} prevPage={prevPage}/>
    </section>
    </>
  );

}
