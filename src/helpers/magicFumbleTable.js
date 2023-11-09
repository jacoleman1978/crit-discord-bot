const MAGIC_FUMBLE_DATA = {
    "01" : {
        description: "You get wrapped up in your spellcasting and forget to watch your target.",
        effect: "Your target has advantage on their attack rolls against you until the start of your next turn."
    },
    "02" : {
        description: "You get wrapped up in your spellcasting and forget to watch your surroundings.",
        effect: "All enemies have advantage on their attack rolls against you until the start of your next turn."
    },
    "03" : {
        description: "Your spell misfires knocking you over.",
        effect: "Roll Dex or less on d20 or you are knocked prone."
    },
    "04" : {
        description: "The spell fires in an unexpected manner, causing your confidence in your abilities to falter.",
        effect: "You have disadvantage on any spell attacks, and enemies have advantage against your spell savings throws until the end of your next turn."
    },
    "05" : {
        description: "You scramble the ingredients of your component pouch or your focus becomes overloaded with magical energy and temporarily stops working.",
        effect: "You are unable to perform material components to cast spells until the end of your next turn."
    },
    "06" : {
        description: "Your arm cramps as you cast.",
        effect: "You are unable to perform somatic components to cast spells until the end of your next turn."
    },
    "07" : {
        description: "You bite your tongue as you cast.",
        effect: "You are unable to use verbal components to cast spells until the end of your next turn."
    },
    "08" : {
        description: "Your spell backfires creating a small explosion causing you to fall and bump your head.",
        effect: "You fall prone. Roll a DC 10 constitution save, on failure you take 1d6 bludeoning damage and are knocked unconscious for 1 minute or until you receive damage from any source. On success take half damage and you remain conscious."
    },
    "09" : {
        description: "Your spell backfires creating a large explosion causing you to fall and bump your head.",
        effect: "You fall prone. Roll a DC 15 constitution save, on failure you take 1d6 bludgeoning damage, 1d6 thunder damage, and are knocked unconscious for 1 minute or until you receive damage from any source. On success take half damage and you remain conscious."
    },
    "10" : {
        description: "Your spell completely backfires creating a large explosion causing you to fall and bump your head.",
        effect: "You hit yourself with your spell. If the spell effect is instant you take the full effect. If the spell requires concentration the effect persists until the end of your next turn. You also fall prone, take 1d6 bludgeoning damage, 1d6 thunder damage, and become unconscious for 1 minute or until you receive damage from any source."
    },
    "11" : {
        description: "Your spell overloads and you fail to control it, hitting one of your allies.",
        effect: "Roll randomly to determine which ally that you can see gets hit by your spell. The spell now has an additional 120ft of range.  Ally is automatically hit, normal damage."
    },
    "12" : {
        description: "Your spell overloads and you fail to control it, hitting one of your allies.",
        effect: "Roll randomly to determine which ally that you can see gets hit by your spell. The spell now has an additional 2000ft of range.  Ally is automatically hit, roll double damage dice."
    },
    "13" : {
        description: "Your spell overloads and you fail to control it, critically hitting one of your allies.",
        effect: "Roll randomly to determine which ally that you can see gets hit by your spell. The spell now has an additional 2000ft of range.  Ally is automatically hit, roll on spell critical hit chart."
    },
    "14" : {
        description: "Your spell overloads and you fail to control it, critically hitting one of your allies and yourself.",
        effect: "Roll randomly to determine which ally that you can see gets hit by your spell. The spell now has an additional 2000ft of range.  You and your ally are automatically hit, roll on spell critical hit chart."
    },
    "15" : {
        description: "Your spell overloads and you fail to control it, hitting all of your allies and yourself.",
        effect: "You and your allies get hit by your spell. The spell now has an additional 120ft of range.  Allies are automatically hit, normal damage."
    },
    "16" : {
        description: "Your spell overloads and you fail to control it, hitting all of your allies and yourself.",
        effect: "You and your allies get hit by your spell. The spell now has an additional 2000ft of range.  Allies are automatically hit, roll double damage dice."
    },
    "17" : {
        description: "Your spell overloads and you fail to control it, hitting all of your allies and yourself.",
        effect: "You and your allies get hit by your spell. The spell now has an additional 2000ft of range.  You and your ally are automatically hit, roll on spell critical hit chart."
    },
    "18" : {
        description: "Your spell overloads and you fail to control it, critically hitting everyone on the battlefield.",
        effect: "All creatures on the battlefield get hit with your spell.  Roll on spell critical hit chart."
    },
    "19" : {
        description: "Your spell overloads and you fail to control it, critically hitting everyone on the battlefield.",
        effect: "All creatures on the battlefield get hit with your spell.  Roll twice on spell critical hit chart."
    },
}

