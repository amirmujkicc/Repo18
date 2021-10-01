// Only change code below this line
let rockStar = new Map([
    ["artist", "The rolling stones"],
    ["song", "Angie"],
    ["album", "Goats Head Soup"],
    ["singer", "Mick Jagger"]
]);

let newRock = new Map()

let array = [...rockStar.keys()];
for (let key of array) {
    if (!key.includes('a')) {
        newRock.set(`${key}`, `${rockStar.get(key)}`)
    }
}
console.log(newRock);
// Only change code above this line
module.exports = { rockStar, newRock };