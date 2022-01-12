---
layout: page
title: Trasparenza costi
title_hero: Scopri i costi applicati dai gestori aderenti
description: "Ogni gestore aderente a pagoPA (detto anche PSP, Prestatore di Servizio di Pagamento) ti permette di effettuare pagamenti su diversi canali e con metodi a te più comodi. Per una scelta più consapevole, consulta i costi applicati dai gestori: puoi filtrare per importo, canale e metodo di pagamento."
lang: it
order: 4
ref: cittadini-trasparenza-costi
child_of_ref: cittadini
passi:
  -
    title: Qual è l'importo da pagare?
    type: number
    label: importo
    desc: Digita un importo
  -
    title: Dove preferisci pagare?
    type: select
    label: checkout
    desc: Scegli dove pagare
    options: psp-pagamenti
  -
    title: Con quale metodo vuoi pagare?
    type: select
    label: metodo
    desc: Scegli come pagare
    options: psp-metodi
---

{% include components/grid-input-step.html source=page.passi %}
