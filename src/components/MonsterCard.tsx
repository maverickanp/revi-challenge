import { FaCrosshairs, FaHeart, FaShield } from "react-icons/fa6";
import { Monster } from "../lib/types";
import { FaRunning } from "react-icons/fa";

type MonsterCardProps = {
    monster: Monster;
};

export function MonsterCard({ monster }: MonsterCardProps) {
    return (
        <>
            <div className="bg-orange-100 shadow-md rounded-lg overflow-hidden max-w-sm mx-auto my-4">
                <img
                    className="w-full h-48 object-cover"
                    src="https://via.placeholder.com/300"
                    alt="Placeholder"
                />
                <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2">{monster.name}</h2>
                    <p className="flex place-items-center text-gray-600"><FaHeart className="text-red-400 mr-2" />energia: {monster.hp}</p>
                    <p className="flex place-items-center text-gray-600"><FaCrosshairs className="text-black-400 mr-2" />ataque: {monster.attack}</p>
                    <p className="flex place-items-center text-gray-600"><FaShield className="text-blue-400 mr-2" />defesa: {monster.defense}</p>
                    <p className="flex place-items-center text-gray-600"><FaRunning className="text-yellow-400 mr-2" />velocidade: {monster.speed}</p>
                </div>
            </div>
        </>
    );
}
