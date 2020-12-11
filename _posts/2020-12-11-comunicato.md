---
layout: post
title: "App IO: approfondimento sulla privacy e conservazione dei dati personali"
lang: it
excerpt_separator: <!--more-->
tags:
child_of_ref: comunicati-stampa
---

PagoPA S.p.A. opera nella ferma convinzione che la **privacy dei cittadini** sia un **valore irrinunciabile e un elemento essenziale della digitalizzazione della Pubblica Amministrazione**. Proprio per
questo, tutti i nostri progetti sono attentamente verificati dal nostro
team di esperti privacy.<!--more--> Tra questi, anche l'App IO è stata analizzata
nei minimi dettagli per assicurare il pieno rispetto del [Regolamento
Generale sulla protezione dei dati (GDPR)](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:32016R0679&from=EN)
ai propri utenti.

Per quanto riguarda il programma Cashback, il decreto del Ministero
dell'economia e delle finanze ([DM n.156/2020](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2020-11-28&atto.codiceRedazionale=20G00181&elenco30giorni=false)),
su cui il Garante per la protezione dei dati personali ha espresso il
proprio [parere positivo](https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/9466707),
ha disciplinato nel dettaglio le modalità di trattamento dei dati
raccolti tramite il programma. Inoltre, il Garante ha [approvato](https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/9492345)
la valutazione di impatto (DPIA) che è stata predisposta dal Ministero
dell'Economia e delle Finanze, in quanto titolare del programma, con la
collaborazione di PagoPA S.p.A., e che descrive tutti i flussi e
trattamenti che quest'ultima svolge per conto del Ministero stesso.

Il sistema alla base dell\'App IO non comporta **alcuna profilazione o geolocalizzazione degli utenti**. Nel caso specifico del Cashback, il
sistema non registra né la tipologia di acquisto né il luogo in cui sono
effettuati gli acquisti da parte dell'utente, ma memorizza unicamente:
un codice crittografato in modo irreversibile (tecnicamente detto _"hash PAN"_) che corrisponde allo strumento di pagamento registrato ai fini
del programma; data, ora e importo dell'acquisto effettuato tramite
quello strumento di pagamento, unicamente per rendere visibili
all'utente le transazioni che permettono il calcolo del rimborso ai fini
del Cashback.

Il sistema alla base dell\'App IO **non memorizza i dati delle carte di credito/debito aggiunte dall'utente nella sezione "Portafoglio"**:
questi, infatti, vengono memorizzati dal fornitore [SIA S.p.A](https://www.sia.eu/en). in un ambiente protetto secondo gli
standard [PCI DSS](https://www.pcisecuritystandards.org/) (_Payment Card Industry Data Security Standard_) e conservati in server
situati in Italia.

Il sistema alla base dell'App IO, quindi, **non trasferisce all'estero i dati relativi agli strumenti di pagamento** aggiunti nella sezione
"Portafoglio" (es. i dati delle carte di credito/debito). Allo stesso
modo, i server dove vengono memorizzati i dati personali degli utenti
(quali, ad esempio, il codice fiscale, l\'email, le informazioni
contenute nella sezione "Messaggi") sono situati all'interno dell'Unione
Europea dove è applicato il [Regolamento generale sulla protezione dei dati personali (GDPR)](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:32016R0679&from=EN)
e, quindi, le stesse tutele applicabili in Italia.

Utilizziamo [alcuni fornitori extra UE](https://io.italia.it/app-content/fornitori) **per servizi marginali o residuali e sempre, in ogni caso, in modo pienamente conforme alla normativa sulla protezione dei dati personali italiana.**
In particolare, utilizziamo fornitori esteri solo per un servizio che ci
aiuta a gestire le segnalazioni degli utenti e per uno strumento che
raccoglie i dati sull'utilizzo dell'app e che usiamo per scopi di
_debug_ (individuazione e correzione di problemi tecnici), _incident response_ (gestione degli incidenti informatici), assistenza tecnica e
miglioramento dell'App. Inoltre, in alcuni casi residuali, potremmo
utilizzare uno strumento di comunicazione interna aziendale che di
norma, ovviamente, non tratta dati riferiti agli utenti dell'App IO ma
che opera in supporto della divisione di PagoPA S.p.A. responsabile del
_customer care_ per accelerare eventuali interventi. Infine, utilizziamo
i sistemi di Google per inviare notifiche _push_ ai cittadini che,
accedendo all'app IO da dispositivi Android, non sarebbero diversamente
raggiungibili. Google riceve dati personali di tali utenti
esclusivamente nel caso di notifiche non generiche, ma contenenti
informazioni relative agli stessi: nello specifico del programma
Cashback, non sono previste notifiche _push_ che contengano dati
personali.

Con tutti i predetti fornitori, abbiamo stipulato una nomina a responsabile del trattamento ai sensi dell'art. [28 del GDPR](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:32016R0679&from=EN#d1e4236-1-1),
con cui tali fornitori hanno accettato di trattare i dati esclusivamente
al fine di svolgere il servizio che ci rendono precludendo agli stessi,
pertanto, un qualsivoglia utilizzo per altre finalità o per fini loro
propri.

A seguito della sentenza della Corte di Giustizia dell'Unione Europea
che ha [invalidato il c.d. _Privacy Shield_](http://curia.europa.eu/juris/document/document.jsf;jsessionid=6380C3EC22E439363DD15BCEC24EC4D3?text=&docid=228677&pageIndex=0&doclang=IT&mode=lst&dir=&occ=first&part=1&cid=17123232)
ci siamo adoperati per garantire che tutti i trasferimenti verso società
stabilite negli Stati Uniti siano coperti dalle [Clausole contrattuali tipo della Commissione Europea (SCC)](https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en),
che costituiscono uno degli strumenti ammessi dal GDPR, (v. [art. 46](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:32016R0679&from=EN#d1e4236-1-1)).
Con alcuni di essi, inoltre, abbiamo rinforzato le SCC con specifiche ed
ulteriori previsioni, in attesa di poter adottare il nuovo testo delle
SCC, attualmente in fase di [consultazione pubblica](https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives/12741-Commission-Implementing-Decision-on-standard-contractual-clauses-for-the-transfer-of-personal-data-to-third-countries).

Nell'ottica di una piena trasparenza, in linea con tutte le attività che
contraddistinguono il lavoro del team responsabile dell'App IO e grazie
al feedback degli utenti, **abbiamo deciso di rendere ancora più dettagliata l'informativa dell'App IO includendo la lista aggiornata dei nostri fornitori (disponibile a [questo link](http://io.italia.it/app-content/fornitori))** con le
informazioni di base rispetto ai dati trattati dai loro servizi e di cui
l'App IO si serve per la sua operatività. Come si evince da questa
lista, quando possibile prediligiamo società situate in Italia e in UE
e, laddove disponibili, selezioniamo opzioni che consentono di mantenere
i dati in UE.

Infine, ricordiamo che IO si basa sul concetto di sviluppo collaborativo
che deve coinvolgere tutti i soggetti direttamente o indirettamente
attivi nel processo di digitalizzazione. Per questo rinnoviamo ed
estendiamo anche ai lettori di questo comunicato l'invito a contribuire
e a segnalarci qualunque proposta migliorativa per rendere IO sempre più
sicura e rispettosa della privacy dei cittadini.
