---
layout: post
title: "Disponibile la nuova versione delle SACI: Enti Creditori e PSP dovranno adeguarsi entro il 1° giugno"
lang: it
excerpt_separator: <!--more-->
image: /assets/images/posts/news-saci.jpg
image_thumb: /assets/images/posts/news-saci-t.jpg
child_of_ref: notizie
caption: "Foto di Markus Spiske (da Unsplash)"
---

PagoPA S.p.A. ha pubblicato la **versione 2.0.0** delle _Specifiche Attuative dei Codici Identificativi di versamento, riversamento e rendicontazione_ (SACI), alle quali tutti i soggetti aderenti alla piattaforma pagoPA dovranno adeguarsi **entro e non oltre il 01-06-2022**.
<!--more-->

La [nuova _release_ delle SACI](https://developer.pagopa.it/pago-pa/guides/saci/2.0.0) migliora la fruibilità delle informazioni, con l’obiettivo generale di semplificare il contenuto ed evitare possibili errate interpretazioni, a partire da tre elementi: l’utilizzo di una nuovo strumento di pubblicazione che permette di consultarle in modo più intuitivo, la rimozione di capitoli già presenti nelle SANP (Specifiche Attuative del Nodo dei Pagamenti) e l’introduzione del “Changelog” ovvero di una sezione iniziale che, per ogni aggiornamento delle Specifiche, indica in sintesi i cambiamenti apportati.

Più nel dettaglio, nella versione 2.0.0 delle SACI vengono fornite le istruzioni per la gestione di: 

- **Identificativo Univoco di Versamento (IUV)**: descrizione dei metodi di generazione del codice IUV sia nel caso di pagamenti attivati presso i PSP sia presso gli Enti Creditori; 
- **Trasferimento fondi (SCT)**: inserimento del riferimento al progressivo giornaliero nel campo _AT-05 Remittance Information_, al fine di ridurre al minimo la possibilità di anomalie in caso di problemi tecnici che comportino la predisposizione di più di un Flusso di Rendicontazione per ogni IBAN dell’Ente beneficiario nel corso della stessa giornata operativa;
- **Flussi di Rendicontazione**: rimane invariata la struttura del Flusso di Rendicontazione che il PSP a D+2 deve necessariamente inviare e resta confermata la compilazione del campo _identificativoUnivocoRegolamento_ con il TRN (AT-43);
- **Riconciliazione del flusso di riversamento**: utilizzo dell’identificativo del flusso (contenuto nel campo AT-05 del riversamento e nel tag _identificativoFlusso_) da parte dell’Ente Creditore, per effettuare operazioni di quadratura tra riversamenti ricevuti e Flussi di Rendicontazione.

Le SACI rappresentano l’**Allegato A** alle “_[Linee guida per l'effettuazione dei pagamenti elettronici a favore delle pubbliche amministrazioni e dei gestori di pubblici servizi](https://www.gazzettaufficiale.it/eli/id/2018/07/03/18A04494/sg)_" e devono essere utilizzate in combinazione con quest’ultime, nonché con l'**Allegato B** (SANP).

Clicca [qui](https://developer.pagopa.it/pago-pa/guides/) per consultare l’ultima _release_ delle Specifiche Attuative.