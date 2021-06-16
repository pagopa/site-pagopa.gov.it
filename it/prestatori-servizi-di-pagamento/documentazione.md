---
layout: page
title: Documentazione
title_hero: Documentazione per PSP
lang: it
ref: prestatori-servizi-di-pagamento-doc
order: 51
child_of_ref: prestatori-servizi-di-pagamento-come-aderire
child_of_submenu: pagoPA

---

{% assign docs = site.data.psp-documentazione %}

<div class="row">
<div class="col-12 col-lg-3">
    <div class="d-none d-lg-block">
    {% include components/sidebarnav.html
       title="Argomenti"
       source=docs %}
    </div>
</div>
<div class="col-12 col-lg-9">
    {% for group in docs %}
        <a name="{{forloop.index}}"></a>
        <div class="my-2 my-md-4" >
        {%include components/list.html
            source=group.docs
            title=group.title
            %}
        </div>
    {% endfor %}
</div>
</div>