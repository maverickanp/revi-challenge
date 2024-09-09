export type Monster = {
    name: string;
    attack: number;
    defense: number;
    speed: number;
    hp: number;
    image_url: string;
};

export type BattleRound = {
    roundNumber: number;
    attacker: Monster;
    defender: Monster;
    defenderDamageReceived: number;
};

export type BattleResult = {
    winner: Monster;
    rounds: Array<BattleRound>;
    loser: Monster;
};
