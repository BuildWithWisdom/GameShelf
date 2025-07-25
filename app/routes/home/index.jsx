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
  return {gamesCount: data.count, games: data.results, nextPage: data.next ? page + 1 : null, prevPage: data.previous ? page - 1 : null}
}

export default function Home({loaderData}) {
  const {gamesCount, games, nextPage, prevPage} = loaderData
  const totalPages = Math.ceil(gamesCount/games.length)
  return (
    <>
    <div className="pb-8">
        <h1 className="font-sans text-2xl font-bold pb-1">Discover Games</h1>
        <p className="font-light text-gray-600">Find your next favorite game from our curated collection</p>
    </div>
    <section className="grid max-md:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {games.map(game => {
        return <GameCard key={game.id} game={game}/>
      })}
    </section>
    { totalPages > 1 &&
      <section className="mt-4">
        <NextPrevPage nextPage={nextPage} prevPage={prevPage} totalPages={totalPages}/>
      </section>
    }
    </>
  );

}
