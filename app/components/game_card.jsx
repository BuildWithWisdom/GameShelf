import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
export default function GameCard({ game }) {
  const ratings = (rating) => {
    if (rating === 5) {
      return <span className="text-amber-500">★★★★★</span>;
    } else if (rating > 4 && rating < 5) {
      return <span className="text-amber-500">★★★★☆</span>;
    } else if (rating > 3 && rating < 4) {
      return <span className="text-amber-500">★★★☆☆</span>;
    } else if (rating > 2 && rating < 3) {
      return <span className="text-amber-500">★★☆☆☆</span>;
    } else if (rating > 1 && rating < 2) {
      return <span className="text-amber-500">★☆☆☆☆</span>;
    } else {
      return <span className="text-amber-500">☆☆☆☆☆</span>;
    }
  };
  return (
    <Card className="transition duration-300 ease-in hover:shadow-2xl group">
      <CardHeader>
        <div className="overflow-hidden rounded-t-lg">
          <img
            className="transition duration-300 ease-in hover:scale-105 group-hover:scale-105 max-md:h-85 h-80 w-full pb-8"
            src={game.background_image}
            alt="Game image"
          />
        </div>
        <CardTitle>
          <h2>{game.name}</h2>
        </CardTitle>
        <CardDescription className="flex justify-start items-center gap-2 text-clip">
          {game.genres.map((genre) => {
            return <p key={genre.id}>{genre.name}</p>;
          })}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div>
          {ratings(game.rating)}
          <span className="pl-2">{game.rating}</span>
        </div>
        <div className="flex justify-start items-center flex-wrap gap-2 pt-3">
          {(game.parent_platforms ?? []).slice(0, 3).map((platform) => {
            return (
              <span
                key={platform.platform.id}
                className="bg-gray-100 text-sm font-sans self-center font-bold px-2 py-0.5 rounded-lg text-gray-600"
              >
                {platform.platform.name}
              </span>
            );
          })}
        </div>
      </CardContent>
      <CardFooter>
        <CardAction className=" flex cursor-pointer flex-col items-center justify-center py-1.5 rounded-md bg-black w-full">
          <button className="text-white cursor-pointer text-sm font-sans">
            <span className="pr-4">+</span>
            Add to collection
          </button>
        </CardAction>
      </CardFooter>
    </Card>
  );
}
