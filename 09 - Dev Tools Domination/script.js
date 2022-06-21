const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

const p = document.querySelector("p");
function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("Hello");
// Interpolated
console.log("Hello %s", "💩");
// Styled
console.log("%c Hello", "color: blue");
// warning!
console.warn("warn");
// Error :|
console.error("error");
// Info
console.info("info");
// Testing
console.assert(1 === 2, "wrong");
// clearing
console.clear();
// Viewing DOM Elements
console.log(p);
// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});
// counting
console.count("zzz");
console.count("zzz");
console.count("zzz");
console.count("zzz");
console.count("zzz");
console.count("zzz");
console.count("zzz");
console.count("zzz");
console.count("zzz");
// timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

console.table(dogs);
