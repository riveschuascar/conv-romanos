import enteroARomano from "./convertidor-romanos";

describe("Conversion de enteros a romanos rango 1-10", () => {
    test("Convertir 1 a I", () => {
        expect(enteroARomano(1)).toBe("I");
    });
    
    test("Convertir 3 a III", () => {
        expect(enteroARomano(3)).toBe("III");
    });

    test("Convertir 4 a IV", () => {
        expect(enteroARomano(4)).toBe("IV");
    });

    test("Convertir 8 a VIII", () => {
        expect(enteroARomano(8)).toBe("VIII");
    });

    test("Convertir 10 a X", () => {
        expect(enteroARomano(10)).toBe("X");
    });

    test("Convertir 15 a XV", () => {
        expect(enteroARomano(15)).toBe("XV");
    });

    test("Convertir 39 a XXXIX", () => {
        expect(enteroARomano(39)).toBe("XXXIX");
    });

    test("Convertir 51 a LI", () => {
        expect(enteroARomano(51)).toBe("LI");
    });

    test("Convertir 94 a XCIV", () => {
        expect(enteroARomano(94)).toBe("XCIV");
    });
})