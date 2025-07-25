document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const calculateBtn = document.getElementById('calculateBtn');
    const outputText = document.getElementById('outputText');

    calculateBtn.addEventListener('click', () => {
        if (inputText.value.trim() === '') {
            alert('Por favor, ingresa un texto.');
            return;
        }
        outputText.value = udi2(inputText.value);
    });

    // Opcional: Permitir calcular al presionar Enter
    inputText.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            calculateBtn.click();
        }
    });
});