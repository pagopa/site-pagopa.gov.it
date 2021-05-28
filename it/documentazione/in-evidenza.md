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

### Modello di pagamento presso PSP con Ente multi&#8209;beneficiario

Qui trovi la documentazione, e gli aggiornamenti, in merito al nuovo workflow di pagamento con avviso che rimuove la limitazione di un unico beneficiario, cioè consente la possibilità di gestire con un unico avviso anche i casi in cui l’importo pagato sia accreditato, in quota parte, su conti di diversi Enti beneficiari (es: tributo TARI/TEFA).

- [**Specifiche Attuative del Nodo dei Pagamenti-SPC**](https://docs.italia.it/italia/pagopa/pagopa-specifichepagamenti-docs/it/v2.4.2/index.html) (SANP-2.4.2) - Allegato B
- [**Informazioni di dettaglio per gli sviluppatori**](https://pagopa.github.io/pagopa-api/) (DevPortal)
- [**Repository delle interfacce**](https://github.com/pagopa/pagopa-api/tree/develop) in update (esposte e richieste) per la connessione con il sistema pagoPA

##### Serve aiuto?

<a class="btn btn-md btn-primary mr-md-4 mb-2 mt-2" href="https://docs.google.com/document/d/1vUjmJMD183i4aYwWCQMsG_VXL9fxNPzG8_5manzW2Og">Domande frequenti</a><a class="btn btn-md btn-outline-primary mr-md-4 mb-2 mt-2" href="https://github.com/pagopa/pagopa-api/issues/">Apri segnalazione</a><br>

##### Roadmap

###### 05/03/2021
- Disponibilità delle nuove interfacce in ambiente di Test. Le attuali interfacce (rif. [SANP-2.3.0](https://docs.italia.it/italia/pagopa/pagopa-specifichepagamenti-docs/it/2.3.0/index.html)) vengono deprecate, ma continueranno a coesistere con le nuove per un tempo sufficientemente congruo prima di essere dismesse.
- Rilasciate [SANP-2.4.0](https://docs.italia.it/italia/pagopa/pagopa-specifichepagamenti-docs/it/v2.4.0/index.html)

###### 13/05/2021

- Rilasciate [SANP-2.4.2](https://docs.italia.it/italia/pagopa/pagopa-specifichepagamenti-docs/it/v2.4.2/index.html) contenenti chiarimenti: sul nuovo processo di pagamento presso il PSP, sulla modalità d’uso dei conti correnti postali e precisazioni sui Flussi di Rendicontazione.
- update del [DevPortal](https://pagopa.github.io/pagopa-api/#section/Introduction) con diagrammi esplicativi e istruzione per utilizzare il ["mockPA"](https://github.com/pagopa/pagopa-api/blob/develop/mockPA/README.md), utile per semplificare il testing da parte dei PSP.

###### entro il 01/07/2021
- I PSP devono aver adeguato i propri sistemi alle nuove interfacce.

###### entro il 31/12/2021
- Gli EC devono aver adeguato i propri sistemi alle nuove interfacce.
