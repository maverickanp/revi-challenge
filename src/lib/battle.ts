import type { BattleResult, BattleRound, Monster } from "./types";

function startbattleRound(previousRound: BattleRound): BattleRound {
    const current = structuredClone(previousRound);
    const [attacker, defender] = [current.defender, current.attacker];
    const defenderDamageReceived = Math.max(1, attacker.attack - defender.defense);
    defender.hp -= defenderDamageReceived;
    return {
        roundNumber: current.roundNumber + 1,
        attacker: attacker,
        defender: defender,
        defenderDamageReceived,
    };
}

export function startBattle(originalAttacker: Monster, originalDefender: Monster): BattleResult {
    let [attacker, defender] = [originalAttacker, originalDefender];

    if (attacker.speed == defender.speed) {
        if (attacker.attack < defender.attack) {
            [attacker, defender] = [defender, attacker];
        }
    } else if (attacker.speed < defender.speed) {
        [attacker, defender] = [defender, attacker];
    }

    let currentRound: BattleRound;
    const rounds: Array<BattleRound> = [
        (currentRound = startbattleRound({
            roundNumber: 0,
            attacker: structuredClone(defender),
            defender: structuredClone(attacker),
            defenderDamageReceived: 0,
        })),
    ];

    while (currentRound.defender.hp > 0) {
        rounds.push((currentRound = startbattleRound(currentRound)));
    }

    return {
        rounds,
        winner: currentRound.attacker,
        loser: currentRound.defender,
    };
}
