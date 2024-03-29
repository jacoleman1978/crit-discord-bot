import { SlashCommandBuilder } from "@discordjs/builders";

/* 
Setup for "crit-magic" slash command. 
One input with command:
-Character level: Integer value from 0 to 9
*/
const cmagCommand = new SlashCommandBuilder()
    .setName("crit-magic")
    .setDescription("Checks if the magical miss is a regular miss or if the table should be used")
    .addStringOption((option) => option.setName("crit-type").setDescription("Critical Type").setRequired(true).setChoices(
        {name: "Critical Hit", value: "critical-hit"},
        {name: "Critical Miss", value: "critical-miss"}
))
    .addIntegerOption((option) => option.setName("char-level").setDescription("Character Level").setRequired(true).setChoices(
        {name: "1", value: 1},
        {name: "2", value: 2},
        {name: "3", value: 3},
        {name: "4", value: 4},
        {name: "5", value: 5},
        {name: "6", value: 6},
        {name: "7", value: 7},
        {name: "8", value: 8},
        {name: "9", value: 9},
        {name: "10", value: 10},
        {name: "11", value: 11},
        {name: "12", value: 12},
        {name: "13", value: 13},
        {name: "14", value: 14},
        {name: "15", value: 15},
        {name: "16", value: 16},
        {name: "17", value: 17},
        {name: "18", value: 18},
        {name: "19", value: 19},
        {name: "20", value: 20}
    ))
    .addIntegerOption((option) => option.setName("spell-level").setDescription("Spell Level").setRequired(true).setChoices(
        {name: "0", value: 0},
        {name: "1", value: 1},
        {name: "2", value: 2},
        {name: "3", value: 3},
        {name: "4", value: 4},
        {name: "5", value: 5},
        {name: "6", value: 6},
        {name: "7", value: 7},
        {name: "8", value: 8},
        {name: "9", value: 9}
    ))

export default cmagCommand.toJSON();