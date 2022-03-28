const validator = {
  isValid(numtarjeta){
      
    //pasar los numeros a un array en orden inverso
    let reverseNumber= Array.from(numtarjeta).reverse();
    let suma = 0;
    let condition = true;
    for (let i=0; i<reverseNumber.length; i ++) {
      //aplicar las operaciones a los numeros de las posiciones pares
      if ((i+1) %  2 == 0) {
        reverseNumber[i] =reverseNumber[i]*2;
        //si es >=10, restar menos 9
        if (reverseNumber[i]>9){
          reverseNumber[i] =reverseNumber[i]-9;
        }      
      } 
      //suma los digitos y nuevos digitos
      suma+= parseInt(reverseNumber[i]);
      
    } 
    //comprobar si es una tarjeta valida
    if (suma%10==0) {
      condition = true;
    }
    else{
      condition=false;
    }
    return condition; 

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
