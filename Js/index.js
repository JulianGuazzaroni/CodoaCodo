function resumen(){
   var select = document.getElementById("select-categoria"); 
   console.log(select);
   alert("A")
}
function enviarFormulario(e){
    e.preventDefault(); //evita que se envie el formulario al recargar la pagina

}

// Función para calcular el total a pagar
function calcularTotal() {
        borrarTotal();
    // Obtener la cantidad de tickets y la categoría seleccionada
    const cantidadTickets = parseInt(document.getElementById("cantidadTickets").value | 0); // <-- ese | 0, quiere decir que si lo primero no funciona, tome el 0
 // Valido que haya tickets
 if (cantidadTickets == null || cantidadTickets <= 0) {
    alert("Debe ingresar la cantidad de tickets a comprar");
  }

  const categoria = document.getElementById("select-categoria").value;

  let precioTicket = 200; // Precio base del ticket
    // Determinar el precio del ticket 
    switch (categoria) {
        case "1":
            precioTicket = 40; 
            break;
        case "2":
            precioTicket = 125; 
            break;
        case "3":
            precioTicket = 170; 
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
    document.getElementById("borrarBtn").addEventListener("click", borrarTotal);
