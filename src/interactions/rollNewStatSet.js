import rollStatSet from "../helpers/rollStatSet.js";

/*
Generates a new stat set for a character.
*/
const rollNewStatSet= () => {
    const statSet = rollStatSet();

    return `New stat set: ${statSet[0]}, ${statSet[1]}, ${statSet[2]}, ${statSet[3]}, ${statSet[4]}, ${statSet[5]}`;
};

export default rollNewStatSet;
