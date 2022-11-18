import rollDice from "./rollDice.js"

/*
Generates the confirmed critical hit effect for slashing weapons, using 'http://deltasdnd.blogspot.com/2012/07/critical-hits.html?m=1'
Input: "d100" is an integer from 1 to 100
Returns a string based on the d100 input
*/
const slashingCrit = (d100) => {
    if (d100 < 32) {
        return "x2 damage"
    } else if (d100 < 63) {
        return "x3 damage"
    } else if (d100 === 63) {
        return "Shield destroyed. No effect, if no shield."
    } else if (d100 === 64) {
        return "Shield destroyed. Roll again, if no shield."
    } else if (d100 === 65) {
        return `Helm removed. If no helm, lose ear and stunned for ${rollDice(6)} rounds.`
    } else if (d100 === 66) {
        return `Helm removed. Lose ear and stunned for ${rollDice(6)} rounds.`
    } else if (d100 === 67) {
        return "Voice box punctured. No talking until healed. No effect, if helmed."
    } else if (d100 < 70) {
        return "Ear removed. No effect, if helmed."
    } else if (d100 === 70) {
        return "Ear removed. Helm removed, if helmed."
    } else if (d100 < 73) {
        return "Eye removed. No effect, if helmed."
    } else if (d100 === 73) {
        return "Eye removed."
    } else if (d100 === 74) {
        return "Knee split. Movement is halved."
    } else if (d100 === 75) {
        return "Knee split. Movement is reduced to 0."
    } else if (d100 === 76) {
        return `Fingers removed. Dexterity is reduced by ${rollDice(5)}.`
    } else if (d100 === 77) {
        return "Leg removed at ankle."
    } else if (d100 === 78) {
        return "Leg removed at knee."
    } else if (d100 === 79) {
        return "Leg removed at hip."
    } else if (d100 === 80) {
        return "Shield arm removed at wrist. No effect, if shield."
    } else if (d100 === 81) {
        return "Shield arm removed at elbow. No effect, if shield."
    } else if (d100 === 82) {
        return "Shield arm removed at shoulder. No effect, if shield."
    } else if (d100 === 83) {
        return "Shield arm removed at wrist."
    } else if (d100 === 84) {
        return "Shield arm removed at elbow."
    } else if (d100 === 85) {
        return "Shield arm removed at shoulder."
    } else if (d100 === 86) {
        return "Weapon arm removed at wrist."
    } else if (d100 === 87) {
        return "Weapon arm removed at elbow."
    } else if (d100 === 88) {
        return "Weapon arm removed at shoulder."
    } else if (d100 === 89) {
        return "Abdominal injuries. Carrying capacity halved."
    } else if (d100 === 90) {
        return "Chest injuries. Carrying capacity halved."
    } else if (d100 === 91) {
        return `Abdominal injuries. Death in ${rollDice(6)} days.`
    } else if (d100 === 92) {
        return `Chest injuries. Death in ${rollDice(4)} days.`
    } else if (d100 === 93) {
        return `Abdominal injuries. Death in ${rollDice(6) + rollDice(6)} rounds.`
    } else if (d100 === 94) {
        return `Chest injuries. Death in ${rollDice(4) + rollDice(4)} rounds.`
    } else if (d100 === 95) {
        return "Abdominal injuries. Immediate death."
    } else if (d100 === 96) {
        return "Chest injuries. Immediate death."
    } else if (d100 === 97) {
        return "Throat cut. Immediate death. No effect, if helmed."
    } else if (d100 === 98) {
        return "Throat cut. Immediate death."
    } else if (d100 === 99) {
        return "Decapitated. Immediate death. No effect, if helmed."
    }  else if (d100 === 100) {
        return "Decapitated. Immediate death."
    }
}

export default slashingCrit;