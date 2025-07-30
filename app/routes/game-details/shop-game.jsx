import { useOutletContext } from "react-router";

export async function loader({params}) {
    const apiKey = import.meta.env.VITE_RAWG_API_KEY;
  const response = await fetch(
    `https://api.rawg.io/api/games/${params.id}/stores?key=${apiKey}`,
  );
  const data = await response.json();
  return {results: data.results};
}

export default function ShopGame({loaderData}) {
    const game = useOutletContext()
    const {results} = loaderData;
    return (
        <div className="py-4 flex flex-col gap-4">
            <h2>Links to stores that sell {game.name}</h2>
            <div className="flex flex-col gap-2">
                {results.map(result => {
                    return <a className="text-gray-700 underline" key={result.id} href={result.url}>{result.url}</a>
                })}
            </div>
        </div>
    )
}