import { Calendar, Heart, Plus, Users } from "lucide-react";
import { NavLink, Outlet } from "react-router";
export async function loader({ params }) {
  const apiKey = import.meta.env.VITE_RAWG_API_KEY;
  const response = await fetch(
    `https://api.rawg.io/api/games/${params.id}?key=${apiKey}`,
  );
  const data = await response.json();
  return data;
}

export default function GameDetails({ loaderData }) {
  const game = loaderData;

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
      <div className="flex flex-col lg:flex-row gap-6">
        <div>
          <img
            className="max-sm:h-105 max-lg:h-115 lg:h-90 max-2xs:h-80 lg:w-150 rounded-md"
            src={game.background_image}
            alt={game.name + "image"}
          />
        </div>
          
          <div>
            <div>
            <h2 className="text-xl pb-2">{game.name}</h2>
            <div className="flex gap-1 pb-3 flex-wrap">
              {game.parent_platforms.map((p) => {
                return (
                  <p
                    className="text-sm text-gray-600 bg-gray-100 font-sans px-2 py-1 rounded-md"
                    key={p.platform.id}
                  >
                    {p.platform.name}
                  </p>
                );
              })}
            </div>
            <p className="pb-2">
              <span>{ratings(game.rating)}</span>
              <span className="text-sm pl-2 text-gray-600">
                {game.rating}/5.0
              </span>
            </p>
          </div>
          <div>
            <div>
                <div className="flex gap-2 items-center flex-wrap text-sm pb-2">
              <Users size={16} />
              <span className="text-gray-600">Developers:</span>
              {game.developers.map((dev) => {
                return (
                  <span
                    className="text-gray-600 text-sm bg-gray-100 font-sans px-2 py-1 rounded-md"
                    key={dev.id}
                  >
                    {dev.name}
                  </span>
                );
              })}
            </div>

            <div className="flex gap-2 items-center text-sm pt-1">
                <Calendar size={16}/>
                <span className="text-gray-600">Released:</span>
                <span className="text-sm text-gray-600">{game.released}</span>
            </div>
            </div>
            </div>

            <div className="py-3 flex flex-col xs:flex-row justify-between gap-4 xs:items-center flex-wrap">
              <button className="max-lg:text-sm text-sans cursor-pointer flex items-center justify-center gap-2 xs:flex-2/3 text-white bg-black rounded-md px-2 py-1.5 hover:bg-white hover:border hover:border-gray-200 hover:text-black transition-all duration-300 ease-in">
                <Plus size={15}/>
                <span>Add to collection</span>
              </button>
              <button className="max-lg:text-sm text-sans cursor-pointer flex items-center justify-center xs:justify-around gap-2 bg-white rounded-md border border-gray-200 px-3 py-1.5 hover:bg-black hover:text-white transition-all duration-300 ease-in">
              <Heart size={15}/>
              <span>Add to wishlist</span>
              </button>
            </div>
          </div>

      </div>
      <div className="flex justify-between items-center bg-gray-100 rounded-xl py-1 mt-5">
        <NavLink end className={({isActive}) => isActive ? 'bg-white rounded-2xl px-10 py-2 transition-all duration-100 ease-in-out max-sm:px-5 max-sm:text-sm max-xs:px-2' : 'px-10 py-2 transition-all duration-200 ease-in-out max-sm:px-5 max-sm:text-sm'} to={`/games/${game.id}`}>Overview</NavLink>
        <NavLink className={({isActive}) => isActive ? 'bg-white rounded-2xl px-10 py-2 transition-all duration-100 ease-in-out max-sm:px-5 max-sm:text-sm max-xs:px-2' : 'px-10 py-2 transition-all duration-200 ease-in-out max-sm:px-5 max-sm:text-sm'} to="screenshots">Screenshots</NavLink>
          <NavLink className={({isActive}) => isActive ? 'bg-white rounded-2xl px-10 py-2 transition-all duration-100 ease-in-out max-sm:px-5 max-sm:text-sm max-xs:px-2' : 'px-10 py-2 transition-all duration-200 ease-in-out max-sm:px-5 max-sm:text-sm'} to="shop-game">Shops</NavLink>
      </div>

      <section>
        <Outlet context={game}/>
      </section>
    </>
  );
}
