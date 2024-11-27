---
layout: page
title: Elenco aderenti
title_hero: Partner e intermediari tecnologici
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
maintenance: true
---

{% if page.maintenance == true %}
  <div class="alert alert-info mb-5" role="alert">
    Pagina in manutenzione
  </div>
{% else %}
  {% include elenco-pt-int.html %}
{% endif %}