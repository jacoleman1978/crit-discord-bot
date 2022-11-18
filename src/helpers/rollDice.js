/* 
Randomly selects an integer from 1 to "diceSize", inclusive
One input:
-diceSize: Integer value representing the upper limit of the random integer rangee
Returns an integer from 1 to "diceSize", inclusive
*/
const rollDice = (diceSize) => {
    return Math.ceil(diceSize * Math.random())
};

export default rollDice;