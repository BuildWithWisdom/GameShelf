import GameDetailCard from "../../components/game-detail-card";

export async function loader ({params}) {
       const apiKey = import.meta.env.VITE_RAWG_API_KEY;
  const response = await fetch(
    `https://api.rawg.io/api/games/${params.id}/screenshots?key=${apiKey}`,
  );
  const data = await response.json();
  return {results: data.results}; 
}
export default function Overview({loaderData}) {
    const {results} = loaderData;
    return (
        <>
        <GameDetailCard>
            <h3 className="text-xl font-sans font-bold pb-4">Screenshots</h3>
            <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 max-2xs:grid-cols-2 max-xs:grid-cols-1 gap-3 mt-4">
                {results.map((result, i) => {
                    return <img key={result.id} className={`rounded-md w-full max-sm:h-30 sm:h-50 lg:h-75
                        ${i === 0 && "max-2xs:col-span-1 max-2xs:h-full max-sm:col-span-3 sm:col-span-2 max-sm:h-70 max-sm:w-full"}
                        `} 
                    src={result.image} alt="Game Screenshot" />
                })}
            </div>
        </GameDetailCard>
        </>
    )
}