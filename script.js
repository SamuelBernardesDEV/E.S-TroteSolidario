
function calcularpts(){
    // Itens Avulsos
    const rice = Number(document.querySelector("#rice").value);
    const beans = Number(document.querySelector("#beans").value);
    const pasta = Number(document.querySelector("#pasta").value);
    const oil = Number(document.querySelector("#oil").value);
    const result = document.querySelector(".resultado");
    const kits = Number(document.querySelector("#kits").value);
    const milk = Number(document.querySelector("#milk").value);
    const blood = Number(document.querySelector("#blood").value);
    const suple = Number(document.querySelector("#suple").value);
    // Equipes
    let teams = (document.querySelector("#teams-select").value)

    let meta1

    if(teams == "amarelo"){
        meta1 = 54
    }else if (teams == "cinza"){
        meta1 = 51
    }else if (teams == "laranja"){
        meta1 = 21
    }else if (teams == "cinza"){
        meta1 = 51
    }else if (teams == "cinza"){
        meta1 = 51
    }else if (teams == "cinza"){
        meta1 = 51
    }


    // Valor total
    var total = (rice * 10) + (beans * 8) + (pasta * 2) + (oil * 4);
    
    if(kits >= 60){
        if(kits == 60){
            total = total + 5000;
        } else if(kits > 60){
            total = total + (5000 + (kits - 60) * 83.33);
        }
    };

    result.innerText = "Pontuação Total: " + total;
    

}