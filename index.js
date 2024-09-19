function calcularNivel(vitorias) {
    let nivel = ""; // Defina a variável nivel dentro da função

    if (vitorias <= 10) {
        nivel = "Ferro";
    } else if (vitorias > 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias > 20 && vitorias <= 50) {  // Corrigido para 20 em vez de 21 para cobrir o intervalo corretamente
        nivel = "Prata";
    } else if (vitorias > 50 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias > 80 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias > 90 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }
    
    return nivel;
}

let saldoVitorias = 0;

for (let i = 0; i < 5; i++) {
    saldoVitorias += 25;
}
        
    let nivel = calcularNivel(saldoVitorias);    
    console.log(`O herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`);

