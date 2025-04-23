// js/main.js (Entry Point)
import { setupModalTriggers, openModal } from './ui/modalHandler.js';
import { setupAuthListeners, loadAuthState, updateLoginStateUI } from './features/auth.js';
import { setupWalletListeners, loadWalletState, updateWalletModalUI, updateTokenDisplayUI } from './features/wallet.js';
// Importa la libreria aggregata
import { contentLibrary } from './config/contentLibrary.js';
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

    // 6. Load Initial Content - Logica Aggiornata
    const defaultContentKey = 'mentalita-trader'; // Pagina di default

    // Determina la chiave da caricare: se c'è un hash valido nell'URL E corrisponde a una chiave esistente,
    // usa quello, altrimenti usa la chiave di default.
    let contentToLoadKey = defaultContentKey;
    const currentHash = window.location.hash.substring(1);

    // Verifica se l'hash esiste ED è una chiave valida nella nostra libreria
    if (currentHash && contentLibrary.hasOwnProperty(currentHash)) {
        console.log(`Valid hash found (#${currentHash}), loading it.`);
        contentToLoadKey = currentHash;
        // Non c'è bisogno di fare replaceState qui perché l'URL è già corretto
    } else {
        // Se l'hash non è valido o non c'è, carica il default
        console.log(`No valid hash found or initial load, loading default: ${defaultContentKey}.`);
        // Assicurati che l'URL rifletta la pagina di default, senza creare una nuova voce nella history.
        // Questo corregge l'URL se era presente un hash non valido o se si è arrivati senza hash.
        history.replaceState({ contentKey: defaultContentKey }, '', `#${defaultContentKey}`);
        contentToLoadKey = defaultContentKey; // Assicura che venga caricato il default
    }

    // Carica il contenuto determinato (o il default se l'hash non era valido)
    loadContent(contentToLoadKey);

    console.log("Trading Mindset Platform Initialized (Modular).");
});