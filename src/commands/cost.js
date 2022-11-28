import { SlashCommandBuilder } from "@discordjs/builders";

/*
Setup for "cost" slash command.
One input with command:
-Rarity: 
--"Common"
--"Uncommon"
--"Rare"
--"Very rare"
--"Legendary"
*/
const costCommand = new SlashCommandBuilder()
    .setName("cost")
    .setDescription("Generates random magic item cost based on rarity")
    .addStringOption((option) => option.setName("rarity").setDescription("Rarity").setRequired(true).setChoices(
        {name: "Common", value: "common"},
        {name: "Uncommon", value: "uncommon"},
        {name: "Rare", value: "rare"},
        {name: "Very rare", value: "very-rare"},
        {name: "Legendary", value: "legendary"}
    ))

export default costCommand.toJSON();