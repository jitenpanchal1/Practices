// console.log(a);

// let a = 5;
// var b = "b";
// console.log(b);

// this is hiisting concept
// call();

// function call() {
//   console.log("hey i am here");
// }

// this is the closure function.

// function clall(num) {
//   return function child(num2) {
//     return num * num2;
//   };
// }

// console.log(clall(5)(10));

// this is example of call back function.

// function call(num, call2) {
//   return call2(num);
// }

// function call2(num) {
//   return num * 2;
// }

// console.log(call(5, call2));

// function pro() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("hey ");
//       resolve("work done");
//       reject("work not done");
//     }, 2000);
//   });
// }

// pro()
//   .then((resolve) => {
//     console.log("service fullfilied", resolve);
//   })
//   .catch((reject) => {
//     console.log("service failed", reject);
//   });

// async function full() {
//   try {
//     let completr = await pro();
//     if (completr) console.log("task complete");
//   } catch (err) {
//     console.log("problem to fetch")
//   }
// }

// full();

// example of rest operator

// function rest(num, ...count) {
//   return { num, count };
// }

// console.log(rest(2, 145, 55, 45, 8, 9, 87, 8, 78, 8, 9, 7, 4, 5, 5, 6, 4));

// let arr = [6, 7, 8, 9, 10];
// let raa2 = [1, 2, 3, 4, 5];
// let joint2 = [...raa2,...arr];
// let joint = raa2.concat(arr);
// console.log(joint);
// console.log(joint2);

// Hoc in js

// let arr = [5, 6, 8, 1, 12, 89, 1, 4, 5, 5, 4, 4];

// let man = arr.map((item) => {
//   return item * 5;
// });

// console.log(man);
