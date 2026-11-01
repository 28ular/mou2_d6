const NumbArr = [1, 2, 3, 4, 5];

let addF = NumbArr.unshift(0);

let delFirst = NumbArr.shift();

console.log(NumbArr);

const filtArr = NumbArr.filter((i) => i % 2 === 0);
console.log(filtArr);

const upArr = NumbArr.map((i) => i * 5);
console.log(upArr);

const mapArr = NumbArr.reduce((acc, i) => acc + i, 0) / NumbArr.length;
console.log(mapArr);

const celebrities = [
  {
    name: "Michael Jackson",
    age: 50,
    role: "singer",
  },
  {
    name: "Keanu Reeves",
    age: 62,
    role: "actor",
  },
  {
    name: "Lionel Messi",
    age: 39,
    role: "footballer",
  },
  {
    name: "Elon Musk",
    age: 55,
    role: "entrepreneur",
  },
  {
    name: "Zendaya",
    age: 30,
    role: "actress",
  },
  {
    name: "Billie Eilish",
    age: 24,
    role: "singer",
  },
  {
    name: "Leonardo DiCaprio",
    age: 51,
    role: "actor",
  },
  {
    name: "Rihanna",
    age: 38,
    role: "singer",
  },
  {
    name: "Cristiano Ronaldo",
    age: 41,
    role: "footballer",
  },
  {
    name: "Dwayne Johnson",
    age: 54,
    role: "actor",
  },
];

const onlyName = celebrities.map((celebrity) => celebrity.name);
console.log(onlyName);

const names = celebrities.map((i) => `${i.name} is ${i.role}`);

console.log(names);

const older = celebrities.reduce((prev, cur) => {
  return prev.age > cur.age ? prev : cur;
});

console.log(older);

const younger = celebrities.reduce((prev, cur) => {
  return prev.age < cur.age ? prev : cur;
});
console.log(younger);

console.log(`разница в возрасте ${older.age - younger.age} лет`);

const fam20 = celebrities.filter((i) => i.age > 20);
console.log(fam20);
