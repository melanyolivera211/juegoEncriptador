function encriptarTexto() {
    const input = document.getElementById('inputText').value;
    let resultado = btoa(input); // Utiliza Base64 para encriptar el texto
    document.getElementById('outputText').innerText = resultado;
}

function desencriptarTexto() {
    const input = document.getElementById('inputText').value;
    try {
        let resultado = atob(input); // Desencripta el texto Base64
        document.getElementById('outputText').innerText = resultado;
    } catch (e) {
        document.getElementById('outputText').innerText = 'Texto no válido para desencriptar';
    }
}