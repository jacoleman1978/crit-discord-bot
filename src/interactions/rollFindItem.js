import rollDice from "../helpers/rollDice.js";

/*
Determines whether a magic item can be found in a store, depending on the rarity and the appropriate formula with dice roll(s).
Two inputs with command:
-rarity: 
--"common"
--"uncommon"
--"rare"
--"very-rare"
--"legendary"
-inSigil: Boolean value. If the store is in Sigil, the chance of finding a magic item is increased by 5%.
Returns the string results of the magic item cost, depending on the rarity selected and the appropriate formula with dice roll(s).
*/
const rollFindItem = (rarity, inSigil) => {
    let difference = Math.abs(rollDice(100) - rollDice(100));

    if (inSigil) {
        difference -= 5;
    }

    if (rarity === "common" && difference <= 40) {
        return `Common magic item found!`;
    } else if (rarity === "uncommon" && difference <= 30) {
        return `Uncommon magic item found!`;
    } else if (rarity === "rare" && difference <= 15) {
        return `Rare magic item found!`;
    } else if (rarity === "very-rare" && difference <= 5) {
        return `Very rare magic item found!`;
    } else if (rarity === "legendary" && difference <= 1) {
        return `Legendary magic item found!`;
    }

    return `No magic item found. Please check back another day.`;
};

export default rollFindItem;
