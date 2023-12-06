import rollDice from "../helpers/rollDice.js";

const rarityMap = {
    "common": {
        "max": 50,
        "name": "Common"
    },
    "uncommon": {
        "max": 30,
        "name": "Uncommon"
    },
    "rare": {
        "max": 15,
        "name": "Rare"
    },
    "very-rare": {
        "max": 10,
        "name": "Very rare"
    },
    "legendary": {
        "max": 1,
        "name": "Legendary"
    }
};

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
    const percentOne = rollDice(100);
    const percentTwo = rollDice(100);

    let difference = Math.abs(percentOne - percentTwo);

    if (inSigil) {
        difference -= 5;
    }

    if (difference <= rarityMap[rarity].max) {
        return `Rolled ${percentOne} and ${percentTwo}. ${rarityMap[rarity].name} magic item found!`;
    } 

    return `Rolled ${percentOne} and ${percentTwo}. ${rarityMap[rarity].name} magic item not found. Please check back another day.`;
};

export default rollFindItem;
