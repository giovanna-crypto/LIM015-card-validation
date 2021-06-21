import validator from './validator.js';

console.log(validator);
/*
function capturado(){
      let numerodetarjeta= document.getElementById("numtarjeta").value;
      validator.isValid(numerodetarjeta)
}
document.getElementById("validar").addEventListener("click",capturado);*/
document.getElementById("validar").addEventListener("click", ()=>{
document.getElementById("pantallaUno").style.display="none";
document.getElementById("pantallaDos").style.display="block";
      
//document.getElementById("cardNumbernumeral").innerHTML = numeroTarjeta;
  
const numeroTarjeta = document.getElementById("numtarjeta").value;
let estadoTarjeta = true;
let asterisco;
//alert de ingreso de numero de tarjeta

   
  estadoTarjeta = validator.isValid(numeroTarjeta);
  
      if (numeroTarjeta.length == 0 ) {
          alert("Debes llenar el campo");
           
           document.getElementById("validar").style.display="block";
           
        }
  
      else{
  
          if (estadoTarjeta == false) {
          asterisco= validator.maskify(numeroTarjeta);
          
          
          document.getElementById("validar").style.display="block";
          document.getElementById("validar").style.display="block";
          document.getElementById("cardNumberAsterisco").innerHTML ="NO VALIDO";
          document.getElementById("numeroAsterisco").innerHTML =asterisco;
          }
    
          else {
              asterisco= validator.maskify(numeroTarjeta);
              document.getElementById("validar").style.display="block";
              document.getElementById("validar").style.display="block";
              document.getElementById("cardNumberAsterisco").innerHTML ="VALIDO";
              document.getElementById("numeroAsterisco").innerHTML =asterisco;

           //volver   
          }
         }})
document.getElementById("volver").addEventListener("click", ()=>{
document.getElementById("pantallaDos").style.display="none";
document.getElementById("pantallaUno").style.display="block";})