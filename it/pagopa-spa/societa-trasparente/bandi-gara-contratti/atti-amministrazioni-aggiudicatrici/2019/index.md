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