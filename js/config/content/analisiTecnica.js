// js/config/content/analisiTecnica.js

export const analisiTecnicaContent = {
    pageTitle: 'Analisi Tecnica dei Mercati Finanziari',
    sections: [
        // --- Capitolo 1: Filosofia ---
        {
            id: 'filosofia-at',
            title: 'Filosofia dell\'Analisi Tecnica',
            icon: 'fa-lightbulb',
            content: `
                <p>L'analisi tecnica è lo studio del movimento del mercato, principalmente attraverso l'uso dei grafici, allo scopo di prevedere le tendenze future dei prezzi. Questo capitolo ne esplora i fondamenti logici e le differenze rispetto ad altri approcci analitici.</p>
                <div class="card">
                    <h3><i class="fas fa-landmark"></i> Fondamenti Logici</h3>
                    <p>L'analisi tecnica si basa su tre premesse fondamentali:</p>
                    <ul>
                        <li><strong>Il mercato sconta tutto:</strong> Il prezzo riflette tutte le informazioni disponibili (fondamentali, politiche, psicologiche, ecc.). L'analisi si concentra sull'azione del prezzo.</li>
                        <li><strong>I prezzi si muovono dentro al trend:</strong> I movimenti tendono a persistere in una direzione. L'obiettivo è identificare i trend precocemente.</li>
                        <li><strong>La storia si ripete:</strong> I pattern grafici, riflesso della psicologia umana, tendono a ripetersi e hanno valore predittivo.</li>
                    </ul>
                </div>
                <div class="card">
                    <h3><i class="fas fa-balance-scale-left"></i> Previsioni Tecniche vs. Fondamentali</h3>
                    <p>L'analisi <span class="concept">fondamentale</span> studia le cause (valore intrinseco), mentre l'analisi <span class="concept">tecnica</span> studia l'effetto (il movimento dei prezzi). La tecnica si focalizza sul <span class="concept">"cosa"</span> è il prezzo e <span class="concept">"quando"</span> agire (timing).</p>
                </div>
                 <h4>Adattabilità e Applicazioni</h4>
                 <p>I principi tecnici sono applicabili a qualsiasi mercato (azioni, futures, forex, crypto...) e timeframe (intraday, giornaliero, lungo periodo), integrandosi con vari stili di trading.</p>
                <h4>Analisi Tecnica e Previsioni Economiche</h4>
                <p>L'andamento dei mercati è spesso un indicatore anticipatore dell'economia. L'analisi tecnica può fornire indirettamente spunti sulle future condizioni economiche.</p>
                <h4>Analisti Tecnici e Graficisti</h4>
                <p>Sebbene simili, "graficista" (chartist) si focalizza sui pattern visivi, mentre "analista tecnico" può includere l'uso di indicatori matematici e sistemi.</p>
                <div class="card">
                    <h3><i class="fas fa-exchange-alt"></i> Analisi Tecnica Azionaria vs. Futures</h3>
                    <p>Differenze principali nell'applicazione:</p>
                    <ul>
                        <li><strong>Struttura dei prezzi:</strong> Più complessa nei futures (scadenze).</li>
                        <li><strong>Durata:</strong> Contratti a scadenza nei futures.</li>
                        <li><strong>Margini e Leva:</strong> Maggiore leva nei futures.</li>
                        <li><strong>Timing:</strong> Ancora più critico nei futures.</li>
                        <li><strong>Focus:</strong> Più sul singolo contratto nei futures, più sugli indici nell'azionario.</li>
                    </ul>
                </div>
                 <div class="card">
                      <h3><i class="fas fa-question-circle"></i> Critiche Comuni e Random Walk</h3>
                      <p>Si affrontano le critiche come la teoria dell'<span class="concept">autoalimentazione</span> (profezie autoavveranti) e la <span class="concept">Teoria del Random Walk</span> (prezzi casuali e imprevedibili). Gli analisti tecnici riconoscono una componente casuale ma sostengono l'esistenza di trend e pattern identificabili derivanti dalla psicologia collettiva.</p>
                 </div>
            `,
            challenges: []
        },
        // --- Capitolo 2: Teoria di Dow ---
        {
            id: 'teoria-dow',
            title: 'La Teoria di Dow',
            icon: 'fa-water',
            content: `
                <p>Questa teoria, sviluppata da Charles Dow, è la base dell'analisi tecnica moderna e fornisce un framework per interpretare i movimenti generali del mercato.</p>
                <div class="card consistency-principles">
                    <h3><i class="fas fa-gavel"></i> Principi Fondamentali</h3>
                    <ol>
                        <li>Gli indici (originariamente Industrial e Transportation) scontano tutte le informazioni.</li>
                        <li>Il mercato ha tre trend: Primario (mesi/anni), Secondario (settimane/mesi), Minore (giorni/settimane).</li>
                        <li>Il trend primario ha tre fasi (Accumulazione, Partecipazione, Distribuzione/Eccesso).</li>
                        <li>Gli indici si devono confermare a vicenda (segnali validi se confermati da entrambi).</li>
                        <li>Il volume deve confermare il trend (aumenta nella direzione del trend).</li>
                        <li>Un trend è in atto finché non c'è un segnale chiaro di inversione.</li>
                    </ol>
                </div>
                <h4>Altri Concetti Chiave</h4>
                <p>Si discute l'importanza dei <span class="concept">prezzi di chiusura</span>, le <span class="concept">linee laterali</span> (range di consolidamento), le critiche (segnali spesso tardivi) e l'applicabilità storica.</p>
            `,
            challenges: []
        },
        // --- Capitolo 3: Costruzione Grafici ---
        {
            id: 'costruzione-grafici',
            title: 'Costruzione dei Grafici',
            icon: 'fa-chart-bar',
            content: `
                <p>La visualizzazione dei dati è lo strumento essenziale dell'analista tecnico.</p>
                <div class="card">
                    <h3><i class="fas fa-image"></i> Tipi di Grafici</h3>
                    <ul>
                        <li><strong>A Linee:</strong> Collega chiusure. Semplice, mostra trend generale.</li>
                        <li><strong>A Barre (OHLC):</strong> Mostra Apertura(O), Massimo(H), Minimo(L), Chiusura(C). Più informativo sulla volatilità.</li>
                        <li><strong>Candlestick:</strong> Mostra OHLC con corpo colorato e ombre. Visualizzazione psicologica immediata.</li>
                        <li><strong>Point & Figure:</strong> Mostra solo movimenti significativi (X e O), ignorando il tempo.</li>
                    </ul>
                </div>
                 <div class="card">
                     <h3><i class="fas fa-ruler-combined"></i> Scala Aritmetica vs Logaritmica</h3>
                     <ul>
                         <li><strong>Aritmetica:</strong> Uguali distanze per uguali variazioni assolute (€/$). Utile nel breve.</li>
                         <li><strong>Logaritmica:</strong> Uguali distanze per uguali variazioni percentuali (%). Essenziale nel lungo periodo e per grandi range di prezzo.</li>
                     </ul>
                 </div>
                 <h4>Altri Elementi Grafici</h4>
                 <p>È fondamentale includere il <span class="concept">Volume</span> (barre alla base, conferma i movimenti) e, per i derivati, l'<span class="concept">Open Interest</span> (linea alla base, indica contratti aperti).</p>
                 <p>L'uso di grafici <span class="concept">settimanali</span> e <span class="concept">mensili</span> permette di analizzare i trend di lungo periodo.</p>
            `,
            challenges: []
        },
        // --- Capitolo 4: Trend ---
        {
            id: 'concetti-trend',
            title: 'Concetti Fondamentali di Trend',
            icon: 'fa-chart-line',
            content: `
               <p>Identificare e seguire il trend è cruciale. Si definiscono le direzioni (rialzista, ribassista, laterale) e le durate (primario, secondario, minore).</p>
               <div class="card">
                    <h3><i class="fas fa-level-down-alt"></i><i class="fas fa-level-up-alt"></i> Supporti e Resistenze</h3>
                    <p><span class="concept">Supporto:</span> Livello sotto il prezzo dove la domanda frena la discesa. <span class="concept">Resistenza:</span> Livello sopra il prezzo dove l'offerta frena la salita. Invertono i ruoli una volta violati. I numeri tondi sono psicologicamente importanti.</p>
               </div>
               <div class="card">
                   <h3><i class="fas fa-pen-ruler"></i> Linee di Tendenza (Trendlines) e Canali</h3>
                   <p>Le <span class="concept">Trendline</span> collegano minimi (uptrend) o massimi (downtrend). La rottura è un segnale chiave. L'importanza dipende da durata, tocchi, inclinazione. I <span class="concept">Canali</span> si formano con una parallela.</p>
                   <p>Concetti correlati: Principio del Ventaglio, Importanza del Numero Tre, Inclinazione, Trendlines Interne.</p>
               </div>
                <div class="card">
                    <h3><i class="fas fa-percentage"></i> Percentuali di Ritracciamento</h3>
                    <p>I mercati ritracciano parte del movimento precedente. Livelli comuni: 50%, 1/3, 2/3, e <span class="concept">Fibonacci</span> (38.2%, 61.8%).</p>
                </div>
                 <h4>Altri Strumenti</h4>
                 <p>Introdotti <span class="concept">Speed Lines</span>, <span class="concept">Reversal Days</span>, e <span class="concept">Price Gaps</span> (Breakaway, Runaway, Exhaustion, Island Reversal).</p>
            `,
            challenges: []
        },
        // --- Capitolo 5: Formazioni di Inversione ---
        {
            id: 'formazioni-inversione',
            title: 'Principali Formazioni di Inversione',
            icon: 'fa-exchange-alt',
            content: `
                <p>Pattern grafici che segnalano un probabile cambio di direzione del trend principale.</p>
                <div class="card">
                    <h3><i class="fas fa-heading"></i> Testa e Spalle (Head and Shoulders)</h3>
                    <p>Formazione classica (Top o Bottom/Inverso). La rottura della <span class="concept">neckline</span> conferma il pattern. Il <span class="concept">volume</span> è fondamentale per la validità. Permette di calcolare <span class="concept">obiettivi di prezzo</span>.</p>
                </div>
                <div class="card">
                    <h3><i class="fas fa-arrows-alt-h"></i> Doppi e Tripli Massimi/Minimi</h3>
                    <p><span class="concept">Triplo Top/Bottom</span> e <span class="concept">Doppio Top (M)/Bottom (W)</span>. La rottura del livello intermedio conferma l'inversione.</p>
                </div>
                <h4>Altre Formazioni e Considerazioni</h4>
                <p>Vengono discusse varianti (<span class="concept">H&S composito</span>), fallimenti (<span class="concept">failed pattern</span>), <span class="concept">filtri</span>, <span class="concept">Saucer Bottom</span> e <span class="concept">Spikes (V-Reversals)</span>.</p>
            `,
            challenges: []
        },
        // --- Capitolo 6: Formazioni di Continuazione ---
         {
            id: 'formazioni-continuazione',
            title: 'Formazioni di Continuazione',
            icon: 'fa-pause-circle',
            content: `
                <p>Indicano una pausa nel trend esistente, suggerendo una probabile ripresa nella stessa direzione.</p>
                <div class="card">
                    <h3><i class="fas fa-caret-right"></i><i class="fas fa-caret-left"></i> Triangoli</h3>
                    <p>Linee convergenti: <span class="concept">Simmetrico</span>, <span class="concept">Ascendente</span> (rialzista), <span class="concept">Discendente</span> (ribassista). Il volume decresce. Hanno <span class="concept">obiettivi misurabili</span>.</p>
                </div>
                <div class="card">
                    <h3><i class="fas fa-flag"></i> Bandiere e Gagliardetti (Flags & Pennants)</h3>
                    <p>Brevi consolidamenti dopo un movimento rapido (<span class="concept">flagpole</span>). Suggeriscono continuazione per distanza simile al flagpole.</p>
                </div>
                 <h4>Altre Formazioni</h4>
                 <p>Trattate anche: <span class="concept">Broadening Formation</span>, <span class="concept">Wedge</span> (cuneo), <span class="concept">Rettangolo</span> (trading range) e <span class="concept">Measured Move</span>.</p>
            `,
            challenges: []
        },
        // --- Capitolo 7: Volume e Open Interest ---
        {
             id: 'volume-open-interest',
             title: 'Volume e Open Interest',
             icon: 'fa-users',
             content: `
                 <p>Indicatori secondari che misurano partecipazione e convinzione.</p>
                 <div class="card">
                     <h3><i class="fas fa-chart-area"></i> Volume</h3>
                     <p>Conferma/indebolisce il trend. Picchi (<span class="concept">climax</span>) indicano esaurimento. L'indicatore <span class="concept">OBV</span> lo analizza cumulativamente.</p>
                 </div>
                 <div class="card">
                     <h3><i class="far fa-folder-open"></i> Open Interest (Futures/Opzioni)</h3>
                     <p>Numero di contratti aperti. L'analisi combinata con prezzo e volume indica forza/debolezza del trend. Strumenti correlati: <span class="concept">COT Report</span>, <span class="concept">Put/Call Ratios</span>.</p>
                 </div>
             `,
             challenges: []
        },
        // --- Capitolo 8: Grafici di Lungo Periodo ---
        {
            id: 'grafici-lungo-periodo',
            title: 'Grafici di Lungo Periodo',
            icon: 'fa-calendar-alt',
            content: `
                <p>L'analisi dei grafici settimanali e mensili è fondamentale per definire il contesto del trend primario.</p>
                 <div class="card">
                    <h3><i class="fas fa-binoculars"></i> Prospettiva e Strumenti</h3>
                    <p>Identificano trend primari, S/R storici, pattern di lungo periodo. Si discute la costruzione di grafici di continuazione (<span class="concept">contratti perpetual</span>) e l'impatto dell'inflazione.</p>
                 </div>
            `,
            challenges: []
        },
        // --- Capitolo 9: Medie Mobili ---
        {
            id: 'medie-mobili',
            title: 'Medie Mobili',
            icon: 'fa-wave-square',
            content: `
                <p>Indicatori trend-following che smussano i prezzi.</p>
                 <div class="card">
                    <h3><i class="fas fa-calculator"></i> Tipi e Utilizzo</h3>
                    <p><strong>SMA</strong> (Semplice), <strong>EMA</strong> (Esponenziale, più reattiva). Usate per: identificare il trend, segnali di <span class="concept">crossover</span> (prezzo/media, media/media), supporto/resistenza dinamici.</p>
                 </div>
                 <h4>Altri Strumenti Correlati</h4>
                 <p>Introdotti: <span class="concept">Bande di Bollinger</span>, <span class="concept">Envelopes</span>, Medie Mobili Adattive (<span class="concept">KAMA</span>).</p>
            `,
            challenges: []
        },
        // --- Capitolo 10: Oscillatori e Opinione Contraria ---
        {
            id: 'oscillatori-opinione-contraria',
            title: 'Oscillatori e Opinione Contraria',
            icon: 'fa-tachometer-alt',
            content: `
                 <p>Indicatori di momentum utili per <span class="concept">ipercomprato/ipervenduto</span> e <span class="concept">divergenze</span>.</p>
                 <div class="card">
                     <h3><i class="fas fa-toolbox"></i> Oscillatori Comuni</h3>
                     <p><strong>Momentum/ROC</strong>, <strong>CCI</strong>, <strong>RSI</strong> (70/30), <strong>Stocastico</strong> (80/20), <strong>Williams %R</strong>, <strong>MACD</strong> (con linea segnale e istogramma).</p>
                 </div>
                  <div class="card">
                    <h3><i class="fas fa-users-slash"></i> Opinione Contraria</h3>
                    <p>Andare contro il sentiment estremo usando indicatori come <span class="concept">Bullish Consensus</span>, <span class="concept">Put/Call Ratios</span>, <span class="concept">COT Report</span>, <span class="concept">Investors Intelligence</span>.</p>
                 </div>
            `,
            challenges: []
        },
        // --- Capitolo 11: Grafici Point & Figure ---
        {
            id: 'point-figure',
            title: 'Grafici Point & Figure',
            icon: 'fa-th',
            content: `
                <p>Metodo di graficazione basato solo sul prezzo (<span class="concept">box size</span>) e sull'inversione (<span class="concept">reversal amount</span>), ignorando il tempo.</p>
                <div class="card">
                    <h3><i class="fas fa-signal"></i> Interpretazione</h3>
                    <p>Fornisce segnali di rottura chiari, pattern specifici, trendline a 45°, obiettivi di prezzo (<span class="concept">conteggio orizzontale</span>). Filtra il rumore.</p>
                </div>
            `,
            challenges: []
        },
        // --- Capitolo 12: Candlesticks Giapponesi ---
        {
            id: 'candlestick-giapponesi',
            title: 'Candlesticks Giapponesi',
            icon: 'fa-candlestick-chart',
            content: `
                <p>Visualizzano la battaglia tra compratori/venditori tramite <span class="concept">corpo reale</span> e <span class="concept">ombre</span>.</p>
                <div class="card">
                    <h3><i class="fas fa-project-diagram"></i> Pattern Candlestick</h3>
                    <p>Analisi di pattern di una o più candele per segnali di <span class="concept">inversione</span> (es. Hammer, Engulfing, Morning/Evening Star) o <span class="concept">continuazione</span> (es. Rising/Falling Three Methods, Windows).</p>
                </div>
                 <h4>Utilizzo</h4>
                 <p>Leggere nel <span class="concept">contesto</span> del trend e confermare con altri strumenti/indicatori.</p>
            `,
            challenges: []
        },
        // --- Capitolo 13: Teoria delle Onde di Elliott ---
        {
            id: 'onde-elliott',
            title: 'Teoria delle Onde di Elliott',
            icon: 'fa-water',
            content: `
                <p>Descrive i movimenti di mercato come pattern ondulatori (5 impulsive + 3 correttive), basati sulla psicologia collettiva e <span class="concept">Fibonacci</span>.</p>
                <div class="card">
                    <h3><i class="fas fa-infinity"></i> Struttura Frattale e Fibonacci</h3>
                    <p>Le onde si suddividono in sotto-onde. I rapporti di Fibonacci (0.382, 0.618, 1.618...) sono usati per ritracciamenti ed estensioni.</p>
                </div>
                 <h4>Concetti Chiave</h4>
                 <p>Tipi di correzioni (<span class="concept">zig-zag, flat, triangolo</span>), regola dell'<span class="concept">alternanza</span>, <span class="concept">channeling</span>. Complessa ma potente.</p>
            `,
            challenges: []
        },
        // --- Capitolo 14: Cicli Temporali ---
        {
             id: 'cicli-temporali',
             title: 'I Cicli Temporali',
             icon: 'fa-sync-alt',
             content: `
                <p>Analisi delle regolarità temporali nei movimenti di mercato.</p>
                <div class="card">
                   <h3><i class="fas fa-hourglass-half"></i> Concetti Chiave</h3>
                   <p>Si analizzano: <span class="concept">Periodo</span>, <span class="concept">Ampiezza</span>, <span class="concept">Fase</span>. Principi: Somma, Armonia, Sincronicità, Proporzionalità. La <span class="concept">traslazione</span> indica forza/debolezza del trend.</p>
                </div>
                <h4>Applicazioni</h4>
                <p>Classificazione cicli (Kondratieff, stagionali, ecc.) e combinazione con altri strumenti tecnici.</p>
             `,
             challenges: []
        },
        // --- Capitolo 15: Computer e Trading Systems ---
        {
            id: 'computer-trading-systems',
            title: 'Computer e Trading Systems',
            icon: 'fa-laptop-code',
            content: `
                 <p>L'uso dei computer per <span class="concept">backtesting</span>, sviluppo di indicatori e sistemi di trading.</p>
                 <div class="card">
                    <h3><i class="fas fa-cogs"></i> Sviluppo e Sistemi Comuni</h3>
                    <p>Passi per creare un trading system (idea -> regole -> test -> valutazione). Esempi: <span class="concept">DMI/ADX</span>, <span class="concept">Parabolic SAR</span>.</p>
                 </div>
                 <h4>Considerazioni</h4>
                 <p>Evitare <span class="concept">overfitting</span>, importanza del giudizio umano.</p>
            `,
            challenges: []
        },
        // --- Capitolo 16: Gestione Patrimoniale e Tattiche Operative (Link) ---
        {
            id: 'gestione-tattiche-link',
            title: 'Gestione Patrimoniale e Tattiche Operative',
            icon: 'fa-shield-alt',
            content: `
                <p>Questo argomento cruciale è trattato in dettaglio nella sezione dedicata alla <a href="#" class="nav-link-inline" data-content-key="gestione-rischio">Gestione del Rischio & Money Management</a>.</p>
                <p>Riguarda l'integrazione tra analisi e gestione del capitale: regole di money management, stop loss, R/R, tattiche operative (rotture, S/R), tipi di ordini.</p>
                <div style="text-align: center; margin-top: 1.5rem;">
                     <a href="#" class="cta-button" data-content-key="gestione-rischio">Vai a Gestione Rischio & MM</a>
                 </div>
            `,
            challenges: []
        },
        // --- Capitolo 17: Intermarket Analysis ---
        {
            id: 'intermarket-analysis',
            title: 'Analisi Intermarket',
            icon: 'fa-link',
            content: `
                <p>Studio delle relazioni tra diverse classi di asset (azioni, bond, commodity, valute).</p>
                 <div class="card">
                    <h3><i class="fas fa-globe"></i> Correlazioni e Forza Relativa</h3>
                    <p>Analisi delle relazioni tipiche (es. inversa Dollaro/Commodity) e del confronto tra performance (<span class="concept">Forza Relativa</span>) per conferme e contesto macro.</p>
                 </div>
            `,
            challenges: []
        },
        // --- Capitolo 18: Indicatori del Mercato Azionario ---
        {
            id: 'indicatori-mercato-azionario',
            title: 'Indicatori del Mercato Azionario',
            icon: 'fa-broadcast-tower',
            content: `
                <p>Indicatori che misurano la "salute" e l'ampiezza del mercato azionario.</p>
                <div class="card">
                    <h3><i class="fas fa-lungs"></i> Ampiezza (Breadth)</h3>
                    <p>Indicatori come <span class="concept">Linea A/D</span>, <span class="concept">Nuovi Massimi/Minimi</span>, <span class="concept">Oscillatore di McClellan</span> misurano la partecipazione interna al movimento dell'indice.</p>
                </div>
                 <div class="card">
                    <h3><i class="fas fa-thermometer-half"></i> Volume e Sentiment</h3>
                    <p>Si analizzano volumi (Up/Down Volume, <span class="concept">TRIN</span>) e grafici come <span class="concept">Equivolume</span>.</p>
                 </div>
            `,
            challenges: []
        },
        // --- Capitolo 19: Checklist ---
         {
            id: 'checklist-finale',
            title: 'Checklist Operativa',
            icon: 'fa-check-square',
            content: `
                <p>Una sintesi dei punti da considerare prima di operare.</p>
                <div class="card">
                    <h3><i class="fas fa-list-ul"></i> Punti Chiave</h3>
                    <p>Verificare: Trend (multi-timeframe), S/R, Pattern, Indicatori (Medie, Oscillatori, Volume), Intermarket, R/R, Piano (Entrata/Stop/Target), Stato Emotivo.</p>
                </div>
                <h4>Considerazioni Finali</h4>
                <p>Importanza di integrare approcci, formazione continua e disciplina.</p>
            `,
            challenges: []
        }
    ]
};