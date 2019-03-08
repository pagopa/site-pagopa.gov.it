---
layout: default
title: Numeri e roadmap
description: Descrizione della pagina "Numeri e roadmap"
lang: it
ref: cos-e-pago-pa-numeri-e-roadmap
permalink: /cos-e-pago-pa/numeri-e-roadmap
order: 22
child_of_ref: cos-e-pago-pa
---

<div class="container my-2">
  <nav class="breadcrumb-container" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/">Home</a><span class="separator">&gt;</span></li>
      <li class="breadcrumb-item"><a href="/cos-e-pago-pa">Cos’è pagoPA</a><span class="separator">&gt;</span></li>
      <li class="breadcrumb-item active" aria-current="page">{{ page.title }}</li>
    </ol>
  </nav>
</div>

<main class="container my-5">
    <div class="row">
    <div class="col-12 col-lg-8">
        <h2 class="it-page-section" id="numeri">Numeri</h2>
        <p>I dati delle dashboard vengono aggiornati su base settimanale. Ultimo aggiornamento: <span id="getmonday"></span></p>
        <iframe src="https://dashboard.teamdigitale.governo.it/public/dashboard/2c8ee2ee-fa84-4dbf-8b6a-e7fb5f9ca950" frameborder="0" width="100%" height="600" allowtransparency=""></iframe>
        <h2 class="it-page-section" id="roadmap">Roadmap</h2>
        {% include pages/cos-e-pago-pa-roadmap.html %}
    </div>
    <div class="col-12 col-lg-4">
        <nav class="navbar it-navscroll-wrapper navbar-expand-lg it-bottom-navscroll it-left-side affix-top">
          <button class="custom-navbar-toggler" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" data-target="#navbarNav"><span class="it-list"></span>Menu</button>
          <div class="navbar-collapsable" id="navbarNav">
            <div class="overlay"></div>
            <div class="close-div sr-only">
              <button class="btn close-menu" type="button"><svg class="icon icon-sm icon-primary align-top"><use xlink:href="{{ site.baseurl }}/assets/bootstrap-italia/dist/svg/sprite.svg#it-close"></use></svg>Chiudi</button>
            </div>
            <a class="it-back-button" href="#"><svg class="icon icon-sm icon-primary align-top"><use xlink:href="{{ site.baseurl }}/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-left"></use></svg><span>Indietro </span></a>
            <div class="menu-wrapper">
              <div class="link-list-wrapper">
                <ul class="link-list">
                  <li class="nav-item">
                    <a class="nav-link" href="#numeri"><span>Numeri</span></a>
                    <a class="nav-link" href="#roadmap"><span>Roadmap</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
</main>
