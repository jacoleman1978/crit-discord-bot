import { SlashCommandBuilder } from "@discordjs/builders";

/**
 * Setup for "group-attacks" slash command.
 * Three inputs with command:
 * -Number of enemies: Integer value from 1 to 100
 * -Attack modifier: Integer value from -5 to 20
 * -Target save: Integer value from 8 to 50
 */
const groupAttacksCommand = new SlashCommandBuilder()
    .setName("group-attacks")
    .setDescription("Determines how many in a group passed or failed their save")
    .addIntegerOption((option) => option.setName("group-size").setDescription("Number in Group").setRequired(true).setMinValue(1).setMaxValue(100))
    .addIntegerOption((option) => option.setName("attack-modifier").setDescription("Attack Modifier").setRequired(true).setMinValue(-5).setMaxValue(20))
    .addStringOption((option) => option.setName("advantage-type").setDescription("Advantage Type").setRequired(true).setChoices(
        {name: "Normal", value: "normal"},
        {name: "Advantage", value: "advantage"},
        {name: "Disadvantage", value: "disadvantage"}
    ))
    .addIntegerOption((option) => option.setName("target-ac").setDescription("Target AC").setRequired(true).setMinValue(8).setMaxValue(50))

    export default groupAttacksCommand.toJSON();