import rollDice from "./rollDice.js";

const rollStat = () => {
    const d1 = rollDice(6);
    const d2 = rollDice(6);
    const d3 = rollDice(6);
    const d4 = rollDice(6);

    const lowest = Math.min(d1, d2, d3, d4);

    return d1 + d2 + d3 + d4 - lowest;
};

export default rollStat;