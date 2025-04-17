// js/features/challenges.js
import { showNotification } from '../ui/notificationHandler.js';
import { openModal } from '../ui/modalHandler.js';
import { getAuthState } from './auth.js';
import { getWalletState, addTokens, addAchievement, hasAchievement } from './wallet.js';

// Non c'è stato specifico per le challenges, dipende dallo stato del wallet (achievements)

/**
 * Gestisce il click su un link di una sfida.
 * @param {Event} event - L'evento click.
 */
export function handleChallengeClick(event) {
    event.preventDefault();
    const link = event.currentTarget;
    const challengeId = link.dataset.challengeId;
    const reward = parseInt(link.dataset.reward, 10);

    const { isLoggedIn } = getAuthState();
    const { walletConnected } = getWalletState();

    if (!isLoggedIn) {
        showNotification("Devi accedere o registrarti per le sfide.", 'error');
        openModal('loginModal'); return;
    }
    if (!walletConnected) {
        showNotification("Devi collegare il tuo wallet per guadagnare token.", 'error');
        openModal('walletModal'); return;
    }
    if (hasAchievement(challengeId)) {
        showNotification("Hai già completato questa sfida!", 'info'); return;
    }

    console.log(`Starting challenge: ${challengeId}, Reward: ${reward} TRAD`);
    showNotification(`Inizio sfida "${challengeId}"...`, 'info');

    // Simulate completing the challenge after a short delay
    // In una vera app, qui apriresti un modal/pagina per l'interazione
    setTimeout(() => {
        // Mappa ID a nomi leggibili (potrebbe venire da content.js)
        let achievementName = challengeId.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase());
        const nameMap = {
            'self-assessment': 'Auto-Valutazione Completata',
            'truth-assimilation': 'Assimilazione Verità Fondamentali',
            '20-trade-series': 'Serie 20 Trade Eseguita',
            'psych-journal': 'Diario Psicologico Compilato',
             'wallet-connect': 'Wallet Collegato' // Anche se attivato da wallet.js, gestito qui
        };
        achievementName = nameMap[challengeId] || achievementName;

        completeChallenge(challengeId, reward, achievementName);
    }, 1500);
}

/**
 * Marca una sfida come completata, aggiunge token e achievement.
 * @param {string} challengeId - L'ID della sfida.
 * @param {number} tokenReward - I token da assegnare.
 * @param {string} achievementName - Il nome leggibile dell'achievement.
 * @returns {boolean} - True se la sfida è stata completata ora, false se già completata.
 */
export function completeChallenge(challengeId, tokenReward, achievementName) {
    if (hasAchievement(challengeId)) {
        console.log(`Challenge ${challengeId} already completed.`);
        return false; // Già completata
    }

    console.log(`Completing challenge: ${challengeId}`);
    const achievement = { id: challengeId, name: achievementName, tokens: tokenReward };

    // Aggiungi achievement e token usando le funzioni del modulo wallet
    const achievementAdded = addAchievement(achievement);
    if (achievementAdded) {
        addTokens(tokenReward);
        showNotification(`Sfida "${achievementName}" completata! +${tokenReward} TRAD.`, 'success');

        // Aggiorna il link della sfida nell'UI
        const completedLink = document.querySelector(`.challenge-link[data-challenge-id="${challengeId}"]`);
        if (completedLink) {
            completedLink.classList.add('completed');
            completedLink.textContent = 'Completata';
        }
         return true; // Completata con successo
    }
    return false; // Non dovrebbe succedere se il check iniziale funziona
}

// Non c'è una funzione setup specifica qui, i listener vengono aggiunti
// dinamicamente in contentLoader.js