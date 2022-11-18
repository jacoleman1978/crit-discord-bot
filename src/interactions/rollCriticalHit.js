import isCriticalHit from "../helpers/isCriticalHit.js";
import rollDice from "../helpers/rollDice.js";
import bludgeoningCrit from "../helpers/bludgeoningCrit.js";
import slashingCrit from "../helpers/slashingCrit.js";
import piercingCrit from "../helpers/piercingCrit.js";

/* 
Determines if a critical hit is confirmed, then rolls for the effect on the appropriate "weaponType" Crit table
Two inputs with command:
-Character level: Integer value from 1 to 20
-Weapon type: 
--"Bludgeoning"
--"Piercing"
--"Slashing"
Returns the string results of the critical hit as confirmed or not, with appropriate messages based on "weaponType"
*/
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