/**
 * Determines the magic fumble effect based on the spell level and d100 roll.
 * @param {required} spellLevel An integer value from 0 to 9
 * @param {required} d100 An integer value from 1 to 100
 * @returns An object with a description and effect
 */
const magicFumbleTable = (spellLevel, d100) => {
    if (spellLevel <= 2) {
        if (d100 <= 10) {
            return MAGIC_FUMBLE_DATA["01"];
        } else if (d100 <= 20) {
            return MAGIC_FUMBLE_DATA["02"];
        } else if (d100 <= 30) {
            return MAGIC_FUMBLE_DATA["03"];
        } else if (d100 <= 40) {
            return MAGIC_FUMBLE_DATA["04"];
        } else if (d100 <= 50) {
            return MAGIC_FUMBLE_DATA["05"];
        } else if (d100 <= 60) {
            return MAGIC_FUMBLE_DATA["06"];
        } else if (d100 <= 70) {
            return MAGIC_FUMBLE_DATA["07"];
        } else if (d100 <= 80) {
            return MAGIC_FUMBLE_DATA["08"];
        } else if (d100 <= 90) {
            return MAGIC_FUMBLE_DATA["09"];
        } else if (d100 <= 95) {
            return MAGIC_FUMBLE_DATA["10"];
        } else if (d100 <= 97) {
            return MAGIC_FUMBLE_DATA["11"];
        } else if (d100 <= 99) {
            return MAGIC_FUMBLE_DATA["12"];
        } else {
            return MAGIC_FUMBLE_DATA["13"];
        }
    } else if (spellLevel <= 5) {
        if (d100 <= 5) {
            return MAGIC_FUMBLE_DATA["01"];
        } else if (d100 <= 10) {
            return MAGIC_FUMBLE_DATA["02"];
        } else if (d100 <= 15) {
            return MAGIC_FUMBLE_DATA["03"];
        } else if (d100 <= 20) {
            return MAGIC_FUMBLE_DATA["04"];
        } else if (d100 <= 30) {
            return MAGIC_FUMBLE_DATA["05"];
        } else if (d100 <= 40) {
            return MAGIC_FUMBLE_DATA["06"];
        } else if (d100 <= 50) {
            return MAGIC_FUMBLE_DATA["07"];
        } else if (d100 <= 60) {
            return MAGIC_FUMBLE_DATA["08"];
        } else if (d100 <= 70) {
            return MAGIC_FUMBLE_DATA["09"];
        } else if (d100 <= 80) {
            return MAGIC_FUMBLE_DATA["10"];
        } else if (d100 <= 90) {
            return MAGIC_FUMBLE_DATA["11"];
        } else if (d100 <= 95) {
            return MAGIC_FUMBLE_DATA["12"];
        } else if (d100 <= 99) {
            return MAGIC_FUMBLE_DATA["13"];
        } else {
            return MAGIC_FUMBLE_DATA["14"];
        }
    } else {
        if (d100 <= 5) {
            return MAGIC_FUMBLE_DATA["01"];
        } else if (d100 <= 10) {
            return MAGIC_FUMBLE_DATA["02"];
        } else if (d100 <= 15) {
            return MAGIC_FUMBLE_DATA["03"];
        } else if (d100 <= 20) {
            return MAGIC_FUMBLE_DATA["04"];
        } else if (d100 <= 30) {
            return MAGIC_FUMBLE_DATA["05"];
        } else if (d100 <= 40) {
            return MAGIC_FUMBLE_DATA["06"];
        } else if (d100 <= 50) {
            return MAGIC_FUMBLE_DATA["07"];
        } else if (d100 <= 55) {
            return MAGIC_FUMBLE_DATA["08"];
        } else if (d100 <= 60) {
            return MAGIC_FUMBLE_DATA["09"];
        } else if (d100 <= 65) {
            return MAGIC_FUMBLE_DATA["10"];
        } else if (d100 <= 70) {
            return MAGIC_FUMBLE_DATA["11"];
        } else if (d100 <= 75) {
            return MAGIC_FUMBLE_DATA["12"];
        } else if (d100 <= 80) {
            return MAGIC_FUMBLE_DATA["13"];
        } else if (d100 <= 85) {
            return MAGIC_FUMBLE_DATA["14"];
        } else if (d100 <= 90) {
            return MAGIC_FUMBLE_DATA["15"];
        } else if (d100 <= 95) {
            return MAGIC_FUMBLE_DATA["16"];
        } else if (d100 <= 97) {
            return MAGIC_FUMBLE_DATA["17"];
        } else if (d100 <= 99) {
            return MAGIC_FUMBLE_DATA["18"];
        } else {
            return MAGIC_FUMBLE_DATA["19"];
        }
    }
}

export default magicFumbleTable;