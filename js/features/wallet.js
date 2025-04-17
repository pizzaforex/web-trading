// js/features/wallet.js
import { showNotification } from '../ui/notificationHandler.js';
import { completeChallenge } from './challenges.js'; // Per dare reward al connect
import { getAuthState } from './auth.js'; // Per sapere se l'utente è loggato

// Riferimenti a elementi DOM specifici per Wallet
const tokenBalanceEl = document.getElementById('token-balance');
const tokenCountEl = document.getElementById('token-count');
const walletConnectedContent = document.getElementById('wallet-connected-content');
const walletConnectContent = document.getElementById('wallet-connect-content');
const walletTokenCountEl = document.getElementById('wallet-token-count');
const walletAddressEl = document.getElementById('wallet-address');
const achievementsListEl = document.getElementById('achievements-list');
const connectWalletBtn = document.getElementById('connect-wallet-btn');
const disconnectWalletBtn = document.getElementById('disconnect-wallet-btn');

// Stato (potrebbe essere centralizzato)
let walletState = {
    walletConnected: false,
    currentTokens: 0,
    userAchievements: [] // Questo dovrebbe idealmente essere gestito centralmente
                         // con lo stato delle challenge. Per ora lo duplichiamo qui.
};

// Funzioni per salvare/caricare lo stato Wallet/Achievements
function saveWalletState() {
    localStorage.setItem('walletConnected', walletState.walletConnected);
    localStorage.setItem('currentTokens', walletState.currentTokens);
    localStorage.setItem('userAchievements', JSON.stringify(walletState.userAchievements));
}

export function loadWalletState() {
    walletState.walletConnected = localStorage.getItem('walletConnected') === 'true';
    walletState.currentTokens = parseInt(localStorage.getItem('currentTokens'), 10) || 0;
    walletState.userAchievements = JSON.parse(localStorage.getItem('userAchievements') || '[]');
     return walletState; // Ritorna lo stato caricato
}

 // Funzioni per accedere/modificare lo stato del wallet (usate internamente o da altri moduli)
 export function getWalletState() {
    return { ...walletState }; // Copia
 }

 export function addTokens(amount) {
    if (typeof amount === 'number' && amount > 0) {
        walletState.currentTokens += amount;
        updateTokenDisplayUI();
        saveWalletState();
        return true;
    }
    return false;
 }

export function addAchievement(achievement) {
     // Evita duplicati
    if (!walletState.userAchievements.some(ach => ach.id === achievement.id)) {
         walletState.userAchievements.push(achievement);
         // Ordina achievements per nome
         walletState.userAchievements.sort((a, b) => a.name.localeCompare(b.name));
         updateWalletModalUI(); // Aggiorna la lista nel modal
         saveWalletState();
         return true;
    }
    return false;
 }

  export function hasAchievement(achievementId) {
     return walletState.userAchievements.some(ach => ach.id === achievementId);
  }

 // --- Funzioni Wallet ---

export function updateTokenDisplayUI() {
    const { isLoggedIn } = getAuthState(); // Prendi lo stato login corrente
    tokenCountEl.textContent = walletState.currentTokens;
    walletTokenCountEl.textContent = walletState.currentTokens; // Aggiorna anche nel modal
    tokenBalanceEl.style.display = (isLoggedIn && walletState.walletConnected) ? 'flex' : 'none';
}

export function updateWalletModalUI() {
    if (walletState.walletConnected) {
        walletConnectedContent.style.display = 'block';
        walletConnectContent.style.display = 'none';
        walletTokenCountEl.textContent = walletState.currentTokens; // Assicurati sia aggiornato

        if (!walletAddressEl.textContent || walletAddressEl.textContent.length < 40) {
             walletAddressEl.textContent = '0x' + Array(40).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join('');
        }

        achievementsListEl.innerHTML = '';
        if (walletState.userAchievements.length > 0) {
             // Achievements ora ordinati quando aggiunti
             walletState.userAchievements.forEach(ach => {
                const div = document.createElement('div');
                div.classList.add('achievement');
                // Icon mapping logic
                let iconClass = 'fa-trophy';
                if (ach.id === 'wallet-connect') iconClass = 'fa-wallet';
                else if (ach.id.includes('quiz') || ach.id.includes('assessment')) iconClass = 'fa-question-circle';
                else if (ach.id.includes('series') || ach.id.includes('exercise')) iconClass = 'fa-dumbbell';
                else if (ach.id.includes('journal')) iconClass = 'fa-book-open';
                else if (ach.id.includes('truth')) iconClass = 'fa-check-double';

                div.innerHTML = `<div class="achievement-name"><i class="fas ${iconClass}" style="color: var(--secondary-color);"></i> ${ach.name}</div> <div class="achievement-tokens"><i class="fas fa-coins"></i> ${ach.tokens} TRAD</div>`;
                achievementsListEl.appendChild(div);
            });
        } else {
             achievementsListEl.innerHTML = '<div class="no-achievements">Nessun achievement sbloccato.</div>';
        }

    } else {
        walletConnectedContent.style.display = 'none';
        walletConnectContent.style.display = 'block';
    }
}

function connectWallet() {
    console.log("Connecting wallet...");
    // Simulate connection
    walletState.walletConnected = true;
    saveWalletState();
    updateWalletModalUI();
    updateTokenDisplayUI();

    // Give reward for connecting wallet (using challenge system)
    const achievementId = 'wallet-connect';
    const reward = 5;
    const achievementName = 'Wallet Collegato';
    const walletAchievement = { id: achievementId, name: achievementName, tokens: reward };

    // Usa la funzione completeChallenge per gestire l'achievement e i token
    // Questo centralizza la logica di reward
    const completed = completeChallenge(walletAchievement.id, walletAchievement.tokens, walletAchievement.name);
     if (completed) {
        // Se completeChallenge ha avuto successo (non era già completato)
         showNotification(`Wallet collegato! Hai ricevuto ${reward} TRAD.`, 'success');
     } else if (hasAchievement(achievementId)) {
        // Se era già completato
         showNotification(`Wallet già collegato.`, 'info');
     }

    // closeModal('walletModal'); // Optionale
}

function disconnectWallet() {
    console.log("Disconnecting wallet...");
    walletState.walletConnected = false;
    saveWalletState();
    updateWalletModalUI();
    updateTokenDisplayUI();
    showNotification("Wallet disconnesso.", 'info');
}

/**
 * Inizializza gli event listener per il wallet.
 */
export function setupWalletListeners() {
    connectWalletBtn?.addEventListener('click', connectWallet);
    disconnectWalletBtn?.addEventListener('click', disconnectWallet);
     // Il listener per aprire il modal wallet sarà in main.js
}