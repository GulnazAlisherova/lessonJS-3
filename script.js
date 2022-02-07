// //method 1
// document.body.innerHTML = "<h1>Hello world </h1>"; // create
// let h1Element = documnet.querySelecto(`h1`); //find;
// h1Element.style.color = "rgb(255, 0 , 0)"; //modify

// //Method 2

// //create
// let h2Element = document.createElement(`h2`);
// //attach
// document.body.prepend(h2Element);
// //modify
// h2Element.textContent = "Nice to meet you!";


let exercisesElement = document.querySelector('#exercises');

let h1Element = document.createElement('h1'); //create
h1Element.textContent = "h1 Header";//modify
exercisesElement.append(h1Element); //attach

let h2Element = document.createElement('h2');
h2Element.textContent = "h2 Header";
exercisesElement.append(h2Element)