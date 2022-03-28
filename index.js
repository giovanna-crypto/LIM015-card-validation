import validator from './validator.js';
document.getElementById("validar").addEventListener("click", () => {
 

  const cardNumber = document.getElementById("numtarjeta").value;

  //alert de ingreso de numero de tarjeta
  if (cardNumber.length == 0) {
    alert("Debes llenar el campo");
    
  } else {//añadir maskify
    const estadoTarjeta = validator.isValid(cardNumber);
    const asterisco = validator.maskify(cardNumber);
    document.getElementById("numeroAsterisco").innerHTML = asterisco;
    if (estadoTarjeta) {
      document.getElementById("cardNumberAsterisco").innerHTML = "VALIDO";
    }
    else {
      document.getElementById("cardNumberAsterisco").innerHTML = "NO VALIDO";
    }
    document.getElementById("pantallaUno").style.display = "none";
    document.getElementById("pantallaDos").style.display = "block";
  }
})
//volver 
document.getElementById("volver").addEventListener("click", () => {
  document.getElementById("pantallaDos").style.display = "none";
  document.getElementById("pantallaUno").style.display = "block";
});