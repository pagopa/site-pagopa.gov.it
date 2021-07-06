---
layout: page
title: Come aderire
title_hero: Come aderire a pagoPA
description: Per aderire a pagoPA in qualità di Prestatore di Servizi di Pagamento, è necessario firmare un accordo con PagoPA S.p.A. Quest’ultimo prevede, da parte del PSP aderente, il pagamento di un corrispettivo in base al numero di transazioni effettuate dal PSP (all’aumentare del volume delle transazioni corrisponde un corrispettivo per transazione inferiore).
lang: it
ref: prestatori-servizi-di-pagamento-come-aderire
order: 2
child_of_ref: prestatori-servizi-di-pagamento
child_of_submenu: pagoPA
footerbanner:
  title: Hai domande o dubbi?
  desc: Leggi le domande frequenti sull’adesione a pagoPA da parte dei Prestatori di Servizi di Pagamento
  cta: Leggi le FAQ
  url: "https://docs.italia.it/italia/pagopa/pagopa-docs-faq/it/stabile/_docs/FAQ_sezioneD.html"
passi:
    -
      title: Scegli il modello di accordo
      desc: Confronta i due modelli e scegli quello che meglio risponde alle tue necessità.
    -
      title: Firma l’accordo digitalmente
      desc: "Scarica il modulo, firmalo digitalmente e invialo via PEC a: <accordipsp@pec.pagopa.it>"
    -
      title: Inizia l’integrazione con pagoPA
      desc: Se non vuoi farti carico delle attività d’implementazione, puoi nominare un soggetto già aderente alla piattaforma.
    -
      title: Hai bisogno d’aiuto?
      desc: "Consulta le domande frequenti o scrivi a: <account@pagopa.it>"
modelli:
    -
      pretitle: A
      title: Modello a tariffa fissa
      desc: "Premia i grandi volumi, con uno sconto al raggiungimento di determinati obiettivi.<br>
Il modello A permette, su richiesta del PSP, di cumulare i propri volumi alternativamente con altri PSP del medesimo gruppo societario o tramite un Mandatario Qualificato, al fine di accedere a tariffe migliori ed eventualmente a sconti."
      more: 
        label: SCARICA L’ACCORDO
        url: "../PagoPA_Accordo_di_servizio_ModelloA_v07-02-2020_s.pdf"
    -
      pretitle: B
      title: Modello per grandi volumi
      desc: "Questo modello si basa su un modello di tariffazione che prevede una flat fee per alcune casistiche."
      more: 
        label: SCARICA L’ACCORDO
        url: "../PagoPA_Accordo_di_servizio_Modello_B_v07-02-20_s.pdf"
tariffe:
    -
      title: Diventa Mandatario Qualificato
      desc: "Se hai già aderito a pagoPA, puoi diventare Mandatario di altri PSP e impegnarti a pagare a PagoPA S.p.A. i Corrispettivi per loro conto.<br>In questo modo potrai cumulare i volumi dei PSP di cui hai mandato e, quindi, accedere a una tariffazione più vantaggiosa."
      more:
        label: Contattaci
        url: "#"
        css: "mt-3"
    -
      title: Unisciti ad un Mandatario esistente
      desc: "Se sei un PSP aderente a pagoPA, puoi indicare i servizi di pagamento per i quali intendi usufruire di un Mandatario e del relativo cumulo delle rispettive transazioni.\n\n
      Per maggiori informazioni, contatta uno dei Mandatari Qualificati."
docs:
    -
     label: Portale delle Adesioni - Manuale Utente
     url: "#"
    -
     label: Portale delle Adesioni - Manuale Utente
     url: "#"
    -
     label: Portale delle Adesioni - Manuale Utente
     url: "#"
    -
     label: Portale delle Adesioni - Manuale Utente
     url: "#"
---


{% include components/grid-by-step.html source=page.passi %}
{%include components/grid-paragraph.html
          paragraph="Scopri di più sui modelli di accordo di adesione:"
          source=page.modelli
          columns=2
          %}

{:.heading-border-bottom .pb-2 .mb-3 .mt-3 .mt-lg-5}
### Desideri accedere ad una tariffa più vantaggiosa?

{%include components/grid-simple.html 
          source=page.tariffe
          columns=2
          css_wrapper="my-3 my-md-5"
          %}

<div class="d-flex align-items-center heading-border-bottom my-4">
  <h3>Risorse utili</h3>
  <div class="ml-auto">
    <a href="../documentazione/" class="read-more" title="Vedi tutti i documenti">
      <span class="text">Vedi tutti i documenti</span>
      <svg class="icon">
          <use xlink:href="/assets/bootstrap-italia/dist/svg/sprite.svg#it-arrow-right" /></use>
      </svg>
    </a>
  </div>
</div>
{%include components/list.html
          source=page.docs
          %}