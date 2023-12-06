const inputfl = document.getElementById("in")
// const buttonfl = document.getElementById("bn")
const listul = document.getElementById("listul")


function addbn() {
    if (inputfl.value === "") {
        alert("enter");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputfl.value;
        listul.appendChild(li);
    }
    
}