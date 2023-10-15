import rollDice from "../helpers/rollDice.js";

/**
 * Determines the number of enemies that passed or failed their save.
 * @param {required} numEnemies Integer value from 1 to 100
 * @param {required} saveModifier Integer value from -5 to 20
 * @param {required} advantageType String value of "normal", "advantage", or "disadvantage"
 * @param {required} target Integer value from 8 to 50
 * @returns string results of the number of enemies that passed or failed their save
 */
const rollEnemySaves = (numEnemies, saveModifier, advantageType, target) => {
    let numSaved = 0;
    let numFailed = 0;
    let savedIDs = "";
    let failedIDs = "";
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

        if (rollDice(20) + saveModifier >= target) {
            numSaved++;
            savedIDs += `${i + 1}, `;
        } else {
            numFailed++;
            failedIDs += `${i + 1}, `;
        }
    }

    savedIDs = savedIDs.length > 0 ? savedIDs.slice(0, -2): "None";
    failedIDs = failedIDs.length > 0 ? failedIDs.slice(0, -2): "None";
    critHitIDs = critHitIDs.length > 0 ? critHitIDs.slice(0, -2): "None";
    critMissIDs = critMissIDs.length > 0 ? critMissIDs.slice(0, -2): "None";

    return `Target DC: ${target}\nNumber successful: ${numSaved} with ids: ${savedIDs} \nNumber failed: ${numFailed} with ids: ${failedIDs}\nCrit hits: ${critHitIDs}\nCrit misses: ${critMissIDs}`;
}

export default  rollEnemySaves;