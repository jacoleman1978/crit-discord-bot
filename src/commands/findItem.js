import { SlashCommandBuilder } from "@discordjs/builders";

/*
Setup for "find" slash command.
One input with command:
-Rarity: 
--"Common"
--"Uncommon"
--"Rare"
--"Very rare"
--"Legendary"
*/
const findItemCommand = new SlashCommandBuilder()
    .setName("find")
    .setDescription("Determines if a store has a magic item in stock")
    .addStringOption((option) => option.setName("rarity").setDescription("Rarity").setRequired(true).setChoices(
        {name: "Common", value: "common"},
        {name: "Uncommon", value: "uncommon"},
        {name: "Rare", value: "rare"},
        {name: "Very rare", value: "very-rare"},
        {name: "Legendary", value: "legendary"}
    ))
    .addBooleanOption((option) => option.setName("is-in-sigil").setDescription("In Sigil?").setRequired(true))

export default findItemCommand.toJSON();