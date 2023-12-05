import rollStat from "../helpers/rollStat.js";

/*
Generates a new stat set for a character.
*/
const rollNewStatSet= () => {
    return `New stat set: ${rollStat()}, ${rollStat()}, ${rollStat()}, ${rollStat()}, ${rollStat()}, ${rollStat()}`;
};

export default rollNewStatSet;
