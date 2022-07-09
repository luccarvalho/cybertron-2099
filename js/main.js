const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const bracos = document.querySelector("#bracos");

somar.addEventListener("click", (evento) => {
    bracos.value = parseInt(bracos.value) + 1;
})

subtrair.addEventListener("click", (evento) => {
    bracos.value = parseInt(bracos.value) - 1;
})