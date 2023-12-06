import rollDice from "../helpers/rollDice.js";
import isCriticalMiss from "../helpers/isCriticalMiss.js";
import fumbleTable from "../helpers/fumbleTable.js";

/* 
Determines if a critical miss is confirmed, then rolls for the effect on the fumble table
Input:
-Character level: Integer value from 1 to 20
Returns the string results of the critical miss as confirmed or not
*/
const rollCriticalMiss = (level) => {
    const firstD100 = rollDice(100);

    if (isCriticalMiss(level, firstD100)) {
        const secondD100 = rollDice(100);
        let rolls = [];

        const message = `Uh oh... you rolled ${firstD100}%! It is a critical miss.\n${secondD100}% on the table: ${fumbleTable(secondD100)}\n`; 

        if (secondD100 < 99) {
            return message

        } else {
            // 99 is roll twice on the table, ignoring 99 and 100
            let maxLength = 2;

            // 100 is roll three times on the table, ignoring 99 and 100
            if (secondD100 === 100) {
                maxLength = 3;
            }

            while (rolls.length < maxLength) {
                let nextRoll = rollDice(100);

                if (nextRoll < 99) {
                    rolls = [...rolls, nextRoll];
                }
            }
        }

        for (let roll of rolls) {
            message += `${roll}% on the table: ${fumbleTable(roll)}\n`
        }

        return message

    } else {
        return `You rolled ${firstD100}%. You are safe from futher self-inflicted mishaps...for now....`
    }
}

export default rollCriticalMiss;