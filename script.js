
function cal(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let addTotal = num1+num2;
    // let num2 = 5;
    // total = num1 + num2;
    document.getElementById("total").innerHTML =addTotal;
}

