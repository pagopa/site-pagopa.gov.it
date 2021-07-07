---
layout: page
title: Documentazione
title_hero: Documentazione per PA ed Enti Creditori
lang: it
ref: pubbliche-amministrazioni-documentazione
order: 51
child_of_ref: pubbliche-amministrazioni
---

{% assign docs = site.data.pa-documentazione %}
<div class="row ">
<div class="col-12 col-lg-3 affix-parent">
    {% include components/sidebarnav.html
       title="Argomenti"
       menustring="Naviga per argomento"
       source=docs %}
</div>
<div class="col-12 col-lg-9">
    {% for group in docs %}
        <div class="my-2 my-md-5" id="n{{forloop.index}}" >
        {%include components/list.html
            source=group.docs
            title=group.title
            %}
        </div>
    {% endfor %}
</div>
</div>