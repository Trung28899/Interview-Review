/*
    reject will show up in catch() block
    only one of resolve or reject can be returned, 
    not both at the same time
*/
const getID = new Promise((resolve, reject) => {
  let result = fetch("https://jsonplaceholder.typicode.com/posts");
  // console.log(result);
  // reject("khong duoc roi");
  resolve(result);
});

/*
    You can replace getID with 
    fetch("https://jsonplaceholder.typicode.com/posts")
    nothing will change

    fetch return a promise to handle
*/

getID
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

/*
  Alternative way: async await
*/

async function getData() {
  try {
    let result = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await result.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

getData();
