import rollDice from "../helpers/rollDice.js";

/*
Determines the cost for a magic item, depending on the rarity and the appropriate formula with dice roll(s).
One input with command:
-Rarity: 
--"Common"
--"Uncommon"
--"Rare"
--"Very rare"
--"Legendary"
Returns the string results of the magic item cost, depending on the rarity selected and the appropriate formula with dice roll(s).
*/
const rollMagicItemCost = (rarity) => {
    let magicItemCost = 0;

    if (rarity === "common") {
        magicItemCost = (rollDice(6) + 1) * 10;
        return `Common magic item cost: ${magicItemCost.toLocaleString("en-US")} gp`

    } else if (rarity === "uncommon") {
        magicItemCost = rollDice(6) * 100;
        return `Uncommon magic item cost: ${magicItemCost.toLocaleString("en-US")} gp`

    } else if (rarity === "rare") {
        magicItemCost = (rollDice(10) + rollDice(10)) * 1000;
        return `Rare magic item cost: ${magicItemCost.toLocaleString("en-US")} gp`

    } else if (rarity === "very-rare") {
        magicItemCost = (rollDice(4) + 1) * 10000;
        return `Very rare magic item cost: ${magicItemCost.toLocaleString("en-US")} gp`

    } else if (rarity === "legendary") {
        magicItemCost = (rollDice(6) + rollDice(6)) * 25000;
        return `Legendary magic item cost: ${magicItemCost.toLocaleString("en-US")} gp`

    }
}

export default rollMagicItemCost;