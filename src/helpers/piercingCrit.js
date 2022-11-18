import rollDice from "./rollDice.js"

/*
Generates the confirmed critical hit effect for piercing weapons, using 'http://deltasdnd.blogspot.com/2012/07/critical-hits.html?m=1'
Input: "d100" is an integer from 1 to 100
Returns a string based on the d100 input
*/
const piercingCrit = (d100) => {
    if (d100 < 35) {
        return "x2 damage"
    } else if (d100 < 71) {
        return "x3 damage"
    } else if (d100 < 73) {
        return `Off-hand arm struck. No shield defense for ${rollDice(6)} rounds. No effect, if shield.`
    } else if (d100 < 75) {
        return "Shield arm struck. Lose shield."
    } else if (d100 < 77) {
        return "Weapon arm struck. -2 to all attacks."
    }  else if (d100 < 79) {
        return "Weapon arm struck. -4 to all attacks."
    } else if (d100 < 81) {
        return "Weapon arm broken. No attacks."
    } else if (d100 < 83) {
        return `Struck in abdomen. Death in ${rollDice(6)} days.`
    } else if (d100 < 85) {
        return `Struck in chest. Death in ${rollDice(4)} days.`
    } else if (d100 < 87) {
        return `Struck in abdomen. Death in ${rollDice(6) + rollDice(6)} rounds.`
    } else if (d100 < 89) {
        return `Struck in chest. Death in ${rollDice(4) + rollDice(4)} rounds.`
    } else if (d100 < 91) {
        return "Struck in abdomen. Immediate death."
    } else if (d100 < 93) {
        return "Struck in chest. Immediate death."
    } else if (d100 === 93) {
        return "Blinded in eye. No effect, if helmed."
    } else if (d100 === 94) {
        return "Blinded in eye."
    } else if (d100 === 95) {
        return "Larynx punctured. No effect, if helmed."
    } else if (d100 === 96) {
        return "Larynx punctured."
    } else if (d100 === 97) {
        return `Head struck. Intelligence reduced by ${rollDice(6)} points. No effect if helmed.`
    } else if (d100 === 98) {
        return `Head struck. Intelligence reduced by ${rollDice(6)} points.`
    } else if (d100 === 99) {
        return "Skull crushed. Immediate death. No effect, if helmed."
    }  else if (d100 === 100) {
        return "Skull crushed. Immediate death."
    }
}

export default piercingCrit;