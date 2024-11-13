import { translate } from './translation.js';

document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const targetLanguage = document.getElementById('targetLanguage');
    const translateButton = document.getElementById('translateButton');
    const outputText = document.getElementById('outputText');
    const readAloudButton = document.getElementById('readAloudButton');
    const loadingSpinner = document.getElementById('loadingSpinner');

    translateButton.addEventListener('click', async () => {
        loadingSpinner.style.display = 'block';
        const text = inputText.value;
        const lang = targetLanguage.value;
        try {
            const translatedText = await translate(text, lang);
            outputText.value = translatedText;
        } catch (error) {
            outputText.value = 'Translation failed: ' + error.message;
        } finally {
            loadingSpinner.style.display = 'none';
        }
    });

    readAloudButton.addEventListener('click', () => {
        const utterance = new SpeechSynthesisUtterance(outputText.value);
        utterance.lang = targetLanguage.value;
        window.speechSynthesis.speak(utterance);
    });
});

