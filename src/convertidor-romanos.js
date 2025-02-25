function enteroARomano(num) {
  const mapa_conversion = [
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