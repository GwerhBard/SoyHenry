'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  a = 0;
  var rev = num.split('').reverse().join('')


  for (i = 0; i < rev.length; i++) {
    a = a + rev[i] * 2 ** i;
  }
  return a;
}

function DecimalABinario(num) {
  // tu codigo aca
  n = num;
  let b = (n % 2).toString();
  for (; n > 1;) {
      n = parseInt(n / 2);
      b =  n % 2 + b;
  }
  return(b);
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}