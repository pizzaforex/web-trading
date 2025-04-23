// js/config/contentLibrary.js

// Importa i contenuti specifici dai file separati
import { mentalitaTraderContent } from './content/mentalitaTrader.js';
import { analisiTecnicaContent } from './content/analisiTecnica.js'; // Usa il nuovo nome
import { gestioneRischioContent } from './content/gestioneRischio.js';

// Esporta un unico oggetto che aggrega tutti i contenuti
export const contentLibrary = {
    'mentalita-trader': mentalitaTraderContent,
    'analisi-tecnica': analisiTecnicaContent, // Usa la nuova chiave
    'gestione-rischio': gestioneRischioContent
    // Aggiungi qui future chiavi/contenuti
};