function udi2(cadena) {
    const diccionario = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%";
    let resultado = 0;

    for (const c of cadena.toUpperCase()) {
        const indice = diccionario.indexOf(c);
        if (indice === -1) {
            console.warn(`Carácter "${c}" no encontrado. Se omitirá.`);
            continue;
        }
        resultado += indice;
    }

    return cadena + diccionario[resultado % 43];
}