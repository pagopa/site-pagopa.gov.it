---
layout: page
title: Notizie
lang: it
ref: notizie
order: 4
redirect_from:
    - /it/documentazione/comunicazioni/
submenu: 
    - title: Notizie
    - title: Risorse per i media
docs: 
    -
     label: "Piattaforma pagoPA - Fact sheet"
     url: "/assets/download/pagopa_fact_sheet.pdf"
---

<div class="row ">
    <div class="col-12 col-lg-3 affix-parent">
        {% include components/sidebarnav.html
        title="Esplora"
        menustring="Esplora"
        source=page.submenu %}
    </div>
    <div class="col-12 col-lg-9">
        <div id="n1">
            {% include components/grid-posts.html omit_title=true readmore=true limit=18 %}
        </div>
        <div class="py-3 my-3"></div>
        <div class="d-flex align-items-center heading-border-bottom my-4" id="n2">
        <h3>Risorse per i media</h3>
        </div>
        {%include components/list.html
                source=page.docs
                %}
    </div>
</div>
