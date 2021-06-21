const validator = {
  isValid(numtarjeta){
    console.log(numtarjeta);
    //pasar los numeros a un array en orden inverso
    let revertirNumero= Array.from(numtarjeta).reverse();
    let suma = 0;
    let estado = true;
    for (let i=0; i<revertirNumero.length; i ++) {
      //aplicar las operaciones a los numeros de las posiciones pares
      if ((i+1) %  2 == 0) {
        revertirNumero[i] =revertirNumero[i]*2;
        //si es >=10, restar menos 9
        if (revertirNumero[i]>9){
        revertirNumero[i] =revertirNumero[i]-9;
        }      
      } 
      //suma los digitos y nuevos digitos
      suma+= parseInt(revertirNumero[i]);
      console.log(revertirNumero); 
    } 
    //comprobar si es una tarjeta valida
    if (suma%10==0) {
      estado == true;
    }
    else{
      estado=false;
    }
    return estado; 
    console.log(suma);
},
  //enmascarar el número de la tarjeta excepto los ultimos 4 digitos  
maskify : (numtarjeta)=>{
    let num = Array. from(numtarjeta);
      for (let i=0; i<=num.length; i++) {
          if(i<num.length-4){
            num[i]="#";
          }
        }
        return num.join("");
    
    }
}; 
     
export default validator;
