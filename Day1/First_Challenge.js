
const remainingMinutesInOven = (actualMinutes) => {
    const EXPECTED_MINUTES_IN_OVEN = 40;
    return EXPECTED_MINUTES_IN_OVEN - actualMinutes;
}
console.log(remainingMinutesInOven(30))

preparationTimeInMinutes = (numberOfLayers) => {
    return numberOfLayers * 2;
}
console.log(preparationTimeInMinutes(8))

const totalTimeInMinutes = (actualMinutes, numberOfLayers) => {
    let prepTime = numberOfLayers * 2;
    let cookTime = 40 - actualMinutes;
    let totalTime = prepTime + cookTime;
    return totalTime;
}
console.log(totalTimeInMinutes(30,2))
