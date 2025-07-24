import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
export default function GameCard() {
    return (
        <Card className="transition duration-300 ease-in hover:shadow-2xl group">
        <CardHeader>
            <div className="overflow-hidden rounded-t-lg">
                <img className="transition duration-300 ease-in hover:scale-105 group-hover:scale-105 h-full w-full pb-10" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Game image" />
            </div>
            <CardTitle>
                <h2>{"Game Header here"}</h2>
            </CardTitle>
            <CardDescription>
            <p>An open-world, action-adventure story set in Night City.</p>
            </CardDescription>
        </CardHeader>
        
            <CardContent>
            <div>
                <span className="text-amber-500">★★★★☆</span>
                <span className="pl-2">4.2</span>
            </div>
            <div className="flex justify-start items-center gap-2 pt-3">
                <span className="bg-gray-200 text-sm font-sans self-center font-bold px-2 py-0.5 rounded-lg text-black">pc</span>
                <span className="bg-gray-200 text-sm font-sans self-center font-bold px-2 py-0.5 rounded-lg text-black">xbox</span>
                <span className="bg-gray-200 text-sm font-sans self-center font-bold px-2 py-0.5 rounded-lg text-black">dudu</span>
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
    )
}