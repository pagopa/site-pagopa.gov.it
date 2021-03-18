---
layout: page
title: Lavora con noi
description:
lang: it
ref: lavora-con-noi
order: 26
child_of_ref: [reclutamento-del-personale, pagopa-spa]
redirect_from:
  - /lavora-con-noi
  - /it/lavora-con-noi
layout_wide: true
---


[Leggi di più su PagoPa S.p.A.](/it/pagopa-spa/)

[Leggi il Regolamento per la ricerca e la selezione del personale](Regolamento_selezione_personale.pdf)

## Posizioni aperte

{: .mt-4}

{% assign jobs_pages = site.pages | where: "lang", page.lang | where: "layout", "job" | sort: "title" %}
{% assign open_jobs_pages = jobs_pages | where_exp: "item", "item.archived == nil" %}
{% assign closed_jobs_pages = jobs_pages | where: "archived", true %}

{% if open_jobs_pages.size == 0 %}
In questo momento non ci sono posizioni aperte. Tieni d’occhio questo sito perché nelle prossime settimane apriremo nuove posizioni.
{% else %}

<dl class="row">
  <dt class="col-sm-3">Durata</dt>
  <dd class="col-sm-9">Tempo indeterminato</dd>

  <dt class="col-sm-3">Tipo di contratto</dt>
  <dd class="col-sm-9">Contratto nazionale di lavoro commercio, servizi e terziario</dd>

  <dt class="col-sm-3">Luogo di lavoro</dt>
  <dd class="col-sm-9">Roma, Milano, smart working</dd>
</dl>

<div class="alert alert-info" role="alert">Prima di inviare la candidatura ricorda di leggere la <a href="/it/privacy-policy/" class="font-weight-bold" >Privacy Policy</a></div>

<div class="jobpositions">
{% for one_page in open_jobs_pages %}
    <hr>
    <div>
    <a href="{{ one_page.url }}" title="{{ one_page.title }}"><b>{{ one_page.title }}</b></a>
    {% if one_page.is_new %}
        <span style="font-size:12px;">&nbsp;New</span>
    {% endif %}
    <p class="text-muted" style="font-size: 0.7rem">Data apertura {{one_page.metadata.apertura}} {% if one_page.metadata.chiusura %}– Data chiusura {{one_page.metadata.chiusura}}{%endif%} </p>
    </div>
{% endfor %}
</div>
{% endif %}

{% if closed_jobs_pages.size > 0 %}

## Posizioni chiuse

{: .mt-4}

<a class="btn btn-primary btn-sm" role="button" data-toggle="collapse" href="#jobsarchive" aria-expanded="false"
  aria-controls="jobsarchive" id="jobsarchive-collapse">
<span class="seeall">{{ site.data.t.CollapseBtnSee[page.lang] }}</span>
<span class="hideall">{{ site.data.t.CollapseBtnHide[page.lang] }}</span>
</a>

<div class="jobpositions archived collapse" id="jobsarchive">
  {% for one_page in closed_jobs_pages %}
  <div>
    <a href="{{ one_page.url }}" title="{{ one_page.title }}"><b>{{ one_page.title }}</b></a> <span
      style="font-size:12px;">&nbsp;Closed</span>
      <p class="text-muted" style="font-size: 0.7rem">Data apertura {{one_page.metadata.apertura}} – Data chiusura {{one_page.metadata.chiusura}} </p>
  </div>
  <hr>
  {% endfor %}
</div>
{% endif %}
