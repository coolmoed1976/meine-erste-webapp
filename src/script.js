document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('timestamp').textContent = new Date().toLocaleString();
    displayWelcome();
    fetchCrypto();
});

function saveName() {
    const name = document.getElementById('userName').value;
    localStorage.setItem('azureUser', name);
    displayWelcome();
}

function displayWelcome() {
    const savedName = localStorage.getItem('azureUser');
    if (savedName) {
        document.getElementById('welcomeMessage').textContent = 'Willkommen zurück, ' + savedName + '! 👋';
    }
}

async function fetchCrypto() {
    const display = document.getElementById('cryptoPrice');
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur');
        const data = await response.json();
        display.innerHTML = 'Bitcoin: <strong>' + data.bitcoin.eur + ' €</strong>';
    } catch (e) { display.textContent = 'API Fehler.'; }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
