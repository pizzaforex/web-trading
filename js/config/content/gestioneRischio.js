// js/config/content/gestioneRischio.js

export const gestioneRischioContent = {
    pageTitle: 'Gestione del Rischio e Money Management',
    sections: [
        {
            id: 'intro-gestione-rischio',
            title: 'Introduzione alla Gestione Patrimoniale (Cap. 16.1 & 16.2)',
            icon: 'fa-balance-scale-right', // Icona per bilanciamento/gestione
            content: `
                <p>Se l'analisi tecnica aiuta a decidere <em>cosa</em> e <em>quando</em> comprare o vendere, la <span class="concept">gestione patrimoniale</span> (Money Management) e la <span class="concept">gestione del rischio</span> (Risk Management) determinano <em>quanto</em> rischiare e come proteggere il capitale. Questi aspetti sono spesso la chiave di volta tra un trader perdente e uno profittevole nel lungo periodo.</p>
                <div class="card">
                    <h3><i class="fas fa-cogs"></i> 16.2 I tre elementi di un trading di successo</h3>
                    <p>Un approccio completo al trading richiede la padronanza di tre aree interconnesse:</p>
                    <ul>
                        <li><strong>Previsione di Prezzo (Analisi):</strong> Identificare la direzione probabile del mercato (trattata nella sezione Analisi Tecnica).</li>
                        <li><strong>Timing (Tattiche Operative):</strong> Stabilire i punti precisi di entrata e uscita (influenzato sia dall'analisi che dalla gestione del rischio).</li>
                        <li><strong>Gestione Patrimoniale:</strong> Controllare il rischio, determinare la size delle posizioni e preservare il capitale. Questo capitolo si concentra su quest'ultimo aspetto fondamentale.</li>
                    </ul>
                    <p>Molti trader si focalizzano eccessivamente sull'analisi, trascurando che una gestione del capitale inadeguata può vanificare anche le migliori previsioni.</p>
                </div>
            `,
            challenges: []
        },
        {
            id: 'money-management',
            title: 'Gestione Patrimoniale (Money Management) (Cap. 16.3)',
            icon: 'fa-coins',
            content: `
                <p>La gestione patrimoniale riguarda le decisioni su come allocare il capitale e quanto rischiare su ogni operazione per garantire la sopravvivenza e la crescita del conto nel tempo.</p>
                 <div class="card consistency-principles">
                    <h3><i class="fas fa-ruler-vertical"></i> 16.3.1 Alcune linee guida sulla gestione patrimoniale in generale</h3>
                    <p>Vengono presentate alcune regole empiriche comuni (da adattare alla propria situazione):</p>
                    <ul>
                        <li><strong>Regola del 50% in Titoli a Basso Rischio:</strong> Suggerisce di mantenere una parte significativa del capitale (es. 50%) in investimenti a basso rischio come i Treasury Bills, usando il restante per il trading attivo.</li>
                        <li><strong>Limite per Singolo Mercato (10-15%):</strong> Non investire più del 10-15% del capitale totale in un singolo mercato o gruppo di asset correlati.</li>
                        <li><strong>Limite per Singola Operazione (5%):</strong> Non rischiare più del 5% del capitale totale su una singola operazione. Questo è considerato da molti un limite <strong>massimo</strong>, e spesso si raccomandano percentuali inferiori (1-2%).</li>
                        <li><strong>Limite Totale in Essere (20-25%):</strong> Limitare il capitale totale esposto al rischio su tutte le posizioni aperte contemporaneamente (es. 20-25%).</li>
                    </ul>
                    <p class="notice"><strong>Nota:</strong> Queste sono linee guida generali. La percentuale di rischio ottimale per trade dipende dalla propria tolleranza al rischio, dalla strategia utilizzata (win rate, R/R medio) e dalla volatilità del mercato.</p>
                </div>
                <div class="card">
                    <h3><i class="fas fa-project-diagram"></i> 16.3.2 Diversificazione contro concentrazione</h3>
                    <p>La <span class="concept">diversificazione</span> mira a ridurre il rischio distribuendo il capitale su asset non perfettamente correlati. Tuttavia, un'eccessiva diversificazione può diluire i profitti e rendere difficile seguire tutte le posizioni.</p>
                    <p>La <span class="concept">concentrazione</span> su pochi strumenti ben compresi può portare a profitti maggiori ma aumenta il rischio specifico. Trovare il giusto equilibrio è fondamentale.</p>
                </div>
                <div class="card">
                    <h3><i class="fas fa-stop-circle"></i> 16.3.3 L'uso degli stop di protezione</h3>
                    <p>Lo <span class="concept">stop loss</span> è un ordine preimpostato per chiudere una posizione in perdita a un determinato livello di prezzo. È lo strumento fondamentale per controllare il rischio su ogni singola operazione.</p>
                    <ul>
                        <li><strong>Necessità:</strong> È essenziale per tagliare le perdite prima che diventino troppo grandi.</li>
                        <li><strong>Posizionamento:</strong> Deve essere basato sull'analisi tecnica (es. sotto un supporto, sopra una resistenza, basato sulla volatilità come l'ATR) e non solo su un importo monetario arbitrario.</li>
                        <li><strong>Psicologia:</strong> Accettare lo stop loss come costo operativo, non come un fallimento personale.</li>
                    </ul>
                </div>
            `,
            challenges: [
                 { id: 'risk-per-trade-calc', title: 'Sfida: Calcolo Rischio per Trade', description: 'Ipotizzando un capitale di 10.000€, calcola la massima perdita accettabile in euro se decidi di rischiare l\'1.5% del capitale per operazione.', reward: 5, linkText: 'Verifica Calcolo' }
            ]
        },
        {
            id: 'gestione-fattore-rischio',
            title: 'La Gestione del Fattore Rischio (Cap. 16.4 - 16.6)',
            icon: 'fa-exclamation-triangle',
            content: `
                <p>Oltre alle regole numeriche, la gestione del rischio coinvolge anche la comprensione della probabilità e la gestione delle emozioni durante le operazioni.</p>
                <div class="card">
                    <h3><i class="fas fa-balance-scale"></i> 16.4 L'utilità della gestione del fattore rischio</h3>
                    <p>La maggior parte dei trader perde denaro non per mancanza di analisi corrette, ma per una gestione inadeguata del rischio. Spesso si lasciano correre le perdite e si tagliano i profitti troppo presto.</p>
                    <p>Una gestione efficace del rischio permette di:
                        <ul>
                            <li>Sopravvivere a serie di perdite inevitabili (drawdown).</li>
                            <li>Mantenere un rapporto rischio/rendimento favorevole (potential reward > potential risk).</li>
                            <li>Operare con maggiore serenità psicologica.</li>
                        </ul>
                    </p>
                    <p>L'obiettivo è assicurarsi che i profitti medi delle operazioni vincenti siano significativamente maggiori delle perdite medie delle operazioni perdenti.</p>
                </div>
                <div class="card">
                    <h3><i class="fas fa-stream"></i> 16.5 Operare su varie posizioni: restare nel trend o fare operatività</h3>
                    <p>La gestione del rischio si applica diversamente a seconda dello stile operativo:</p>
                    <ul>
                        <li><strong>Trend Following (Lungo Periodo):</strong> Si cerca di catturare grandi movimenti di trend. La gestione del rischio si concentra sull'entrare nel trend e usare stop loss più ampi (spesso trailing stop) per non essere buttati fuori da correzioni minori.</li>
                        <li><strong>Trading di Breve Periodo:</strong> Si cerca di sfruttare movimenti più piccoli. Stop loss più stretti e obiettivi di profitto definiti sono cruciali. La gestione del rischio è più attiva.</li>
                    </ul>
                    <p>La flessibilità è importante: a volte può essere necessario combinare approcci o adattare la strategia alle condizioni di mercato.</p>
                </div>
                 <div class="card">
                    <h3><i class="fas fa-history"></i> 16.6 Cosa fare dopo un periodo di successo o di avversità</h3>
                    <p>La psicologia gioca un ruolo enorme dopo serie positive o negative:</p>
                    <ul>
                        <li><strong>Dopo il Successo (Euforia):</strong> Si può diventare troppo sicuri, aumentare eccessivamente il rischio o deviare dalla strategia. È importante mantenere la disciplina e non aumentare la size troppo rapidamente.</li>
                        <li><strong>Dopo l'Avversità (Paura/Frustrazione):</strong> Si può diventare timorosi, esitare a entrare, ridurre troppo il rischio o fare "revenge trading". È fondamentale analizzare le perdite oggettivamente, assicurarsi che la strategia sia ancora valida e, se necessario, ridurre temporaneamente la size o fare una pausa.</li>
                    </ul>
                    <p>Riconoscere questi stati emotivi e avere un piano per gestirli è parte integrante della gestione del rischio.</p>
                </div>
            `,
            challenges: []
        },
        {
            id: 'tattiche-operative',
            title: 'Tattiche Operative (Cap. 16.7 - 16.11)',
            icon: 'fa-bullseye', // Icona per mira/precisione
            content: `
                <p>Questa sezione integra la gestione del rischio con specifiche tattiche operative basate sull'analisi tecnica, concentrandosi sul timing di entrata e uscita.</p>
                <div class="card">
                    <h3><i class="fas fa-stopwatch"></i> 16.7.1 L'uso dell'analisi tecnica nel timing</h3>
                    <p>Il timing preciso è cruciale. L'analisi tecnica fornisce gli strumenti per identificare potenziali punti di ingresso e uscita basati su:</p>
                    <ul>
                        <li><strong>Tattiche sulle rotture:</strong> Entrare alla rottura confermata di livelli di resistenza, supporto o trendline. Gestire il rischio con uno stop loss posizionato oltre il punto di rottura invalidato.</li>
                        <li><strong>Uso di supporti e resistenze:</strong> Comprare vicino ai supporti e vendere vicino alle resistenze (specialmente in range laterali) o usare questi livelli per posizionare gli stop.</li>
                        <li><strong>Uso del ritracciamento percentuale:</strong> Cercare entrate durante i pullback verso livelli di ritracciamento chiave (es. 50%, 61.8%) in un trend stabilito.</li>
                        <li><strong>Uso dei gaps:</strong> Sfruttare i diversi tipi di gap per segnali di entrata o per posizionare stop (es. uno stop sotto un breakaway gap rialzista).</li>
                        <li><strong>Uso combinato di concetti tecnici:</strong> Spesso le migliori opportunità si presentano alla confluenza di più segnali tecnici (es. ritracciamento verso una trendline e un livello di supporto).</li>
                    </ul>
                </div>

                <h4>16.8 Come combinare i fattori tecnici e la gestione patrimoniale</h4>
                <p>La decisione operativa finale deve integrare l'analisi del segnale tecnico con le regole di money management. Esempio: un segnale di acquisto valido ma che richiederebbe uno stop loss troppo ampio (superiore al rischio % predefinito per trade) potrebbe dover essere scartato o ridotto in size.</p>

                <div class="card">
                    <h3><i class="fas fa-clipboard-list"></i> 16.9 Tipi di ordini operativi</h3>
                    <p>Conoscere i tipi di ordine è essenziale per implementare le tattiche:</p>
                    <ul>
                        <li><strong>Ordine al Mercato (Market Order):</strong> Esecuzione immediata al miglior prezzo disponibile. Garantisce l'esecuzione ma non il prezzo. Utile per entrate/uscite rapide, ma può subire <span class="concept">slippage</span> in mercati veloci.</li>
                        <li><strong>Ordine Limite (Limit Order):</strong> Compra/vende solo a un prezzo specificato o migliore. Non garantisce l'esecuzione se il prezzo non raggiunge il livello limite. Utile per entrare su ritracciamenti o uscire a target predefiniti.</li>
                        <li><strong>Ordine Stop (Stop Order):</strong> Diventa un ordine al mercato quando il prezzo raggiunge un livello specificato. Usato principalmente per gli <span class="concept">stop loss</span> (stop di vendita sotto il prezzo attuale per posizioni long, stop di acquisto sopra il prezzo attuale per posizioni short) ma anche per entrare su rotture (buy stop sopra la resistenza, sell stop sotto il supporto).</li>
                        <li><strong>Ordine Stop Limit:</strong> Diventa un ordine limite quando il prezzo raggiunge il livello di stop. Offre controllo sul prezzo di esecuzione dopo l'attivazione dello stop, ma non garantisce l'esecuzione se il mercato si muove troppo velocemente oltre il prezzo limite.</li>
                         <li><strong>Ordine Market-if-Touched (MIT):</strong> Simile al Limit, ma diventa Market quando il prezzo viene toccato.</li>
                    </ul>
                    <p>La scelta dell'ordine dipende dalla strategia e dalle condizioni di mercato.</p>
                </div>

                <h4>16.10 Dai grafici giornalieri ai grafici intra-day</h4>
                <p>L'analisi tecnica e le tattiche operative possono essere applicate anche a timeframe inferiori al giornaliero (es. orario, 15 minuti, 5 minuti) per il trading intraday, ma richiedono maggiore velocità decisionale e una gestione del rischio ancora più stringente.</p>

                <h4>16.11 L'uso dei pivot points sui grafici intra-day</h4>
                <p>I <span class="concept">pivot points</span> sono livelli di supporto e resistenza calcolati matematicamente basati sui prezzi (massimo, minimo, chiusura) del giorno precedente. Sono molto usati dai trader intraday per identificare potenziali punti di svolta o target.</p>
            `,
            challenges: []
        },
         {
            id: 'riassunto-regole-gestionali',
            title: 'Riassunto Regole e Applicazioni (Cap. 16.12 - 16.16)',
            icon: 'fa-tasks',
            content: `
                <p>Questa sezione finale del capitolo riassume le regole chiave e discute l'applicazione della gestione patrimoniale in contesti specifici.</p>

                <div class="card consistency-principles">
                    <h3><i class="fas fa-list-ol"></i> 16.12 Riassunto delle regole della gestione patrimoniale e di trading</h3>
                    <p>Viene presentata una sintesi dei principi chiave discussi, spesso sotto forma di "20 regole d'oro" o simili, che enfatizzano:</p>
                    <ol>
                        <li>Operare nella direzione del trend intermedio.</li>
                        <li>Comprare debolezza in uptrend, vendere forza in downtrend.</li>
                        <li>Tagliare le perdite rapidamente.</li>
                        <li>Lasciar correre i profitti.</li>
                        <li>Non operare impulsivamente; pianificare.</li>
                        <li>Usare gli stop loss.</li>
                        <li>Diversificare (ma non troppo).</li>
                        <li>Controllare il rischio per trade (es. 1-2%).</li>
                        <li>Non aggiungere a posizioni perdenti.</li>
                        <li>Essere pazienti ed obiettivi.</li>
                        <li>Studiare e imparare continuamente.</li>
                        <li>Conoscere sé stessi (psicologia).</li>
                        <li>Evitare le decisioni basate sulle emozioni.</li>
                        <li>Usare i grafici.</li>
                        <li>Pianificare il trade, tradare il piano.</li>
                        <li>Mantenere un diario di trading.</li>
                        <li>Non cercare il "Sacro Graal".</li>
                        <li>Saper stare fuori dal mercato.</li>
                        <li>Distinguere tra trading e investimento.</li>
                        <li>La semplicità è spesso meglio della complessità.</li>
                    </ol>
                </div>

                <h4>16.13 Applicazione al mercato azionario</h4>
                <p>Considerazioni specifiche per chi opera principalmente sul mercato azionario.</p>

                <div class="card">
                    <h3><i class="fas fa-chart-pie"></i> 16.14 Asset allocation</h3>
                    <p>L'<span class="concept">asset allocation</span> è il processo di divisione del capitale di investimento tra diverse categorie di asset (es. azioni, obbligazioni, immobili, materie prime) in base agli obiettivi, alla tolleranza al rischio e all'orizzonte temporale dell'investitore. Anche se distinta dal money management del trading attivo, è un concetto fondamentale della gestione patrimoniale complessiva.</p>
                </div>

                 <h4>16.15 Fondi gestiti e mutual funds</h4>
                 <p>Breve discussione su come i principi di gestione patrimoniale si applichino anche nella gestione di fondi comuni di investimento.</p>

                 <h4>16.16 Market profile</h4>
                 <p>Accenno al <span class="concept">Market Profile</span> come strumento avanzato per analizzare l'attività di mercato in relazione a prezzo e tempo, identificando aree di valore e punti di controllo (approfondito in Appendice B).</p>

            `,
            challenges: []
        },
    ]
};
