function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2  // tabalho 1 ou 2
    const comprarTv50 = trabalho1 && trabalho2 // trabalho 1 e 2
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorverte

    return { comprarSorverte, comprarTv50, comprarTv32, manterSaudavel}
    
}