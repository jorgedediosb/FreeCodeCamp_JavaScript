// Uso de distintas variacciones de Expresiones Regulares (RegExp) para ir validando las distintas opciones en vez de una única expresión muy larga que sería dificil de leer.


function telephoneCheck(str) {
  const validPhone = [
    /^\d{3}-\d{3}-\d{4}$/,
    /^1 \d{3}-\d{3}-\d{4}$/,
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
    /^\d{10}$/,
    /^\(\d{3}\)\d{3}-\d{4}$/,
    /^1 \d{3} \d{3} \d{4}$/,
    /^1\(\d{3}\)\d{3}-\d{4}$/,
  ]
  
  // .some() comprueba si el elemento del array cumple las condiciones de la función
  // .test() Valida si hay un patrón en la cadena y devielve un booleano
  
  return validPhone.some((number) => number.test(str));
}

telephoneCheck("555-555-5555");