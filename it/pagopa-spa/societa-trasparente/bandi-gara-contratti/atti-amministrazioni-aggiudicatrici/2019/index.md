---
layout: page
title: 2019
description: 
lang: it
ref: atti-amministrazioni-2019
order: 25
child_of_ref: atti-amministrazioni-aggiudicatrici
bandi:
    - id: "2019/01"
      name: "01. Affidamento diretto ai sensi dell'art. 36, co. 2, lett. b) del D.lgs. 50/2016 per l’acquisizione di un servizio SAAS in cloud per la gestione della posta elettronica e per la condivisione documentale basato su G-SUITE di Google - piano business - per un numero massimo di 60 caselle di posta elettronica e utenze - CIG 80036114BC"
    - id: "2019/02"
      name: "02. Procedura ai sensi dell’articolo 36, co. 2, lett. b) del D.Lgs. 50/2016, finalizzata all’acquisizione del prodotto Microsoft “Azure Monetary Commitment” in numero di 2.376 unità (66 unità per 36 mesi) per l'accesso ai servizi cloud. - Procedura con richiesta di offerta aperta sul mePA - CIG 8086277EDD"
    - id: "2019/03"
      name: "03. Affidamento diretto, ai sensi dell’art. 36, comma 2, lett. a) del D.Lgs. 50/2016 per l'acquisto di n. 10 computer modello macbook air - CIG Z0A2B64349"
    - id: "2019/04"
      name: "04. Affidamento diretto, ai sensi dell'art. 36, co. 2, lett. a) del D.lgs. 50/2016 per l'acquisto del prodotto “Attivazione Pannello per gestione PEC” a valere sul catalogo dei prodotti offerti dalla società ARUBA PEC - CIG Z8F2B09DA5"
    - id: "2019/05"
      name: "05. Affidamento diretto, ai sensi dell'art. 36, co. 2, lett. a) del D.lgs. 50/2016, per l'acquisto di n. 6 SSL RapidSSL (DigiCert) DV con validità di due anni, a valere sul catalogo dei prodotti offerti dalla Società Euro Servizi srl - CIG ZEE2A2258C"
    - id: "2019/06"
      name: "06. Affidamento diretto ai sensi dell'art. 36, co. 2, lett. a) del D.Lgs. 50/2016 dei servizi di contabilità' interna e del personale - CIG 8037975ACC"
    - id: "2019/07"
      name: "07. Procedura, ai sensi dell’art. 36, comma 2, lett. b) del D.Lgs. 50/2016 per l’acquisizione dei servizi professionali di revisione legale dei conti per la società PagoPA S.p.A. - CIG 808708272E"
    - id: "2019/08"
      name: "08. Affidamento diretto ai sensi dell’art. 36, comma 2, lett. a) del D. Lgs. 50/2016, per l’apertura di un conto corrente intestato alla Società - CIG 80035545B2"
    - id: "2019/09"
      name: "09. Adesione a Convenzione Consip `SPC Cloud Lotto 2´ per l'acquisizione dei servizi di gestione delle identità digitali e sicurezza applicativa - CIG del contratto quadro: 5518849A42"
---



<div id="collapseDiv" class="collapse-div" role="tablist">
  {% for b in page.bandi %}
  <div class="collapse-header" id="heading{{forloop.index}}">
    <button data-toggle="collapse" data-target="#collapse{{forloop.index}}" aria-expanded="false" aria-controls="collapse{{forloop.index}}">
      {{b.name}}
    </button>
  </div>
  <div id="collapse{{forloop.index}}" class="collapse " role="tabpanel" aria-labelledby="heading{{forloop.index}}">
    <div class="collapse-body">
      {% include list-folder.html folder=b.id %}
    </div>
  </div>
  {% endfor %}
</div>