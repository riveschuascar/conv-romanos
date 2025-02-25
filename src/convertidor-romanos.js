function enteroARomano(num) {
  const mapa_conversion = [
		[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
    [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
		[10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
  ];

  let respuesta = "";
  for (const [numero, simbolo] of mapa_conversion) {
    while (num >= numero) {
			respuesta += simbolo;
			num -= numero;
		}
  }

	return respuesta;
}

export default enteroARomano;