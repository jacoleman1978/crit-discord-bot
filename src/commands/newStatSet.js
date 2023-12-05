import { SlashCommandBuilder } from "@discordjs/builders";

/*
Setup for "new-stat-set" slash command.
*/
const newStatSetCommand = new SlashCommandBuilder()
    .setName("new-stat-set")
    .setDescription("Generates a new stat set for a character")

export default newStatSetCommand.toJSON();