// js/features/auth.js
import { showNotification } from '../ui/notificationHandler.js';
import { closeModal } from '../ui/modalHandler.js';
import { updateTokenDisplayUI } from './wallet.js'; // Per aggiornare display token al login/logout

// Riferimenti a elementi DOM specifici per Auth
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const userInfoEl = document.getElementById('user-info');
const usernameDisplayEl = document.getElementById('username-display');
const logoutBtn = document.getElementById('logout-btn');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

// Stato (potrebbe essere centralizzato, ma per ora locale a questo modulo)
let authState = {
    isLoggedIn: false,
    username: ''
};

// Funzioni per salvare/caricare lo stato Auth (potrebbero essere unite in un modulo state.js)
function saveAuthState() {
    localStorage.setItem('isLoggedIn', authState.isLoggedIn);
    localStorage.setItem('username', authState.username);
}

export function loadAuthState() {
     authState.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
     authState.username = localStorage.getItem('username') || '';
     return authState; // Ritorna lo stato caricato
}

export function getAuthState() {
    return { ...authState }; // Ritorna una copia per evitare modifiche esterne dirette
}

export function updateLoginStateUI() {
    if (authState.isLoggedIn) {
        loginBtn.style.display = 'none';
        signupBtn.style.display = 'none';
        userInfoEl.style.display = 'flex';
        usernameDisplayEl.textContent = `Ciao, ${authState.username}`;
        logoutBtn.style.display = 'inline-block';
    } else {
        loginBtn.style.display = 'inline-block';
        signupBtn.style.display = 'inline-block';
        userInfoEl.style.display = 'none';
        usernameDisplayEl.textContent = '';
        logoutBtn.style.display = 'none';
    }
    // Assicura che il bilancio token sia visibile/nascosto correttamente
    // La logica del token display dipende anche dallo stato del wallet,
    // quindi chiamiamo la sua funzione di update.
    updateTokenDisplayUI();
}

function handleLogin(event) {
    event.preventDefault();
    const emailInput = document.getElementById('login-email');
    if (!emailInput) return;

    // Simulate login success
    authState.username = emailInput.value.split('@')[0] || 'Utente';
    authState.isLoggedIn = true;

    updateLoginStateUI();
    saveAuthState(); // Salva lo stato aggiornato
    closeModal('loginModal');
    showNotification("Accesso effettuato!", 'info');
    console.log("User logged in:", authState.username);
    // Potrebbe essere necessario aggiornare altre parti dell'UI o ricaricare contenuti
}

 function handleSignup(event) {
    event.preventDefault();
    const nameInput = document.getElementById('signup-name');
    if (!nameInput) return;

    // Simulate signup success
    authState.username = nameInput.value || 'NuovoUtente';
    authState.isLoggedIn = true;

    updateLoginStateUI();
    saveAuthState(); // Salva lo stato aggiornato
    closeModal('signupModal');
    showNotification(`Registrazione completata! Benvenuto, ${authState.username}!`, 'success');
    console.log("User signed up and logged in:", authState.username);
     // Potrebbe essere necessario aggiornare altre parti dell'UI o ricaricare contenuti
}

function handleLogout() {
    authState.isLoggedIn = false;
    authState.username = '';

    updateLoginStateUI();
    saveAuthState(); // Salva lo stato aggiornato
    // Non disconnette automaticamente il wallet, ma aggiorna l'UI del token display
    updateTokenDisplayUI();
    showNotification("Logout effettuato.", 'info');
    console.log("User logged out");
     // Potrebbe essere necessario aggiornare altre parti dell'UI o ricaricare contenuti
}

/**
 * Inizializza gli event listener per l'autenticazione.
 */
export function setupAuthListeners() {
    loginForm?.addEventListener('submit', handleLogin);
    signupForm?.addEventListener('submit', handleSignup);
    logoutBtn?.addEventListener('click', handleLogout);
    // I listener per aprire i modal login/signup saranno in main.js
}