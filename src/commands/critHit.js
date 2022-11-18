import { SlashCommandBuilder } from "@discordjs/builders";

/* 
Setup for "ch" slash command. 
Two inputs with command:
-Character level: Integer value from 1 to 20
-Weapon type: 
--"Bludgeoning"
--"Piercing"
--"Slashing"
*/
const chCommand = new SlashCommandBuilder()
    .setName("ch")
    .setDescription("Checks if the hit is a regular critical or if the table should be used")
    .addIntegerOption((option) => option.setName("level").setDescription("Character Level").setRequired(true).setChoices(
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
    .addStringOption((option) => option.setName("weapon-type").setDescription("Weapon Type").setRequired(true).setChoices(
            {name: "Bludgeoning", value: "bludgeoning"},
            {name: "Slashing", value: "slashing"},
            {name: "Piercing", value: "piercing"}
    ))

    export default chCommand.toJSON();