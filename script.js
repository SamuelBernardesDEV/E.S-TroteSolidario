
function calcularpts(){
    const rice = Number(document.querySelector("#rice").value);
    const beans = Number(document.querySelector("#beans").value);
    const result = document.querySelector(".resultado");
    let total = (rice * 10) + (beans * 8);
    
    result.innerText = "Pontuação Total: " + total;
}