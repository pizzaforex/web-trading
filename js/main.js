// js/main.js (Entry Point)
import { setupModalTriggers, openModal } from './ui/modalHandler.js';
import { setupAuthListeners, loadAuthState, updateLoginStateUI } from './features/auth.js';
import { setupWalletListeners, loadWalletState, updateWalletModalUI, updateTokenDisplayUI } from './features/wallet.js';
// === MODIFICA QUI ===
// Assicurati che l'import usi il nome corretto del file contentLibrary
import { contentLibrary } from './config/contentLibrary.js';
import { setupContentLoader, loadContent } from './features/contentLoader.js';
// === FINE MODIFICA ===


document.addEventListener('DOMContentLoaded', () => {
    console.log("Initializing Trading Mindset Platform...");

    // 1. Load State
    const initialState = loadAuthState();
    const initialWalletState = loadWalletState();
    console.log("Initial State Loaded:", { initialState, initialWalletState });

    // 2. Setup UI Handlers
    setupModalTriggers();

    // 3. Setup Feature Listeners
    setupAuthListeners();
    setupWalletListeners();
    setupContentLoader(); // Gestisce nav click e popstate

    // 4. Setup Global Triggers
    document.getElementById('login-btn')?.addEventListener('click', () => openModal('loginModal'));
    document.getElementById('signup-btn')?.addEventListener('click', () => openModal('signupModal'));
    document.getElementById('wallet-button')?.addEventListener('click', () => openModal('walletModal'));

    // 5. Initial UI Update
    updateLoginStateUI();
    updateWalletModalUI();
    updateTokenDisplayUI();

    // === MODIFICA QUI: Logica Caricamento Iniziale ===
    // 6. Load Initial Content - SEMPLIFICATO
    const defaultContentKey = 'mentalita-trader'; // Definisci la pagina di default

    // Determina la chiave da caricare: se c'è un hash valido usa quello, altrimenti usa il default.
    let contentToLoadKey = defaultContentKey;
    const currentHash = window.location.hash.substring(1);

    if (currentHash && contentLibrary.hasOwnProperty(currentHash)) {
        console.log(`Valid hash found (#${currentHash}), loading it.`);
        contentToLoadKey = currentHash;
    } else {
        console.log(`No valid hash found or initial load, loading default: ${defaultContentKey}.`);
        // Se l'URL ha un hash non valido o non ne ha, assicurati che l'URL rifletta la pagina di default
        // Usiamo replaceState per non creare una nuova voce nella history per questo aggiustamento iniziale.
        history.replaceState({ contentKey: defaultContentKey }, '', `#${defaultContentKey}`);
    }

    // Carica il contenuto determinato
    loadContent(contentToLoadKey);
    // === FINE MODIFICA ===

    console.log("Trading Mindset Platform Initialized (Modular).");
});
