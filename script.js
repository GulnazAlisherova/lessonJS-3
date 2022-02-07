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
exercisesElement.append(h2Element) // Attach

let h3Element = document.createElement('h3');
h3Element.textContent = "h3 Header";
exercisesElement.append(h3Element) // Attach

let h4Element = document.createElement('h4');
h4Element.textContent = "h4 Header";
exercisesElement.append(h4Element) // Attach

let h5Element = document.createElement('h5'); //create
h5Element.textContent = "h5 Header"; //modify
exercisesElement.append(h5Element) // Attach

let h5Element = document.createElement('h5'); //create