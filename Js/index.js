function resumen(){
   var select = document.getElementById("select-categoria"); 
   console.log(select);
   alert("A")
}
function enviarFormulario(e){
    e.preventDefault(); //evita que se envie el formulario al recargar la pagina
    alert("formulario")
}
// Función para calcular el total a pagar
function calcularTotal() {
    // Obtener la cantidad de tickets y la categoría seleccionada
    const cantidadTickets = parseInt(document.getElementById("cantidadTickets").value);
    const categoria = document.getElementById("select-categoria").value;

    let precioTicket = 200; // Precio base del ticket

    // Determinar el precio del ticket según la categoría
    switch (categoria) {
        case "1":
            precioTicket = 40; // Estudiante
            break;
        case "2":
            precioTicket = 125; // Trainee
            break;
        case "3":
            precioTicket = 215; // Junior
            break;
        default:
            alert("Categoría no válida");
            return;
    }

    // Calcular el total a pagar con descuento
    let totalAPagar = cantidadTickets * precioTicket;

    // Mostrar el resultado en la sección correspondiente
    document.getElementById("totalAPagar").textContent = totalAPagar;
}
    function borrarTotal() {
        document.getElementById("totalAPagar").textContent = "0";
    }

    // Agregar un event listener al botón "Borrar"
    document.getElementById("borrarBtn").addEventListener("click", borrarTotal);
