const MAGIC_CRIT_TABLE = {
    "01": "Empowered Spell - all variable numerical effects increased by 50%",
    "02": "Extended Spell - double duration; instantaneous spells happen again next turn",
    "03": "Maximized Spell - all variable numerical effects are maximized",
    "04": "x2",
    "05": "Retain Spell - x2 and the spell is not lost",
    "06": "Knockdown Spell - x2 and knocked prone",
    "07": "Dazzling Spell - x2 and dazzled for 1d6 rounds",
    "08": "Dazing Spell - x2 and dazed for 1 round",
    "09": "Sickening Spell - x2 and sickened for 1d6 rounds",
    "10": "Demoralizing Spell - x2 and shaken for 2d4 rounds",
    "11": "Eye-Blast - x2 and blinded for 1d4 rounds",
    "12": "Sonic Boom - x2 and target and all adjacent are deafened for 1d4 rounds",
    "13": "Nauseating Spell - x2 and nauseated for 1d6 rounds",
    "14": "Staggering Spell - x2 and staggered for 1d4 rounds",
    "15": "Stunning Spell - x2 and stunned for 1d3 rounds",
    "16": "Sleep - x2 and unconscious (this is a magical sleep effect)",
    "17": "Confusing Spell - x2 and confused for 1d6 rounds",
    "18": "Disrupting Spell - x2 and target cannot cast spell or use spell-like abilities for 1d3 rounds",
    "19": "Disappearing - x2 and target cannot see or hear the caster for 1d4 rounds",
    "20": "Overwhelmed Senses - x2 and blinded and deafened for 1d6 rounds",
    "21": "Frightening Spell - x2 and target is frightened for 1d4 rounds",
    "22": "Limning Spell - x2 and target outlined by 'fairie fire' and dazzled for 2d4 rounds",
    "23": "Paralyzing Spell - x2 and paralyzed for 1d6 rounds",
    "24": "Shattering Blast - x2 and normal damage to armor or weapon",
    "25": "Necrotic Surge - x2 and targets that die from this rise as zombies under your control next round",
    "26": "Shrunk - x2 and target is reduced (as 'reduced person') for 1d4 rounds",
    "27": "Dispelling Blast - x2 and 'dispel magic' on target",
    "28": "Elemental Surge - x2 but the second half is damage of a random energy type",
    "29": "Elemental Vulnerability - x2 and if elemental spell, target is vulnerable to that energy type for 1 day",
    "30": "x3",
    "31": "Draining Spell - x3 and 1d2 negative levels (Fort save negates after 1 day)",
    "32": "Spell Blast - x3 and spell also affects adjacent targets",
    "33": "Petrification - x3 and petrified for 1d4 hours (Fort save negates)",
    "34": "Ooze Summoning - x3 and a gelatinous cube appears around target",
    "35": "Polymorph - x3 and target is polymorphed (as 'baleful polymorph') for 1d4 rounds",
    "36": "Displacing Summoning - x3 and target disappears and 'summon monster' takes its place for 1d4 rounds",
    "37": "x4",
    "38": "Falling Up - x4 and 'reverse gravity' 10 foot radius centered on target, 50 feet high for 1 round", 
    "39": "Earthquake - x4 and 10 foot radius 'earthquake' spell centered on target",
    "40": "Planar Shift - x4 and target is shifted to a random plane (Will save negates)",
}

/**
 * Determines the magic critical hit effect based on the spell level and d100 roll.
 * @param {required} spellLevel An integer value from 0 to 9
 * @param {required} d100 An integer value from 1 to 100
 * @returns A string with the effect
 */
