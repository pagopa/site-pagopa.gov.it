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
    - id: "2020/05"
      name: "05. Affidamento diretto, mediante trattativa diretta sul MePA, ai sensi dell’art. 36, co. 2, lett. a) del D.lgs. 50 del 2016, del servizio di supporto specialistico per i lavori e gli arredamenti della sede progetto di lavori di adeguamento della sede - CIG. 8169412C0A"
    - id: "2020/06"
      name: "06. Affidamento diretto, ai sensi dell'art. 36, co. 2, lett. a), mediante trattativa diretta sul MePA, dei servizi di creazione, aggiornamento e manutenzione evolutiva del codice dei siti di PagoPA - CIG. 8183813820"
    - id: "2020/07"
      name: "07. Affidamento diretto, ai sensi dell'art. 36, co. 2, lett. a), dei servizi di verifica della sicurezza dell'app IO, penetration test - CIG. 8215715E7B"
    - id: "2020/08"
      name: "08. Affidamento diretto, ai sensi dell’art. 36, co. 2, lett. a) del D.Lgs. 50/2016, mediante ordine di acquisto sul MePA, per la fornitura fornitura di licenze Adobe - CIG. Z322BEFDC5"
    - id: "2020/09"
      name: "09. Procedura ai sensi dell’articolo 36, co. 2, lett. b) del D.Lgs. 50/2016, per la fornitura di portatili MacBook Pro - Procedura con richiesta di offerta aperta sul MePA - CIG. 81837471AB"
    
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