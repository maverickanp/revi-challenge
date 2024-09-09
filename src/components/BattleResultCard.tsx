import { BattleResult } from "../lib/types";
import { FaTrophy, FaSkull, FaHeart, FaShieldAlt } from "react-icons/fa";

type BattleResultProps = {
    battleResult: BattleResult;
};

export function BattleResultCard({ battleResult }: BattleResultProps) {
    const { winner, loser, rounds } = battleResult;
    return (
        <>
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-10">
                <h1 className="flex justify-center text-3xl font-bold text-center mb-6">
                    <FaShieldAlt className="font-bold text-4xl" />
                    {"-"}
                    Resultado da batalha
                    {"-"}
                    <FaShieldAlt className="font-bold text-4xl" />
                </h1>

                <div className="flex justify-between items-center bg-green-500 p-4 rounded-lg shadow-lg mb-6">
                    <div className="flex items-center space-x-4">
                        <img
                            src={winner.image_url}
                            alt={winner.name}
                            className="w-20 h-20 rounded-full border-4 border-yellow-300"
                        />
                        <div>
                            <h2 className="text-2xl font-semibold">{winner.name}</h2>
                            <p className="text-sm flex items-center">
                                <FaHeart className="text-red-400 mr-2" /> ENERGIA: {winner.hp}
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center text-3xl font-bold text-yellow-300">
                        <p className="text-white">Vencedor</p>
                        <FaTrophy />
                    </div>
                </div>

                <div className="flex justify-between items-center bg-red-500 p-4 rounded-lg shadow-lg mb-6">
                    <div className="flex items-center space-x-4">
                        <img
                            src={loser.image_url}
                            alt={loser.name}
                            className="w-20 h-20 rounded-full border-4 border-gray-400"
                        />
                        <div>
                            <h2 className="text-2xl font-semibold">{loser.name}</h2>
                            <p className="text-sm flex items-center">
                                <FaSkull className="text-gray-300 mr-2" /> ENERGIA: {loser.hp}
                            </p>
                        </div>
                    </div>
                    <div className="text-3xl font-bold text-red-300">
                        <FaSkull />
                    </div>                    
                </div>

                <div className="text-center">
                    <p className="text-lg font-medium">
                        A batalha durou <span className="font-bold">{rounds.length}</span> rodadas.
                    </p>
                </div>
            </div>
        </>
    );
}
