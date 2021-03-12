// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(cat) {
    cats.push(cat);
}

function destructivelyPrependCat(cat) {
    cats.unshift(cat);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const appendedCats = [...cats, name];
    return appendedCats
}

function prependCat(name) {
    const prependedCat = [name, ...cats];
    return prependedCat
}

function removeLastCat() {
    const removedCat = cats.slice(0,2);
    return removedCat
}

function removeFirstCat() {
    const removedFirstCat = cats.slice(-2);
    return removedFirstCat
}