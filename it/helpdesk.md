---
layout: page
title: Serve aiuto?
description: "Contatta l’assistenza di pagoPA se hai provato ad effettuare un pagamento dal sito del tuo Ente Creditore e non è andato a buon fine.\n\n
**Se invece hai pagato altrove, come ad esempio il tuo home banking o la tua app di pagamenti, rivolgiti all’assistenza del canale che hai utilizzato.**"
lang: it
ref: helpdesk
order: 25
child_of_ref: cos-e-pago-pa
redirect_from:
  - /it/pagopa/helpdesk/
  - /it/documentazione/faq/
footerbanner:
  title: Sei un Ente Creditore o PSP?
  desc: Per domande tecniche relative all’implementazione di pagoPA, puoi aprire una segnalazione direttamente su GitHub
  cta: Apri segnalazione
  url: "https://github.com/pagopa/pagopa-api/issues"
gridbody:
  -
    img: "/assets/images/pictograms/ricevute.svg"
    title: Leggi le domande frequenti
    desc: "Abbiamo provato a dare risposta alle domande più frequenti relative ai problemi durante un pagamento."
    more:
      label: Leggi le FAQ
      url: "https://docs.italia.it/italia/pagopa/pagopa-docs-faq/it/stabile/index.html"
  -
    img: "/assets/images/pictograms/mail.svg"
    title: Scrivi a helpdesk@pagopa.it
    desc: "Allega dati utili per capire meglio il tuo problema, come ad esempio i dati del pagamento, il metodo scelto e screenshot."
    more:
      label: Invia un’email
      url: "mailto:helpdesk@pagopa.it"
  -
    img: "/assets/images/pictograms/telefono.svg"
    title: Chiamaci allo 02/66897805
    desc: "Tieni a portata la documentazione in tuo possesso, così gli operatori potranno aiutarti al meglio."
    more:
      label: Chiama
      url: "tel://+390266897805"
---

{%include components/grid-simple.html 
          source=page.gridbody
          columns=3
          css_wrapper="my-3 my-md-5 img-64"
          %}
