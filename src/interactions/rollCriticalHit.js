import isCriticalHit from "../helpers/isCriticalHit.js";
import rollDice from "../helpers/rollDice.js";
import bludgeoningCrit from "../helpers/bludgeoningCrit.js";
import slashingCrit from "../helpers/slashingCrit.js";
import piercingCrit from "../helpers/piercingCrit.js";

const rollCriticalHit = (level, weaponType) => {
    const firstD100 = rollDice(100);

    if (isCriticalHit(level, firstD100)) {
        const secondD100 = rollDice(100);
        let message = `${firstD100}%! It is a critical hit!\n${secondD100}% on the table: `

        if (weaponType === "bludgeoning") {
            message += bludgeoningCrit(secondD100);
            return message

        } else if (weaponType === "slashing") {
            message += slashingCrit(secondD100);
            return message

        } else if (weaponType === "piercing") {
            message += piercingCrit(secondD100);
            return message

        }
    } else {
        return `It is just a normal critical hit. You rolled ${firstD100}%.`
    }
}

export default rollCriticalHit;