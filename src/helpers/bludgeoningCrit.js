import rollDice from "./rollDice.js"

/*
Generates the confirmed critical hit effect for bludgeoning weapons, using 'http://deltasdnd.blogspot.com/2012/07/critical-hits.html?m=1'
Input: "d100" is an integer from 1 to 100
Returns a string based on the d100 input
*/
const bludgeoningCrit = (d100) => {
    if (d100 < 32) {
        return "x2 damage"
    } else if (d100 < 65) {
        return "x3 damage"
    } else if (d100 < 67) {
        return "Shield destroyed. No effect, if no shield."
    } else if (d100 < 69) {
        return "Shield destroyed. Roll again, if no shield."
    } else if (d100 < 71) {
        return `Shield arm struck. No shield defense for ${rollDice(6)} rounds.`
    } else if (d100 < 73) {
        return "Shield arm broken. Lose shield."
    } else if (d100 < 75) {
        return "Weapon arm struck. -2 to all attacks."
    }  else if (d100 < 77) {
        return "Weapon arm struck. -4 to all attacks."
    } else if (d100 < 79) {
        return "Weapon arm broken. No attacks."
    } else if (d100 < 81) {
        return `Hand struck. Dexterity reduced by ${rollDice(5)} points until healed.`
    } else if (d100 < 83) {
        return `Hand struck. Dexterity reduced by ${rollDice(5)} points.`
    } else if (d100 < 85) {
        return `Chest struck. Stunned ${rollDice(6)} rounds.`
    } else if (d100 < 87) {
        return "Chest struck. Ribs broken. Lungs punctured. Movement reduced to 0."
    } else if (d100 < 89) {
        return "Chest struck. Ribs broken. Heart puntured. Immediate death."
    } else if (d100 < 91) {
        return "Leg struck. Become prone."
    } else if (d100 < 93) {
        return "Leg struck. Movement halved."
    } else if (d100 < 95) {
        return "Leg broken. Movement reduced to 0."
    } else if (d100 === 95) {
        return `Head struck. Intelligence reduced by ${rollDice(6)} points. No effect if helmed.`
    } else if (d100 === 96) {
        return `Head struck. Intelligence reduced by ${rollDice(6)} points.`
    } else if (d100 === 97) {
        return `Head struck. Intelligence reduced by ${rollDice(6) + rollDice(6)} points. No effect if helmed.`
    } else if (d100 === 98) {
        return `Head struck. Intelligence reduced by ${rollDice(6) + rollDice(6)} points.`
    } else if (d100 === 99) {
        return "Skull crushed. Immediate death. No effect, if helmed."
    }  else if (d100 === 100) {
        return "Skull crushed. Immediate death."
    }
}

export default bludgeoningCrit;