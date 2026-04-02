
function calcularpts(){
    const rice = Number(document.querySelector("#rice").value);
    const beans = Number(document.querySelector("#beans").value);
    const pasta = Number(document.querySelector("#pasta").value);
    const oil = Number(document.querySelector("#oil").value);
    const result = document.querySelector(".resultado");
    const kits = document.querySelector(".kits");
    const milk = document.querySelector(".milk");

    let total = (rice * 10) + (beans * 8) + (pasta * 2) + (oil * 4);
    
    if(kits >= 60){
        if(Kits == 60){
            total = total + 5000;
        }
    }else{
        total = total + ((kits - 60) * 83,33);
    }

    result.innerText = "Pontuação Total: " + total;
}