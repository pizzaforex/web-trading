// js/main.js (Entry Point)
import { setupModalTriggers, openModal } from './ui/modalHandler.js';
import { setupAuthListeners, loadAuthState, updateLoginStateUI } from './features/auth.js';
import { setupWalletListeners, loadWalletState, updateWalletModalUI, updateTokenDisplayUI } from './features/wallet.js';
import { setupContentLoader, loadContent } from './features/contentLoader.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log("Initializing Trading Mindset Platform...");

    // 1. Load State (Auth and Wallet/Achievements)
    const initialState = loadAuthState();
    const initialWalletState = loadWalletState();
    console.log("Initial State Loaded:", { initialState, initialWalletState });

    // 2. Setup UI Handlers
    setupModalTriggers(); // Listeners for close/switch modals

    // 3. Setup Feature Listeners
    setupAuthListeners();   // Listeners for login/signup forms, logout button
    setupWalletListeners(); // Listeners for connect/disconnect wallet buttons
    setupContentLoader(); // Listeners for main navigation and history API (popstate)

    // 4. Setup Global Triggers (Buttons in Toolbar opening modals)
    document.getElementById('login-btn')?.addEventListener('click', () => openModal('loginModal'));
    document.getElementById('signup-btn')?.addEventListener('click', () => openModal('signupModal'));
    document.getElementById('wallet-button')?.addEventListener('click', () => openModal('walletModal'));

    // 5. Initial UI Update based on loaded state
    updateLoginStateUI();
    updateWalletModalUI(); // Rende visibile/nascosto il contenuto connesso/disconnesso
    updateTokenDisplayUI(); // Mostra/Nasconde il bilancio token

    // 6. Load Initial Content
    // Determina il contenuto iniziale da caricare (es. da hash URL o default)
    let initialContentKey = 'trading-zone'; // Default
    const hash = window.location.hash.substring(1);
    if (hash && contentLibrary.hasOwnProperty(hash)) { // Verifica se l'hash è una chiave valida
        initialContentKey = hash;
    } else if (hash) {
         console.warn(`Hash "${hash}" not found in content library, loading default.`);
         // Opzionale: rimuovi hash non valido dall'URL senza ricaricare
         // history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    // Aggiorna lo stato iniziale dell'history API per il contenuto di default/hash
    // se non siamo arrivati qui tramite popstate
    if (!window.history.state?.contentKey) {
       history.replaceState({ contentKey: initialContentKey }, '', `#${initialContentKey}`);
    }

    loadContent(initialContentKey); // Carica il contenuto determinato

    console.log("Trading Mindset Platform Initialized (Modular).");
});