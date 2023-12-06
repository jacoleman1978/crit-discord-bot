import { Client, Routes } from "discord.js";
import { REST } from "@discordjs/rest";
import { config } from "dotenv";
import chCommand from "./commands/critHit.js";
import cmCommand from "./commands/critMiss.js";
import cmagCommand from "./commands/critMagic.js";
import costCommand from "./commands/cost.js";
import groupSavesCommand from "./commands/groupSaves.js";
import groupAttacksCommand from "./commands/groupAttacks.js";
import findItemCommand from "./commands/findItem.js";
import newStatSetCommand from "./commands/newStatSet.js";
import rollCriticalHit from "./interactions/rollCriticalHit.js";
import rollCriticalMiss from "./interactions/rollCriticalMiss.js";
import rollCriticalMagic from "./interactions/rollCriticalMagic.js";
import rollMagicItemCost from "./interactions/rollMagicItemCost.js";
import rollGroupSaves from "./interactions/rollGroupSaves.js";
import rollGroupAttacks from "./interactions/rollGroupAttacks.js";
import rollFindItem from "./interactions/rollFindItem.js";
import rollNewStatSet from "./interactions/rollNewStatSet.js";

config();

const BOT_TOKEN = process.env.BOT_TOKEN;
// CLIENT_ID is the bot Application ID
const CLIENT_ID = process.env.CLIENT_ID;
// GUILD_ID is from right clicking on server and copying id
const GUILD_ID=process.env.GUILD_ID;

// Indicates the types of intents/interactions and handlers the bot will have access to
const client = new Client({intents: ["Guilds", "GuildMessages", "MessageContent"]});

// Sets the "BOT_TOKEN" that the app api will be communicating with
const rest = new REST({ version: '10'}).setToken(BOT_TOKEN)

// Indicates when the bot has been logged on
client.on("ready", () => console.log(`${client.user.tag} has logged in`));

// Event handler for "interactionCreate" using slash commands in Discord chat
client.on("interactionCreate", async (interaction) => {
    if (interaction.isChatInputCommand()) {
        // Handles the "ch" slash command
        if (interaction.commandName === "ch") {
            const level = interaction.options.get("level").value;
            const weaponType = interaction.options.get("weapon-type").value;

            await interaction.reply(rollCriticalHit(level, weaponType));

        // Handles the "cm" slash command
        } else if (interaction.commandName === "cm") {
            const level = interaction.options.get("level").value;

            await interaction.reply(rollCriticalMiss(level));

        // Handles the "cost slash command"
        } else if (interaction.commandName === "cost") {
            const rarity = interaction.options.get("rarity").value;

            await interaction.reply(rollMagicItemCost(rarity));

        // Handles the "group-saves" slash command
        } else if (interaction.commandName === "group-saves") {
            const groupSize = interaction.options.get("group-size").value;
            const saveModifier = interaction.options.get("save-modifier").value;
            const advantageType = interaction.options.get("advantage-type").value;
            const target = interaction.options.get("target").value;

            await interaction.reply(rollGroupSaves(groupSize, saveModifier, advantageType, target));
        } else if (interaction.commandName === "group-attacks") {
            const groupSize = interaction.options.get("group-size").value;
            const attackModifier = interaction.options.get("attack-modifier").value;
            const advantageType = interaction.options.get("advantage-type").value;
            const targetAC = interaction.options.get("target-ac").value;

            await interaction.reply(rollGroupAttacks(groupSize, attackModifier, advantageType, targetAC));
        // Handles the "cmag" slash command
        } else if (interaction.commandName === "cmag") {
            const critType = interaction.options.get("crit-type").value;
            const charLevel = interaction.options.get("char-level").value;
            const spellLevel = interaction.options.get("spell-level").value;

            await interaction.reply(rollCriticalMagic(critType, charLevel, spellLevel));
        // Handles the "find" slash command
        } else if (interaction.commandName === "find") {
            const rarity = interaction.options.get("rarity").value;
            const inSigil = interaction.options.get("is-in-sigil").value;

            await interaction.reply(rollFindItem(rarity, inSigil));
        // Handles the "new-stat-set" slash command
        } else if (interaction.commandName === "new-stat-set") {

            await interaction.reply(rollNewStatSet());
        }
    
    // Does not react to other interactions
    } else {
        return
    }
});

const main = async () => {
    try{
        // Builds and displays the ch, cm, cmag, es and cost commands, waiting for user interaction
        await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
            body: [chCommand, cmCommand, costCommand, groupSavesCommand, groupAttacksCommand, cmagCommand, findItemCommand, newStatSetCommand]
        });

        client.login(BOT_TOKEN);

    } catch (error) {
        console.log(error);
    }
}

main();