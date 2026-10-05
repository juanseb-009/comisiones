const VENTAS_BASE = 5;


/* =========================
   CALCULAR COMISIÓN
========================= */

function calcularComision(numeroVentas, PrecioProducto) {

    let comision = 0;

    if (numeroVentas > VENTAS_BASE) {

        let ventasExtra = numeroVentas - VENTAS_BASE;

        comision = ventasExtra * (PrecioProducto * 0.1);
    }

    return comision;
}


/* =========================
   VALIDAR SALARIO BASE
========================= */

function validarSueldoBase() {

    let valor = recuperarTexto("txtSueldoBase");

    let mensaje = document.getElementById("errorSueldoBase");

    mensaje.textContent = "";

    if (valor === "") {

        mensaje.textContent = "El campo no puede estar vacío";

        return false;
    }

    if (!/^[0-9]+$/.test(valor)) {

        mensaje.textContent = "Solo se permiten números";

        return false;
    }

    if (valor.length > 5) {

        mensaje.textContent = "Máximo 5 dígitos";

        return false;
    }

    return true;
}


/* =========================
   VALIDAR NÚMERO DE VENTAS
========================= */

function validarVentas() {

    let valor = recuperarTexto("txtVentas");

    let mensaje = document.getElementById("errorVentas");

    mensaje.textContent = "";

    if (valor === "") {

        mensaje.textContent = "El campo no puede estar vacío";

        return false;
    }

    if (!/^[0-9]+$/.test(valor)) {

        mensaje.textContent = "Solo se permiten números";

        return false;
    }

    if (valor.length > 5) {

        mensaje.textContent = "Máximo 5 dígitos";

        return false;
    }

    return true;
}


/* =========================
   VALIDAR PRECIO
========================= */

function validarPrecio() {

    let valor = recuperarTexto("txtPrecio");

    let mensaje = document.getElementById("errorPrecio");

    mensaje.textContent = "";

    if (valor === "") {

        mensaje.textContent = "El campo no puede estar vacío";

        return false;
    }

    if (!/^[0-9]+$/.test(valor)) {

        mensaje.textContent = "Solo se permiten números";

        return false;
    }

    if (valor.length > 5) {

        mensaje.textContent = "Máximo 5 dígitos";

        return false;
    }

    return true;
}


/* =========================
   CALCULAR
========================= */

function calcular() {

    let sueldoValido = validarSueldoBase();

    let ventasValido = validarVentas();

    let precioValido = validarPrecio();


    if (
        sueldoValido === false ||
        ventasValido === false ||
        precioValido === false
    ) {
        return;
    }


    let sueldoBase = recuperarFloat("txtSueldoBase");

    let numeroVentas = recuperarFloat("txtVentas");

    let PrecioProducto = recuperarFloat("txtPrecio");


    let comision = calcularComision(
        numeroVentas,
        PrecioProducto
    );


    let total = sueldoBase + comision;


    mostrarenSp(
        "spSueldoBase",
        sueldoBase
    );

    mostrarenSp(
        "spComision",
        comision
    );

    mostrarenSp(
        "spTotal",
        total

    ); 
}