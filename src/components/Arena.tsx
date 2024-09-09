import { useState } from "react";
import { startBattle } from "../lib/battle";
import { BattleResult, Monster } from "../lib/types";
import { BattleResultCard } from "./BattleResultCard";
import { MonsterCard } from "./MonsterCard";
import { FaSheetPlastic, FaShield } from "react-icons/fa6";
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

    if (result) return <>
        <BattleResultCard battleResult={result} />
        <div className="flex justify-center p-8 max-w-4xl mx-auto">
            <button className="bg-cyan-600 rounded-full hover:rounded-md m-2" onClick={handleRestartBattle}>
                Detalhes da batalha <FaSheetPlastic className="font-bold text-8xl" />
            </button>
            <button className="bg-cyan-600 rounded-full hover:rounded-lg" onClick={handleRestartBattle}>
                Nova Batalha! <FaShield className="font-bold text-8xl" />
            </button>
        </div>
    </>

    return (
        <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
                <h2 className="text-xl font-semibold mb-2">Monster 1</h2>
                <p className="text-gray-600"><MonsterCard monster={monster1} /></p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
                <h2 className="text-xl font-semibold mb-2">Versus</h2>
                <p className="text-gray-600">
                    <button className="rounded-full hover:rounded-lg" onClick={handleStartBattle}>
                        Batalhar! <FaShield className="font-bold text-8xl" />
                    </button>
                </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
                <h2 className="text-xl font-semibold mb-2">Monster 2</h2>
                <p className="text-gray-600"><MonsterCard monster={monster2} /></p>
            </div>

        </div>
    );
}
