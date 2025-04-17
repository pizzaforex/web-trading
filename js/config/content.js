// js/config/content.js

// --- Content Library (Store different page/topic contents here) ---
export const contentLibrary = {
    'trading-zone': {
        pageTitle: 'Trading in the Zone - Padroneggia la Mentalità del Trader',
        sections: [
            {
                id: 'introduzione',
                title: 'Introduzione: Il Dilemma del Trader',
                icon: 'fa-door-open',
                content: `
                    <p>Benvenuto nel percorso verso la maestria nel trading... [Contenuto completo come prima] ...sviluppo di una <span class="concept">mentalità da trader</span>.</p>
                    <h3>Perché la Maggior Parte dei Trader Fallisce?</h3>
                    <p>La risposta risiede nella psicologia... [Contenuto completo come prima]</p>
                    <ul> <li>Reazioni emotive...</li> <li>Difficoltà nell'accettare...</li> <li>Incapacità di eseguire...</li> <li>Errori ripetuti...</li> </ul>
                    <p>La <span class="concept">soluzione</span> non è più analisi, ma lo sviluppo di una <span class="concept">mentalità da trader</span>...</p>
                `,
                challenges: [
                    { id: 'self-assessment', title: 'Sfida Iniziale: Auto-Valutazione', description: 'Rifletti onestamente... [descrizione completa]', reward: 10, linkText: 'Inizia Valutazione' }
                ]
            },
            {
                id: 'principi',
                title: 'Principi Chiave della Mentalità Vincente',
                icon: 'fa-key',
                content: `
                    <p>Per operare efficacemente... [Contenuto completo come prima]</p>
                    <!-- Card 1: Accettare il Rischio -->
                    <div class="card" style="margin-top: 2rem;"> ... [Contenuto Card 1] ... </div>
                    <!-- Card 2: Pensare in Probabilità -->
                    <div class="card" style="margin-top: 2rem;"> ... [Contenuto Card 2] ... </div>
                    <!-- Card 3: Le 5 Verità Fondamentali -->
                    <div class="card" style="margin-top: 2rem;">
                       ... [Contenuto Card 3 con lista e tooltip] ...
                     </div>
                `,
                 challenges: [
                    { id: 'truth-assimilation', title: 'Sfida: Assimilazione Verità', description: 'Scegli una delle 5 Verità e scrivi... [descrizione completa]', reward: 15, linkText: 'Invia Riflessione' }
                ]
            },
             {
                id: 'fasi-sviluppo',
                title: 'Le Fasi di Sviluppo del Trader',
                icon: 'fa-layer-group',
                content: `
                    <p>Diventare un trader costantemente profittevole è un processo... [Contenuto completo come prima]</p>
                    <div class="flex-container">
                        <!-- Card Fase Meccanica -->
                        <div class="flex-item card"><h4><i class="fas fa-cogs"></i> 1. Fase Meccanica</h4><p>... [Contenuto Card Meccanica]</p></div>
                        <!-- Card Fase Soggettiva -->
                        <div class="flex-item card"><h4><i class="fas fa-lightbulb"></i> 2. Fase Soggettiva</h4><p>... [Contenuto Card Soggettiva]</p></div>
                        <!-- Card Fase Intuitiva -->
                        <div class="flex-item card"><h4><i class="fas fa-brain"></i> 3. Fase Intuitiva</h4><p>... [Contenuto Card Intuitiva]</p></div>
                    </div>
                ` // No challenges in this section
            },
            {
                id: 'framework',
                title: 'Il Framework per la Consistenza: Operare come un Casinò',
                icon: 'fa-tools',
                content: `
                    <p>Questa sezione descrive l'esercizio pratico fondamentale... [Contenuto completo come prima]</p>
                    <h3>L'Esercizio Base:</h3>
                    <ol> ... [Contenuto lista esercizio] ... </ol>
                    <!-- Card 7 Principi -->
                    <div class="card consistency-principles"> ... [Contenuto Card 7 Principi] ... </div>
                `,
                 challenges: [
                    { id: '20-trade-series', title: 'Sfida Chiave: Serie di 20 Trade', description: 'Applica l\'esercizio "Operare come un Casinò"... [descrizione completa]', reward: 50, linkText: 'Inizia la Serie Simulata' }
                ]
            },
             {
                id: 'risorse',
                title: 'Risorse e Prossimi Passi',
                icon: 'fa-graduation-cap',
                content: `
                    <p>Padroneggiare la mentalità del trading è un viaggio continuo... [Contenuto completo come prima]</p>
                    <div class="resources"> ... [Contenuto div risorse] ... </div>
                    <!-- Challenge Diario Psicologico (spostato qui da card separata per coerenza) -->
                     <div class="challenge" style="margin-top: 2rem;">
                         <div class="token-reward"><i class="fas fa-coins"></i> 30 TRAD</div>
                         <h4><i class="fas fa-journal-whills"></i> Sfida: Diario Psicologico</h4>
                         <p>Tieni un diario psicologico dettagliato per almeno una settimana... [descrizione completa]</p>
                         <a href="#" class="resource-link challenge-link" data-challenge-id="psych-journal" data-reward="30">Scarica Template Diario</a>
                     </div>
                    <p style="margin-top: 2rem; text-align: center;">Ricorda: la consistenza non si trova nel mercato, ma dentro di te.</p>
                `,
                 // Nota: La sfida del diario è ora dentro la section 'risorse', non come challenge separato nella struttura dati.
                  challenges: [] // Non ci sono altre challenge *specifiche* per questa sezione
             }
        ]
    },
    'placeholder-1': {
        pageTitle: 'Analisi Tecnica - Concetti Base',
        sections: [ /* ... Contenuto placeholder 1 ... */ ]
    },
    'placeholder-2': {
         pageTitle: 'Gestione del Rischio Fondamentale',
         sections: [ /* ... Contenuto placeholder 2 ... */ ]
    }
};

// NB: Ho accorciato i contenuti testuali con [...] per brevità qui,
// ma nel tuo file dovrai copiare tutto il contenuto HTML che avevi prima.