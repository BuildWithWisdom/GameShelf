import { Users } from 'lucide-react';
export async function loader({params}) {
    const apiKey = import.meta.env.VITE_RAWG_API_KEY
    const response = await fetch(`https://api.rawg.io/api/games/${params.id}?key=${apiKey}`)
    const data = await response.json()
    return data
}

export default function GameDetails ({loaderData}) {
    const game = loaderData
    console.log(game)
    const ratings = (rating) => {
    if (rating === 5) {
      return <span className="text-amber-500 2xl:text-base">★★★★★</span>;
    } else if (rating > 4 && rating < 5) {
      return <span className="text-amber-500 2xl:text-base">★★★★☆</span>;
    } else if (rating > 3 && rating < 4) {
      return <span className="text-amber-500 2xl:text-base">★★★☆☆</span>;
    } else if (rating > 2 && rating < 3) {
      return <span className="text-amber-500 2xl:text-base">★★☆☆☆</span>;
    } else if (rating > 1 && rating < 2) {
      return <span className="text-amber-500 2xl:text-base">★☆☆☆☆</span>;
    } else {
      return <span className="text-amber-500 2xl:text-base">☆☆☆☆☆</span>;
    }
  };
    return (
        <>
        <div className="flex flex-col xl:flex-row gap-6">
            <div className="">
                <img className="max-sm:h-105 max-lg:h-150 rounded-md" src={game.background_image} alt={game.name + 'image'} />
            </div>
            <div className="">
                <div className="">
                    <h2 className='text-xl pb-2'>{game.name}</h2>
                <div className="flex gap-1 pb-3 flex-wrap">
                    {game.parent_platforms.map(p => {
                    return <p className='text-sm text-gray-600 bg-gray-100 font-sans px-2 py-1 rounded-md' key={p.platform.id}>{p.platform.name}</p>
                })}
                </div>
                <p className='pb-2'>
                    <span>{ratings(game.rating)}</span>
                    <span className='text-sm pl-2 text-gray-600'>{game.rating}/5.0</span>
                </p>
                </div>
                <div className="">
                    <div className='flex gap-2 items-center text-sm'>
                            <Users size={16}/>
                            <span className='text-gray-600'>Developers:</span>
                            {game.developers.map(dev => {
                        return <span className='text-gray-600 text-sm bg-gray-100 font-sans px-2 py-1 rounded-md' key={dev.id}>{dev.name}</span>
                    })}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}