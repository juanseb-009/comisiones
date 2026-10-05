const VENTAS_BASE = 5;
function calcularComision(numeroVentas,PrecioProducto){
    let comision = 0;
    if(numeroVentas > VENTAS_BASE){
        let ventasExtra  = numeroVentas-VENTAS_BASE ;
        comision = ventasExtra*(PrecioProducto*0.1);

    } 
    return comision;
}
function calcular(){

    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let PrecioProducto = recuperarFloat("txtPrecio"); 

    let comision = calcularComision(numeroVentas, PrecioProducto);

    let total = sueldoBase + comision;


    mostrarenSp("spSueldoBase",sueldoBase);
    mostrarenSp("spComision",comision);
    mostrarenSp("spTotal",total);
}

