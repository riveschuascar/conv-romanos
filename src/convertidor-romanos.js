function enteroARomano(num) {
  const mapa_conversion = [
    [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
  ];

  let respuesta = "";
  for ([numero, simbolo] of mapa_conversion) {
    while (num > numero) {
			respuesta += simbolo;
			num -= numero;
		}
  }
}