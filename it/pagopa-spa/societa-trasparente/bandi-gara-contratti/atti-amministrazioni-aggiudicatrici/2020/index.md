---
layout: page
title: 2020
description: 
lang: it
ref: atti-amministrazioni-2020
order: 25
child_of_ref: atti-amministrazioni-aggiudicatrici
bandi:
    - id: "2020/01"
      name: "01. Adesione a Convenzione Consip SPC Cloud Lotto 1 per l'acquisizione dei servizi di cloud computing - Servizi professionali di Cloud Enabling - CIG del contratto quadro: 55187486EA"
    - id: "2020/02"
      name: "02. Affidamento diretto ai sensi dell’articolo 36, comma 2, lettera a) del D.Lgs. 50/2016, mediante Ordine diretto di acquisto sul MePA per l'acquisizione di n. 4 access point - CIG. ZE32BA64DF"
    - id: "2020/03"
      name: "03. Affidamento diretto ai sensi dell’articolo 36, co. 2, lett. a) del D.Lgs. 50/2016, mediante trattativa diretta sul MePA per l'acquisizione della licenza d'uso della piattaforma Mailup per una durata di 12 mesi - CIG. 8150006DB3"
    - id: "2020/04"
      name: "04. Affidamento diretto ai sensi dell’articolo 36, co. 2, lett. a) del D.Lgs. 50/2016, mediante Trattativa diretta sul MePA, avente ad oggetto il servizio di migrazione dei dati e contenuti relativi alla piattaforma MailUP - CIG. 8150006DB3"
    
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