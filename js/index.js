//Deberá contener la funcionalidad en Javascript, al momento de presionar el botón “Resumen”, 
//deberá mostrar en la sección “Total a Pagar: $”, el monto correspondiente a la cantidad de tickets a comprar con 
//el descuento correspondiente dependiendo la categoría seleccionada, existen 3 categorías:
//Estudiante descuento del 80%
//Trainee descuento del 50%
//Junior descuento del 15%
// valor ticket $200

/*El 'guion' para que les funcione este TP es masomenos asi:

1) en la funcion asociada al boton CALCULAR, deben obtener y guardar los valores de la categoria 
(un string) y la cantidad (un entero)
2) Usando la categoria y mediante un switch, almacenar en una variable los posibles 
descuentos (80, 50, 15, 0)
3) Usando la cantidad, el descuento y el valor de la entrada, calcular el total:

Total = cantidad * valor_entrada  * ( 100 - descuento) / 100
4) Mostrar en la linea adecuada el total calculado*/

function calcularTotal() {
    var precio = 200;
    var categoria = document.getElementById('inputCategoria').value;
    var cantidad = parseInt(document.getElementById('inputCantidad').value);

    var cat;
    switch (categoria) {
        case 'Estudiante':
            cat = precio * 0.8;
            break;
        case 'Trainee':
            cat = precio * 0.5;
            break;
        case 'Junior':
            cat = precio * 0.15;
            break;
        default:
            cat = precio;
    }
    let total = cantidad * cat;
    document.getElementById("resultado").innerHTML = 'Total a pagar: $ ' + total;
}

function borrar() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('inputEmail4').value = '';
    document.getElementById('inputCantidad').value = '';
    document.getElementById('resultado').innerHTML = 'Total a pagar: $ ';
}

document.getElementById('btn_resumen').addEventListener('click', calcularTotal);

document.getElementById('btn_borrar').addEventListener('click', borrar);