let y = document.getElementById("show");


function display(x) {
    y.value += x;
}
function equl2() {
    let final = y.value
    let result = eval(final)
    y.value= result 
}