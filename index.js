// fetch('https://jsonplaceholder.typicode.com/posts', {
// method: 'POST', // GET is default, but we can also use POST
// body: JSON.stringify({ // POSTed data goes in the request body
// title: 'The Studio',
// body: 'Something funny',
// userId: 1,
// }),
// headers: {
// 'Content-type': 'application/json; charset=UTF-8',
// },
// })
// .then((response) => response.json())
// .then((json) => console.log(json));

fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
  .then((response) => response.json())
  .then((json) => json.forEach((person) => {
    addCard(person.title, person.body)
  }));

function addCard(
  title = "Sample Title",
  userId = " Sample User",
  id = "Sample ID",
  body = "Sample Body"
) {
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);
  template.querySelector(".card-title").innerText = title;
  template.querySelector(".card-userId").innerText = userId;
  template.querySelector(".card-id").innerText = id;
  template.querySelector(".card-text").innerText = body;
  document.querySelector("#card-list").appendChild(template);
}

// json.forEach((person) => {
//     addCard(person.title, person.body);
//   });
