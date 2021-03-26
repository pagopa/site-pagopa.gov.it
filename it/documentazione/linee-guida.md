---
layout: page
title: Linee Guida
description: Linee guida e regole tecniche
lang: it
ref: linee-guida
child_of_ref: documentazione
order: 25
---

Le <a href="https://www.gazzettaufficiale.it/eli/id/2018/07/03/18A04494/sg" target="_blank">Linee guida per l’effettuazione dei pagamenti elettronici a favore delle pubbliche amministrazioni e dei gestori di pubblici (v1.2 - febbraio 2018)</a> definiscono regole, standard e specifiche tecniche che le PA e i PSP devono seguire per integrarsi al sistema pagoPA.

Le Linee guida sono corredate da **due allegati tecnici**:

- Allegato A - "Specifiche Attuative dei Codici Identificativi di versamento, riversamento e rendicontazione" ([versione corrente](https://docs.italia.it/italia/pagopa/pagopa-codici-docs/it/stabile/) \| [PDF](https://docs.italia.it/projects/pagopa-codici-docs/downloads/pdf/stabile/))
- Allegato B - "Specifiche Attuative del Nodo dei Pagamenti-SPC" ([versione corrente](https://docs.italia.it/italia/pagopa/pagopa-specifichepagamenti-docs/it/v2.4.0/index.html) \| [PDF](https://docs.italia.it/projects/pagopa-specifichepagamenti-docs/downloads/pdf/v2.4.0/))

## Documentazione tecnica collegata

- [Piano dei test per l'avvio in esercizio di un PSP](https://github.com/italia/lg-pagopa-docs/blob/master/documentazione_tecnica_collegata/psp/Piano_test_PSP.docx), documento che elenca le azioni di controllo da pianificare e attuare al fine di consentire l'avvio in esercizio di un PSP;
- [Piano dei Test per l'invio delle RT in modalità PUSH e strategia di retry](https://github.com/italia/lg-pagopa-docs/blob/master/documentazione_tecnica_collegata/psp/Piano_test_RT_PUSH_PSP_v1.1.docx), documento che elenca le azioni di controllo da attuare per l'invio delle RT in modalità PUSH da parte di un PSP.
- [Piano dei test per l'avvio in esercizio di un Ente Creditore](https://github.com/pagopa/lg-pagopa-docs/raw/master/documentazione_tecnica_collegata/adesione/Piano_test_EC.docx), documento che elenca le azioni di controllo da pianificare e attuare al fine di consentire l'avvio in esercizio di una PA.
- [Il nuovo avviso di pagamento analogico nel sistema pagoPA (versione 2.2.1 - dicembre 2018)](https://github.com/italia/lg-pagopa-docs/blob/master/documentazione_tecnica_collegata/documentazione_collegata/guidatecnica_avvisoanalogico_v2.2.1_con_alleg.pdf): la guida tecnica che definisce il nuovo avviso di pagamento che sostituisce la versione 1.2.2. I soggetti aderenti dovranno obbligatoriamente adottarlo entro il 1° dicembre 2018
- [Specifiche di connessione al sistema pagoPA (versione 2.3 - aprile 2019)](https://github.com/italia/lg-pagopa-docs/blob/master/documentazione_tecnica_collegata/documentazione_collegata/Sistema_pagoPA_-_Specifiche%20connessione_2.3.pdf): definisce le modalità di cooperazione applicativa con il Nodo dei pagamenti.
- [Indicatori di qualità per i soggetti aderenti" (versione 2.2 - maggio 2019)](https://github.com/italia/lg-pagopa-docs/blob/master/documentazione_tecnica_collegata/documentazione_collegata/SLA_aderente_2.2.pdf)
- [Allegato tecnico Agenzia delle entrate-Riscossione per integrazione su pagoPA di bollettini RAV per pagamento presso PSP (versione 1.0.0 - novembre 2017)](https://github.com/italia/lg-pagopa-docs/blob/master/documentazione_tecnica_collegata/documentazione_collegata/agengiaentraterisc_rav_psp.pdf)
- [Allegato tecnico Pagamento della Tassa Automobilistica presso i PSP (PDF e XSD)](https://github.com/italia/lg-pagopa-docs/blob/master/documentazione_tecnica_collegata/documentazione_collegata/bollo_auto_mod_4_0.zip)
- [MyBank Technical Specification (versione 2.0 - luglio 2019)](https://docs.google.com/document/d/1M5OEfN5RZSfBSKRuhYWX3WZkWVcivD4WpRxsjwyEUzE/view)
- [Gestione delle convenzioni tra EC e PSP (maggio 2020)](https://docs.google.com/document/d/1nn3Tkifkwog5KYfozyix7iN0V3DjeeeVIKkJ1tMcB_c/view)
- [Il pagamento presso POS fisici nel sistema pagoPA (giugno 2020)](https://docs.google.com/document/d/1BOG-OBQm7WMXyfpyPlfRc8ZhbxFJmt-3H7INMqG_oVY/view)

## Materiale per sviluppatori (\*)

- [Schemi XSD e WSDL](https://github.com/italia/pagopa-specifichepagamenti-schemi)
- [Controlli applicativi del sistema pagoPA (versione 1.0 - febbraio 2018 )](https://github.com/pagopa/lg-pagopa-docs/blob/master/documentazione_tecnica_collegata/materiale_sviluppatori/elenco_controlli_nodo_2_1_new.pdf)
- [Kit per le immagini standard previste sull'avviso analogico](https://github.com/italia/lg-pagopa-docs/blob/master/documentazione_tecnica_collegata/materiale_sviluppatori/avviso-pagopa-assets.zip)

(\*) ulteriore materiale sarà pubblicato su <https://developers.italia.it/>


## Tassonomia dei Servizi

Qui trovi la documentazione in merito alla "Tassonomia dei servizi erogati" che consente ad ogni Ente Creditore di identificare uniformemente i servizi di incasso e le rispettive posizioni debitorie che transitano tramite la Piattaforma pagoPA.

- [**Monografia** sulla Tassonomia dei servizi di incasso](https://docs.google.com/document/d/1OawsOwvMOxgLGB3KXNeqJTxrX2XYD7q0HZ8RNrZdimg/view) recepita nelle SANP-2.4.0
-  [**Specifiche Attuative del Nodo dei Pagamenti-SPC**](https://docs.italia.it/italia/pagopa/pagopa-specifichepagamenti-docs/it/v2.4.0/_docs/sezione2-gestione-posizione-debitoria/2_01_00_gestione_posizione_debitoria.html#tassonomia-dei-servizi) (SANP 2.4.0) - Allegato B
- [**Tabella tassonomica**](https://drive.google.com/file/d/13xOd__Qd4pwKHr3wjE-73NAB2O7UKmIt/view) e sua versione in [formato XML](https://github.com/pagopa/pagopa-api/blob/develop/general/paymentCategory.xsd) (in aggiornamento)

##### Desideri contribuire al miglioramento della Tassonomia?

<a class="btn btn-md btn-outline-primary mr-md-4 mb-2 mt-2" href="https://survey.pagopa.it/238313">Invia suggerimento</a><br>

###### Nota
A partire **dal 01/03/2021** PagoPA S.p.A. inserirà dei controlli per verificare l’effettiva messa in esercizio dell’indicazione della tipologia di servizio come specificato.

Le posizioni debitorie emesse **prima del 28/02/2021**, che hanno una data di scadenza successiva al 28/02/2021, dovranno essere adeguate ai codici tassonomici pubblicati da PagoPA S.p.A.
