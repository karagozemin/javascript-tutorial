//! Asenkron Javascript

// console.log("hello1");
// console.log("hello2");
// setTimeout(function() {
//     console.log("hello3");

// }, 1000)
// console.log("hello4");

//! Callback Fonksiyonu

// function sayHello(callback){
//     setTimeout(function(){
//         console.log("hello 1");
//     }, 1000)
//     callback()
// }

// function sayHello2(){
//  console.log("hello 2");

// }
// sayHello(sayHello2);

//! Callback Hell

// function userList() {
//   console.log("kullanıcı listesi");
// }
// function productList() {
//   console.log("ürün listesi");
// }
// function priceList() {
//   console.log("fiyat listesi");
// }

// function dataList(waitTime, callback) {
//   setTimeout(function () {
//     callback();
//   }, waitTime * 1000);
//   console.log("beklemeyen işlem");
// }

// dataList(1, () => {
//   userList();
//   dataList(2, () => {
//     productList();
//     dataList(3, () => {
//       priceList();
//     });
//   });
// });

//! Javascript Promise
// function userList() {
//   console.log("kullanıcı listesi");
// }
// function productList() {
//   console.log("ürün listesi");
// }
// function priceList() {
//   console.log("fiyat listesi");
// }

// function myPromise(waitTime, callback) {
//   return new Promise(function (resolve, reject) {
//     const success = false;
//     setTimeout(() => {
//       if (callback) {
//         resolve(callback());
//       } else {
//         reject();
//       }
//     }, waitTime * 1000);
//   });
// }

// myPromise(1, userList)
//   .then(() => myPromise(2, productList))
//   .then(() => myPromise(3, priceList))
//   .catch(() => myPromise(error))

// dataList(1, () => {
//   userList();
//   dataList(2, () => {
//     productList();
//     dataList(3, () => {
//       priceList();
//     });
//   });
// });

// myPromise()
// .then((response) => console.log(response))
// .catch((error) => console.log(error))
// .finally(() => console.log("işlem tamamlandı"));

//! Javascript Async & Await

// function userList() {
//   console.log("kullanıcı listesi");
// }
// function productList() {
//   console.log("ürün listesi");
// }
// function priceList() {
//   console.log("fiyat listesi");
// }

// function dataList(waitTime, callback) {
//   return new Promise(function (resolve, reject) {
//     const success = false;
//     setTimeout(() => {
//       if (callback) {
//         resolve(callback());
//       } else {
//         reject();
//       }
//     }, waitTime * 1000);
//   });
// }

// async function executeDataList() {
//   try {
//     await dataList(1, userList);
//     await dataList(2, productList);
//     await dataList(3, priceList);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("işlem tamamlandı");
//   }
// }

// executeDataList();

//! Ajax ile xhr nesnesi oluşturup asenkron veri alma

// const xhr = new XMLHttpRequest();

// xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

// xhr.onload = function () {
//   if (xhr.status === 200) {
//     const data = JSON.parse(xhr.responseText);
//     myFunction(data);
//   }
// };

// xhr.send();

// function myFunction(userList) {
//   const data = userList.map((user) => user.name);
//   console.log(data);
// }

//! Fetch ile veri çekme

// function getUserData(){
// const response =
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => response.json())
// .then((data) => console.log(data));
// }
// getUserData();

//! Async & Await veri çekme

// async function getUserData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   } finally{
//     console.log("işlem tamamlandı");

//   }
// }
// getUserData();
