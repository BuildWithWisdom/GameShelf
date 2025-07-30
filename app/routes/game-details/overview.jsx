import { useOutletContext } from "react-router";
import GameDetailCard from "../../components/game-detail-card";

export default function Overview() {
    const game = useOutletContext()

    return (
        <>
        <GameDetailCard>
            <h3 className="text-bold font-sans max-2xs:text-lg text-2xl pb-3">About {game.name}</h3>
            <p className="text-gray-600 max-2xs:text-sm text-base/relaxed">{game.description_raw}</p>
        </GameDetailCard>
        </>
    )
}