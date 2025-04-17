// js/config/content/mentalitaTrader.js

export const mentalitaTraderContent = { // Nome variabile cambiato
    pageTitle: 'Mentalità del Trader - Padroneggia la Psicologia del Trading', // Titolo pagina cambiato
    sections: [
        {
            id: 'introduzione-mentalita', // ID leggermente modificato per unicità
            title: 'Introduzione: Il Dilemma del Trader',
            icon: 'fa-door-open',
            content: `
                <p>Benvenuto nel percorso verso la maestria nel trading. Molti aspiranti trader si concentrano quasi esclusivamente sull'analisi di mercato, sulla ricerca dell'indicatore "perfetto" o sulla strategia infallibile. Tuttavia, anche con un sistema valido, la maggior parte fallisce nel raggiungere una profittabilità costante. Perché? La risposta risiede in un'area spesso trascurata: la <span class="concept">psicologia del trading</span>.</p>
                <p>Testi fondamentali sull'argomento svelano come le nostre credenze, paure e atteggiamenti mentali siano i veri motori (o freni) del nostro successo sui mercati. Non si tratta di prevedere il futuro con certezza, ma di sviluppare una <span class="concept">mentalità da trader</span> che permetta di operare in modo disciplinato, obiettivo e senza stress emotivo, anche di fronte all'incertezza intrinseca del mercato.</p>
                <h3>Perché la Maggior Parte dei Trader Fallisce?</h3>
                <p>La risposta risiede nella psicologia. Il mercato è un ambiente unico che mette a nudo le nostre debolezze emotive come nessun altro:</p>
                <ul>
                    <li>Reazioni emotive (paura, avidità, speranza, rimpianto) che portano a decisioni impulsive e irrazionali.</li>
                    <li>Difficoltà nell'accettare le perdite come parte integrante del business, portando a "revenge trading" o a blocchi operativi.</li>
                    <li>Incapacità di eseguire il proprio piano di trading in modo consistente a causa di dubbi e seconde ipotesi.</li>
                    <li>Errori ripetuti nonostante la conoscenza teorica, indicando un divario tra ciò che si sa e ciò che si riesce a fare.</li>
                </ul>
                <p>La <span class="concept">soluzione</span> non è necessariamente cercare più informazioni o analisi complesse, ma lavorare profondamente sullo sviluppo di una <span class="concept">mentalità da trader</span> che allinei le nostre credenze e aspettative alla realtà probabilistica del mercato.</p>
            `,
            challenges: [
                { id: 'self-assessment-mentalita', title: 'Sfida Iniziale: Auto-Valutazione Psicologica', description: 'Rifletti onestamente sulle tue maggiori difficoltà psicologiche nel trading. Quali emozioni ti influenzano di più? In quali situazioni tendi a deviare dal tuo piano?', reward: 10, linkText: 'Inizia Valutazione' }
            ]
        },
        {
            id: 'principi-mentalita', // ID leggermente modificato
            title: 'Principi Chiave della Mentalità Vincente',
            icon: 'fa-key',
            content: `
                <p>Per operare efficacemente nell'"incertezza" del mercato, è necessario ristrutturare il proprio pensiero attorno ad alcuni principi fondamentali che contrastano con le nostre intuizioni quotidiane.</p>
                <div class="card" style="margin-top: 2rem;">
                    <h3><i class="fas fa-shield-alt icon-danger"></i> 1. Accettare Pienamente il Rischio</h3>
                    <p>Il rischio nel trading non è solo la possibilità di perdere denaro, ma l'intrinseca incertezza di ogni singolo trade. Accettare il rischio significa riconoscere che ogni operazione ha un esito potenzialmente negativo, che questo esito è fuori dal nostro controllo diretto una volta entrati, e che va bene così. La vera accettazione elimina la paura di sbagliare e la speranza irrazionale, permettendo un'esecuzione più fluida e obiettiva.</p>
                    <div class="mental-pitfalls"><h4><i class="fas fa-exclamation-triangle"></i> Trappola: Falsa Accettazione</h4><p>Molti credono di accettare il rischio solo perché piazzano uno stop-loss. La vera accettazione è emotiva e mentale: è la capacità di contemplare lo scenario peggiore senza disagio emotivo PRIMA di entrare nel trade.</p></div>
                </div>
                <div class="card" style="margin-top: 2rem;">
                    <h3><i class="fas fa-dice icon-success"></i> 2. Pensare in Termini di Probabilità</h3>
                    <p>Il mercato si muove in probabilità, non in certezze. Nessun singolo trade ha un esito garantito, indipendentemente da quanto "buono" appaia il setup. Un <span class="concept">edge</span> (vantaggio statistico) si manifesta solo su una serie di operazioni, non su una singola. Pensare in probabilità significa concentrarsi sulla corretta applicazione del proprio edge nel lungo periodo, sapendo che ci saranno trade vincenti e perdenti, e che la distribuzione tra i due è statisticamente prevedibile ma individualmente casuale. Questo libera dalla pressione di "avere ragione" su ogni trade.</p>
                </div>
                <div class="card" style="margin-top: 2rem;">
                    <h3><i class="fas fa-list-check icon-secondary"></i> 3. Le 5 Verità Fondamentali del Mercato</h3> <!-- Titolo leggermente modificato -->
                    <p>Queste verità, se integrate come credenze profonde, creano un framework mentale che neutralizza le reazioni emotive disfunzionali:</p>
                    <ol class="principles-list" style="margin-top: 0;">
                         <li><strong>Tutto può succedere.</strong><div class="tooltip">?<span class="tooltiptext">Il mercato può fare qualsiasi cosa in qualsiasi momento; non esistono certezze assolute.</span></div></li>
                         <li><strong>Non hai bisogno di sapere cosa succederà dopo per fare soldi.</strong><div class="tooltip">?<span class="tooltiptext">Un edge probabilistico non richiede previsioni accurate sul singolo evento. La consistenza deriva dall'applicazione ripetuta dell'edge.</span></div></li>
                         <li><strong>C'è una distribuzione casuale tra trade vincenti e perdenti per qualsiasi set di variabili che definisce un edge.</strong><div class="tooltip">?<span class="tooltiptext">Non puoi sapere in anticipo quale trade sarà vincente e quale perdente, anche con un edge valido. Le perdite fanno parte del gioco.</span></div></li>
                         <li><strong>Un edge è solo una probabilità maggiore che una cosa accada rispetto a un'altra.</strong><div class="tooltip">?<span class="tooltiptext">Niente di più, niente di meno. Non garantisce il successo sul singolo trade, ma offre un vantaggio nel lungo periodo.</span></div></li>
                         <li><strong>Ogni momento nel mercato è unico.</strong><div class="tooltip">?<span class="tooltiptext">Anche se un setup sembra identico al passato, le forze sottostanti (partecipanti, notizie, contesto) sono sempre diverse. Ciò rafforza l'incertezza di ogni singolo trade.</span></div></li>
                     </ol>
                     <p style="margin-top: 1rem;"><strong>Beneficio:</strong> Interiorizzare queste verità aiuta a creare un quadro mentale coerente con la natura probabilistica del mercato, riducendo conflitti interni ed errori emotivi.</p>
                </div>
            `,
             challenges: [
                // ID cambiato per riflettere la nuova sezione
                { id: 'truth-assimilation-mentalita', title: 'Sfida: Assimilazione Verità di Mercato', description: 'Scegli una delle 5 Verità Fondamentali e scrivi un breve paragrafo su come potresti applicarla concretamente nel tuo prossimo trade o nella tua analisi.', reward: 15, linkText: 'Invia Riflessione' }
            ]
        },
         {
            id: 'fasi-sviluppo-trader', // ID modificato
            title: 'Le Fasi di Sviluppo del Trader',
            icon: 'fa-layer-group',
            content: `
                <p>Diventare un trader costantemente profittevole è un processo evolutivo che può essere suddiviso in tre fasi principali. Comprendere queste fasi aiuta a gestire le aspettative e a concentrarsi sugli obiettivi giusti in ogni momento.</p> <!-- Rimosso riferimento a Douglas -->
                <div class="flex-container">
                    <div class="flex-item card">
                        <h4><i class="fas fa-cogs"></i> 1. Fase Meccanica</h4>
                        <p>L'obiettivo primario è costruire fiducia nella propria capacità di eseguire un sistema senza deviazioni e gestire le proprie emozioni. In questa fase, si opera con un set di regole <span class="concept">rigide e oggettive</span> per definire l'edge, il rischio, l'entrata e l'uscita. Si lavora su un campione di trade (es. 20-25) concentrandosi <span class="concept">esclusivamente sull'esecuzione perfetta</span>, indipendentemente dai risultati economici. Questo costruisce la disciplina, l'accettazione del rischio e dimostra a livello pratico la natura probabilistica dell'edge. È la <strong>fondamenta della consistenza.</strong></p>
                    </div>
                    <div class="flex-item card">
                        <h4><i class="fas fa-lightbulb"></i> 2. Fase Soggettiva</h4>
                        <p>Una volta interiorizzati i principi della mentalità vincente e dimostrata la capacità di operare meccanicamente, il trader può iniziare a introdurre elementi di <span class="concept">giudizio soggettivo</span> basati sull'esperienza e sulla lettura del "flusso" del mercato. Si impara a riconoscere condizioni di mercato particolari o pattern sottili che potrebbero giustificare un aggiustamento delle regole (es. prendere profitti parziali, non fare un trade anche se le regole meccaniche ci sono). Questa fase richiede grande auto-consapevolezza per non ricadere in errori emotivi. Non si può saltare a questa fase se le basi della fase meccanica non sono solide.</p>
                    </div>
                    <div class="flex-item card">
                        <h4><i class="fas fa-brain"></i> 3. Fase Intuitiva</h4>
                        <p>Il livello più avanzato, dove il trading diventa quasi <span class="concept">automatico e istintivo</span>. Il trader ha integrato così profondamente i principi e l'esperienza che opera in uno stato di "flusso", prendendo decisioni rapide e accurate senza un eccessivo pensiero cosciente. L'intuizione qui non è una sensazione casuale, ma il risultato di migliaia di ore di pratica deliberata e osservazione del mercato. Si raggiunge solo dopo aver pienamente padroneggiato le fasi precedenti.</p>
                    </div>
                </div>
            `,
             challenges: []
        },
        {
            id: 'framework-consistenza', // ID modificato
            title: 'Il Framework per la Consistenza: Operare come un Casinò',
            icon: 'fa-tools',
            content: `
                <p>Questa sezione descrive un esercizio pratico fondamentale per passare dalla teoria alla pratica e costruire la mentalità corretta. È il cuore della <span class="concept">Fase Meccanica</span>.</p> <!-- Rimosso riferimento a Douglas -->
                <h3>L'Esercizio Base:</h3>
                <ol>
                    <li><strong>Scegli un Edge:</strong> Identifica un sistema di trading con regole di entrata <span class="concept">oggettive e precise</span>. Non deve essere perfetto, ma deve avere una logica e, idealmente, un backtest positivo (l'enfasi qui è più sull'esecuzione che sulla perfezione del sistema in questa fase).</li>
                    <li><strong>Definisci il Campione:</strong> Impegnati a eseguire <span class="concept">esattamente</span> questo sistema per i prossimi 20 trade (o un numero simile). Questo crea un campione statisticamente significativo per osservare l'edge e la tua capacità di esecuzione.</li>
                    <li><strong>Predefinisci e Accetta il Rischio:</strong> Per ogni trade, determina <span class="concept">prima di entrare</span> l'esatto punto di stop-loss e la quantità di capitale a rischio (es. 1% del capitale). Accetta mentalmente che potresti perdere quella somma.</li>
                    <li><strong>Esegui Senza Esitazione:</strong> Appena le regole del tuo edge si verificano, <span class="concept">agisci immediatamente</span>. Non dubitare, non aspettare conferme extra, non farti influenzare dalle emozioni.</li>
                    <li><strong>Gestisci il Trade:</strong> Segui le tue regole predefinite per la gestione del trade (es. trailing stop, target di profitto fisso) <span class="concept">senza intervento soggettivo</span>. Lascia che sia il mercato a decidere l'esito secondo le tue regole.</li>
                    <li><strong>Non Giudicare i Risultati Singoli:</strong> Valuta il tuo successo sulla <span class="concept">qualità dell'esecuzione</span> delle regole per l'intero campione di 20 trade, non sul profitto o perdita di ogni singolo trade.</li>
                </ol>
                <div class="card consistency-principles">
                     <h3><i class="fas fa-clipboard-check"></i> I 7 Principi Guida della Consistenza</h3>
                     <p>Durante l'esercizio (e idealmente sempre), mantieni questi principi attivi nella tua mente:</p>
                     <ol class="principles-list" style="font-size: 1.05em;">
                         <li><strong>Definisco oggettivamente il mio edge.</strong></li>
                         <li><strong>Predefinisco il rischio di ogni trade.</strong></li>
                         <li><strong>Accetto completamente il rischio (sono disposto a perdere).</strong></li>
                         <li><strong>Applico il mio edge senza riserve o esitazioni.</strong></li>
                         <li><strong>Prendo profitto quando il mercato rende disponibile il denaro secondo le mie regole.</strong></li>
                         <li><strong>Monitoro continuamente la mia suscettibilità a commettere errori (e agisco per correggerli).</strong></li>
                         <li><strong>Capisco la necessità assoluta di questi principi di consistenza e quindi non li violo mai.</strong></li>
                     </ol>
                </div>
            `,
             challenges: [
                { id: '20-trade-series-mentalita', title: 'Sfida Chiave: Serie di 20 Trade Disciplinati', description: 'Applica l\'esercizio "Operare come un Casinò" per i tuoi prossimi 20 trade (reali o simulati). Concentrati SOLO sull\'esecuzione perfetta delle tue regole predefinite. Tieni un diario dettagliato.', reward: 50, linkText: 'Inizia la Serie Simulata' }
            ]
        },
         {
            id: 'risorse-mentalita', // ID modificato
            title: 'Risorse e Prossimi Passi per la Mentalità', // Titolo modificato
            icon: 'fa-graduation-cap',
            content: `
                <p>Padroneggiare la mentalità del trading è un viaggio continuo di auto-scoperta e pratica deliberata. Le idee presentate qui sono solo l'inizio.</p>
                <div class="resources">
                    <h4><i class="fas fa-book"></i> Letture Consigliate</h4>
                    <ul>
                        <li>Approfondire testi sulla <span class="concept">psicologia del trading</span> e sulla <span class="concept">disciplina</span> è fondamentale. Cerca autori riconosciuti nel campo della performance mentale applicata ai mercati.</li>
                        <li>Libri sulle <span class="concept">biografie</span> di trader di successo possono offrire spunti preziosi sulla loro mentalità e approccio.</li>
                        <li>Testi sulla <span class="concept">gestione emotiva</span> e sui <span class="concept">bias cognitivi</span> (come quelli di D. Kahneman) sono utili per comprendere meglio sé stessi.</li>
                        <!-- Rimosso riferimento diretto ai libri di Douglas -->
                    </ul>
                    <h4><i class="fas fa-link"></i> Strumenti Utili</h4>
                    <ul>
                        <li>Diario di Trading Psicologico: Fondamentale per tracciare non solo i trade, ma anche pensieri, emozioni e deviazioni dal piano.</li>
                        <li>Software di Backtesting: Utile per testare oggettivamente strategie e costruire fiducia in un edge (riducendo l'impatto emotivo).</li>
                        <li>Comunità di Trader (Selezionate): Confrontarsi con altri trader focalizzati sulla mentalità può essere utile (ma attenzione a non farsi influenzare negativamente).</li>
                    </ul>
                    <h4><i class="fas fa-chalkboard-teacher"></i> Coaching e Supporto</h4>
                    <ul>
                        <li>Considera un coaching specifico sulla psicologia del trading se trovi difficoltà persistenti nel gestire le emozioni o mantenere la disciplina.</li>
                    </ul>
                </div>
                 <div class="challenge" style="margin-top: 2rem;">
                     <div class="token-reward"><i class="fas fa-coins"></i> 30 TRAD</div>
                     <h4><i class="fas fa-journal-whills"></i> Sfida: Diario Psicologico</h4>
                     <p>Tieni un diario psicologico dettagliato per almeno una settimana di trading. Annota pensieri, emozioni e decisioni per ogni trade.</p>
                     <!-- ID cambiato per riflettere la nuova sezione -->
                     <a href="#" class="resource-link challenge-link" data-challenge-id="psych-journal-mentalita" data-reward="30">Scarica Template Diario</a>
                 </div>
                <p style="margin-top: 2rem; text-align: center;">Ricorda: la consistenza non si trova nel mercato, ma dentro di te.</p>
            `,
             challenges: []
        }
    ]
};
