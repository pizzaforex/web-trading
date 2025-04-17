// js/features/contentLoader.js
import { contentLibrary } from '../config/contentLibrary.js';
import { handleChallengeClick } from './challenges.js';
import { hasAchievement } from './wallet.js'; // Per verificare se le challenge sono completate al render

const dynamicContentArea = document.getElementById('dynamic-content-area');
const mainNav = document.getElementById('main-nav');

/**
 * Renders a single section based on the data provided.
 * @param {object} sectionData - The data object for the section.
 * @returns {string} - The HTML string for the section.
 */
function renderContentSection(sectionData) {
    let challengesHTML = '';
    if (sectionData.challenges && sectionData.challenges.length > 0) {
        challengesHTML = sectionData.challenges.map(challenge => {
            const isCompleted = hasAchievement(challenge.id); // Usa la funzione del modulo wallet
            const linkText = isCompleted ? 'Completata' : (challenge.linkText || 'Inizia Sfida');
            const linkClass = `resource-link challenge-link ${isCompleted ? 'completed' : ''}`;

            return `
                <div class="challenge">
                    <div class="token-reward"><i class="fas fa-coins"></i> ${challenge.reward} TRAD</div>
                    <h4><i class="fas fa-tasks"></i> ${challenge.title}</h4>
                    <p>${challenge.description}
                       <a href="#" class="${linkClass}" data-challenge-id="${challenge.id}" data-reward="${challenge.reward}">
                          ${linkText}
                       </a>
                    </p>
                </div>
            `;
        }).join('');
    }

    return `
        <section id="${sectionData.id}">
            <h2><i class="fas ${sectionData.icon || 'fa-file-alt'}"></i> ${sectionData.title}</h2>
            ${sectionData.content}
            ${challengesHTML}
        </section>
    `;
}

/**
 * Attacca gli event listener agli elementi dinamici (es. link sfide).
 */
function reAttachEventListeners() {
    const currentChallengeLinks = dynamicContentArea.querySelectorAll('.challenge-link:not(.completed)');
    currentChallengeLinks.forEach(link => {
        // Rimuovi listener precedenti per sicurezza (se necessario)
        // link.removeEventListener('click', handleChallengeClick);
        link.addEventListener('click', handleChallengeClick);
    });

    // Eventuali altri listener dinamici (tooltip, etc.)
}

/**
 * Evidenzia il link di navigazione attivo.
 * @param {string | null} activeKey - La chiave del contenuto attivo o null.
 */
function highlightActiveNavLink(activeKey) {
    mainNav.querySelectorAll('ul li a').forEach(link => {
        link.classList.remove('active');
        if (activeKey && link.dataset.contentKey === activeKey) {
            link.classList.add('active');
        }
    });
}

/**
 * Carica e renderizza il contenuto principale.
 * @param {string} contentKey - La chiave del contenuto da caricare.
 */
export function loadContent(contentKey) {
    const contentData = contentLibrary[contentKey];
    if (!contentData || !dynamicContentArea) {
        console.error(`Content not found for key: ${contentKey} or dynamic area missing.`);
        if (dynamicContentArea) {
            dynamicContentArea.innerHTML = `<p style="color: var(--danger-color); text-align: center; padding: 3rem 0;">Errore: Contenuto non trovato.</p>`;
        }
        document.title = 'Trading Mindset Platform - Errore';
        highlightActiveNavLink(null);
        return;
    }

    console.log(`Loading content for: ${contentKey}`);
    document.title = contentData.pageTitle || 'Trading Mindset Platform';
    dynamicContentArea.innerHTML = ''; // Clear

    contentData.sections.forEach(section => {
        dynamicContentArea.innerHTML += renderContentSection(section);
    });

    reAttachEventListeners();
    highlightActiveNavLink(contentKey);

    // Scroll to top of content area
    // dynamicContentArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Oppure semplicemente scrolla in cima alla pagina:
    window.scrollTo({ top: 0, behavior: 'smooth' });


    // History API basic update (optional)
    try {
        history.pushState({ contentKey: contentKey }, contentData.pageTitle || '', `#${contentKey}`);
    } catch (e) {
        // Potrebbe fallire in ambienti come file://
        console.warn("History API pushState failed.", e);
    }
}

/**
 * Inizializza il content loader: listener navigazione e gestione history back/forward.
 */
export function setupContentLoader() {
     // Listener per la navigazione principale
     mainNav?.addEventListener('click', (e) => {
        const navLink = e.target.closest('a[data-content-key]');
        if (navLink) {
            e.preventDefault();
            const contentKey = navLink.dataset.contentKey;
            // Non chiamare loadContent direttamente se si usa pushState,
            // lascia che sia onpopstate a gestirlo per coerenza.
             if (window.history.state?.contentKey !== contentKey) { // Evita push se già su quella pagina
                loadContent(contentKey); // Carica e aggiorna history
             }
        }
    });

    // Listener per i pulsanti avanti/indietro del browser
    window.addEventListener('popstate', (event) => {
         if (event.state && event.state.contentKey) {
             console.log(`Navigating back/forward to: ${event.state.contentKey}`);
             // Carica il contenuto senza pushare nello storico di nuovo
             const contentKey = event.state.contentKey;
             const contentData = contentLibrary[contentKey];
              if (!contentData || !dynamicContentArea) return; // Check
                document.title = contentData.pageTitle || 'Trading Mindset Platform';
                dynamicContentArea.innerHTML = '';
                contentData.sections.forEach(section => {
                     dynamicContentArea.innerHTML += renderContentSection(section);
                 });
                reAttachEventListeners();
                highlightActiveNavLink(contentKey);

         } else {
              // Potrebbe essere lo stato iniziale o uno stato non gestito
              // Ricarica il contenuto di default (es. trading-zone)
              console.log("Popstate to initial/unknown state, loading default.");
              loadContent('trading-zone'); // O la chiave iniziale appropriata
         }
     });
}
