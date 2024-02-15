let h1Element = document.createElement("h1");
h1Element.textContent = "Web Technologies";
// document.body.appendChild(h1Element);
let containerElement = document.getElementById("container");
containerElement.appendChild(h1Element);

let buttonElement = document.createElement("button");
buttonElement.textContent = "change heading";
containerElement.appendChild(buttonElement);


let removeBtnElement = document.createElement("button");
removeBtnElemen.textContent = "Remove Styles";
containerElement.appendChild(removeElement);

// console.log("hi");
buttonElement.onclick = function(){
    h1Element.textContent = "4.0 Technologies";
    h1Element.classList.add("heading");
}