---
layout: page
title: In evidenza
description: 
lang: it
ref: in-evidenza
child_of_ref: documentazione
order: 23
---

Qui trovi informazioni sulle **principali novità** sulla piattaforma dei pagamenti pagoPA.

### Documentazione tecnica in consultazione

<span class="badge badge-secondary">Nuovo</span> [Monografia - Gestione accredito e rendicontazione](https://docs.google.com/document/d/102dSzWOALRqQEkiccilUFV02cSwRf8ZvzsI__zgSoM0/edit?usp=sharing)

<!-- Al momento non è presente documentazione in consultazione. -->

---

### Modello di pagamento presso PSP con Ente multi&#8209;beneficiario

Qui trovi la documentazione in merito al nuovo workflow di pagamento con avviso che rimuove la limitazione di un unico beneficiario, cioè consente la possibilità di gestire con un unico avviso anche i casi in cui l’importo pagato sia accreditato, in quota parte, su conti di diversi Enti beneficiari (es: TARI/TEFA). 

- [Monografia Processo di pagamento presso il PSP con Ente multi-beneficiario][monografia]. Nota che la Monografia è stata integrata nella nuova versione delle SANP 2.4.0 (punto seguente) e pertanto può essere considerata come deprecata.
-  Allegato B - ["Specifiche Attuative del Nodo dei Pagamenti-SPC"](https://docs.italia.it/italia/pagopa/pagopa-specifichepagamenti-docs/it/v2.4.0/index.html) (SANP-2.4.0)
- Informazioni di dettaglio per gli sviluppatori: ["DevPortal"](https://pagopa.github.io/pagopa-api/))
- [Repository delle interfacce](https://github.com/pagopa/pagopa-api) (esposte e richieste) per la connessione con il sistema pagoPA.
- [FAQ tematiche]() relative al nuovo modello di pagamento (NB: documento in evoluzione)

##### Segnalazioni/Chiarimenti

Si prega di inserire tutte le segnalazioni e/o richieste di chiarimento utilizzando _esclusivamente_ le [apposite issues in Github](https://github.com/pagopa/pagopa-api/issues/).

##### Roadmap

Riprendendo quanto anticipato in [§2.2 della Monografia][monografia]:

* 05/03/2021 - disponibilità delle nuove interfacce in ambiente di Test. Le attuali interfacce vengono deprecate, ma continueranno a coesistere con le nuove per un tempo sufficientemente congruo prima di essere dismesse
* 05/03/2021 - rilasciate le SANP-2.4.0
* entro il 01/05/2021 i PSP devono aver adeguato i propri sistemi alle nuove interfacce
* entro il 31/12/2021 gli EC devono aver adeguato i propri sistemi alle nuove interfacce

[monografia]: https://docs.google.com/document/d/1qmQ12SfkhjJGss--d5mQwqrcMCb9pF4JHj-k8w8X9jM/view#heading=h.39m7i6bxg7aa

---

### Tassonomia dei Servizi

Qui trovi la documentazione in merito alla "Tassonomia dei servizi erogati" che consente ad ogni Ente Creditore di identificare uniformemente i servizi di incasso e le rispettive posizioni debitorie che transitano tramite la Piattaforma pagoPA.

- Monografia sulla [Tassonomia dei servizi di incasso](https://docs.google.com/document/d/1OawsOwvMOxgLGB3KXNeqJTxrX2XYD7q0HZ8RNrZdimg/view)
- Nota che la Monografia è stata integrata nella nuova versione delle SANP 2.4.0-RC - attualmente **in preview** -  Allegato B - ["Specifiche Attuative del Nodo dei Pagamenti-SPC"](https://docs.italia.it/italia/pagopa/pagopa-specifichepagamenti-docs/it/v2.4.0-rc/index.html) 
- [Tabella tassonomica](https://drive.google.com/file/d/13xOd__Qd4pwKHr3wjE-73NAB2O7UKmIt/view) e sua versione in [formato XML]()
- Come [contribuire al miglioramento)](https://survey-enticreditori.pagopa.it/238313) della Tassonomia

**NB**: A partire _dal 01/03/2021_ PagoPA S.p.A. inserirà dei controlli per verificare l’effettiva messa in esercizio dell’indicazione della tipologia di servizio come specificato.

Le posizioni debitorie emesse _prima del 28/02/2021_, che hanno una data di scadenza successiva al 28/02/2021, dovranno essere adeguate ai codici tassonomici pubblicati da Pagopa S.p.A.
