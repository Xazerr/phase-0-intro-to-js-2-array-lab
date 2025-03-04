

let cats = ["Milo", "Otis", "Garfield"];

function removeFirstCat() {
  return cats.slice(1);
}

function removeLastCat() {
  return cats.slice(0, -1);
}

function prependCat(name) {
  return [name, ...cats];
}

function appendCat(name) {
  return [...cats, name];
}

function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats;
}

function destructivelyRemoveLastCat() {
  cats.pop();
  return cats;
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
  return cats;
}

function destructivelyAppendCat(name) {
  cats.push(name);
  return cats;
}

