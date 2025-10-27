---
layout: page
title: Privacy
title_hero: Privacy Policy
lang: it
ref: privacy
order: 51
---

{% assign docs = site.data.privacy-documentazione %}
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