# crit-discord-bot

## Overview
Our D&D group uses the critical hits and miss tables submitted in the article ["Good Hits & Bad Misses"](http://deltasdnd.blogspot.com/2012/07/critical-hits.html?m=1) by Carl Parlagreco in Dragon #39 (July, 1980). We have used the tables in multiple editions of D&D: 2, 3.5, 5.


## Critical Hits
When a character rolls a critical hit, they roll a d100 to confirm the use of the critical hits tables, otherwise the crit only uses double the damage dice. If the d100 roll is equal to or less than 10 + 5 * (character level), the hit is a confirmed critical and the player rolls a second d100. The second roll determines which effect is added to the critical, based on the weapon type. The effects range from double damage (not just double the dice) to immediate death.

The bot's slash command is "/ch level weaponType", which returns the results of the dice roll(s), including the entry from the critical hit table, if confirmed. 
* "level" currently only accepts integers from 1 to 20, inclusively. 
* "weaponType" currently only accepts: "Bludgeoning", "Piercing" or "Slashing".

## Critical Misses
When a character rolls a critical miss, they roll a d100 to confirm the use of the critical miss (fumble) table, otherwise the attack automatically fails, losing the remaining attacks that round. If the d100 roll is equal to or less than 10 + 5 * (character level), the character does not use the table. Any d100 result greater than that results in using the table.

The bot's slash command is "/cm level", which returns the result of the dice roll, including the entry from the critical miss table, if confirmed.
* "level" currently only accepts integers from 1 to 20, inclusively.