document.body.innerHTML = "<h1>Hello world </h1>"; // create
let h1Element = documnet.querySelecto(`h1`); //find;
h1Element.style.color = "rgb(255, 0 , 0)"; //modify

//Method 2

//create
let h2Element = document.createElement(`h2`);
//attach
document.body.prepend(h2Element);
//modify
h2Element.textContent = "Nice to meet you!";
