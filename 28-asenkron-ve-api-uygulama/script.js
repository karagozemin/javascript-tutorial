const postListDOM = document.querySelector(".post-list");
const postUI = (posts) => {
  let result = "";
  posts.forEach((post) => {
    result += `
    <li class="post-item">
    <div class="post-body">
      <span class="post-id">Post Id: <b>${post.id}1</b></span>
      <strong class="post-title">${post.title}Title</strong>
      <p class="post-content">${post.body}Post Content</p>
    </div>
    <button class="post-button">Read More</button>
  </li>
    
    `;
    postListDOM.innerHTML = result;
  });
};

//! Ajax
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
// xhr.onload = function () {
//   const response = xhr.responseText;
//   const data = JSON.parse(response);
//   postUI(data);
// };
// xhr.send();

//! Fetch
//  fetch("https://jsonplaceholder.typicode.com/users")
//  .then(response => response.json())
//  .then(data => postUI(data));
//  .catch((error) => console.log(error));

//! Async & Await
// const getData = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = response.json();
//   console.log(data);
// };

// window.addEventListener("DOMContentLoaded", () => {
//   getData();
// });
