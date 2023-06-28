const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function rot13(str) {
  let cipher = '';
  for(let i = 0; i < str.length; i++) {
    const character = str[i];
    const isALetter = alphabet.includes(character);
    if(isALetter === false) {
      cipher += character;
    } else {
      const characterIndex = alphabet.findIndex((c) => c === character);

      cipher += alphabet[characterIndex + 13] || alphabet[characterIndex - 13];
    }
  }
  return cipher;
}

rot13("SERR PBQR PNZC");