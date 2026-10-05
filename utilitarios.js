function recuperarTexto(idComponente){
    let componente = document.getElementById(idComponente);
    let valor = componente.value;

    return valor;
}
function recuperarFloat(idComponente){
    let valorTexto = recuperarTexto(idComponente);
    let valorFloat = parseFloat(valorTexto);
    return valorFloat;
}

function recuperarInt(idComponente){
    let valorTexto = recuperarTexto(idComponente);
    let valorInt= parseInt(valorTexto);
    return valorInt;
}
function mostrarenSp(idComponente,valor){
    let componente = document.getElementById(idComponente);
    componente.textContent = valor;
    

}