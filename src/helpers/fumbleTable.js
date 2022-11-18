import rollDice from "./rollDice.js"

/*
Generates the confirmed critical miss effect, using 'http://deltasdnd.blogspot.com/2012/07/critical-hits.html?m=1'
Input: "d100" is an integer from 1 to 100
Returns a string based on the d100 input
*/
const fumbleTable = (d100) => {
    if (d100 < 20) {
        return `Slip. Roll dexterity or less on d20 or fall and be stunned for ${rollDice(4)} rounds.`
    } else if (d100 < 34) {
        return `Stumble. Roll dexterity or less on d20 or fall and be stunned for ${rollDice(6)} rounds.`
    } else if (d100 < 40) {
        return `Trip and fall. Stunned for ${rollDice(6)} rounds.`
    } else if (d100 < 45) {
        return "Off balance. Roll dexterity or less on d20 or no action next round."
    } else if (d100 < 50) {
        return "Lose grip on weapon. Roll dexterity or less on d20 or no attack next round."
    }  else if (d100 < 55) {
        return "Lose grip on weapon. Roll dexterity or less on d20 or drop weapon."
    } else if (d100 < 60) {
        return "Lose grip on weapon. Drop weapon."
    } else if (d100 < 62) {
        return "Shield tangled with opponent. No effect if not shield."
    } else if (d100 < 64) {
        return "Shield tangled with opponent. Neither attacks next round."
    } else if (d100 < 66) {
        return "Weapon tangled with opponent. No attack next round."
    } else if (d100 < 70) {
        const directions = ["north", "north-east", "east", "south-east", "south", "south-west", "west", "north-west"];

        return `Weapon knocked away ${rollDice(10)} feet to the ${directions[rollDice(9) - 1]}.`
    } else if (d100 < 75) {
        return "Weapon breaks (base 100% -20% for each '+' or ability of weapon."
    } else if (d100 < 77) {
        return "Hit self for half damage."
    } else if (d100 < 79) {
        return "Hit self for normal damage."
    } else if (d100 < 81) {
        return "Hit self for double damage."
    } else if (d100 < 83) {
        return "Hit friend for half damage."
    } else if (d100 < 85) {
        return "Hit friend for normal damage."
    } else if (d100 < 87) {
        return "Hit friend for double damage."
    } else if (d100 < 89) {
        return "Critical hit on self."
    } else if (d100 < 91) {
        return "Critical hit on friend."
    }  else if (d100 < 93) {
        return "Twist ankle. Half movement for 1 turn. Roll dexterity or less on d20 or fall."
    } else if (d100 < 96) {
        return "Helm slips. Roll dexterity or less on d20 to fix or -6 to attacks."
    } else if (d100 < 98) {
        return "Helm slips. Roll dexterity or less on d20 to fix. No attacks until fixed."
    } else if (d100 === 98) {
        return "Distracted. Opponent's next attack at +3 to hit."
    } else if (d100 === 99) {
        return "Roll twice. Ignore rolls of 99 or 100."
    } else if (d100 === 100) {
        return "Roll three times. Ignore rolls of 99 or 100."
    }
}

export default fumbleTable;