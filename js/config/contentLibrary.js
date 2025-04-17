// js/config/contentLibrary.js

// Importa i contenuti specifici dai file separati
import { mentalitaTraderContent } from './content/mentalitaTrader.js';
import { analisiTecnicaMurphyContent } from './content/analisiTecnicaMurphy.js';
import { gestioneRischioContent } from './content/gestioneRischio.js';

// Esporta un unico oggetto che aggrega tutti i contenuti
// Le chiavi ('trading-zone', 'analisi-tecnica-murphy', ecc.)
// sono quelle usate negli attributi data-content-key in index.html
export const contentLibrary = {
    'mentalita-trader': mentalitaTraderContent,
    'analisi-tecnica-murphy': analisiTecnicaMurphyContent,
    'gestione-rischio': gestioneRischioContent // Manteniamo placeholder-2 per ora, punta al contenuto di gestione rischio
    // Aggiungi qui altre chiavi e contenuti importati quando creeremo nuove pagine
    // Esempio:
    // 'elliott-wave': elliottWaveContent,
};

// Nota: Il file js/config/content.js originale ora non serve più e può essere eliminato.
// Il modulo contentLoader.js ora importerà da questo file:
// import { contentLibrary } from '../config/contentLibrary.js'; (Modifica necessaria in contentLoader.js)
