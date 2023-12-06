import rollDice from "./rollDice.js";

const rollStat = () => {
    let total = 0;

    while (total < 6) {
        let d1 = rollDice(6);
        let d2 = rollDice(6);
        let d3 = rollDice(6);
        let d4 = rollDice(6);

        let lowest = Math.min(d1, d2, d3, d4);

        total = d1 + d2 + d3 + d4 - lowest;
    }

    return total;
};

const rollStatSet = () => {
    let total = 0;
    let statSet = [];
    let maxStat = 0;

    while (total < 67 || maxStat < 14) {
        statSet = [];

        for (let i = 0; i < 6; i++) {
            statSet.push(rollStat());
        }
        
        total = statSet.reduce((a, b) => a + b);

        maxStat = Math.max(...statSet);
    }

    return statSet;
};

export default rollStatSet;