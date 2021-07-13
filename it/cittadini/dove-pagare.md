---
layout: page
title: Dove pagare
title_hero: Sei tu a scegliere dove pagare!
description: "Con pagoPA puoi gestire i tuoi pagamenti verso la Pubblica Amministrazione in modo semplice e immediato, sui canali fisici e su quelli online: verifica le opzioni disponibili e scegli quelle più adatte alle tue esigenze."
lang: it
order: 2
ref: cittadini-dove-pagare
child_of_ref: cittadini
redirect_from:
    - /it/dove-pagare/
pagaonline:
    - 
      img: "/assets/images/pictograms/comune.svg"
      title: Sul sito del tuo Ente Creditore
      desc: "Segui i passaggi richiesti dall’Ente e completa il pagamento tramite pagoPA.\n
      **Potrai scegliere il gestore della transazione (PSP) a te più conveniente**."
    - 
      img: "/assets/images/pictograms/computer.svg"
      title: Sul tuo servizio di home banking
      desc: "Accedi al portale della tua banca, cerca nel menu pagoPA e paga con il tuo conto corrente."
    - 
      img: "/assets/images/pictograms/telefono.svg"
      title: Sulla tua app di pagamenti
      desc: "Apri la tua app di pagamenti preferita, cerca nel menu pagoPA e inquadra il codice QR del tuo avviso."
    - 
      img: "/assets/images/pictograms/notifica.svg"
      title: Sui servizi di pagamento online
      desc: "pagoPA è integrato anche nei principali servizi di pagamento online, che puoi utilizzare anche se non sei loro cliente."
pagaoffline:
    - 
      img: "/assets/images/pictograms/banca.svg"
      title: In banca
      desc: "Presso le filiali aderenti o gli sportelli ATM abilitati."
    - 
      img: "/assets/images/pictograms/posteitaliane.svg"
      title: In ufficio postale
      desc: "Utilizzando indifferentemente il codice QR pagoPA o il bollettino postale PA."
    - 
      img: "/assets/images/pictograms/negozio.svg"
      title: Presso gli esercenti convenzionati
      desc: "Cerca il logo pagoPA nei bar,  edicole, farmacie, ricevitorie, supermercati e tabaccherie  convenzionati."
    - 
      img: "/assets/images/pictograms/lettera.svg"
      title: Presso i punti di posta privata
      desc: "Puoi pagare anche nelle agenzie che offrono servizi postali sul territorio."
---

{% include banner-app.html %}

<div class="py-2 py-md-4"></div>

{:.heading-border-bottom .pb-2 .my-md-5}
### Paga online

{%include components/grid-simple.html 
          source=page.pagaonline
          columns=4
          css_wrapper="my-3 my-md-5 img-64"
          %}


<div class="py-1"></div>

{:.heading-border-bottom .pb-2 .my-md-5}
### Paga sul territorio

{%include components/grid-simple.html 
          source=page.pagaoffline
          columns=4
          css_wrapper="my-3 my-md-5 img-64"
          %}

