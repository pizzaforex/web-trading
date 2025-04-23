// js/config/content/analisiTecnica.js

export const analisiTecnicaContent = { // Nome variabile cambiato
    pageTitle: 'Analisi Tecnica dei Mercati Finanziari', // Titolo pagina cambiato
    sections: [
        // --- Capitolo 1: Filosofia ---
        {
            id: 'filosofia-at',
            title: 'Filosofia dell\'Analisi Tecnica', // Titolo reso generico
            icon: 'fa-lightbulb',
            content: `
                <p>L'analisi tecnica è lo studio del movimento del mercato, principalmente attraverso l'uso dei grafici, allo scopo di prevedere le tendenze future dei prezzi. Questo capitolo ne esplora i fondamenti logici e le differenze rispetto ad altri approcci analitici.</p>
                {/* Contenuto dettagliato per 1.1 -> 1.13 come nella risposta precedente, ma senza "(Cap. 1)" e riferimenti diretti a Murphy/Dow se non strettamente necessari per il concetto storico */}
                <div class="card">
                    <h3><i class="fas fa-landmark"></i> Fondamenti Logici</h3>
                    <p>L'analisi tecnica si basa su tre premesse fondamentali:</p>
                    <ul>
                        <li><strong>Il mercato sconta tutto:</strong> Il prezzo riflette tutte le informazioni disponibili.</li>
                        <li><strong>I prezzi si muovono dentro al trend:</strong> I movimenti tendono a persistere.</li>
                        <li><strong>La storia si ripete:</strong> I pattern grafici riflettono comportamenti umani ricorrenti.</li>
                    </ul>
                </div>
                <div class="card">
                    <h3><i class="fas fa-balance-scale-left"></i> Previsioni Tecniche vs. Fondamentali</h3>
                    <p>La tecnica studia l'effetto (il movimento dei prezzi), la fondamentale studia le cause (valore intrinseco). La tecnica si focalizza sul "cosa" e "quando".</p>
                </div>
                {/* ... Altri sottoparagrafi (1.3-1.13) strutturati similarmente ... */}
                 <h4>Adattabilità e Applicazioni</h4>
                 <p>L'analisi tecnica è flessibile e si adatta a diversi mercati (azioni, futures, forex...) e orizzonti temporali (intraday, multiday, lungo periodo), integrandosi con vari stili di trading.</p>
                 <h4>Critiche Comuni</h4>
                 <p>Vengono affrontate obiezioni come la teoria dell'autoalimentazione e la teoria del random walk, presentando le controargomentazioni degli analisti tecnici.</p>
            `,
            challenges: []
        },
        // --- Capitolo 2: Teoria di Dow ---
        {
            id: 'teoria-dow',
            title: 'La Teoria di Dow', // Titolo reso generico
            icon: 'fa-water',
            content: `
                <p>Questa teoria, sviluppata da Charles Dow, è considerata la base dell'analisi tecnica moderna e fornisce un framework per interpretare i movimenti generali del mercato.</p>
                <div class="card consistency-principles">
                    <h3><i class="fas fa-gavel"></i> Principi Fondamentali</h3>
                    <ol>
                        <li>Gli indici scontano tutto.</li>
                        <li>Il mercato ha tre trend (Primario, Secondario, Minore).</li>
                        <li>Il trend primario ha tre fasi (Accumulazione, Partecipazione, Distribuzione/Eccesso).</li>
                        <li>Gli indici si devono confermare a vicenda.</li>
                        <li>Il volume deve confermare il trend.</li>
                        <li>Un trend è in atto finché non c'è un segnale chiaro di inversione.</li>
                    </ol>
                </div>
                <h4>Altri Concetti Chiave</h4>
                <p>Si discutono l'importanza dei prezzi di chiusura, le linee laterali (range), le critiche alla teoria e la sua applicabilità storica anche ai mercati futures.</p>
            `,
            challenges: []
        },
        // --- Capitolo 3: Costruzione Grafici ---
        {
            id: 'costruzione-grafici',
            title: 'Costruzione dei Grafici', // Titolo reso generico
            icon: 'fa-chart-bar',
            content: `
                <p>La visualizzazione dei dati è cruciale. Questo capitolo illustra i tipi di grafico e le scale utilizzate.</p>
                <div class="card">
                    <h3><i class="fas fa-image"></i> Tipi di Grafici</h3>
                    <ul>
                        <li><strong>A Linee:</strong> Collega le chiusure, mostra il trend generale.</li>
                        <li><strong>A Barre (OHLC):</strong> Mostra Apertura(O), Massimo(H), Minimo(L), Chiusura(C).</li>
                        <li><strong>Candlestick:</strong> Mostra OHLC con un "corpo reale" colorato e "ombre". Offre maggiore impatto visivo sulla psicologia della sessione.</li>
                        <li><strong>Point & Figure:</strong> Ignora il tempo, mostra solo movimenti di prezzo significativi con colonne di X e O.</li>
                    </ul>
                </div>
                 <div class="card">
                     <h3><i class="fas fa-ruler-combined"></i> Scala Aritmetica vs Logaritmica</h3>
                     <ul>
                         <li><strong>Aritmetica:</strong> Uguali distanze per uguali variazioni assolute (€). Utile nel breve.</li>
                         <li><strong>Logaritmica:</strong> Uguali distanze per uguali variazioni percentuali (%). Essenziale nel lungo periodo o con grandi variazioni.</li>
                     </ul>
                 </div>
                 <h4>Altri Elementi</h4>
                 <p>Viene discussa l'importanza di visualizzare il <strong>Volume</strong> (conferma la forza del movimento) e l'<strong>Open Interest</strong> (nei mercati derivati, indica i contratti aperti).</p>
                 <p>Si introduce l'uso di grafici a timeframe aggregati (<strong>settimanali, mensili</strong>) per analizzare i trend di lungo periodo.</p>
            `,
            challenges: []
        },
        // --- Capitolo 4: Trend ---
        {
            id: 'concetti-trend',
            title: 'Concetti Fondamentali di Trend', // Titolo reso generico
            icon: 'fa-chart-line',
            content: `
               <p>Il concetto di trend è il cuore dell'analisi tecnica. Si definiscono le direzioni (rialzista, ribassista, laterale) e le classificazioni temporali (primario, secondario, minore).</p>
               <div class="card">
                    <h3><i class="fas fa-level-down-alt"></i><i class="fas fa-level-up-alt"></i> Supporti e Resistenze</h3>
                    <p><span class="concept">Supporto:</span> Livello sotto il prezzo dove la domanda tende a superare l'offerta. <span class="concept">Resistenza:</span> Livello sopra il prezzo dove l'offerta tende a superare la domanda. Spesso invertono i loro ruoli una volta violati significativamente. I numeri tondi hanno rilevanza psicologica.</p>
               </div>
               <div class="card">
                   <h3><i class="fas fa-pen-ruler"></i> Linee di Tendenza (Trendlines) e Canali</h3>
                   <p>Le <span class="concept">Trendline</span> (rialziste o ribassiste) collegano minimi o massimi e aiutano a definire il trend e potenziali aree di intervento. La loro importanza dipende da durata, tocchi e inclinazione. La rottura valida di una trendline è un segnale importante. I <span class="concept">Canali</span> si ottengono tracciando una parallela alla trendline.</p>
               </div>
                <div class="card">
                    <h3><i class="fas fa-percentage"></i> Percentuali di Ritracciamento</h3>
                    <p>Dopo un impulso, i prezzi spesso ritracciano parte del movimento precedente. Livelli comuni da monitorare sono il 50%, 1/3, 2/3, e i livelli di <span class="concept">Fibonacci</span> (38.2%, 61.8%).</p>
                </div>
                 <h4>Altri Strumenti Correlati al Trend</h4>
                 <p>Vengono introdotti concetti come le <span class="concept">Speed Lines</span>, le linee a <span class="concept">Ventaglio di Gann</span>, i <span class="concept">Reversal Days</span> (pattern giornalieri di inversione) e i <span class="concept">Price Gaps</span> (Breakaway, Runaway, Exhaustion) e la loro interpretazione.</p>
            `,
            challenges: []
        },
        // --- Capitolo 5: Formazioni di Inversione ---
        {
            id: 'formazioni-inversione',
            title: 'Principali Formazioni di Inversione', // Titolo reso generico
            icon: 'fa-exchange-alt',
            content: `
                <p>Le formazioni di inversione segnalano un probabile cambiamento nella direzione del trend principale. Richiedono l'esistenza di un trend precedente per essere valide.</p>
                <div class="card">
                    <h3><i class="fas fa-heading"></i> Testa e Spalle (Head and Shoulders)</h3>
                    <p>Una delle formazioni più note (Top per inversione rialzista, Bottom/Inverso per inversione ribassista). Caratterizzata da tre picchi (o valli), con quello centrale (testa) più pronunciato. La rottura della <span class="concept">neckline</span> (linea del collo) conferma il pattern. Il volume è cruciale per la validità (diminuisce sulla spalla destra, aumenta sulla rottura). Permette di calcolare un <span class="concept">obiettivo di prezzo</span> minimo.</p>
                </div>
                <div class="card">
                    <h3><i class="fas fa-arrows-alt-h"></i> Doppi e Tripli Massimi/Minimi</h3>
                    <p>Formazioni simili al Testa e Spalle:</p>
                    <ul>
                        <li><strong>Triplo Massimo/Minimo:</strong> Tre picchi/valli circa allo stesso livello.</li>
                        <li><strong>Doppio Massimo (Double Top - "M"):</strong> Due picchi circa allo stesso livello, separati da una valle.</li>
                        <li><strong>Doppio Minimo (Double Bottom - "W"):</strong> Due valli circa allo stesso livello, separate da un picco.</li>
                    </ul>
                    <p>Anche per queste, la rottura del livello intermedio (supporto per Top, resistenza per Bottom) conferma il pattern e permette proiezioni di prezzo.</p>
                </div>
                <h4>Altre Formazioni e Considerazioni</h4>
                <p>Vengono discusse varianti (<span class="concept">H&S composito</span>, <span class="concept">failed H&S</span>), l'importanza dei <span class="concept">filtri</span> per evitare falsi segnali, e formazioni più arrotondate (<span class="concept">Saucer Bottom</span>) o rapide (<span class="concept">Spikes/V-Reversals</span>).</p>
            `,
            challenges: []
        },
        // --- Capitolo 6: Formazioni di Continuazione ---
         {
            id: 'formazioni-continuazione',
            title: 'Formazioni di Continuazione', // Titolo reso generico
            icon: 'fa-pause-circle',
            content: `
                <p>Questi pattern indicano una pausa nel trend esistente, suggerendo che il movimento principale riprenderà nella stessa direzione.</p>
                <div class="card">
                    <h3><i class="fas fa-caret-right"></i><i class="fas fa-caret-left"></i> Triangoli</h3>
                    <p>Linee di tendenza convergenti:</p>
                    <ul>
                        <li><strong>Simmetrico:</strong> Implicazioni neutre fino alla rottura.</li>
                        <li><strong>Ascendente:</strong> Resistenza piatta, supporto crescente. Tendenzialmente rialzista.</li>
                        <li><strong>Discendente:</strong> Supporto piatto, resistenza decrescente. Tendenzialmente ribassista.</li>
                    </ul>
                    <p>Il volume tende a diminuire durante la formazione e ad aumentare sulla rottura. Hanno un <span class="concept">obiettivo di prezzo</span> misurabile.</p>
                </div>
                <div class="card">
                    <h3><i class="fas fa-flag"></i> Bandiere e Gagliardetti (Flags & Pennants)</h3>
                    <p>Brevi consolidamenti (rispettivamente rettangoli e piccoli triangoli) che si formano dopo un movimento rapido (<span class="concept">flagpole</span>). Segnalano una probabile continuazione del movimento precedente per una distanza simile a quella del flagpole.</p>
                </div>
                 <h4>Altre Formazioni di Continuazione</h4>
                 <p>Vengono trattate anche la <span class="concept">Broadening Formation</span> (triangolo inverso, alta volatilità), il <span class="concept">Wedge</span> (cuneo, linee convergenti inclinate nella stessa direzione, spesso con implicazioni inverse al loro orientamento), il <span class="concept">Rettangolo</span> (trading range) e il concetto di <span class="concept">Measured Move</span> (movimenti A-B = C-D).</p>
                 <p>Si ribadisce l'importanza di cercare <span class="concept">conferme</span> (es. volume) o notare <span class="concept">divergenze</span> con altri indicatori.</p>
            `,
            challenges: []
        },
        // --- Capitolo 7: Volume e Open Interest ---
        {
             id: 'volume-open-interest',
             title: 'Volume e Open Interest', // Titolo reso generico
             icon: 'fa-users',
             content: `
                 <p>Questi indicatori secondari misurano il grado di partecipazione e convinzione dietro ai movimenti di prezzo.</p>
                 <div class="card">
                     <h3><i class="fas fa-chart-area"></i> Volume</h3>
                     <p>Numero di azioni/contratti scambiati. Un <span class="concept">volume crescente</span> nella direzione del trend lo conferma, un volume decrescente lo indebolisce. Picchi di volume (<span class="concept">selling climax</span>, <span class="concept">blowoff top</span>) possono segnalare esaurimento. L'indicatore <span class="concept">OBV (On Balance Volume)</span> lo mette in relazione cumulata con il prezzo.</p>
                 </div>
                 <div class="card">
                     <h3><i class="far fa-folder-open"></i> Open Interest (Futures/Opzioni)</h3>
                     <p>Numero di contratti derivati ancora aperti. L'interpretazione classica combina prezzo, volume e OI:</p>
                     <ul>
                        <li>Prezzo Su, Volume Su, OI Su: Forte Uptrend.</li>
                        <li>Prezzo Su, Volume Giù, OI Giù: Debole Uptrend (short covering).</li>
                        <li>Prezzo Giù, Volume Su, OI Su: Forte Downtrend.</li>
                        <li>Prezzo Giù, Volume Giù, OI Giù: Debole Downtrend (liquidazione long).</li>
                     </ul>
                     <p>Analisi specifiche riguardano il <span class="concept">COT Report</span> (Commitments of Traders) e i <span class="concept">Put/Call Ratios</span> come indicatori di sentiment.</p>
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
                <p>L'analisi dei grafici settimanali e mensili è fondamentale per stabilire il contesto del trend primario, essenziale anche per chi opera nel breve termine.</p>
                 <div class="card">
                    <h3><i class="fas fa-binoculars"></i> Importanza della Prospettiva</h3>
                    <p>I grafici di lungo periodo aiutano a:</p>
                    <ul>
                        <li>Identificare il trend primario dominante.</li>
                        <li>Individuare livelli di supporto e resistenza storici molto significativi.</li>
                        <li>Mettere in prospettiva i movimenti di breve termine.</li>
                        <li>Applicare pattern e indicatori su scala più ampia.</li>
                    </ul>
                    <p>È cruciale partire da un'analisi "macro" (lungo periodo) per poi scendere nel "micro" (breve periodo).</p>
                 </div>
                 <h4>Costruzione e Considerazioni</h4>
                 <p>Si discute la costruzione di grafici di continuazione per i futures, l'uso dei contratti <span class="concept">perpetual</span>, l'impatto dell'inflazione sui prezzi storici e come utilizzare i grafici di lungo periodo per identificare pattern (es. H&S, triangoli) che richiedono mesi o anni per formarsi.</p>
            `,
            challenges: []
        },
        // --- Capitolo 9: Medie Mobili ---
        {
            id: 'medie-mobili',
            title: 'Medie Mobili',
            icon: 'fa-wave-square',
            content: `
                <p>Le medie mobili sono tra gli indicatori tecnici più popolari e versatili, usate per smussare i dati di prezzo e identificare la direzione del trend.</p>
                 <div class="card">
                    <h3><i class="fas fa-calculator"></i> Tipi Principali</h3>
                    <ul>
                        <li><strong>Media Mobile Semplice (SMA):</strong> Media aritmetica dei prezzi di chiusura su un dato periodo (es. 50 giorni). Dà uguale peso a tutti i dati.</li>
                        <li><strong>Media Mobile Ponderata Lineare (LWMA):</strong> Dà maggior peso ai prezzi più recenti.</li>
                        <li><strong>Media Mobile Esponenziale (EMA):</strong> Dà maggior peso ai prezzi più recenti in modo esponenziale. Reagisce più velocemente della SMA ai cambiamenti di prezzo.</li>
                    </ul>
                    <p>La scelta del tipo e del periodo (es. 10, 20, 50, 200 periodi) dipende dallo stile di trading e dal mercato.</p>
                 </div>
                 <div class="card">
                     <h3><i class="fas fa-search-location"></i> Utilizzo Principale</h3>
                     <ul>
                         <li><strong>Identificazione del Trend:</strong> Prezzo sopra la media = tendenza rialzista; prezzo sotto = tendenza ribassista. Inclinazione della media.</li>
                         <li><strong>Segnali di Crossover:</strong>
                            <ul>
                                <li><em>Prezzo/Media:</em> Il prezzo che incrocia la media mobile genera segnali (es. prezzo sopra media a 50gg = segnale long).</li>
                                <li><em>Media/Media (Doppio Incrocio):</em> L'incrocio tra una media veloce (es. 10gg) e una lenta (es. 50gg) genera segnali (es. media veloce sopra lenta = segnale long, "golden cross"; viceversa = segnale short, "death cross").</li>
                                <li><em>Triplo Incrocio:</em> Usa tre medie (es. 4-9-18 giorni).</li>
                             </ul>
                         </li>
                         <li><strong>Supporto e Resistenza Dinamici:</strong> Le medie mobili stesse possono agire come livelli di supporto (in uptrend) o resistenza (in downtrend) dinamici.</li>
                     </ul>
                 </div>
                 <h4>Altri Concetti</h4>
                 <p>Vengono introdotti anche le <span class="concept">Bande di Bollinger</span> (basate sulla deviazione standard attorno a una SMA), le <span class="concept">Envelopes</span> (bande percentuali attorno a una media), l'uso di medie legate ai cicli, i numeri di <span class="concept">Fibonacci</span> usati come periodi e la <span class="concept">Media Mobile Adattiva</span> di Kaufman (che adatta la sua velocità alla volatilità).</p>
            `,
            challenges: []
        },
        // --- Capitolo 10: Oscillatori e Opinione Contraria ---
        {
            id: 'oscillatori-opinione-contraria',
            title: 'Oscillatori e Opinione Contraria',
            icon: 'fa-tachometer-alt',
            content: `
                 <p>Gli oscillatori sono indicatori che fluttuano sopra e sotto una linea centrale o tra livelli limite, utili per identificare condizioni di <span class="concept">ipercomprato</span> e <span class="concept">ipervenduto</span>, specialmente in mercati laterali, e per individuare <span class="concept">divergenze</span>.</p>
                 <div class="card">
                    <h3><i class="fas fa-signal"></i> Uso Generale e Momentum</h3>
                    <ul>
                        <li><strong>Identificazione Estremi:</strong> Segnalano quando un movimento potrebbe essere eccessivo e pronto per una correzione o inversione.</li>
                        <li><strong>Divergenze:</strong> Una divergenza tra l'oscillatore e il prezzo (es. prezzo fa nuovo massimo, oscillatore no) può anticipare un'inversione.</li>
                        <li><strong>Incroci Linea Zero/Centrale:</strong> Possono fornire segnali di momentum.</li>
                        <li><strong>Momentum (10.2):</strong> Misura la velocità del cambiamento dei prezzi (es. prezzo attuale - prezzo N periodi fa).</li>
                        <li><strong>Rate of Change (ROC) (10.3):</strong> Simile al Momentum, ma espresso come rapporto o percentuale.</li>
                    </ul>
                 </div>
                 <div class="card">
                     <h3><i class="fas fa-toolbox"></i> Oscillatori Comuni</h3>
                     <ul>
                        <li><strong>Commodity Channel Index (CCI - 10.4):</strong> Misura la deviazione del prezzo dalla sua media statistica. Valori sopra +100 (ipercomprato) o sotto -100 (ipervenduto).</li>
                        <li><strong>Relative Strength Index (RSI - 10.5):</strong> Misura la velocità e il cambiamento dei movimenti di prezzo su una scala da 0 a 100. Livelli chiave: 70 (ipercomprato) e 30 (ipervenduto). Utile per divergenze e "failure swings".</li>
                        <li><strong>Stocastico (K%D - 10.7):</strong> Confronta il prezzo di chiusura rispetto al range massimo-minimo su un dato periodo. Fluttua tra 0 e 100 (livelli chiave 80/20). Utilizza due linee (%K e %D) i cui incroci generano segnali.</li>
                        <li><strong>Larry Williams %R (10.8):</strong> Simile allo Stocastico ma con scala invertita (0-100, 20/80).</li>
                        <li><strong>Moving Average Convergence/Divergence (MACD - 10.11):</strong> Indicatore di momentum basato sulla differenza tra due medie mobili esponenziali (linea MACD) e una sua media mobile esponenziale (linea segnale). L'incrocio delle due linee e l'incrocio della linea zero generano segnali. L'<span class="concept">Istogramma MACD (10.12)</span> mostra graficamente la differenza tra MACD e linea segnale.</li>
                    </ul>
                 </div>
                  <div class="card">
                    <h3><i class="fas fa-users-slash"></i> Opinione Contraria (Contrary Opinion)</h3>
                    <p>Questo approccio cerca di andare contro il sentiment prevalente del mercato, assumendo che la "massa" sia spesso posizionata erroneamente ai punti di svolta.</p>
                     <ul>
                        <li><strong>Principio (10.14):</strong> Quando il sentiment è eccessivamente rialzista (troppi compratori), il mercato potrebbe essere vicino a un top; viceversa per un sentiment eccessivamente ribassista.</li>
                        <li><strong>Indicatori di Sentiment:</strong> Si usano dati come il <span class="concept">Bullish Consensus</span> (10.14.1), i rapporti <span class="concept">Put/Call</span> (Cap. 7), i dati del <span class="concept">COT Report</span> (Cap. 7), i sondaggi <span class="concept">Investors Intelligence</span> (10.16).</li>
                        <li><strong>Utilizzo:</strong> Spesso usati come conferma per segnali tecnici o per identificare potenziali inversioni contro-trend.</li>
                     </ul>
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
                <p>Il Point & Figure (P&F) è un metodo di graficazione unico che si concentra esclusivamente sui movimenti di prezzo significativi, ignorando il tempo e il volume (nella sua forma classica).</p>
                <div class="card">
                    <h3><i class="fas fa-draw-polygon"></i> Costruzione</h3>
                    <ul>
                        <li>Si usano colonne di <strong>X</strong> (prezzi in salita) e <strong>O</strong> (prezzi in discesa).</li>
                        <li>Si definisce una <span class="concept">"box size"</span> (l'entità minima di movimento per segnare una X o O) e un <span class="concept">"reversal amount"</span> (quanti box il prezzo deve muoversi nella direzione opposta per iniziare una nuova colonna). Es: 3-box reversal.</li>
                        <li>Il tempo non è rappresentato sull'asse orizzontale; una colonna può durare un giorno o mesi.</li>
                    </ul>
                </div>
                 <div class="card">
                    <h3><i class="fas fa-signal"></i> Interpretazione</h3>
                    <ul>
                        <li><strong>Segnali Base:</strong> Il segnale più semplice è la rottura di un massimo precedente (segnale di acquisto) o di un minimo precedente (segnale di vendita) nella colonna corrente.</li>
                        <li><strong>Pattern P&F:</strong> Esistono pattern specifici (doppi massimi/minimi, triangoli, ecc.) con regole di interpretazione proprie.</li>
                        <li><strong>Trendline P&F:</strong> Si possono tracciare trendline a 45 gradi.</li>
                        <li><strong>Obiettivi di Prezzo (Conteggio Orizzontale - 11.4):</strong> Si può stimare un obiettivo di prezzo misurando l'ampiezza orizzontale di una base di congestione e proiettandola verticalmente dalla rottura.</li>
                        <li><strong>Vantaggi:</strong> Filtra il rumore, identifica chiaramente supporti/resistenze, fornisce obiettivi di prezzo, utile per trend di lungo periodo.</li>
                        <li><strong>Svantaggi:</strong> Meno intuitivo dei grafici a barre/candele, non mostra la volatilità intra-periodo, i segnali possono essere tardivi.</li>
                    </ul>
                </div>
                <h4>Altre Considerazioni</h4>
                <p>Si discute la storia del P&F, il confronto con i grafici a barre, la costruzione intraday, le configurazioni grafiche specifiche (11.7.1), come disegnare trendline (11.8), le tecniche di misurazione (11.9) e le tattiche di gestione (11.10).</p>
            `,
            challenges: []
        },
        // --- Capitolo 12: Candlesticks Giapponesi ---
        {
            id: 'candlestick-giapponesi',
            title: 'Candlesticks Giapponesi',
            icon: 'fa-candlestick-chart',
            content: `
                <p>I grafici a candele giapponesi offrono una rappresentazione visiva potente della battaglia tra compratori e venditori all'interno di ogni periodo di tempo.</p>
                <div class="card">
                    <h3><i class="fas fa-book-open"></i> Lettura della Singola Candela (12.1, 12.2)</h3>
                    <p>Ogni candela mostra: Apertura, Massimo, Minimo, Chiusura.</p>
                    <ul>
                        <li><strong>Corpo Reale (Real Body):</strong> Distanza tra apertura e chiusura. Colorato (es. bianco/verde se chiusura > apertura; nero/rosso se chiusura < apertura). Indica la forza dominante.</li>
                        <li><strong>Ombre (Shadows):</strong> Linee sopra/sotto il corpo. Indicano il range totale del periodo.</li>
                        <li><strong>Candele Base:</strong> Long days, Short days, Spinning tops, Doji (indecisione).</li>
                    </ul>
                </div>
                <div class="card">
                    <h3><i class="fas fa-project-diagram"></i> Pattern Candlestick (12.3 - 12.5)</h3>
                    <p>Il vero potere delle candele risiede nell'analisi dei pattern formati da una o più candele consecutive. Segnalano potenziali inversioni o continuazioni.</p>
                    <ul>
                        <li><strong>Formazioni di Inversione:</strong> Pattern che suggeriscono la fine del trend attuale (es. Hammer, Engulfing, Dark Cloud Cover, Morning/Evening Star, Doji in posizione chiave...).</li>
                        <li><strong>Formazioni di Continuazione:</strong> Pattern che suggeriscono una pausa prima della ripresa del trend (es. Rising/Falling Three Methods, Windows/Gaps...).</li>
                    </ul>
                    <p><em>(Una lista dettagliata dei pattern più comuni è spesso inclusa in appendici o sezioni dedicate).</em></p>
                </div>
                 <h4>Utilizzo e Filtri (12.6, 12.7)</h4>
                 <p>L'identificazione automatica tramite software è utile, ma la comprensione del <span class="concept">contesto</span> è fondamentale. I segnali candlestick sono più affidabili se:</p>
                 <ul>
                    <li>Confermati da altri segnali tecnici (supporti/resistenze, trendline, volume).</li>
                    <li>Si verificano in zone di ipercomprato/ipervenduto indicate da oscillatori.</li>
                    <li>Allineati con il trend di timeframe superiore.</li>
                 </ul>
                 <h4>Conclusioni (12.8)</h4>
                 <p>I candlestick sono uno strumento essenziale per interpretare la psicologia del mercato e ottenere segnali di trading precoci.</p>
            `,
            challenges: [] // Quiz: Riconosci questo pattern candlestick
        },
        // --- Capitolo 13: Teoria delle Onde di Elliott ---
        {
            id: 'onde-elliott',
            title: 'Teoria delle Onde di Elliott',
            icon: 'fa-water', // Onde
            content: `
                <p>Sviluppata da Ralph Nelson Elliott, questa teoria postula che i movimenti del mercato seguano pattern ondulatori specifici e ripetitivi, basati sulla psicologia collettiva degli investitori e legati alla sequenza di Fibonacci.</p>
                <div class="card">
                    <h3><i class="fas fa-infinity"></i> Principi Fondamentali (13.2)</h3>
                    <ul>
                        <li><strong>Pattern 5-3:</strong> Il ciclo di base consiste in 5 onde nella direzione del trend principale (<span class="concept">onde impulsive</span> 1, 2, 3, 4, 5) seguite da 3 onde correttive (<span class="concept">onde correttive</span> a, b, c).</li>
                        <li><strong>Natura Frattale:</strong> Ogni onda è composta da sotto-onde che seguono lo stesso pattern 5-3 a scale inferiori (e fa parte di un pattern 5-3 a scale superiori).</li>
                        <li><strong>Onde Impulsive (1, 3, 5):</strong> Si muovono nella direzione del trend principale. L'onda 3 è spesso la più lunga e forte e non può essere la più corta.</li>
                        <li><strong>Onde Correttive (2, 4, a, b, c):</strong> Si muovono contro il trend principale. L'onda 2 corregge l'onda 1, l'onda 4 corregge l'onda 3. Le onde a, b, c correggono l'intero ciclo impulsivo 1-5.</li>
                    </ul>
                </div>
                 <div class="card">
                    <h3><i class="fas fa-ruler-horizontal"></i> Rapporti di Fibonacci (13.8, 13.9)</h3>
                    <p>I numeri della sequenza di Fibonacci (1, 1, 2, 3, 5, 8, 13, 21, 34, 55...) e i rapporti derivati (0.382, 0.500, 0.618, 1.000, 1.618, 2.618...) sono cruciali per determinare potenziali target di prezzo e livelli di ritracciamento per le onde.</p>
                    <ul>
                        <li><strong>Ritracciamenti:</strong> L'onda 2 ritraccia spesso il 50% o 61.8% dell'onda 1. L'onda 4 ritraccia spesso il 38.2% dell'onda 3.</li>
                        <li><strong>Estensioni:</strong> L'onda 3 è spesso 1.618 o 2.618 volte l'onda 1. L'onda 5 può essere uguale all'onda 1 o avere un rapporto di Fibonacci con l'onda 1 o l'onda 3.</li>
                    </ul>
                 </div>
                 <h4>Altri Aspetti (13.3 - 13.7, 13.10 - 13.13)</h4>
                 <p>Vengono discusse la correlazione con la Teoria di Dow, i tipi di onde correttive (<span class="concept">zig-zag</span>, <span class="concept">flat</span>, <span class="concept">triangolo</span>, combinazioni complesse), la regola dell'<span class="concept">alternanza</span> (se l'onda 2 è semplice, l'onda 4 tende a essere complessa, e viceversa), il <span class="concept">channeling</span> (tracciare canali per contenere le onde), gli obiettivi temporali di Fibonacci e l'applicazione alle commodities.</p>
                 <h4>Conclusioni</h4>
                 <p>La Teoria di Elliott è complessa e soggettiva, ma offre un potente framework per analizzare la struttura del mercato e identificare potenziali punti di svolta basati su pattern e rapporti di Fibonacci.</p>
            `,
            challenges: [] // Quiz: Identifica le onde
        },
        // --- Capitolo 14: Cicli Temporali ---
        {
             id: 'cicli-temporali',
             title: 'I Cicli Temporali',
             icon: 'fa-sync-alt',
             content: `
                <p>L'analisi ciclica aggiunge la dimensione del <span class="concept">tempo</span> all'analisi tecnica, studiando le regolarità e i pattern temporali nei movimenti di mercato.</p>
                <div class="card">
                   <h3><i class="fas fa-hourglass-half"></i> Concetti Basilari (14.1.1)</h3>
                   <p>I cicli sono fluttuazioni ricorrenti attorno a una linea di trend. Si identificano misurando la distanza temporale tra minimi (o massimi) successivi.</p>
                   <ul>
                       <li><strong>Componenti:</strong> Ampiezza (altezza), Periodo (durata), Fase (posizione temporale rispetto ad altri cicli).</li>
                       <li><strong>Principi (14.1.2):</strong> Somma (i movimenti di mercato sono la somma di più cicli), Armonia (i cicli tendono ad avere relazioni armoniche tra loro), Sincronicità (cicli diversi tendono a fare minimi contemporaneamente), Proporzionalità (relazione tra periodo e ampiezza).</li>
                   </ul>
                </div>
                <h4>Classificazione e Tipi (14.3, 14.8)</h4>
                <p>I cicli vengono classificati in base alla durata (es. lungo termine come Kondratieff, stagionali, intermedi, brevi). Si discute l'importanza dei cicli dominanti e l'influenza dei cicli stagionali (es. settore agricolo, ciclo presidenziale).</p>
                <h4>Combinazione e Applicazione (14.4, 14.12)</h4>
                <p>Si analizza come combinare cicli di diversa durata e come integrare l'analisi ciclica con altri strumenti tecnici (es. trendline, medie mobili, oscillatori) per migliorare il timing. Vengono menzionati strumenti come l'<span class="concept">Ehrlich Cycle Finder</span> e la <span class="concept">Maximum Entropy Spectral Analysis (MESA)</span>.</p>
                <h4>Traslazione (14.6)</h4>
                <p>Il concetto di <span class="concept">traslazione a destra</span> (il massimo del ciclo si verifica dopo il punto medio) suggerisce forza del trend sottostante, mentre la <span class="concept">traslazione a sinistra</span> (massimo prima del punto medio) suggerisce debolezza.</p>
             `,
             challenges: []
        },
        // --- Capitolo 15: Computer e Trading Systems ---
        {
            id: 'computer-trading-systems',
            title: 'Computer e Trading Systems',
            icon: 'fa-laptop-code',
            content: `
                 <p>L'avvento dei computer ha rivoluzionato l'analisi tecnica, permettendo test rigorosi, sviluppo di indicatori complessi e creazione di sistemi di trading automatici o semi-automatici.</p>
                 <div class="card">
                    <h3><i class="fas fa-cogs"></i> Vantaggi del Computer</h3>
                    <ul>
                        <li><strong>Velocità ed Efficienza:</strong> Calcolo rapido di indicatori, test di strategie su dati storici (<span class="concept">backtesting</span>).</li>
                        <li><strong>Disciplina:</strong> Aiuta a superare l'emotività generando segnali oggettivi basati su regole predefinite.</li>
                        <li><strong>Gestione Dati:</strong> Accesso e gestione di grandi quantità di dati storici e in tempo reale.</li>
                    </ul>
                 </div>
                  <h4>Sviluppo di Trading System (Appendice C)</h4>
                  <p>Vengono delineati i passaggi per costruire un sistema di trading:</p>
                  <ol>
                    <li>Iniziare con un concetto (un'idea).</li>
                    <li>Trasformare l'idea in regole oggettive e testabili.</li>
                    <li>Visualizzare sui grafici.</li>
                    <li>Testare il programma su un computer (<span class="concept">backtesting</span>).</li>
                    <li>Valutare i risultati (performance metrics).</li>
                  </ol>
                  <p>Si discute l'importanza dell'ottimizzazione e i rischi dell'<span class="concept">overfitting</span> (curve fitting).</p>
                 <h4>Indicatori e Sistemi Comuni (15.1.2, 15.5)</h4>
                 <p>Vengono introdotti sistemi e indicatori spesso implementati al computer:</p>
                 <ul>
                    <li><strong>Sistemi Direzionali di Welles Wilder (DMI, ADX):</strong> L'ADX (Average Directional Index) misura la forza del trend (non la direzione), mentre +DI e -DI indicano la pressione rialzista o ribassista.</li>
                    <li><strong>Parabolic SAR (Stop And Reverse):</strong> Sistema trend-following che fornisce punti di stop loss dinamici (trailing stop) che si avvicinano al prezzo man mano che il trend progredisce.</li>
                 </ul>
                 <h4>Considerazioni Finali (15.6 - 15.9)</h4>
                 <p>Si discute l'importanza di combinare sistemi meccanici con giudizio umano, l'uso di <span class="concept">alerts</span>, la necessità di testare i sistemi e le sfide del trading automatico.</p>
            `,
            challenges: []
        },
        // --- Capitolo 16: Gestione Patrimoniale e Tattiche Operative ---
        // Questa sezione è già stata creata nella pagina 'gestione-rischio'.
        // Potremmo mettere qui un riassunto e un link a quella pagina, oppure duplicare
        // parte del contenuto se riteniamo che l'utente debba vederlo in questo contesto.
        // Per ora, metto un riassunto con link (ipotetico, da implementare se necessario).
        {
            id: 'gestione-tattiche-link',
            title: 'Gestione Patrimoniale e Tattiche Operative',
            icon: 'fa-shield-alt',
            content: `
                <p>Questo argomento cruciale è trattato in dettaglio nella sezione dedicata alla <a href="#" class="nav-link-inline" data-content-key="gestione-rischio">Gestione del Rischio & Money Management</a>.</p>
                <p>In sintesi, questo capitolo copre:</p>
                <ul>
                    <li>I tre elementi del successo (analisi, timing, gestione patrimoniale).</li>
                    <li>Regole fondamentali di Money Management (rischio per trade, diversificazione).</li>
                    <li>L'importanza e l'uso corretto degli Stop Loss.</li>
                    <li>La gestione del rapporto Rischio/Rendimento.</li>
                    <li>Come affrontare periodi di vincite e perdite.</li>
                    <li>Tattiche operative specifiche (rotture, S/R, ritracciamenti, gap).</li>
                    <li>Tipi di ordini di mercato.</li>
                    <li>Applicazioni intraday e uso dei Pivot Point.</li>
                    <li>Un riassunto delle regole chiave del trading disciplinato.</li>
                </ul>
                <div style="text-align: center; margin-top: 1.5rem;">
                     <a href="#" class="cta-button" data-content-key="gestione-rischio">Vai a Gestione Rischio & MM</a>
                 </div>
            `,
            challenges: []
        },
        // --- Capitolo 17: Intermarket Analysis ---
        {
            id: 'intermarket-analysis',
            title: 'Il Legame tra Mercati (Intermarket Analysis)',
            icon: 'fa-link',
            content: `
                <p>L'analisi intermarket studia le relazioni e le correlazioni tra diverse classi di asset (azioni, obbligazioni, commodity, valute) per ottenere una visione più ampia e confermare le analisi sul singolo mercato.</p>
                 <div class="card">
                    <h3><i class="fas fa-globe"></i> Principi Base</h3>
                    <p>I mercati globali sono interconnessi. Eventi o trend in un mercato spesso influenzano gli altri in modi prevedibili (anche se non sempre costanti).</p>
                    <ul>
                        <li><strong>Relazioni Tipiche (ma non fisse):</strong>
                            <ul>
                                <li>Dollaro USA e Commodity: Spesso relazione inversa (Dollaro forte = Commodity deboli, e viceversa).</li>
                                <li>Obbligazioni (T-Bond) e Commodity: Spesso relazione inversa (Bond in rialzo = attesa di minore inflazione = Commodity deboli).</li>
                                <li>Obbligazioni (T-Bond) e Azioni: Spesso relazione diretta (Bond in rialzo = tassi in calo = favorevole per le azioni), ma può invertirsi in certi contesti.</li>
                                <li>Dollaro USA e Azioni/Obbligazioni USA: Relazione complessa e variabile.</li>
                            </ul>
                        </li>
                        <li><strong>Analisi della Forza Relativa:</strong> Confrontare l'andamento di un mercato rispetto a un altro (es. Ratio Oro/Argento, Ratio Azioni/Obbligazioni) per identificare quale sta sovraperformando.</li>
                    </ul>
                 </div>
                 <h4>Applicazioni</h4>
                 <p>L'analisi intermarket è utile per:</p>
                 <ul>
                    <li>Confermare i segnali su un singolo mercato.</li>
                    <li>Identificare divergenze tra mercati che possono anticipare inversioni.</li>
                    <li>Comprendere il contesto macroeconomico generale.</li>
                    <li>Effettuare rotazioni settoriali o tra asset class.</li>
                    <li>Analizzare scenari specifici (es. inflazione, deflazione).</li>
                 </ul>
                 <p>Vengono discussi l'uso del <span class="concept">Program Trading</span>, le correlazioni specifiche, l'analisi della forza relativa tra settori e l'approccio ai mercati di tipo "estremo". Si accenna anche alle reti neurali applicate all'intermarket.</p>
            `,
            challenges: []
        },
        // --- Capitolo 18: Indicatori del Mercato Azionario ---
        {
            id: 'indicatori-mercato-azionario',
            title: 'Gli Indicatori del Mercato Azionario',
            icon: 'fa-broadcast-tower', // Segnali di mercato
            content: `
                <p>Oltre all'analisi del singolo titolo, esistono indicatori che misurano la "salute" generale del mercato azionario, l'ampiezza della partecipazione e il sentiment degli investitori.</p>
                <div class="card">
                    <h3><i class="fas fa-lungs"></i> Ampiezza del Mercato (Market Breadth)</h3>
                    <p>Misurano quanti titoli partecipano al movimento del mercato.</p>
                    <ul>
                        <li><strong>Linea Advance-Decline (A/D Line):</strong> Differenza cumulativa tra titoli in rialzo e titoli in ribasso. Una divergenza tra la linea A/D e l'indice principale (es. indice sale, linea A/D scende) è un segnale di debolezza interna.</li>
                        <li><strong>Nuovi Massimi - Nuovi Minimi (New Highs-New Lows Index):</strong> Differenza tra titoli che segnano nuovi massimi annuali e quelli che segnano nuovi minimi. Un numero crescente di nuovi minimi anche con l'indice stabile o in rialzo è un segnale negativo.</li>
                        <li><strong>Oscillatore di McClellan & Indice Sommatorio:</strong> Indicatori più complessi basati sull'ampiezza, usati per segnali di ipercomprato/ipervenduto del mercato.</li>
                    </ul>
                </div>
                 <div class="card">
                    <h3><i class="fas fa-thermometer-half"></i> Indicatori di Volume</h3>
                    <ul>
                        <li><strong>Volume Rialzista vs Ribassista:</strong> Confronto del volume sui titoli in rialzo rispetto a quelli in ribasso.</li>
                        <li><strong>Indice di Arms (TRIN):</strong> Rapporto tra il rapporto Advance/Decline e il rapporto Volume Up/Volume Down. Valori alti indicano panic selling (potenziale bottom), valori bassi indicano euforia (potenziale top).</li>
                        <li><strong>Volume "Open":</strong> Analisi del volume all'apertura.</li>
                        <li><strong>Grafici Equivolume & CandlePower:</strong> Metodi grafici che incorporano il volume nella rappresentazione del prezzo.</li>
                    </ul>
                 </div>
                 <h4>Altri Indicatori</h4>
                 <p>Vengono menzionati anche l'<span class="concept">Indicatore TICK</span> (misura il momentum intraday) e il confronto tra indici diversi (es. Dow Jones vs S&P 500, Nasdaq vs Russell 2000) per valutare la forza relativa e identificare divergenze.</p>
            `,
            challenges: []
        },
        // --- Capitolo 19: Checklist ---
        {
            id: 'checklist-finale', // ID reso univoco
            title: 'Checklist Finale', // Titolo reso generico
            icon: 'fa-check-square',
            content: `
                <p>Prima di effettuare un'operazione, è utile ripercorrere una checklist mentale o scritta per assicurarsi di aver considerato tutti gli aspetti rilevanti dell'analisi tecnica, della gestione del rischio e della propria psicologia.</p>
                <div class="card">
                    <h3><i class="fas fa-list-ul"></i> Domande Chiave da Porsi</h3>
                    <ul>
                        <li>Qual è il trend principale (lungo, medio, breve termine)?</li>
                        <li>Dove si trovano i livelli chiave di supporto e resistenza?</li>
                        <li>Ci sono trendline o canali significativi in gioco?</li>
                        <li>Il volume e l'open interest (se applicabile) confermano il movimento?</li>
                        <li>Sono presenti formazioni grafiche (inversione/continuazione)?</li>
                        <li>Cosa indicano le medie mobili?</li>
                        <li>Cosa segnalano gli oscillatori (ipercomprato/venduto, divergenze)?</li>
                        <li>Ci sono segnali dai pattern candlestick?</li>
                        <li>L'analisi ciclica o di Elliott fornisce indicazioni?</li>
                        <li>L'analisi intermarket conferma o smentisce il segnale?</li>
                        <li>Gli indicatori di ampiezza del mercato supportano la mia visione?</li>
                        <li>Qual è il potenziale rapporto rischio/rendimento dell'operazione?</li>
                        <li>Dove posizionerò lo stop loss iniziale?</li>
                        <li>Quanto capitale rischierò (position sizing)?</li>
                        <li>Sto seguendo il mio piano di trading o sto agendo emotivamente?</li>
                    </ul>
                </div>
                <h4>Coordinare Analisi Tecnica e Fondamentale</h4>
                <p>Anche se la piattaforma si concentra sulla tecnica, riconoscere come l'analisi fondamentale possa fornire contesto o conferme/smentite è utile.</p>
                <h4>Formazione Continua</h4>
                <p>Si sottolinea l'importanza della formazione continua, della pratica e dell'esperienza per affinare le proprie capacità analitiche e decisionali.</p>
                <h4>Conclusioni Generali</h4>
                <p>L'analisi tecnica è uno strumento potente ma non infallibile. Richiede disciplina, gestione del rischio e consapevolezza psicologica per essere applicata con successo.</p>
            `,
            challenges: []
        }
    ]
};