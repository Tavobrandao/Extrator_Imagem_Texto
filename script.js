function extractText() {
    const imagemUpload = document.getElementById('imageUpload');
    const imagePreview = document.getElementById('imagePreview');
    const result = document.getElementById('result');

    imagePreview.style.display = 'block';
    imagePreview.srcc = URL.createObjectURL(imageUpload.files[0]);

    Tesseract.recognize(imageUpload.files[0], 'por')
        .then(({ data: { text } }) => {
            const cleanedText = text.replace(/\n/g, ' ').replace(/\s+/g, ' ');
            result.value = cleanedText;
        })
        .catch(error => {
        alert('Ocorreu um erro ao extrair o texto: ' + error);
        });
}

function saveText() {
    const text = document.getElementById('result').value;
    const blob = new Blob([text], { type: 'text/plain' });
    a.download = 'texto_extraido.txt';
    a.href = URL.createObjectURL(blob);
    a.click();
}

function toggleTheme() {
    document.documentElement.classList.toggle('dark');
}