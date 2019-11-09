---
layout: page
title: Lavora con noi
description:
lang: it
ref: lavora-con-noi
order: 25
child_of_ref: [reclutamento-del-personale, pagopa-spa]
redirect_from:
  - /lavora-con-noi
  - /it/lavora-con-noi
layout_wide: true
---

<blockquote class="blockquote small rounded p-4 lightgrey-bg-c1">
Da oggi è online l’avviso pubblico per selezionare nuove competenze che, con il nostro Ministero dell’Innovazione, lavoreranno per migliorare il nostro paese. Infatti nelle prossime settimane nuove risorse verranno assunte da PagoPa SpA, la società pubblica che gestisce la piattaforma per i pagamenti digitali della Pubblica Amministrazione. Il progetto sul quale siete chiamati a lavorare è fondamentale per diventare un Paese efficiente e digitale. Con PagoPA SpA tutti i pagamenti dei servizi della PA potranno essere effettuati direttamente online. Tutto questo significa più sicurezza, più trasparenza, più facilità per il cittadino e per i nostri colleghi della PA.
Quella che parte in queste ore con PagoPa SpA e che proseguirà con altri progetti è una vera e propria chiamata ai talenti, dall’Italia e dall’estero.
Se hai il profilo giusto e credi come me che l’Italia diventerà un Paese innovativo, digitalizzato, efficiente e attrattivo a livello mondiale, invia il tuo CV. E in bocca al lupo!
<footer class="blockquote-footer p-2">Paola Pisano, Ministro per l'Innovazione Tecnologica e la Digitalizzazione</footer>
</blockquote>

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
  <dd class="col-sm-9">Roma, Milano, remote working</dd>
</dl>

<div class="jobpositions">
{% for one_page in open_jobs_pages %}
    <hr>
    <div>
    <a href="{{ one_page.url }}" title="{{ one_page.title }}"><b>{{ one_page.title }}</b></a>
    {% if one_page.is_new %}
        <span style="font-size:12px;">&nbsp;New</span>
    {% endif %}
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
  </div>
  <hr>
  {% endfor %}
</div>
{% endif %}
