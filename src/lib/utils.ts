import { faker } from "@faker-js/faker";
import { Monster } from "./types";

export function randomMonster(): Monster {
    return {
        name: `${faker.person.lastName()} ${faker.science.chemicalElement().name}`,
        attack: Math.floor(1 + Math.random() * 15),
        defense: Math.floor(1 + Math.random() * 50),
        hp: Math.floor(1 + Math.random() * 100),
        image_url: "",
        speed: Math.floor(1 + Math.random() * 10),
    };
}
