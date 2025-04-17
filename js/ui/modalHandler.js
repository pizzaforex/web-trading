// js/ui/modalHandler.js
import { updateWalletModalUI } from '../features/wallet.js'; // Importa per aggiornare UI Wallet

/**
 * Apre un modal specifico.
 * @param {string} modalId - L'ID del modal da aprire.
 */
export function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        // Aggiorna UI specifica del modal se necessario prima di mostrare
        if (modalId === 'walletModal') {
            updateWalletModalUI(); // Assicurati che l'UI del wallet sia aggiornata
        }
        modal.style.display = "block";
    } else {
        console.warn(`Modal with id "${modalId}" not found.`);
    }
}

/**
 * Chiude un modal specifico.
 * @param {string} modalId - L'ID del modal da chiudere.
 */
export function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    } else {
        console.warn(`Modal with id "${modalId}" not found.`);
    }
}

/**
 * Chiude un modal e ne apre un altro.
 * @param {string} fromModalId - L'ID del modal da chiudere.
 * @param {string} toModalId - L'ID del modal da aprire.
 */
export function switchModalUI(fromModalId, toModalId) {
    closeModal(fromModalId);
    openModal(toModalId);
}

/**
 * Inizializza gli event listener per i pulsanti di chiusura e switch dei modal.
 */
export function setupModalTriggers() {
    const closeModals = document.querySelectorAll('.close-modal');
    const switchModals = document.querySelectorAll('.switch-modal');

    closeModals.forEach(btn => {
        btn.addEventListener('click', () => closeModal(btn.dataset.modalId));
    });

    switchModals.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            switchModalUI(link.dataset.from, link.dataset.to);
        });
    });

    // Aggiungi listener per chiudere il modal cliccando fuori dal content (opzionale)
    document.querySelectorAll('.modal').forEach(modal => {
         modal.addEventListener('click', (event) => {
             // Se il click è direttamente sul backdrop del modal (non sul content)
             if (event.target === modal) {
                 closeModal(modal.id);
             }
         });
    });
}