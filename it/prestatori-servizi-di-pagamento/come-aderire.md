---
layout: page
title: Come aderire
title_hero: Come aderire a pagoPA
description: Per aderire a pagoPA in qualità di Prestatore di Servizi di Pagamento, è necessario firmare un accordo con PagoPA S.p.A. Quest’ultimo prevede, da parte del PSP aderente, il pagamento di un corrispettivo in base al numero di transazioni effettuate dal PSP (all’aumentare del volume delle transazioni corrisponde un corrispettivo per transazione inferiore).
lang: it
redirect_from:
  - /it/prestatori-servizi-di-pagamento/intermediari-e-mandatari/
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
      title: Scarica il modello di accordo
      buttons:
        -
         label: Scarica il modello
         url: "/it/prestatori-servizi-di-pagamento/pagopa-accordo-psp.pdf"
         css: "btn btn-xs btn-outline-primary d-lg-block px-5"
    -
      title: Firma l’accordo digitalmente
      desc: "Scarica il modulo, firmalo digitalmente e invialo via PEC a: <accordipsp@pec.pagopa.it>"
    -
      title: Inizia l’integrazione con pagoPA
      desc: Se non vuoi farti carico delle attività d’implementazione, puoi nominare un soggetto già aderente alla piattaforma.
    -
      title: Hai bisogno d’aiuto?
      desc: "Consulta le domande frequenti o scrivi a: <account@pagopa.it>"
tariffe:
    -
      title: Diventa Mandatario Qualificato
      desc: "Se hai già aderito a pagoPA, puoi diventare Mandatario di altri PSP e impegnarti a pagare a PagoPA S.p.A. i Corrispettivi per loro conto.<br>In questo modo potrai cumulare i volumi dei PSP di cui hai mandato e, quindi, accedere a una tariffazione più vantaggiosa."
      more:
        label: Contattaci
        url: "mailto:account@pagopa.it"
        css: "pt-3 mt-auto"
    -
      title: Unisciti ad un Mandatario esistente
      desc: "Se sei un PSP aderente a pagoPA, puoi indicare i servizi di pagamento per i quali intendi usufruire di un Mandatario e del relativo cumulo delle rispettive transazioni.\n\n
      Per maggiori informazioni, contatta uno dei Mandatari Qualificati."
      more:
        label: Vedi tutti i mandatari
        url: "../mandatari-elenco/"
        css: "pt-3 mt-auto"
    -
      title: Non sei un PSP?
      desc: "Per svolgere il ruolo di Intermediario tecnologico, scrivi al nostro team per ricevere maggiori informazioni."
      more:
        label: Contattaci
        url: "mailto:account@pagopa.it"
        css: "pt-3 mt-auto"
docs:
    - 
      label: pagoPA Service Agreement (English)
      url: "https://www.pagopa.gov.it/it/prestatori-servizi-di-pagamento/pagopa-service-agreement-psp.pdf"
    - 
      label: SACI - Specifiche attuative dei codici identificativi di versamento, riversamento e rendicontazione
      url: "https://developer.pagopa.it/pago-pa/guides/saci"
    - 
      label: SANP - Specifiche Attuative del Nodo dei Pagamenti-SPC
      url: 'https://developer.pagopa.it/pago-pa/guides/sanp'
---


{% include components/grid-by-step.html source=page.passi %}


{:.heading-border-bottom .pb-2 .mb-3 .mt-3 .mt-lg-5}
### Potrebbe interessarti

{%include components/grid-simple.html 
          source=page.tariffe
          columns=3
          css_wrapper="my-3 my-md-5"
          %}

<div class="d-flex align-items-center heading-border-bottom my-4">
  <h4>Risorse utili</h4>
  <div class="ml-auto">
    <a href="../documentazione/" class="read-more" title="Vedi tutti i documenti">
      <span class="text">Tutti i documenti</span>
      <svg class="icon">
          <use xlink:href="/assets/bootstrap-italia/dist/svg/sprite.svg#it-arrow-right" /></use>
      </svg>
    </a>
  </div>
</div>
{%include components/list.html
          source=page.docs
          %}