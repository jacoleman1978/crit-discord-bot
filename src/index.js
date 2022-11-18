import { Client, Routes } from "discord.js";
import { REST } from "@discordjs/rest";
import { config } from "dotenv";
import chCommand from "./commands/critHit.js";
import cmCommand from "./commands/critMiss.js";
import rollCriticalHit from "./interactions/rollCriticalHit.js";
import rollCriticalMiss from "./interactions/rollCriticalMiss.js";

config();

const BOT_TOKEN = process.env.BOT_TOKEN;
// CLIENT_ID is the bot Application ID
const CLIENT_ID = process.env.CLIENT_ID;
// GUILD_ID is from right clicking on server and copying id
const GUILD_ID=process.env.GUILD_ID;

const client = new Client({intents: ["Guilds", "GuildMessages", "MessageContent"]});

const rest = new REST({ version: '10'}).setToken(BOT_TOKEN)

client.on("ready", () => console.log(`${client.user.tag} has logged in`));

client.on("interactionCreate", async (interaction) => {
    if (interaction.isChatInputCommand()) {
        const level = interaction.options.get("level").value;

        if (interaction.commandName === "ch") {
            const weaponType = interaction.options.get("weapon-type").value;

            await interaction.reply(rollCriticalHit(level, weaponType));

        } else if (interaction.commandName === "cm") {
            await interaction.reply(rollCriticalMiss(level));
        }
        
    } else {
        return
    }
});

const main = async () => {
    try{
        console.log("Started refreshing application (/) commands.");

        await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
            body: [chCommand, cmCommand]
        });

        client.login(BOT_TOKEN);

    } catch (error) {
        console.log(error);
    }
}

main();