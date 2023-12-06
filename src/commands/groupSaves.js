import { SlashCommandBuilder } from "@discordjs/builders";

/**
 * Setup for "group-saves" slash command.
 * Three inputs with command:
 * -Number of enemies: Integer value from 1 to 100
 * -Save modifier: Integer value from -5 to 20
 * -Target save: Integer value from 8 to 50
 */
const groupSavesCommand = new SlashCommandBuilder()
    .setName("group-saves")
    .setDescription("Determines how many in a group passed or failed their save")
    .addIntegerOption((option) => option.setName("group-size").setDescription("Number in Group").setRequired(true).setMinValue(1).setMaxValue(100))
    .addIntegerOption((option) => option.setName("save-modifier").setDescription("Save Modifier").setRequired(true).setMinValue(-5).setMaxValue(20))
    .addStringOption((option) => option.setName("advantage-type").setDescription("Advantage Type").setRequired(true).setChoices(
        {name: "Normal", value: "normal"},
        {name: "Advantage", value: "advantage"},
        {name: "Disadvantage", value: "disadvantage"}
    ))
    .addIntegerOption((option) => option.setName("target").setDescription("Target Save").setRequired(true).setMinValue(8).setMaxValue(50))

    export default groupSavesCommand.toJSON();