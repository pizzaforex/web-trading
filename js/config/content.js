// js/config/content.js

// --- Content Library (Store different page/topic contents here) ---
export const contentLibrary = {
    'trading-zone': {
        // ... contenuto di Trading in the Zone (invariato, come nell'ultima risposta) ...
        pageTitle: 'Trading in the Zone - Padroneggia la Mentalità del Trader',
        sections: [
            {
                id: 'introduzione',
                title: 'Introduzione: Il Dilemma del Trader',
                icon: 'fa-door-open',
                content: `... Contenuto completo sezione introduzione ...`, // Testo completo qui
                challenges: [
                    { id: 'self-assessment', title: 'Sfida Iniziale: Auto-Valutazione', description: 'Rifletti onestamente...', reward: 10, linkText: 'Inizia Valutazione' }
                ]
            },
            {
                id: 'principi',
                title: 'Principi Chiave della Mentalità Vincente',
                icon: 'fa-key',
                content: `... Contenuto completo sezione principi ...`, // Testo completo qui
                 challenges: [
                    { id: 'truth-assimilation', title: 'Sfida: Assimilazione Verità', description: 'Scegli una delle 5 Verità...', reward: 15, linkText: 'Invia Riflessione' }
                ]
            },
             {
                id: 'fasi-sviluppo',
                title: 'Le Fasi di Sviluppo del Trader',
                icon: 'fa-layer-group',
                content: `... Contenuto completo sezione fasi sviluppo ...`, // Testo completo qui
                 challenges: []
            },
            {
                id: 'framework',
                title: 'Il Framework per la Consistenza: Operare come un Casinò',
                icon: 'fa-tools',
                content: `... Contenuto completo sezione framework ...`, // Testo completo qui
                 challenges: [
                    { id: '20-trade-series', title: 'Sfida Chiave: Serie di 20 Trade', description: 'Applica l\'esercizio...', reward: 50, linkText: 'Inizia la Serie Simulata' }
                ]
            },
             {
                id: 'risorse',
                title: 'Risorse e Prossimi Passi',
                icon: 'fa-graduation-cap',
                content: `... Contenuto completo sezione risorse con challenge diario incorporata ...`, // Testo completo qui
                 challenges: [] // La challenge è parte del contenuto
            }
        ]
    },
    // === NUOVA SEZIONE: ANALISI TECNICA (da Murphy) ===
    'analisi-tecnica-murphy': {
        pageTitle: 'Analisi Tecnica dei Mercati Finanziari (J. Murphy)',
        sections: [
            {
                id: 'filosofia-at',
                title: 'Filosofia dell\'Analisi Tecnica (Cap. 1)',
                icon: 'fa-lightbulb',
                content: `
                    <p>Questo capitolo introduce i concetti fondamentali e la filosofia alla base dell'analisi tecnica, distinguendola dall'analisi fondamentale e delineando i suoi principi cardine.</p>
                    <h3>1.1 Filosofia o fondamenti logici</h3>
                    <p>Si esplorano le tre premesse essenziali su cui si basa l'analisi tecnica:</p>
                    <ul>
                        <li><strong>Il mercato sconta tutto:</strong> L'idea che qualsiasi fattore (fondamentale, politico, psicologico, ecc.) che possa influenzare il prezzo sia già riflesso nel prezzo stesso.</li>
                        <li><strong>I prezzi si muovono dentro al trend:</strong> Il concetto che i movimenti di prezzo tendono a persistere in una certa direzione per periodi prolungati.</li>
                        <li><strong>La storia si ripete:</strong> La convinzione che i pattern grafici identificati nel passato abbiano una probabilità di ripetersi in futuro, poiché riflettono comportamenti umani collettivi che tendono a essere costanti.</li>
                    </ul>
                    <h3>1.2 Le previsioni tecniche rispetto a quelle fondamentali</h3>
                    <p>Viene discussa la differenza di approccio tra analisi tecnica (studio del "cosa" - movimento dei prezzi) e analisi fondamentale (studio del "perché" - valore intrinseco), evidenziando come l'analisi tecnica si concentri sull'azione del mercato.</p>
                    <h3>1.3 L'analisi tecnica e il timing</h3>
                    <p>Si sottolinea l'importanza dell'analisi tecnica nel determinare i momenti ottimali per entrare e uscire dal mercato (<span class="concept">timing</span>), un aspetto spesso trascurato dall'analisi fondamentale pura.</p>
                    <h3>1.4 Flessibilità e adattabilità dell'analisi tecnica</h3>
                    <p>Viene evidenziata la capacità dell'analisi tecnica di adattarsi a diversi mercati (azioni, futures, forex, ecc.) e a differenti orizzonti temporali (dal trading intraday agli investimenti di lungo periodo).</p>
                    <h3>1.5 L'analisi tecnica applicata a differenti metodi di trading</h3>
                    <p>Descrive come i principi tecnici possano essere integrati in diverse strategie operative.</p>
                    <h3>1.6 L'analisi tecnica applicata a periodi di varia durata</h3>
                    <p>Approfondisce l'applicazione dell'analisi tecnica su grafici giornalieri, settimanali, mensili e intraday.</p>
                    <h3>1.7 Previsioni economiche</h3>
                    <p>Discute come l'analisi tecnica possa, indirettamente, offrire spunti sulle condizioni economiche future osservando l'andamento dei mercati.</p>
                    <h3>1.8 Analisti tecnici o graficisti?</h3>
                    <p>Chiarisce la terminologia, distinguendo tra chi utilizza i grafici come strumento principale e chi sviluppa sistemi più complessi basati su indicatori tecnici.</p>
                    <h3>1.9 Un breve paragone tra analisi tecnica azionaria e futures</h3>
                    <p>Evidenzia similitudini e differenze nell'applicazione dell'analisi tecnica ai mercati azionari e a quelli dei futures, toccando temi come la struttura dei prezzi, la durata limitata dei contratti futures, i margini e l'importanza del timing.</p>
                    <h3>1.10 Il minor uso degli indici e degli indicatori di mercato</h3>
                    <p>Spiega perché nel mercato futures, rispetto a quello azionario, si tende a dare meno peso agli indici generali e più importanza all'analisi del singolo contratto.</p>
                    <h3>1.11 Alcune critiche all'approccio tecnico</h3>
                    <p>Affronta le principali obiezioni mosse all'analisi tecnica, come la teoria del fattore di autoalimentazione (profezie che si autoavverano) e la critica basata sulla teoria del random walk.</p>
                    <h3>1.12 Teoria di random walk</h3>
                    <p>Approfondisce la teoria secondo cui i movimenti passati dei prezzi non possono essere usati per prevedere quelli futuri, in quanto casuali e imprevedibili, e come l'analisi tecnica si ponga rispetto a questa visione.</p>
                    <h3>1.13 Principi universali</h3>
                    <p>Conclude riaffermando i concetti chiave e l'universalità dell'applicazione dei principi tecnici.</p>
                `,
                challenges: []
            },
            {
                id: 'teoria-dow',
                title: 'La Teoria di Dow (Cap. 2)',
                icon: 'fa-water', // Icona che richiama le "onde" o i trend
                content: `
                    <p>Questo capitolo è dedicato alla Teoria di Dow, considerata la pietra miliare dell'analisi tecnica moderna. Sviluppata da Charles Dow, espone i principi fondamentali per interpretare l'andamento generale del mercato.</p>
                    <h3>2.1 Principi fondamentali</h3>
                    <ul>
                        <li><strong>Gli indici scontano tutto:</strong> Riafferma il principio base che tutte le informazioni note sono riflesse nei prezzi degli indici di mercato (originariamente Dow Jones Industrial e Transportation).</li>
                        <li><strong>Il mercato ha tre trend:</strong> Descrive i tre tipi di trend secondo Dow: primario (lungo termine, da mesi ad anni), secondario (medio termine, da settimane a mesi, rappresenta correzioni del primario) e minore (breve termine, giorni o poche settimane, fluttuazioni all'interno dei trend maggiori).</li>
                        <li><strong>Il trend primario ha tre fasi:</strong> Illustra le tre fasi tipiche di un trend primario rialzista (accumulazione, partecipazione pubblica, distribuzione) e ribassista (distribuzione, panico, vendita da distress).</li>
                        <li><strong>Gli indici si devono confermare a vicenda:</strong> Uno dei principi chiave: un segnale di inversione o continuazione del trend primario è valido solo se entrambi gli indici (Industrial e Transportation) generano lo stesso segnale.</li>
                        <li><strong>Il volume deve confermare il trend:</strong> Il volume dovrebbe espandersi nella direzione del trend primario (aumentare nei rally rialzisti, aumentare nelle discese ribassiste) per confermarne la forza.</li>
                        <li><strong>Un trend è in atto fino a che non esiste un segnale definitivo di inversione di tendenza:</strong> Sottolinea la natura persistente dei trend e la necessità di segnali chiari per determinarne la fine.</li>
                    </ul>
                    <h3>2.2 Prezzi di chiusura e linee laterali</h3>
                    <p>Discute l'importanza data da Dow ai prezzi di chiusura e il concetto di linee laterali (trading range o fasi di consolidamento) come aree di accumulazione o distribuzione.</p>
                    <h3>2.3 Alcune critiche alla teoria di Dow</h3>
                    <p>Esamina le limitazioni e le critiche mosse alla teoria nel corso degli anni (es. segnali tardivi, non applicabilità al trading di breve).</p>
                    <h3>2.4 Le azioni come indicatori economici</h3>
                    <p>Spiega come Dow considerasse l'andamento del mercato azionario un barometro dell'economia.</p>
                    <h3>2.5 La teoria di Dow applicata al trading sui futures</h3>
                    <p>Analizza come i principi di Dow possano essere adattati e applicati anche al mercato dei futures, pur con le dovute differenze.</p>
                    <h3>2.6 Conclusioni</h3>
                    <p>Riassume l'importanza storica e pratica della Teoria di Dow come fondamento dell'analisi tecnica.</p>
                `,
                challenges: []
            },
            {
                id: 'costruzione-grafici',
                title: 'Come si costruisce un grafico (Cap. 3)',
                icon: 'fa-chart-bar',
                content: `
                    <p>Questo capitolo tratta gli aspetti pratici della costruzione e dell'interpretazione dei diversi tipi di grafici utilizzati nell'analisi tecnica.</p>
                    <h3>3.1 Tipi di grafici disponibili</h3>
                    <p>Presenta i formati grafici più comuni: grafici a linee, grafici a barre, grafici point & figure (introdotti brevemente) e grafici candlestick (introdotti brevemente, approfonditi nel Cap. 12).</p>
                    <h3>3.2 Grafici candlestick</h3>
                    <p>Introduce brevemente l'origine e la struttura dei grafici a candele giapponesi, evidenziandone la ricchezza informativa rispetto ai grafici a barre.</p>
                    <h3>3.3 Confronto tra scala aritmetica e logaritmica</h3>
                    <p>Spiega la differenza tra i due tipi di scale verticali (prezzo) e quando è preferibile utilizzare l'una o l'altra (la scala logaritmica è utile per visualizzare movimenti percentuali su lunghi periodi o grandi variazioni di prezzo).</p>
                    <h3>3.4 Costruzione del grafico a barre giornaliero</h3>
                    <p>Descrive in dettaglio come si costruisce un grafico a barre giornaliero, rappresentando apertura (opzionale), massimo, minimo e chiusura.</p>
                    <h3>3.5 Volume</h3>
                    <p>Illustra come rappresentare il volume degli scambi, solitamente tramite barre verticali alla base del grafico dei prezzi, e ne sottolinea l'importanza come indicatore di conferma.</p>
                    <h3>3.6 L'open interest dei futures</h3>
                    <p>Spiega cos'è l'open interest (numero totale di contratti futures aperti) e come viene rappresentato e interpretato (solitamente come una linea alla base del grafico, insieme al volume), soprattutto nel mercato dei futures.</p>
                    <h3>3.7 Grafici a barre settimanali e mensili</h3>
                    <p>Descrive la costruzione e l'utilità dei grafici basati su aggregazioni temporali più ampie (settimanali e mensili) per analizzare i trend di lungo periodo.</p>
                    <h3>3.8 Conclusioni</h3>
                    <p>Riassume i concetti chiave relativi alla costruzione e all'interpretazione dei grafici.</p>
                `,
                challenges: []
            },
            {
                id: 'concetti-trend',
                title: 'Concetti Fondamentali di Trend (Cap. 4)',
                icon: 'fa-chart-line',
                content: `
                    <p>Il concetto di trend è centrale nell'analisi tecnica. Questo capitolo approfondisce la definizione, l'identificazione e l'utilizzo dei trend e degli strumenti correlati come supporti, resistenze e trendline.</p>
                    <h3>4.1 Il trend ha tre direzioni</h3>
                    <p>Definisce le tre possibili direzioni del mercato: trend rialzista (uptrend), trend ribassista (downtrend) e movimento laterale (sideways o trendless).</p>
                    <h3>4.2 Il trend ha tre classificazioni</h3>
                    <p>Riprende la classificazione di Dow basata sulla durata: trend primario, secondario e minore.</p>
                    <h3>4.3 Supporti e resistenze</h3>
                    <p>Introduce i concetti fondamentali di supporto (livello di prezzo dove l'interesse d'acquisto è sufficientemente forte da arrestare o invertire un calo) e resistenza (livello di prezzo dove la pressione di vendita è sufficientemente forte da arrestare o invertire un rialzo).</p>
                    <ul>
                        <li><strong>4.3.1 Come i livelli di supporto e di resistenza si scambiano i ruoli:</strong> Spiega il principio fondamentale secondo cui un livello di supporto violato tende a diventare una nuova resistenza, e viceversa.</li>
                        <li><strong>4.3.2 La psicologia del supporto e della resistenza:</strong> Analizza le ragioni psicologiche alla base della formazione di questi livelli (memoria del mercato, ordini pendenti).</li>
                        <li><strong>4.3.3 Supporti diventano resistenze e viceversa: livelli di penetrazione:</strong> Discute l'importanza della validità della rottura di un supporto/resistenza.</li>
                        <li><strong>4.3.4 L'importanza dei numeri tondi come supporto o resistenza:</strong> Evidenzia come i numeri psicologicamente rilevanti (es. 100, 1000) spesso agiscano da supporti o resistenze.</li>
                    </ul>
                    <h3>4.4 Linee di tendenza o trendlines</h3>
                    <p>Descrive le trendline come uno strumento semplice ma potente per identificare e seguire i trend.</p>
                    <ul>
                        <li><strong>4.4.1 Tracciare una trendline:</strong> Spiega come tracciare correttamente una trendline rialzista (collegando minimi crescenti) e ribassista (collegando massimi decrescenti).</li>
                        <li><strong>4.4.2 Le trendlines provvisorie e le definitive:</strong> Discute la necessità di aggiustare le trendline man mano che il trend si sviluppa.</li>
                        <li><strong>4.4.3 Come usare la trendline:</strong> Illustra come utilizzare le trendline per segnali di entrata/uscita e per monitorare la salute del trend.</li>
                        <li><strong>4.4.4 Come determinare l'importanza di una trendline:</strong> Spiega i fattori che conferiscono maggiore validità a una trendline (durata, numero di tocchi, inclinazione).</li>
                        <li><strong>4.4.5 La trendline dovrebbe includere tutti i movimenti di prezzo:</strong> Chiarisce se le trendline debbano contenere tutti i prezzi o possano permettere piccole perforazioni.</li>
                        <li><strong>4.4.6 Come comportarsi con le piccole perforazioni della trendline:</strong> Fornisce indicazioni su come interpretare brevi violazioni delle trendline.</li>
                        <li><strong>4.4.7 Cosa costituisce una valida rottura di una trendline?:</strong> Discute i criteri per considerare significativa la rottura di una trendline (es. penetrazione percentuale, chiusura oltre la linea, volume).</li>
                        <li><strong>4.4.8 Come le trendlines invertono i ruoli:</strong> Simile a supporti/resistenze, una trendline violata può agire come futuro supporto/resistenza.</li>
                        <li><strong>4.4.9 Implicazioni di misurazione nelle trendlines:</strong> Introduce la possibilità di derivare obiettivi di prezzo dalla rottura delle trendline.</li>
                    </ul>
                    <h3>4.5 Il principio del ventaglio</h3>
                    <p>Descrive il concetto delle "fan lines" (linee a ventaglio) come serie di trendline tracciate dopo la rottura della precedente.</p>
                    <h3>4.6 L'importanza del numero tre</h3>
                    <p>Sottolinea la rilevanza del numero tre in vari aspetti dell'analisi tecnica (es. tre fasi di Dow, spesso tre onde correttive, terza rottura di trendline).</p>
                    <h3>4.7 L'inclinazione relativa delle trendlines</h3>
                    <p>Analizza il significato della pendenza di una trendline (es. trendline troppo ripida è insostenibile).</p>
                     <ul>
                         <li><strong>4.7.1 Come si aggiustano le trendlines:</strong> Spiega come adattare le trendline quando il trend accelera o decelera.</li>
                     </ul>
                    <h3>4.8 La linea del canale</h3>
                    <p>Introduce i canali di prezzo (price channel), formati tracciando una linea parallela alla trendline principale, che possono aiutare a identificare potenziali punti di inversione o obiettivi di prezzo.</p>
                    <h3>4.9 Percentuale di ritracciamento</h3>
                    <p>Spiega il concetto secondo cui, dopo un movimento significativo, i prezzi tendono a ritracciare una parte del movimento precedente prima di riprendere il trend. Vengono discussi i livelli di ritracciamento comuni (es. 33%, 50%, 66% o i livelli di Fibonacci 38.2%, 50%, 61.8%).</p>
                    <h3>4.10 Speed resistance lines</h3>
                    <p>Descrive le "speed lines" (linee di velocità), un altro metodo basato su frazioni (es. 1/3, 2/3) per identificare potenziali aree di supporto/resistenza durante le correzioni.</p>
                    <h3>4.11 Le linee a ventaglio di Gann e Fibonacci</h3>
                    <p>Introduce brevemente l'uso di angoli (Gann) e ritracciamenti/proiezioni basate su Fibonacci per l'analisi dei trend.</p>
                    <h3>4.12 Le trendlines interne</h3>
                    <p>Discute l'uso di trendline tracciate all'interno di formazioni di prezzo più ampie.</p>
                    <h3>4.13 Reversal day</h3>
                    <p>Definisce i "reversal days" (giornate di inversione) come pattern di prezzo di un singolo giorno che possono segnalare un'imminente inversione a breve termine (es. top reversal day, bottom reversal day).</p>
                     <ul>
                         <li><strong>4.13.1 Weekly e monthly reversals:</strong> Estende il concetto di reversal day ai grafici settimanali e mensili.</li>
                     </ul>
                    <h3>4.14 Price gaps</h3>
                    <p>Spiega cosa sono i gap (vuoti di prezzo tra la chiusura di un periodo e l'apertura del successivo) e la loro importanza.</p>
                     <ul>
                         <li><strong>4.14.1 Tre tipi di gaps:</strong> Classifica i gap in breakaway gap (inizio nuovo trend), runaway/measuring gap (metà trend, usati per proiezioni) e exhaustion gap (fine trend).</li>
                         <li><strong>4.14.2 L'Island reversal:</strong> Descrive una formazione di inversione caratterizzata da un exhaustion gap seguito da un breakaway gap nella direzione opposta.</li>
                     </ul>
                    <h3>4.15 Conclusioni</h3>
                    <p>Riassume i concetti chiave relativi all'analisi dei trend, supporti, resistenze, trendline, ritracciamenti e gap.</p>
                `,
                challenges: []
            },
             {
                id: 'formazioni-inversione',
                title: 'Le Principali Formazioni di Inversione (Cap. 5)',
                icon: 'fa-exchange-alt',
                content: `
                    <p>Dopo aver introdotto i trend, questo capitolo si concentra sulle principali <span class="concept">formazioni grafiche</span> che tipicamente segnalano la fine di un trend esistente e l'inizio di uno nuovo nella direzione opposta (formazioni di inversione).</p>
                    <h3>5.1 Formazioni grafiche dei prezzi</h3>
                    <p>Introduce il concetto generale di pattern grafici come rappresentazioni visive della psicologia collettiva del mercato.</p>
                    <h3>5.2 Due tipi di formazioni: d'inversione e di continuazione</h3>
                    <p>Distingue tra le formazioni che segnalano un'inversione del trend e quelle che indicano una pausa temporanea prima della ripresa del trend esistente (trattate nel Cap. 6).</p>
                    <ul>
                        <li><strong>5.2.1 I principali requisiti comuni a tutte le formazioni d'inversione:</strong> Elenca le caratteristiche generali che devono essere presenti per considerare valida una formazione di inversione (es. esistenza di un trend precedente, segnali di rottura, volume, raggiungimento di un obiettivo di prezzo).</li>
                    </ul>
                    <h3>5.3 Formazioni d'inversione: il "testa e spalle"</h3>
                    <p>Descrive in dettaglio la formazione "testa e spalle" (Head and Shoulders), una delle più note e affidabili formazioni di inversione <span class="concept">rialzista (top)</span> e <span class="concept">ribassista (bottom)</span>.</p>
                    <ul>
                        <li><strong>5.3.1 La rottura della neckline completa la formazione:</strong> Spiega l'importanza della "neckline" (linea del collo) e come la sua rottura confermi il pattern.</li>
                        <li><strong>5.3.2 Il movimento di ritorno:</strong> Descrive il frequente "return move" o "pullback" verso la neckline dopo la rottura, che può offrire un'opportunità di entrata.</li>
                        <li><strong>5.3.3 Riassunto:</strong> Riepiloga i punti chiave della formazione H&S.</li>
                    </ul>
                    <h3>5.4 L'importanza del volume</h3>
                    <p>Sottolinea come l'analisi del volume sia cruciale per confermare la validità della formazione H&S (es. volume decrescente sulla spalla destra e sulla testa, aumento del volume sulla rottura della neckline).</p>
                    <h3>5.5 Calcolare un obiettivo di prezzo</h3>
                    <p>Illustra il metodo comune per proiettare un obiettivo di prezzo minimo dopo la rottura della neckline, basato sull'altezza della formazione (distanza tra la testa e la neckline).</p>
                     <ul>
                         <li><strong>5.5.1 Aggiustare gli obiettivi di prezzo:</strong> Discute come altri fattori (supporti/resistenze precedenti, ritracciamenti) possano influenzare l'obiettivo.</li>
                     </ul>
                    <h3>5.6 Fondo "a testa e spalle rovesciato"</h3>
                    <p>Descrive la versione speculare della formazione, il testa e spalle <span class="concept">inverso</span> o rovesciato (Inverse Head and Shoulders), che segnala un'inversione da ribassista a rialzista.</p>
                     <ul>
                         <li><strong>5.6.1 Lo sviluppo della neckline:</strong> Analizza le caratteristiche della neckline in questa formazione.</li>
                     </ul>
                    <h3>5.7 Formazioni composite head and shoulders</h3>
                    <p>Presenta varianti più complesse della formazione H&S, come quelle con teste o spalle multiple.</p>
                     <ul>
                         <li><strong>5.7.1 Tattiche:</strong> Fornisce indicazioni operative su come trattare queste formazioni.</li>
                         <li><strong>5.7.2 La formazione failed head and shoulders:</strong> Discute il caso in cui la formazione non si completa o fallisce dopo la rottura.</li>
                         <li><strong>5.7.3 L'head and shoulders come formazione di consolidamento:</strong> Analizza situazioni in cui un pattern simile a H&S può agire come continuazione anziché inversione.</li>
                     </ul>
                    <h3>5.8 Tripli massimi e minimi</h3>
                    <p>Descrive le formazioni di triplo massimo (Triple Top) e triplo minimo (Triple Bottom), simili all'H&S ma con tre picchi/valli approssimativamente allo stesso livello.</p>
                    <h3>5.9 Doppio top e doppio bottom</h3>
                    <p>Illustra le formazioni di doppio massimo (Double Top, a forma di "M") e doppio minimo (Double Bottom, a forma di "W"), anch'esse comuni segnali di inversione.</p>
                     <ul>
                         <li><strong>5.9.1 Calcolo tecnico per il doppio top:</strong> Spiega come misurare gli obiettivi di prezzo per queste formazioni.</li>
                     </ul>
                    <h3>5.10 Variazioni delle formazioni ideali</h3>
                    <p>Discute come le formazioni reali raramente siano perfette come quelle teoriche e come interpretare le variazioni.</p>
                     <ul>
                         <li><strong>5.10.1 Filtri:</strong> Introduce l'uso di filtri (di prezzo o temporali) per ridurre i falsi segnali di rottura.</li>
                         <li><strong>5.10.2 L'uso del termine double top:</strong> Chiarisce la terminologia e le potenziali ambiguità.</li>
                         <li><strong>5.10.3 L'importanza del periodo tra massimo e minimo:</strong> Analizza come la distanza temporale tra i picchi/valli influenzi l'affidabilità della formazione.</li>
                     </ul>
                    <h3>5.11 Saucers e spikes</h3>
                    <p>Descrive altre formazioni di inversione: i "saucer bottom" o "rounding bottom" (fondi arrotondati, inversioni graduali) e gli "spikes" o "V reversals" (inversioni a V, molto rapide e difficili da prevedere).</p>
                    <h3>5.12 Conclusioni</h3>
                    <p>Riassume le principali formazioni grafiche di inversione e la loro importanza nell'identificare potenziali cambi di trend.</p>
                `,
                challenges: []
            },
            // ... Continua così per gli altri capitoli principali (6-19) ...
            // Aggiungo alcuni esempi per mostrare il pattern
            {
                id: 'formazioni-continuazione',
                title: 'Formazioni di Continuazione (Cap. 6)',
                icon: 'fa-pause-circle', // Icona per pausa/continuazione
                content: `
                    <p>A differenza delle formazioni di inversione, le formazioni di continuazione rappresentano delle <span class="concept">pause temporanee</span> nel trend esistente. Indicano che il mercato sta "tirando il fiato" prima di riprendere il movimento nella direzione originale.</p>
                    <h3>6.1 I triangoli</h3>
                    <p>Introduce i triangoli come una delle più comuni formazioni di continuazione, caratterizzati da linee di tendenza convergenti.</p>
                    <ul>
                        <li><strong>Triangolo simmetrico:</strong> Linee superiore e inferiore convergenti con inclinazioni simili. Solitamente indica continuazione, ma la direzione della rottura è decisiva.</li>
                        <li><strong>Triangolo ascendente:</strong> Linea superiore orizzontale (resistenza) e linea inferiore inclinata verso l'alto (supporto). Implicazione tipicamente rialzista.</li>
                        <li><strong>Triangolo discendente:</strong> Linea inferiore orizzontale (supporto) e linea superiore inclinata verso il basso (resistenza). Implicazione tipicamente ribassista.</li>
                    </ul>
                    <h3>6.2 Il triangolo simmetrico</h3>
                    <p>Approfondisce le caratteristiche del triangolo simmetrico.</p>
                     <ul>
                         <li><strong>6.2.1 Tempo limite per la risoluzione del triangolo:</strong> Discute il timing previsto per la rottura (solitamente tra metà e tre quarti della sua lunghezza).</li>
                         <li><strong>6.2.2 L'importanza del volume:</strong> Analizza il comportamento tipico del volume (decrescente durante la formazione, crescente sulla rottura).</li>
                         <li><strong>6.2.3 Tecnica di misurazione:</strong> Spiega come proiettare un obiettivo di prezzo dopo la rottura (basato sull'altezza della base del triangolo).</li>
                     </ul>
                     <h3>6.3 Il triangolo ascendente</h3>
                     <p>Dettagli sul triangolo ascendente e le sue implicazioni rialziste.</p>
                     <ul>
                        <li><strong>6.3.1 Tecniche di misurazione:</strong> Obiettivi di prezzo per il triangolo ascendente.</li>
                        <li><strong>6.3.2 Il triangolo ascendente come bottom:</strong> Come a volte possa apparire alla fine di un downtrend, segnalando inversione.</li>
                     </ul>
                     <h3>6.4 Il triangolo discendente</h3>
                      <p>Dettagli sul triangolo discendente e le sue implicazioni ribassiste.</p>
                     <ul>
                        <li><strong>6.4.1 Il triangolo discendente come top:</strong> Come a volte possa apparire alla fine di un uptrend, segnalando inversione.</li>
                        <li><strong>6.4.2 La formazione del volume:</strong> Pattern di volume tipico.</li>
                        <li><strong>6.4.3 Il fattore tempo nei triangoli:</strong> Considerazioni temporali.</li>
                     </ul>
                    <h3>6.5 La formazione broadening</h3>
                    <p>Descrive la "broadening formation" (o triangolo inverso), caratterizzata da linee di tendenza divergenti, che indica alta volatilità e incertezza.</p>
                    <h3>6.6 Bandiere e pennants</h3>
                    <p>Illustra le "flags" (bandiere, piccoli rettangoli inclinati contro il trend) e i "pennants" (gagliardetti, piccoli triangoli simmetrici), formazioni di continuazione di breve durata che si verificano dopo movimenti rapidi e quasi verticali (<span class="concept">flagpole</span>).</p>
                     <ul>
                         <li><strong>6.6.1 Come si costruiscono le flags e i pennants:</strong> Dettagli sulla loro formazione.</li>
                         <li><strong>6.6.2 Implicazioni di calcolo:</strong> Obiettivi di prezzo (spesso proiettando la lunghezza del flagpole dalla rottura).</li>
                         <li><strong>6.6.3 Sommario:</strong> Riepilogo delle caratteristiche chiave.</li>
                     </ul>
                    <h3>6.7 La formazione wedge</h3>
                    <p>Descrive la formazione "wedge" (cuneo), simile a un triangolo ma con entrambe le linee inclinate nella stessa direzione (rialzista o ribassista). I cunei sono tipicamente formazioni di inversione se inclinati contro il trend principale, ma qui Murphy li tratta anche come potenziali continuazioni o pause.</p>
                    <ul>
                         <li><strong>6.7.1 Formazioni wedges sui massimi e sui minimi:</strong> Analisi dei cunei ascendenti (spesso ribassisti) e discendenti (spesso rialzisti).</li>
                     </ul>
                    <h3>6.8 La formazione a rettangolo</h3>
                    <p>Descrive il rettangolo (rectangle) o trading range, una pausa laterale delimitata da livelli di supporto e resistenza orizzontali. La rottura determinerà la direzione futura.</p>
                    <ul>
                         <li><strong>6.8.1 L'importanza dello studio del volume:</strong> Il volume può dare indicazioni sulla probabile direzione della rottura.</li>
                         <li><strong>6.8.2 Si possono sfruttare i movimenti all'interno di un range:</strong> Strategie di trading all'interno del rettangolo.</li>
                         <li><strong>6.8.3 Altre similitudini e differenze:</strong> Confronto con altre formazioni.</li>
                     </ul>
                     <h3>6.9 Il measured move</h3>
                     <p>Spiega il concetto di "movimento misurato", secondo cui un movimento di prezzo tende a ripetersi dopo una fase di consolidamento (es. A-B = C-D in un pattern a zig-zag).</p>
                     <h3>6.10 La formazione di continuazione a "testa e spalle"</h3>
                     <p>Discute come una formazione simile a H&S possa a volte agire come pattern di continuazione.</p>
                     <h3>6.11 Conferme e divergenze</h3>
                     <p>Introduce l'importanza di cercare conferme (o notare divergenze) da altri indicatori (come volume o oscillatori) per aumentare l'affidabilità delle formazioni grafiche.</p>
                `,
                challenges: []
            },
            {
                 id: 'volume-open-interest',
                 title: 'Volume e Open Interest (Cap. 7)',
                 icon: 'fa-users', // Rappresenta partecipazione/interesse
                 content: `
                     <p>Volume e Open Interest sono indicatori secondari cruciali, specialmente nei mercati dei futures e delle opzioni, che aiutano a valutare la <span class="concept">forza</span> e la <span class="concept">convinzione</span> dietro i movimenti dei prezzi.</p>
                     <h3>7.1 Volume e open interest come indicatori secondari</h3>
                     <p>Spiega perché volume e open interest sono considerati secondari rispetto al prezzo, ma forniscono informazioni preziose sul grado di partecipazione e pressione del mercato.</p>
                     <ul>
                         <li><strong>7.1.1 Volume:</strong> Definizione del volume (numero di azioni/contratti scambiati in un periodo) e come viene rappresentato graficamente.</li>
                         <li><strong>7.1.2 Open interest nei futures:</strong> Definizione dell'open interest (numero totale di contratti derivati ancora aperti e non chiusi o scaduti) e sua specificità per i mercati futures/opzioni.</li>
                         <li><strong>7.1.3 Regole generali per l'interpretazione del volume e dell'open interest:</strong> Principi base (es. volume/OI in aumento confermano il trend, volume/OI in diminuzione lo indeboliscono o segnalano possibile inversione).</li>
                     </ul>
                     <h3>7.2 Interpretazione del volume per tutti i mercati</h3>
                     <p>Approfondisce l'analisi del volume.</p>
                     <ul>
                         <li><strong>7.2.1 Il volume come conferma delle formazioni:</strong> Ribadisce l'importanza del volume nell'analisi dei pattern grafici (Cap. 5 e 6).</li>
                         <li><strong>7.2.2 Il volume precede i prezzi:</strong> L'idea che cambiamenti significativi nel volume possano anticipare movimenti importanti dei prezzi (es. picchi di volume su inversioni).</li>
                         <li><strong>7.2.3 L'on balance volume (OBV):</strong> Descrive l'indicatore OBV di Joe Granville, che mette in relazione prezzo e volume per misurare la pressione di acquisto/vendita cumulativa.</li>
                         <li><strong>7.2.4 Alternative all'OBV:</strong> Menziona altri indicatori basati sul volume.</li>
                         <li><strong>7.2.5 L'analisi del volume non risulta essere altrettanto utile nelle commodity futures:</strong> Discute le specificità dell'analisi del volume nei mercati futures.</li>
                     </ul>
                     <h3>7.3 Interpretazione dell'open interest nei futures</h3>
                     <p>Si concentra sull'analisi dell'open interest, specifico dei derivati.</p>
                     <ul>
                         <li><strong>Come avvengono i cambiamenti nell'open interest:</strong> Spiega le quattro possibili combinazioni tra compratori/venditori nuovi/vecchi e il loro impatto sull'OI.</li>
                         <li><strong>Interpretazione classica:</strong> Analizza come l'andamento combinato di prezzo, volume e open interest possa fornire segnali sulla forza del trend (es. prezzo su, volume su, OI su = trend forte; prezzo su, volume giù, OI giù = trend debole).</li>
                         <li><strong>Altre situazioni in cui l'open interest è importante:</strong> Discussi casi particolari come l'OI elevato vicino alla scadenza o su livelli chiave.</li>
                     </ul>
                     <h3>7.4 Riassunto dei ruoli del volume e dell'open interest</h3>
                     <p>Sintetizza i concetti principali e le regole interpretative.</p>
                     <h3>7.5 Blowoffs e selling climaxes</h3>
                     <p>Descrive i picchi di volume e/o open interest che spesso caratterizzano i top di mercato (<span class="concept">blowoffs</span>) e i bottom (<span class="concept">selling climaxes</span>).</p>
                     <h3>7.6 Rapporto sulle posizioni aperte (Commitments of Traders - COT)</h3>
                     <p>Introduce il report COT, pubblicato dalla CFTC, che mostra le posizioni aggregate dei diversi gruppi di operatori (commercials/hedgers, large speculators, small speculators) e come può essere usato per analisi di sentiment.</p>
                     <h3>7.7 Osservazione dei commercials</h3>
                     <p>Analizza il comportamento tipico degli operatori commerciali (hedgers), spesso considerati i "soldi intelligenti".</p>
                     <h3>7.8 Posizioni nette dei trader</h3>
                     <p>Spiega come calcolare e interpretare le posizioni nette (long meno short) per i diversi gruppi del COT report.</p>
                     <h3>7.9 L'open interest nelle options</h3>
                     <p>Estende l'analisi dell'open interest al mercato delle opzioni.</p>
                     <h3>7.10 Rapporti acquisto/vendita (Put/Call Ratios)</h3>
                     <p>Introduce i put/call ratio (basati su volume o open interest) come indicatori di sentiment contrarian.</p>
                     <h3>7.11 Unione del sentiment sulle options con le misure tecniche</h3>
                     <p>Suggerisce come integrare gli indicatori di sentiment derivati dalle opzioni con l'analisi tecnica tradizionale.</p>
                     <h3>7.12 Conclusioni</h3>
                     <p>Riassume l'importanza dell'analisi congiunta di prezzo, volume e open interest (dove applicabile).</p>
                 `,
                 challenges: []
             },
            // --- Aggiungere qui le sezioni per i Capitoli 8-19 seguendo lo stesso schema ---
            // --- Esempio per il Capitolo 12 (Candlestick) ---
            {
                 id: 'candlestick-giapponesi',
                 title: 'I Candlesticks Giapponesi (Cap. 12)',
                 icon: 'fa-chart-pie', // Già usato, forse fa-th-large per pattern? Usiamo fa-chart-pie per ora.
                 // Aggiornamento: fa-candlestick-chart esiste!
                 icon: 'fa-candlestick-chart',
                 content: `
                     <p>Questo capitolo approfondisce l'arte dell'analisi dei grafici a candele giapponesi, una tecnica secolare che offre una visualizzazione più ricca della psicologia del mercato rispetto ai grafici a barre occidentali.</p>
                     <h3>12.1 Come usare i candlesticks</h3>
                     <p>Spiega la costruzione di una singola candela (corpo reale, ombre superiore e inferiore) e come i colori (solitamente bianco/verde per chiusura superiore all'apertura, nero/rosso per chiusura inferiore) indichino la pressione rialzista o ribassista.</p>
                     <h3>12.2 I candlesticks di base</h3>
                     <p>Descrive le candele fondamentali:</p>
                     <ul>
                        <li>Long days vs Short days</li>
                        <li>Spinning tops</li>
                        <li>Doji (vari tipi: standard, long-legged, gravestone, dragonfly) e la loro indicazione di indecisione.</li>
                     </ul>
                     <h3>12.3 L'analisi delle formazioni</h3>
                     <p>Introduce il concetto che il significato di una candela dipende dal contesto e dalle candele precedenti, portando all'analisi di pattern composti da più candele.</p>
                     <h3>12.4 Formazioni d'inversione</h3>
                     <p>Elenca e descrive i principali pattern candlestick che segnalano una potenziale inversione del trend:</p>
                     <ul>
                         <li><strong>Pattern a 1 candela:</strong> Hammer, Hanging Man, Inverted Hammer, Shooting Star.</li>
                         <li><strong>Pattern a 2 candele:</strong> Engulfing (Bullish/Bearish), Dark Cloud Cover, Piercing Line, Harami (Bullish/Bearish), Harami Cross, Meeting Lines, Belt Hold.</li>
                         <li><strong>Pattern a 3+ candele:</strong> Morning Star, Evening Star (e le varianti Doji Star), Three White Soldiers, Three Black Crows, Abandoned Baby (Bullish/Bearish), Tri-Star (Top/Bottom), Breakaway, Three Inside Up/Down, Three Outside Up/Down, Kicking, Unique Three River Bottom, Three Stars in the South, Concealing Baby Swallow, Stick Sandwich, Identical Three Crows, Matching Low/High, Upside Gap Two Crows, Homing Pigeon, Ladder Bottom/Top, Advance Block, Two Crows.</li>
                         <li><em>(Nota: Verranno descritti in dettaglio quando fornirai il testo specifico per ciascuno)</em></li>
                     </ul>
                     <h3>12.5 Formazioni di continuazione</h3>
                     <p>Elenca e descrive i pattern candlestick che suggeriscono una continuazione del trend esistente:</p>
                     <ul>
                        <li>Windows (Gaps)</li>
                        <li>Rising/Falling Three Methods</li>
                        <li>Separating Lines</li>
                        <li>Upside/Downside Tasuki Gap</li>
                        <li>Side by Side White Lines</li>
                        <li>Three Line Strike</li>
                        <li>Upside Gap Three Methods</li>
                        <li>On Neck Line, In Neck Line</li>
                         <li><em>(Nota: Verranno descritti in dettaglio quando fornirai il testo specifico per ciascuno)</em></li>
                     </ul>
                     <h3>1.6 L'uso del computer per l'identificazione delle formazioni sui candlesticks</h3>
                     <p>Discute come il software possa aiutare a riconoscere automaticamente i pattern, ma sottolinea l'importanza della comprensione umana del contesto.</p>
                     <h3>12.7 Come filtrare le formazioni candlesticks</h3>
                     <p>Suggerisce metodi per aumentare l'affidabilità dei segnali candlestick, ad esempio combinandoli con oscillatori (come lo Stocastico) per identificare segnali in zone di ipercomprato/ipervenduto o confermando con la rottura di livelli di supporto/resistenza.</p>
                     <h3>12.8 Conclusioni</h3>
                     <p>Riassume i vantaggi dell'analisi candlestick nel fornire segnali precoci e una migliore comprensione della battaglia tra compratori e venditori.</p>
                 `,
                 challenges: []
            },
             // --- Aggiungere qui le sezioni per i Capitoli 13-19 ---
             {
                id: 'placeholder-gestione-rischio', // Temporaneo, sostituirà placeholder-2
                title: 'Gestione Patrimoniale e Tattiche Operative (Cap. 16)',
                icon: 'fa-shield-alt', // Meglio di fa-money-bill-wave? Forse
                content: `<p>Questo placeholder sostituisce temporaneamente la voce "Gestione Rischio". Contiene la struttura del capitolo 16 di Murphy, focalizzato su money management e tattiche.</p>
                          <p>Il contenuto dettagliato del Capitolo 16 verrà inserito qui, coprendo:</p>
                          <ul>
                            <li>I tre elementi del successo (previsione, timing, gestione patrimoniale)</li>
                            <li>Linee guida sulla gestione patrimoniale (risk management)</li>
                            <li>Diversificazione</li>
                            <li>Uso degli stop</li>
                            <li>Gestione del fattore rischio</li>
                            <li>Operare su varie posizioni</li>
                            <li>Cosa fare dopo periodi di successo o avversità</li>
                            <li>Tattiche operative (rotture, supporti/resistenze, ritracciamenti, gap)</li>
                            <li>Come combinare fattori tecnici e gestione patrimoniale</li>
                            <li>Tipi di ordini</li>
                            <li>Grafici giornalieri e intraday</li>
                            <li>Riassunto delle regole</li>
                            <li>Asset allocation</li>
                            <li>Fondi gestiti e mutual funds</li>
                            <li>Market profile (breve accenno, approfondito in Appendice B)</li>
                          </ul>`,
                challenges: []
             }
        ]
    },
    // Manteniamo placeholder-2 per ora, ma idealmente verrà sostituito
    // da un contenuto specifico o rimosso se il Cap. 16 copre abbastanza.
    'placeholder-2': {
         pageTitle: 'Gestione del Rischio Fondamentale',
         sections: [
             {
                id: 'intro-risk',
                title: 'Introduzione alla Gestione del Rischio (Placeholder)',
                icon: 'fa-shield-halved',
                content: `<p>Questa sezione introdurrà i concetti cruciali della gestione del rischio nel trading.</p>
                          <div class="card"><p>Questo placeholder verrà sostituito da contenuto specifico sulla gestione del rischio, potenzialmente espandendo i concetti del Capitolo 16 di Murphy o integrando altre fonti.</p></div>`,
                 challenges: []
             }
         ]
    }
};