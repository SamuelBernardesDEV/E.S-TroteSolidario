function calcularpts() {
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
    let teams = document.querySelector("#teams-select").value;
    let meta1 = 0;

    if (teams == "amarelo") {
        meta1 = 54;
    } else if (teams == "cinza") {
        meta1 = 51;
    } else if (teams == "laranja") {
        meta1 = 21;
    } else if (teams == "marrom") {
        meta1 = 88;
    } else if (teams == "preta") {
        meta1 = 60;
    } else if (teams == "rosa") {
        meta1 = 44;
    } else if (teams == "roxo") {
        meta1 = 42;
    } else if (teams == "verde") {
        meta1 = 61;
    } else if (teams == "vermelho") {
        meta1 = 32;
    } else {
        // Nao selecionou equipe
        result.innerText = "Por favor, selecione uma equipe válida.";
        return;
    }

    // Valor total - itens avulsos
    let totalavulsos = (rice * 10) + (beans * 8) + (pasta * 2) + (oil * 4);

    // Valor total - kits
    let totalkits = 0;
    if (kits >= meta1) {
        if (kits == meta1) {
            totalkits = 5000;
        } else if (kits > meta1) {
            totalkits = 5000 + ((kits - meta1) * (5000 / meta1));
        }
    }

    // Valor Total - Leite
    let metamilk = meta1;
    let totalmilk = 0;
    if (milk >= metamilk) {
        if (milk == metamilk) {
            totalmilk = 5000;
        } else if (milk > metamilk) {
            totalmilk = 5000 + ((milk - metamilk) * (5000 / metamilk));
        }
    }

    // Valor Total - Suplementos
    let metasuple = 0;
    let totalsuple = 0;
    if (meta1 % 2 == 0) {
        metasuple = meta1 / 2;
    } else {
        metasuple = (meta1 + 1) / 2;
    }

    if (suple >= metasuple) {
        if (suple == metasuple) {
            totalsuple = 5000;
        } else if (suple > metasuple) {
            totalsuple = 5000 + ((suple - metasuple) * (5000 / metasuple));
        }
    }

    // Valor Total - Sangue
    let metablood = metasuple;
    let totalblood = 0;
    if (blood >= metablood) {
        if (blood == metablood) {
            totalblood = 5000;
        } else if (blood > metablood) {
            totalblood = 5000 + ((blood - metablood) * (5000 / metablood));
        }
    }

    // Resultado Final
    result.innerText = "Pontuação Total: " + (totalavulsos + totalkits + totalmilk + totalsuple + totalblood).toFixed(2) + " pontos";
}