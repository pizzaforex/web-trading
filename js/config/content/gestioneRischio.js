// js/config/content/gestioneRischio.js

export const gestioneRischioContent = {
     pageTitle: 'Gestione del Rischio Fondamentale',
     sections: [
         {
            id: 'intro-risk',
            title: 'Introduzione alla Gestione del Rischio (Placeholder)',
            icon: 'fa-shield-halved',
            content: `
                <p>La gestione del rischio (<span class="concept">Risk Management</span>) e la gestione patrimoniale (<span class="concept">Money Management</span>) sono aspetti cruciali e spesso sottovalutati del trading di successo. Senza una solida gestione del rischio, anche la migliore strategia di analisi può portare a perdite significative.</p>
                <div class="card">
                    <h3>Perché è fondamentale?</h3>
                    <p>Il trading è intrinsecamente incerto. Non possiamo controllare l'esito di un singolo trade, ma possiamo controllare quanto rischiamo su ogni operazione. Una corretta gestione del rischio mira a:</p>
                    <ul>
                        <li><strong>Preservare il capitale:</strong> L'obiettivo primario è proteggere il proprio capitale da perdite catastrofiche (risk of ruin).</li>
                        <li><strong>Massimizzare i profitti (nel lungo termine):</strong> Permette di rimanere nel gioco abbastanza a lungo da far fruttare il proprio edge statistico.</li>
                        <li><strong>Ridurre lo stress emotivo:</strong> Sapere di avere un piano per gestire le perdite aiuta a prendere decisioni più razionali.</li>
                    </ul>
                </div>
                <div class="card">
                    <h3>Concetti Chiave (da approfondire)</h3>
                    <p>Questa sezione verrà espansa per coprire in dettaglio:</p>
                    <ul>
                        <li><strong>Stop Loss:</strong> Definizione, tipi (fisso, trailing), posizionamento corretto.</li>
                        <li><strong>Position Sizing:</strong> Determinare la dimensione corretta della posizione in base al rischio per trade (es. % del capitale) e alla distanza dello stop loss.</li>
                        <li><strong>Rapporto Rischio/Rendimento (Risk/Reward Ratio):</strong> Valutare se il potenziale profitto di un trade giustifica il rischio assunto.</li>
                        <li><strong>Capitale a Rischio:</strong> Definire la massima perdita accettabile per singolo trade e per periodo.</li>
                        <li><strong>Diversificazione:</strong> Ridurre il rischio complessivo non concentrando tutto il capitale su un singolo strumento o settore (se applicabile alla strategia).</li>
                        <li><strong>Correlazione:</strong> Comprendere come i diversi asset nel portafoglio si muovono l'uno rispetto all'altro.</li>
                        <li><strong>Psicologia del Rischio:</strong> Affrontare la paura di perdere e l'avversione alle perdite.</li>
                    </ul>
                </div>
                <p><em>(Questo è un contenuto placeholder. Verrà sostituito con materiale dettagliato basato sulle tue fonti o su testi di riferimento come il Capitolo 16 di Murphy o altri libri dedicati).</em></p>`,
             challenges: [] // Possibile challenge: calcola il position size
         }
     ]
};