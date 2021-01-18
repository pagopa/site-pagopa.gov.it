---
layout: default
title: Home
hero_title: Pagamenti semplici e sicuri per la Pubblica Amministrazione
hero_description: pagoPA è la piattaforma digitale che consente ai cittadini di pagare in modo più naturale, veloce e moderno e che solleva le amministrazioni dai costi e dai ritardi dei metodi di incasso tradizionali.
lang: it
ref: homepage
order: 1
---

{% include hero.html %}

<main>
<div  class="container my-5 ">
    <div class="row">
        <div class="col-12">
            {% include pages/home/home-video.html %}
        </div>
    </div>
    </div>
</main>

<div class="col-12">
  <div class="section section-muted">
    <div class="section-content">
      <div class="card-deck">
        <div class="card shadow border-0 mg-md-4">
          <div class="card-header">
            Pubbliche Amministrazioni
          </div>
          <div class="card-body">
            <p class="card-text"><b>Tutte le Pubbliche Amministrazioni devono aderire al nuovo sistema per legge</b>, e possono integrarsi sia in modalità diretta che in modalità indiretta per mezzo di intermediari tecnologici.</p>
            <a class="read-more" href="{{ site.baseurl }}/it/pubbliche-amministrazioni">
              <span class="text">Leggi di più</span>
              <svg class="icon">
                <use xlink:href="{{ site.baseurl }}/assets/bootstrap-italia/dist/svg/sprite.svg#it-arrow-right"></use>
              </svg>
            </a>
          </div>
        </div>
        <div class="card shadow border-0 mg-md-4">
          <div class="card-header">
            Prestatori Servizi di Pagamento
          </div>
          <div class="card-body">
            <p class="card-text">I Prestatori di Servizi di Pagamento (PSP) come <b>le banche, le poste, gli istituti di pagamento e ogni altro soggetto abilitato ad eseguire servizi di pagamento</b>, aderiscono su base volontaria al sistema pagoPA, per erogare i propri servizi di pagamento a cittadini e imprese attraverso il nodo di pagoPA.</p>
            <a class="read-more" href="{{ site.baseurl }}/it/prestatori-servizi-di-pagamento">
              <span class="text">Leggi di più</span>
              <svg class="icon">
                <use xlink:href="{{ site.baseurl }}/assets/bootstrap-italia/dist/svg/sprite.svg#it-arrow-right"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <!-- contenuto di esempio END -->
    </div>

  </div>
</div>
