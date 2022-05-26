let list = document.getElementById("list");
let input = document.querySelector("#valor");
var valor = " ";
let reset = document.getElementById("reset");


git 


function add() {
  valor = input.value;
  if (valor.length < 1) {
    reset.innerHTML = "Adicione um item na sua lista";
  } else {
    reset.innerHTML = "";
    list.innerHTML += `<input type="checkbox" name="box" id="box"><label for="box"> ${valor}</label> <br>`;
  }
}
