import { useState } from "react";
import { startBattle } from "../lib/battle";
import { BattleResult, Monster } from "../lib/types";
import { BattleResultCard } from "./BattleResultCard";
import { MonsterCard } from "./MonsterCard";
import { FaShield } from "react-icons/fa6";
import { randomMonster } from "../lib/utils";

export function Arena() {
    const [result, setResult] = useState<BattleResult | null>(null);
    const [monster1, setMonster1] = useState<Monster>(randomMonster());
    const [monster2, setMonster2] = useState<Monster>(randomMonster());

    const handleStartBattle = () => {
        setResult(startBattle(monster1, monster2));
    };
    const handleRestartBattle = () => {
        setResult(null);
        setMonster1(randomMonster());
        setMonster2(randomMonster());
    };
    const handleDetailsBattle = () => {
        console.log(JSON.stringify(result));        
    };
    if (result) return <>
        <BattleResultCard battleResult={result} />
        <div className="flex justify-between p-4 max-w-4xl mx-auto">
            <button className="bg-orange-600 rounded-md hover:rounded-md hover:bg-orange-300 font-bold m-2 p-2" onClick={handleDetailsBattle}>
                Detalhes da batalha
            </button>
            <button className="bg-orange-500 rounded-md hover:rounded-md hover:bg-orange-200 font-bold m-2 p-2" onClick={handleRestartBattle}>
                Nova Batalha!
            </button>
        </div>
    </>

    return (
        <div className="min-h-screen grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 p-4 bg-gray-100">
            <div className="bg-blue-200 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">                
                <MonsterCard monster={monster1} />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
                <p className="text-gray-600">
                    <button className="bg-blue-100 rounded-md hover:bg-blue-300 hover:text-red-500 text-xl font-semibold p-4 mb-2" onClick={handleStartBattle}>
                        Batalhar <FaShield className="font-bold text-8xl" />
                    </button>
                </p>
            </div>
            <div className="bg-blue-200 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
                <MonsterCard monster={monster2} />
            </div>

        </div>
    );
}
