---
layout: page
title: Elenco aderenti
title_hero: Partner e intermediari tecnologici
description: A partire dal 1° febbraio 2025, il Partner Tecnologico verrà qualificato ai sensi della nuova procedura di qualificazione. La lista aggiornata dei Partner Qualificati verrà pubblicata nei mesi di Luglio e di Gennaio di ogni anno.
lang: it
ref: partner-intermediari-elenco
child_of_ref: partner-intermediari
order: 3
firsttypes: ['Sm', 'Sb']
secondtypes: ['Sva', 'Sd']
usedatatables: true
redirect_from:
  - /it/pubbliche-amministrazioni/partner/
  - /it/pubbliche-amministrazioni/intermediari-tecnologici/
maintenance: false
---

{% if page.maintenance == true %}
  <div class="alert alert-info mb-5" role="alert">
    Pagina in manutenzione
  </div>
{% else %}
  {% include elenco-pt-int.html %}
{% endif %}