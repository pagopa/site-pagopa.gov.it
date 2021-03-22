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

- [**Monografia - Gestione accredito e rendicontazione**](https://docs.google.com/document/d/102dSzWOALRqQEkiccilUFV02cSwRf8ZvzsI__zgSoM0/edit?usp=sharing) <span class="badge badge-primary">Nuovo</span>

<!-- Al momento non è presente documentazione in consultazione. -->

---

### Modello di pagamento presso PSP con Ente multi&#8209;beneficiario

Qui trovi la documentazione, e gli aggiornamenti, in merito al nuovo workflow di pagamento con avviso che rimuove la limitazione di un unico beneficiario, cioè consente la possibilità di gestire con un unico avviso anche i casi in cui l’importo pagato sia accreditato, in quota parte, su conti di diversi Enti beneficiari (es: tributo TARI/TEFA).

- [**Specifiche Attuative del Nodo dei Pagamenti-SPC**](https://docs.italia.it/italia/pagopa/pagopa-specifichepagamenti-docs/it/v2.4.0/index.html) (SANP-2.4.0) - Allegato B
- [**Informazioni di dettaglio per gli sviluppatori**](https://pagopa.github.io/pagopa-api/) (DevPortal)
- [**Repository delle interfacce**](https://github.com/pagopa/pagopa-api/tree/develop) in update (esposte e richieste) per la connessione con il sistema pagoPA
- [**Monografia** Processo di pagamento presso il PSP con Ente multi-beneficiario][monografia] recepita nelle SANP-2.4.0

##### Serve aiuto?

<a class="btn btn-md btn-primary mr-md-4 mb-2 mt-2" href="https://docs.google.com/document/d/1vUjmJMD183i4aYwWCQMsG_VXL9fxNPzG8_5manzW2Og">Domande frequenti</a><a class="btn btn-md btn-outline-primary mr-md-4 mb-2 mt-2" href="https://github.com/pagopa/pagopa-api/issues/">Apri segnalazione</a><br>

##### Roadmap

<!-- Riprendendo quanto anticipato in [§2.2 della Monografia][monografia]: --> 

###### 05/03/2021
- Disponibilità delle nuove interfacce in ambiente di Test. Le attuali interfacce (rif. [SANP-2.3.0](https://docs.italia.it/italia/pagopa/pagopa-specifichepagamenti-docs/it/2.3.0/index.html)) vengono deprecate, ma continueranno a coesistere con le nuove per un tempo sufficientemente congruo prima di essere dismesse.
- Vengono rilasciate le [SANP-2.4.0](https://docs.italia.it/italia/pagopa/pagopa-specifichepagamenti-docs/it/v2.4.0/index.html)

###### entro il 29/03/2021
- Disponibilità dei Piani di Test aggiornati alle nuove interfacce - "Piani di Test per Modello di pagamento presso PSP con Ente multi‑beneficiario (Nuovo Modello 3)"

###### entro il 01/05/2021
- I PSP devono aver adeguato i propri sistemi alle nuove interfacce.

###### entro il 31/12/2021
- Gli EC devono aver adeguato i propri sistemi alle nuove interfacce.

[monografia]: https://docs.google.com/document/d/1qmQ12SfkhjJGss--d5mQwqrcMCb9pF4JHj-k8w8X9jM/view#heading=h.39m7i6bxg7aa

---

### Tassonomia dei Servizi

Qui trovi la documentazione in merito alla "Tassonomia dei servizi erogati" che consente ad ogni Ente Creditore di identificare uniformemente i servizi di incasso e le rispettive posizioni debitorie che transitano tramite la Piattaforma pagoPA.

- [~~Monografia sulla Tassonomia dei servizi di incasso~~](https://docs.google.com/document/d/1OawsOwvMOxgLGB3KXNeqJTxrX2XYD7q0HZ8RNrZdimg/view) <span class="badge badge-secondary">Deprecato</span>
-  [**Specifiche Attuative del Nodo dei Pagamenti-SPC**](https://docs.italia.it/italia/pagopa/pagopa-specifichepagamenti-docs/it/v2.4.0/_docs/sezione2-gestione-posizione-debitoria/2_01_00_gestione_posizione_debitoria.html#tassonomia-dei-servizi) (SANP 2.4.0) - Allegato B
- [**Tabella tassonomica**](https://drive.google.com/file/d/13xOd__Qd4pwKHr3wjE-73NAB2O7UKmIt/view) e sua versione in [formato XML](https://github.com/pagopa/pagopa-api/blob/develop/general/paymentCategory.xsd) (in aggiornamento)

##### Desideri contribuire al miglioramento della Tassonomia?

<a class="btn btn-md btn-outline-primary mr-md-4 mb-2 mt-2" href="https://survey.pagopa.it/238313">Invia suggerimento</a><br>

###### Nota
A partire **dal 01/03/2021** PagoPA S.p.A. inserirà dei controlli per verificare l’effettiva messa in esercizio dell’indicazione della tipologia di servizio come specificato.

Le posizioni debitorie emesse **prima del 28/02/2021**, che hanno una data di scadenza successiva al 28/02/2021, dovranno essere adeguate ai codici tassonomici pubblicati da PagoPA S.p.A.
