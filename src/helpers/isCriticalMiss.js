const isCriticalMiss = (level, d100) => {
    return d100 > 10 + 5 * level
};

export default isCriticalMiss;