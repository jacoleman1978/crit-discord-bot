import isCriticalHit from "../helpers/isCriticalHit.js";
import isCriticalMiss from "../helpers/isCriticalMiss.js";
import rollDice from "../helpers/rollDice.js";
import magicCritTable from "../helpers/magicCritTable.js";
import magicFumbleTable from "../helpers/magicFumbleTable.js";

const rollCriticalMagic = (critType, charLevel, spellLevel) => {
    const firstD100 = rollDice(100);

    if (critType === "critical-hit") {
        if (isCriticalHit(charLevel, firstD100)) {
            const secondD100 = rollDice(100);
            return `It is a critical hit!\n${secondD100}% on the table: ${magicCritTable(spellLevel, secondD100)}`;
        } else {
            return `It is just a normal critical hit. You rolled ${firstD100}%.`;
        }
    } else {
        if (isCriticalMiss(charLevel, firstD100)) {
            const secondD100 = rollDice(100);
            return `It is a critical miss!\n${secondD100}% on the table: ${magicFumbleTable(spellLevel, secondD100)}`;
        } else {
            return `It is just a normal critical miss. You rolled ${firstD100}%.`;
        }
    }
}

export default rollCriticalMagic;