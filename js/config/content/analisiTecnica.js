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
                <p>L'andamento dei mercati è spesso un indicatore anticipatore dell'economia. L'analisi tecnica può fornire indirettamente spunti sulle condizioni economiche future.</p>

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
                <p>Questa teoria, sviluppata da Charles Dow, è la base dell'analisi tecnica moderna e fornisce un framework per interpretare i movimenti del mercato azionario.</p>
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
                <p>La rappresentazione grafica dei dati è lo strumento essenziale dell'analista tecnico.</p>
                <div class="card">
                    <h3><i class="fas fa-image"></i> Tipi di Grafici</h3>
                    <ul>
                        <li><strong>A Linee:</strong> Collega chiusure. Semplice, mostra trend generale.</li>
                        <li><strong>A Barre (OHLC):</strong> Mostra Apertura, Massimo, Minimo, Chiusura. Più informativo sulla volatilità.</li>
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
                   <p>Le <span class="concept">Trendline</span> collegano minimi (uptrend) o massimi (downtrend) e definiscono il trend. La rottura è un segnale chiave. L'importanza dipende da durata, tocchi, inclinazione. I <span class="concept">Canali</span> si formano con una parallela alla trendline.</p>
                   <p>Concetti correlati: Principio del Ventaglio, Importanza del Numero Tre, Inclinazione, Trendlines Interne.</p>
               </div>
                <div class="card">
                    <h3><i class="fas fa-percentage"></i> Percentuali di Ritracciamento</h3>
                    <p>I mercati ritracciano parte del movimento precedente. Livelli comuni: 50%, 1/3, 2/3, e <span class="concept">Fibonacci</span> (38.2%, 61.8%).</p>
                </div>
                 <h4>Altri Strumenti</h4>
                 <p>Vengono introdotti <span class="concept">Speed Lines</span>, <span class="concept">Reversal Days</span>, e <span class="concept">Price Gaps</span> (Breakaway, Runaway, Exhaustion, Island Reversal).</p>
            `,
            challenges: []
        },

        // --- Capitolo 5: Formazioni di Inversione ---
        {
            id: 'formazioni-inversione',
            title: 'Principali Formazioni di Inversione',
            icon: 'fa-exchange-alt',
            content: `
                <p>Questi pattern grafici segnalano un probabile cambio di direzione del trend principale.</p>
                <div class="card">
                    <h3><i class="fas fa-heading"></i> Testa e Spalle (Head and Shoulders)</h3>
                    <p>Formazione classica (Top o Bottom/Inverso) con tre picchi/valli, di cui il centrale (testa) è il più estremo. La rottura della <span class="concept">neckline</span> conferma il pattern. Il <span class="concept">volume</span> è fondamentale per la validità. Permette di calcolare <span class="concept">obiettivi di prezzo</span>.</p>
                </div>
                <div class="card">
                    <h3><i class="fas fa-arrows-alt-h"></i> Doppi e Tripli Massimi/Minimi</h3>
                    <p>Varianti comuni: <span class="concept">Triplo Top/Bottom</span> e <span class="concept">Doppio Top (M)/Bottom (W)</span>. La rottura del livello intermedio conferma l'inversione.</p>
                </div>
                <h4>Altre Formazioni e Considerazioni</h4>
                <p>Vengono discusse varianti (<span class="concept">H&S composito</span>), fallimenti (<span class="concept">failed pattern</span>), l'uso di <span class="concept">filtri</span>, e formazioni come <span class="concept">Saucer Bottom</span> e <span class="concept">Spikes (V-Reversals)</span>.</p>
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
                    <p>Linee convergenti: <span class="concept">Simmetrico</span> (neutro fino a rottura), <span class="concept">Ascendente</span> (rialzista), <span class="concept">Discendente</span> (ribassista). Il volume decresce durante la formazione. Hanno <span class="concept">obiettivi misurabili</span>.</p>
                </div>
                <div class="card">
                    <h3><i class="fas fa-flag"></i> Bandiere e Gagliardetti (Flags & Pennants)</h3>
                    <p>Brevi consolidamenti (rettangoli/triangoli) dopo un movimento rapido (<span class="concept">flagpole</span>). Suggeriscono continuazione per una distanza simile al flagpole.</p>
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
                     <p>Conferma la forza del trend (volume crescente) o ne segnala la debolezza (volume decrescente). Picchi (<span class="concept">climax</span>) indicano possibili esaurimenti. L'indicatore <span class="concept">OBV</span> lo analizza cumulativamente.</p>
                 </div>
                 <div class="card">
                     <h3><i class="far fa-folder-open"></i> Open Interest (Futures/Opzioni)</h3>
                     <p>Numero di contratti aperti. La sua analisi combinata con prezzo e volume fornisce indicazioni sulla forza del trend e sulla natura dei partecipanti. Analisi specifiche includono il <span class="concept">COT Report</span> e i <span class="concept">Put/Call Ratios</span>.</p>
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
                <p>L'analisi dei grafici settimanali e mensili è cruciale per definire il contesto del trend primario.</p>
                 <div class="card">
                    <h3><i class="fas fa-binoculars"></i> Importanza della Prospettiva a Lungo Termine</h3>
                    <p>Permettono di identificare trend primari, livelli S/R storici significativi e pattern di lungo periodo, filtrando il rumore di breve. L'approccio top-down (dal lungo al breve periodo) è fondamentale.</p>
                 </div>
                 <h4>Costruzione e Analisi</h4>
                 <p>Si discute come costruire grafici di continuazione per futures (es. <span class="concept">contratti perpetual</span>), come considerare l'inflazione e come applicare gli strumenti tecnici (pattern, indicatori) su questi timeframe più ampi.</p>
            `,
            challenges: []
        },

        // --- Capitolo 9: Medie Mobili ---
        {
            id: 'medie-mobili',
            title: 'Medie Mobili',
            icon: 'fa-wave-square',
            content: `
                <p>Indicatori popolari per smussare i prezzi e identificare il trend.</p>
                 <div class="card">
                    <h3><i class="fas fa-calculator"></i> Tipi e Calcolo</h3>
                    <p><strong>SMA</strong> (Semplice), <strong>LWMA</strong> (Ponderata Lineare), <strong>EMA</strong> (Esponenziale, più reattiva). La scelta del periodo (es. 10, 50, 200) dipende dal timeframe e dallo stile.</p>
                 </div>
                 <div class="card">
                     <h3><i class="fas fa-search-location"></i> Utilizzo Principale</h3>
                     <ul>
                         <li>Identificazione Trend (prezzo sopra/sotto media).</li>
                         <li>Segnali di Crossover (Prezzo/Media, Media/Media - es. Golden/Death Cross).</li>
                         <li>Supporto/Resistenza Dinamici.</li>
                     </ul>
                 </div>
                 <h4>Altri Strumenti Correlati</h4>
                 <p>Introdotti: <span class="concept">Bande di Bollinger</span>, <span class="concept">Envelopes</span>, Medie Mobili Adattive (es. <span class="concept">KAMA</span>).</p>
            `,
            challenges: []
        },

        // --- Capitolo 10: Oscillatori e Opinione Contraria ---
        {
            id: 'oscillatori-opinione-contraria',
            title: 'Oscillatori e Opinione Contraria',
            icon: 'fa-tachometer-alt',
            content: `
                 <p>Gli oscillatori misurano il <span class="concept">momentum</span> e identificano condizioni estreme (<span class="concept">ipercomprato/ipervenduto</span>), utili soprattutto in mercati laterali e per individuare <span class="concept">divergenze</span>.</p>
                 <div class="card">
                     <h3><i class="fas fa-toolbox"></i> Oscillatori Comuni</h3>
                     <ul>
                        <li><strong>Momentum / Rate of Change (ROC):</strong> Misurano la velocità della variazione dei prezzi.</li>
                        <li><strong>CCI (Commodity Channel Index):</strong> Misura la deviazione dalla media statistica.</li>
                        <li><strong>RSI (Relative Strength Index):</strong> Misura velocità e cambiamento su scala 0-100 (livelli chiave 70/30).</li>
                        <li><strong>Stocastico (K%D):</strong> Posiziona la chiusura nel range recente (livelli chiave 80/20).</li>
                        <li><strong>Williams %R:</strong> Simile allo Stocastico, scala invertita (20/80).</li>
                        <li><strong>MACD (Moving Average Convergence/Divergence):</strong> Basato sulla differenza tra EMA; include linea segnale e istogramma.</li>
                    </ul>
                 </div>
                  <div class="card">
                    <h3><i class="fas fa-users-slash"></i> Opinione Contraria (Contrary Opinion)</h3>
                    <p>Approccio che va contro il sentiment estremo del mercato, usando indicatori come <span class="concept">Bullish Consensus</span>, <span class="concept">Put/Call Ratios</span>, <span class="concept">COT Report</span>, <span class="concept">Investors Intelligence</span>.</p>
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
                <p>Metodo di graficazione che ignora il tempo e si concentra solo su movimenti di prezzo significativi (<span class="concept">box size</span>), usando colonne di X (rialzo) e O (ribasso) e un criterio di inversione (<span class="concept">reversal amount</span>).</p>
                <div class="card">
                    <h3><i class="fas fa-signal"></i> Interpretazione e Vantaggi</h3>
                    <p>Fornisce segnali chiari di rottura, identifica pattern specifici, permette di tracciare trendline a 45°, offre metodi di <span class="concept">conteggio orizzontale</span> per obiettivi di prezzo. Filtra efficacemente il rumore di mercato.</p>
                </div>
                <h4>Considerazioni</h4>
                <p>Meno intuitivo di altri grafici, non mostra volatilità intra-periodo, i segnali possono essere tardivi.</p>
            `,
            challenges: []
        },

        // --- Capitolo 12: Candlesticks Giapponesi ---
        {
            id: 'candlestick-giapponesi',
            title: 'Candlesticks Giapponesi',
            icon: 'fa-candlestick-chart',
            content: `
                <p>Tecnica grafica che visualizza la battaglia tra compratori e venditori tramite <span class="concept">corpo reale</span> e <span class="concept">ombre</span>.</p>
                <div class="card">
                    <h3><i class="fas fa-book-open"></i> Candele Base e Pattern</h3>
                    <p>Si analizzano candele singole (Long/Short days, Doji, Spinning tops) e, soprattutto, <span class="concept">pattern</span> formati da più candele, che possono segnalare inversioni (es. Hammer, Engulfing, Morning/Evening Star) o continuazioni (es. Rising/Falling Three Methods, Windows).</p>
                </div>
                 <h4>Utilizzo e Filtri</h4>
                 <p>I segnali candlestick vanno sempre letti nel <span class="concept">contesto</span> del trend e confermati da altri strumenti (S/R, trendline, volume, oscillatori).</p>
            `,
            challenges: []
        },

        // --- Capitolo 13: Teoria delle Onde di Elliott ---
        {
            id: 'onde-elliott',
            title: 'Teoria delle Onde di Elliott',
            icon: 'fa-water',
            content: `
                <p>Teoria che descrive i movimenti di mercato come pattern ondulatori ripetitivi (5 onde impulsive nel trend, 3 onde correttive contro il trend), basati sulla psicologia collettiva e sui rapporti di <span class="concept">Fibonacci</span>.</p>
                <div class="card">
                    <h3><i class="fas fa-infinity"></i> Struttura e Fibonacci</h3>
                    <p>Le onde hanno una struttura <span class="concept">frattale</span>. I rapporti di Fibonacci (0.382, 0.618, 1.618, ecc.) sono usati per determinare potenziali livelli di ritracciamento ed estensione delle onde.</p>
                </div>
                 <h4>Complessità</h4>
                 <p>Include l'analisi di diversi tipi di correzioni (<span class="concept">zig-zag, flat, triangolo</span>), la regola dell'<span class="concept">alternanza</span> e il <span class="concept">channeling</span>. È una teoria potente ma complessa e soggettiva nell'applicazione pratica.</p>
            `,
            challenges: []
        },

        // --- Capitolo 14: Cicli Temporali ---
        {
             id: 'cicli-temporali',
             title: 'I Cicli Temporali',
             icon: 'fa-sync-alt',
             content: `
                <p>L'analisi ciclica studia le regolarità temporali nei movimenti di mercato, aggiungendo la dimensione del <span class="concept">tempo</span>.</p>
                <div class="card">
                   <h3><i class="fas fa-hourglass-half"></i> Concetti Chiave</h3>
                   <p>Si analizzano: <span class="concept">Periodo</span> (durata), <span class="concept">Ampiezza</span> (altezza), <span class="concept">Fase</span> (posizione). Principi importanti: Somma, Armonia, Sincronicità, Proporzionalità. La <span class="concept">traslazione</span> a destra/sinistra fornisce indicazioni sulla forza del trend.</p>
                </div>
                <h4>Applicazioni</h4>
                <p>Si classificano cicli di diversa durata (Kondratieff, stagionali, ecc.) e si combinano con altri strumenti tecnici per migliorare il timing.</p>
             `,
             challenges: []
        },

        // --- Capitolo 15: Computer e Trading Systems ---
        {
            id: 'computer-trading-systems',
            title: 'Computer e Trading Systems',
            icon: 'fa-laptop-code',
            content: `
                 <p>L'uso dei computer permette test rigorosi (<span class="concept">backtesting</span>), sviluppo di indicatori complessi e sistemi di trading oggettivi.</p>
                 <div class="card">
                    <h3><i class="fas fa-cogs"></i> Sviluppo e Sistemi Comuni</h3>
                    <p>Vengono descritti i passi per creare un trading system e introdotti sistemi e indicatori noti come il <span class="concept">DMI/ADX</span> di Wilder e il <span class="concept">Parabolic SAR</span>.</p>
                 </div>
                 <h4>Considerazioni</h4>
                 <p>Si discute l'importanza di evitare l'<span class="concept">overfitting</span> e di combinare l'analisi quantitativa con il giudizio umano.</p>
            `,
            challenges: []
        },

        // --- Capitolo 16: Gestione Patrimoniale e Tattiche Operative ---
        {
            id: 'gestione-tattiche-link', // Manteniamo questo ID per il link interno
            title: 'Gestione Patrimoniale e Tattiche Operative',
            icon: 'fa-shield-alt',
            content: `
                <p>Questo argomento cruciale è trattato in dettaglio nella sezione dedicata alla <a href="#" class="nav-link-inline" data-content-key="gestione-rischio">Gestione del Rischio & Money Management</a>.</p>
                <p>Questa sezione copre l'integrazione tra l'analisi tecnica e le decisioni di gestione del capitale, includendo regole di money management, uso degli stop loss, rapporto rischio/rendimento, tattiche operative specifiche (rotture, S/R, ecc.) e tipi di ordini.</p>
                <div style="text-align: center; margin-top: 1.5rem;">
                     <a href="#" class="cta-button" data-content-key="gestione-rischio">Vai a Gestione Rischio & MM</a>
                 </div>
            `,
            challenges: []
        },

        // --- Capitolo 17: Intermarket Analysis ---
        {
            id: 'intermarket-analysis',
            title: 'Analisi Intermarket', // Titolo reso generico
            icon: 'fa-link',
            content: `
                <p>Studia le relazioni tra diverse classi di asset (azioni, obbligazioni, commodity, valute) per ottenere una visione d'insieme e conferme.</p>
                 <div class="card">
                    <h3><i class="fas fa-globe"></i> Correlazioni Chiave</h3>
                    <p>Si analizzano le relazioni tipiche (spesso inverse) tra Dollaro, Commodity, Obbligazioni e Azioni, pur tenendo conto che queste relazioni possono cambiare. L'analisi della <span class="concept">Forza Relativa</span> tra mercati o settori è uno strumento fondamentale.</p>
                 </div>
                 <h4>Applicazioni</h4>
                 <p>Utile per confermare segnali, identificare divergenze, comprendere il contesto macro e guidare l'asset allocation o la rotazione settoriale.</p>
            `,
            challenges: []
        },

        // --- Capitolo 18: Indicatori del Mercato Azionario ---
        {
            id: 'indicatori-mercato-azionario',
            title: 'Indicatori del Mercato Azionario',
            icon: 'fa-broadcast-tower',
            content: `
                <p>Indicatori che misurano la "salute" interna e l'ampiezza del mercato azionario.</p>
                <div class="card">
                    <h3><i class="fas fa-lungs"></i> Ampiezza (Market Breadth)</h3>
                    <p>Indicatori come la <span class="concept">Linea Advance-Decline (A/D Line)</span>, <span class="concept">Nuovi Massimi/Minimi</span>, l'<span class="concept">Oscillatore di McClellan</span> misurano la partecipazione dei singoli titoli al movimento dell'indice principale. Le divergenze sono segnali importanti.</p>
                </div>
                 <div class="card">
                    <h3><i class="fas fa-thermometer-half"></i> Volume e Sentiment</h3>
                    <p>Si analizzano il volume rialzista/ribassista e indicatori come l'<span class="concept">Indice di Arms (TRIN)</span>. Vengono introdotti anche grafici che incorporano il volume come <span class="concept">Equivolume</span>.</p>
                 </div>
            `,
            challenges: []
        },

        // --- Capitolo 19: Checklist ---
         {
            id: 'checklist-finale',
            title: 'Checklist Operativa', // Titolo reso più pratico
            icon: 'fa-check-square',
            content: `
                <p>Un riassunto pratico dei punti da considerare prima di prendere decisioni operative, integrando analisi, gestione del rischio e consapevolezza.</p>
                <div class="card">
                    <h3><i class="fas fa-list-ul"></i> Punti Fondamentali da Verificare</h3>
                    <p>La checklist dovrebbe coprire: analisi multi-timeframe del trend, livelli chiave S/R e trendline, pattern grafici e candlestick, segnali da medie mobili e oscillatori (conferme/divergenze), volume/OI, analisi intermarket (contesto), rapporto rischio/rendimento, piano di entrata/uscita/stop loss, e stato emotivo personale.</p>
                </div>
                <h4>Coordinamento Approcci e Formazione</h4>
                <p>Si ribadisce l'utilità di integrare diversi approcci analitici (se appropriato) e l'importanza fondamentale della formazione continua e della disciplina.</p>
            `,
            challenges: []
        }
    ]
};