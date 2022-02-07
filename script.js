// // //method 1
// // document.body.innerHTML = "<h1>Hello world </h1>"; // create
// // let h1Element = documnet.querySelecto(`h1`); //find;
// // h1Element.style.color = "rgb(255, 0 , 0)"; //modify

// // //Method 2

// // //create
// // let h2Element = document.createElement(`h2`);
// // //attach
// // document.body.prepend(h2Element);
// // //modify
// // h2Element.textContent = "Nice to meet you!";

// let exercisesElement = document.querySelector('#exercises');

// //append - insert element before closing tag
// //prepend - insert element after opening tag
// //before - 

// // let h1Element = document.createElement('h1'); //create
// // h1Element.textContent = "h1 Header";//modify
// // exercisesElement.append(h1Element); //attach 
// // h1Element.style.color = "rgb(255, 0 , 0)"; //modify

// // let h2Element = document.createElement('h2');
// // h2Element.textContent = "h2 Header";
// // exercisesElement.append(h2Element) // Attach

// // let h3Element = document.createElement('h3');
// // h3Element.textContent = "h3 Header";
// // exercisesElement.append(h3Element) // Attach

// //  let h4Element = document.createElement('h4');
// //  h4Element.textContent = "h4 Header";
// //  exercisesElement.prepend(h4Element) // Attach

// //  let h5Element = document.createElement('h5'); //create
// //  h5Element.textContent = "h5 Header"; //modify
// // exercisesElement.before(h5Element) // Attach

//   let h6Element = document.createElement('h6'); //create
//   exercisesElement.after(h6Element) // Attach
//   h6Element.textContent = "h6 Header"; //modify
//  //Exercise
//  let exercise1 = document.querySelector('#exercise1');
//  exercise1.before('before');
//  exercise1.prepend('prepend');
//  exercise1.append('append');
//  exercise1.after('after');
// exercise1/replaceWith('replaced');

  let button = document.createElement('button');
  exercisesElement.prepend(button);
  button.textContent = "Launch Meeting";
  button.style.padding = "10px 25px";
  button.style.color = "white";
  button.style.borderRadius = "10px";
  button.style.backgroundColor = "blue";
  button.style.border = "none";



// //list 
// let shoppingList = ['Apple', 'Banana', 'Pineapple'];
// //create ul
// let listElement = document.createElement('ul');
// exercisesElement.prepend(listElement);
// //create li
// for (let i = 0; i < shoppingList.length; i++) {
//   let listItemElement = document.createElement('li');
//   listElement.append(listItemElement);
//   listItemElement.textContent = shoppingList[i];
// }

//  how to copy 
// let button2 = button.cloneNode();
// button2.textContent = "Hello";
// exercisesElement.prepend(button2);

//how to remove
// button2.remove();


// let list2 = listElement.cloneNode(true);
// exercisesElement.prepend


let table = document.createElement('ul');
exercisesElement.prepend(listElement);
//create li
for (let i = 0; i < shoppingList.length; i++) {
  let listItemElement = document.createElement('li');
  listElement.append(listItemElement);
  listItemElement.textContent = shoppingList[i];
}

// число 0-255 math.random() * 255

let div =  document.createElement('div');