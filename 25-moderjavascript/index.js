const sayHello = function () {
  console.log("emin");
};

const sayHello2 = () => {
  console.log("caner");
};

const sayHello3 = () => {
  console.log("selim");
};

const sayHello4 = function (name) {
  console.log(`Hello,${name}`);
};

const sayhello5 = (name) => console.log(`Hello,${name}`);

// sayhello5("emin");

//! Array Method

//? map
// const squares = numbers.map((x) => x * x);
// console.log(squares);

//? filtre
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const ciftSayilar = numbers.filter((x) => x % 2 === 2);
// console.log(ciftSayilar);

//?  reduce
// const numbers = [1,2,3,4,5];
// const sum = numbers.reduce((acc, x) => acc + x, 0);
// console.log(sum);

//? find
// const numbers = [1, 2, 3, 4, 5];
// const findNumber = numbers.find((x) => x > 2);
// console.log(findNumber);

//? some
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const isBigNumberExist = numbers.some((x) => x > 9);
// console.log(isBigNumberExist);

//? every
// const numbers = [2, 3, 6, 8, 10];
// const isAllEven = numbers.every(x => x % 2 === 0);
// console.log(isAllEven);

//! Spread operator

// const numbers1 = [1, 2, 3];
// const numbers2 = [... numbers1, 4, 5, 6];
// console.log(numbers2);

// const numbers = [1, 2, 3];
// const add = (x, y, z) => x + y + z ;
// console.log(add(...numbers));

// const obj1 = {name: "Johm", age: 30};
// const obj2 = {name:"Mike", job:"Developer", ...obj1};
// console.log(obj2);

//! Destructuring

// const obj = { name: "John", age: 30, job: "Developer" };
// const { name, age } = obj;
// const newObj = {name, age}
// console.log(obj);

// const obj = { name: "John", age: 30};
// const { name: johnName } = obj;
// console.log(johnName);

// const numbers = [1, 2, 3, 4, 5];
// const [first, second, ...rest] = numbers;
// console.log(first);
// console.log(second);
// console.log(rest);

// const obj = { name: "John", age: 30, job: "Developer" };
// const { name, age } = obj;
// const newObj = {name, age, location: "New York", ...obj};
// console.log(newObj);

//? Maps
// const map = new Map();
// map.set("name", "John");
// map.set("age", 30);
// map.set("job", "Developer");

// console.log(map.get("name"));
// map.delete("job");
// console.log(map);
// map.forEach((value,key) => console.log(`${key}: ${value}`));

//? Sets
// const set = new Set();
// set.add(1);
// set.add(2);
// set.add(3);
// set.add(3);
// console.log(set.has(2));
// set.delete(2);
// console.log(set);
// set.forEach((value) => console.log(value));