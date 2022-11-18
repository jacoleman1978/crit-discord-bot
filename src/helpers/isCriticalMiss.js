/* 
Determines whether a critical miss is confirmed, depending on level and d100 roll
Two inputs:
-level: Integer value from 1 to 20, representing the character's level
-d100: Integer value from 1 to 100
Returns boolean indicating whether the dice roll is a critical miss for the character's level
*/
const isCriticalMiss = (level, d100) => {
    return d100 > 10 + 5 * level
};

export default isCriticalMiss;