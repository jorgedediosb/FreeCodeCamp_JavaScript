// Crear una función que convierta números latinos a números romanos => 1945 = MCMXLV
// Explicación en https://www.youtube.com/watch?v=g_ISxHcg-RM

function convertToRoman(num) {
  
// 1º Crear la tabla de símbolos romanos a latinos
  
  const romanTable = {
    M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
  }
  
// 2º Crear un acumulador de nºs romanos. Al pasar de latinos a romanos, hay que ir acumulando los símbolos romanos mientras sean menores a los números => 3950 = MMMCML (acumulas 3 m´s, CM y luego 1 L)
  
  let acummulator = '';
  
// 3º Crear un loop a través de la tabla de romanos para poder ir acumulando los símbolos en el acumulador hasta tener el nº final
  
  for(const roman in romanTable) {
    const numberValue = romanTable[roman];
    while(numberValue <= num) {
      num -= numberValue;
      acummulator += roman;
    } 
  }
  return acummulator;
}

convertToRoman(1950);