const magicCritTable = (spellLevel, d100) => {
    if (spellLevel <= 2) {
        if (d100 <= 85) {
            if (d100 <= 10) {
                return MAGIC_CRIT_TABLE["01"];
            } else if (d100 <= 20) {
                return MAGIC_CRIT_TABLE["02"];
            } else if (d100 <= 25) {
                return MAGIC_CRIT_TABLE["03"];
            } else if (d100 <= 60) {
                return MAGIC_CRIT_TABLE["04"];
            } else if (d100 <= 70) {
                return MAGIC_CRIT_TABLE["05"];
            } else if (d100 <= 72) {
                return MAGIC_CRIT_TABLE["06"];
            } else if (d100 <= 74) {
                return MAGIC_CRIT_TABLE["07"];
            } else if (d100 <= 76) {
                return MAGIC_CRIT_TABLE["08"];
            } else if (d100 <= 78) {
                return MAGIC_CRIT_TABLE["09"];
            } else if (d100 <= 80) {
                return MAGIC_CRIT_TABLE["10"];
            } else if (d100 === 81) {
                return MAGIC_CRIT_TABLE["11"];
            } else if (d100 === 82) {
                return MAGIC_CRIT_TABLE["12"];
            } else if (d100 === 83) {
                return MAGIC_CRIT_TABLE["13"];
            } else if (d100 === 84) {
                return MAGIC_CRIT_TABLE["14"];
            } else if (d100 === 85) {
                return MAGIC_CRIT_TABLE["15"];
            } 
        } else {    
            if (d100 === 86) {
                return MAGIC_CRIT_TABLE["16"];
            } else if (d100 === 87) {
                return MAGIC_CRIT_TABLE["17"];
            } else if (d100 === 88) {
                return MAGIC_CRIT_TABLE["18"];
            } else if (d100 === 89) {
                return MAGIC_CRIT_TABLE["19"];
            } else if (d100 === 90) {
                return MAGIC_CRIT_TABLE["20"];
            } else if (d100 === 91) {
                return MAGIC_CRIT_TABLE["21"];
            } else if (d100 === 92) {
                return MAGIC_CRIT_TABLE["22"];
            } else if (d100 === 93) {
                return MAGIC_CRIT_TABLE["23"];
            } else if (d100 === 94) {
                return MAGIC_CRIT_TABLE["24"];
            } else if (d100 === 95) {
                return MAGIC_CRIT_TABLE["25"];
            } else if (d100 === 96) {
                return MAGIC_CRIT_TABLE["26"];
            } else if (d100 === 97) {
                return MAGIC_CRIT_TABLE["27"];
            } else if (d100 === 98) {
                return MAGIC_CRIT_TABLE["28"];
            } else if (d100 === 99) {
                return MAGIC_CRIT_TABLE["29"];
            } else {
                return MAGIC_CRIT_TABLE["30"];
            }
        }
    } else if (spellLevel <= 5) {
        if (d100 <= 63) {
            if (d100 <= 10) {
                return MAGIC_CRIT_TABLE["01"];
            } else if (d100 <= 20) {
                return MAGIC_CRIT_TABLE["02"];
            } else if (d100 <= 25) {
                return MAGIC_CRIT_TABLE["03"];
            } else if (d100 <= 30) {
                return MAGIC_CRIT_TABLE["04"];
            } else if (d100 <= 40) {
                return MAGIC_CRIT_TABLE["05"];
            } else if (d100 === 41) {
                return MAGIC_CRIT_TABLE["06"];
            } else if (d100 === 42) {
                return MAGIC_CRIT_TABLE["07"];
            } else if (d100 === 43) {
                return MAGIC_CRIT_TABLE["08"];
            } else if (d100 === 44) {
                return MAGIC_CRIT_TABLE["09"];
            } else if (d100 === 45) {
                return MAGIC_CRIT_TABLE["10"];
            } else if (d100 <= 47) {
                return MAGIC_CRIT_TABLE["11"];
            } else if (d100 <= 49) {
                return MAGIC_CRIT_TABLE["12"];
            } else if (d100 <= 51) {
                return MAGIC_CRIT_TABLE["13"];
            } else if (d100 <= 53) {
                return MAGIC_CRIT_TABLE["14"];
            } else if (d100 <= 55) {
                return MAGIC_CRIT_TABLE["15"];
            } else if (d100 <= 57) {
                return MAGIC_CRIT_TABLE["16"];
            } else if (d100 <= 59) {
                return MAGIC_CRIT_TABLE["17"];
            } else if (d100 <= 61) {
                return MAGIC_CRIT_TABLE["18"];
            } else if (d100 <= 63) {
                return MAGIC_CRIT_TABLE["19"];
            } 
        } else {    
            if (d100 <= 65) {
                return MAGIC_CRIT_TABLE["20"];
            } else if (d100 <= 67) {
                return MAGIC_CRIT_TABLE["21"];
            } else if (d100 <= 69) {
                return MAGIC_CRIT_TABLE["22"];
            } else if (d100 <= 71) {
                return MAGIC_CRIT_TABLE["23"];
            } else if (d100 <= 73) {
                return MAGIC_CRIT_TABLE["24"];
            } else if (d100 <= 75) {
                return MAGIC_CRIT_TABLE["25"];
            } else if (d100 <= 77) {
                return MAGIC_CRIT_TABLE["26"];
            } else if (d100 <= 79) {
                return MAGIC_CRIT_TABLE["27"];
            } else if (d100 <= 81) {
                return MAGIC_CRIT_TABLE["28"];
            } else if (d100 <= 83) {
                return MAGIC_CRIT_TABLE["29"];
            } else if (d100 <= 93) {
                return MAGIC_CRIT_TABLE["30"];
            } else if (d100 === 94) {
                return MAGIC_CRIT_TABLE["31"];
            } else if (d100 === 95) {
                return MAGIC_CRIT_TABLE["32"];
            } else if (d100 === 96) {
                return MAGIC_CRIT_TABLE["33"];
            } else if (d100 === 97) {
                return MAGIC_CRIT_TABLE["34"];
            } else if (d100 === 98) {
                return MAGIC_CRIT_TABLE["35"];
            } else if (d100 === 99) {
                return MAGIC_CRIT_TABLE["36"];
            } else {
                return MAGIC_CRIT_TABLE["37"];
            }
        }
    } else {
        if (d100 <= 55) {
            if (d100 < 5) {
                return MAGIC_CRIT_TABLE["01"];
            } else if (d100 <= 15) {
                return MAGIC_CRIT_TABLE["02"];
            } else if (d100 <= 25) {
                return MAGIC_CRIT_TABLE["03"];
            } else if (d100 <= 30) {
                return MAGIC_CRIT_TABLE["04"];
            } else if (d100 <= 40) {
                return MAGIC_CRIT_TABLE["05"];
            } else if (d100 === 41) {
                return MAGIC_CRIT_TABLE["06"];
            } else if (d100 === 42) {
                return MAGIC_CRIT_TABLE["07"];
            } else if (d100 === 43) {
                return MAGIC_CRIT_TABLE["08"];
            } else if (d100 === 44) {
                return MAGIC_CRIT_TABLE["09"];
            } else if (d100 === 45) {
                return MAGIC_CRIT_TABLE["10"];
            } else if (d100 === 46) {
                return MAGIC_CRIT_TABLE["11"];
            } else if (d100 === 47) {
                return MAGIC_CRIT_TABLE["12"];
            } else if (d100 === 48) {
                return MAGIC_CRIT_TABLE["13"];
            } else if (d100 === 49) {
                return MAGIC_CRIT_TABLE["14"];
            } else if (d100 === 50) {
                return MAGIC_CRIT_TABLE["15"];
            } else if (d100 === 51) {
                return MAGIC_CRIT_TABLE["16"];
            } else if (d100 === 52) {
                return MAGIC_CRIT_TABLE["17"];
            } else if (d100 === 53) {
                return MAGIC_CRIT_TABLE["18"];
            } else if (d100 === 54) {
                return MAGIC_CRIT_TABLE["19"];
            } else if (d100 === 55) {
                return MAGIC_CRIT_TABLE["20"];
            }
        } else {
            if (d100 === 56) {
                return MAGIC_CRIT_TABLE["21"];
            } else if (d100 === 57) {
                return MAGIC_CRIT_TABLE["22"];
            } else if (d100 === 58) {
                return MAGIC_CRIT_TABLE["23"];
            } else if (d100 === 59) {
                return MAGIC_CRIT_TABLE["24"];
            } else if (d100 === 60) {
                return MAGIC_CRIT_TABLE["25"];
            } else if (d100 === 61) {
                return MAGIC_CRIT_TABLE["26"];
            } else if (d100 === 62) {
                return MAGIC_CRIT_TABLE["27"];
            } else if (d100 === 63) {
                return MAGIC_CRIT_TABLE["28"];
            } else if (d100 === 64) {
                return MAGIC_CRIT_TABLE["29"];
            } else if (d100 <= 75) {
                return MAGIC_CRIT_TABLE["30"];
            } else if (d100 <= 77) {
                return MAGIC_CRIT_TABLE["31"];
            } else if (d100 <= 79) {
                return MAGIC_CRIT_TABLE["32"];
            } else if (d100 <= 81) {
                return MAGIC_CRIT_TABLE["33"];
            } else if (d100 <= 83) {
                return MAGIC_CRIT_TABLE["34"];
            } else if (d100 <= 85) {
                return MAGIC_CRIT_TABLE["35"];
            } else if (d100 <= 87) {
                return MAGIC_CRIT_TABLE["36"];
            } else if (d100 <= 97) {
                return MAGIC_CRIT_TABLE["37"];
            } else if (d100 === 98) {
                return MAGIC_CRIT_TABLE["38"];
            } else if (d100 === 99) {
                return MAGIC_CRIT_TABLE["39"];
            } else {
                return MAGIC_CRIT_TABLE["40"];
            }
        }
    }
}

export default magicCritTable;