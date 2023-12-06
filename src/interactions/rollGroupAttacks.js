import rollDice from "../helpers/rollDice.js";

/**
 * Determines the number of enemies that passed or failed their save.
 * @param {required} numEnemies Integer value from 1 to 100
 * @param {required} attackModifier Integer value from -5 to 20
 * @param {required} advantageType String value of "normal", "advantage", or "disadvantage"
 * @param {required} targetAC Integer value from 8 to 50
 * @returns string results of the number of enemies that passed or failed their save
 */
const rollGroupAttacks = (numEnemies, attackModifier, advantageType, targetAC) => {
    let numHit = 0;
    let numMissed = 0;
    let hitIDs = "";
    let missedIDs = "";
    let critHitIDs = "";
    let critMissIDs = "";

    for (let i = 0; i < numEnemies; i++) {
        const rollOne = rollDice(20);
        const rollTwo = advantageType !== "normal" ? rollDice(20) : 0;

        let keptRoll = rollOne;

        if (advantageType === "advantage") {
            keptRoll = rollOne > rollTwo ? rollOne : rollTwo;
        } else if (advantageType === "disadvantage") {
            keptRoll = rollOne < rollTwo ? rollOne : rollTwo;
        }

        if (keptRoll === 20) {
            critHitIDs += `${i + 1}, `;
        } else if (keptRoll === 1) {
            critMissIDs += `${i + 1}, `;
        }

        if (rollDice(20) + attackModifier >= targetAC) {
            numHit++;
            hitIDs += `${i + 1}, `;
        } else {
            numMissed++;
            missedIDs += `${i + 1}, `;
        }
    }

    hitIDs = hitIDs.length > 0 ? hitIDs.slice(0, -2): "None";
    missedIDs = missedIDs.length > 0 ? missedIDs.slice(0, -2): "None";
    critHitIDs = critHitIDs.length > 0 ? critHitIDs.slice(0, -2): "None";
    critMissIDs = critMissIDs.length > 0 ? critMissIDs.slice(0, -2): "None";

    return `Target AC: ${targetAC}\nNumber of hit: ${numHit} with ids: ${hitIDs} \nNumber missed: ${numMissed} with ids: ${missedIDs}\nCrit hits: ${critHitIDs}\nCrit misses: ${critMissIDs}`;
}

export default  rollGroupAttacks;