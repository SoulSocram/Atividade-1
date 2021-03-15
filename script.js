
function soma() {
    var x = document.querySelector(".x").value;
    var y = document.querySelector(".y").value;

    var resultado = parseInt(x) + parseInt(y);
    document.querySelector(".resp").innerHTML = resultado;
}