---
layout: default
title: Home
hero_title: Paga quando vuoi,<br>dove vuoi!
hero_description: pagoPA è la piattaforma digitale che permette ai cittadini di effettuare pagamenti verso la Pubblica Amministrazione, in maniera trasparente e intuitiva.
lang: it
ref: homepage
order: 1
blocks: 
  - title: Un sistema semplice e trasparente per i tuoi pagamenti verso le PA
    label: Per i cittadini
    body: "Qui serve un testo che spiega la value proposition di pagoPA per il cittadino: grazie a pagoPA puoi scegliere dove pagare, a chi dare i costi di commissione e non devi preoccuparti della ricevuta."
    buttons:
      - label: Scopri di più
        url: "#"
        css: "btn  btn-primary px-5 d-block d-lg-inline mr-lg-3 mb-2"
      - label: Dove pagare
        url: "#"
        css: "btn btn-outline-primary px-5 d-block d-lg-inline"
    img: "/assets/images/jonas-leupe-426231-unsplash.jpg"
  - title: Un modo più semplice per gestire e rendicontare i pagamenti
    label: Per le Pubbliche Amministrazioni
    body: "pagoPA permette alle Pubbliche Amministrazioni di gestire i pagamenti in modo centralizzato, offrendo servizi automatici di rendicontazione e riconciliazione con un significativo risparmio nei costi di gestione."
    buttons:
      - label: Scopri di più
        url: "#"
        css: "btn  btn-primary px-5 d-block d-lg-inline mr-lg-3 mb-2"
      - label: Come aderire
        url: "#"
        css: "btn btn-outline-primary px-5 d-block d-lg-inline"
    img: "/assets/images/jonas-leupe-426231-unsplash.jpg"
  - title: Main value proposition per i Prestatori di Servizi di Pagamento
    label: Per i PSP
    body: "Qui serve un testo che spiega la value proposition di pagoPA per i PSP: aumento prospect? possibilità di offrire servizi a valore aggiunto? unico interlocutore?"
    buttons:
      - label: Scopri di più
        url: "#"
        css: "btn  btn-primary px-5 d-block d-lg-inline mr-lg-3 mb-2"
      - label: Come aderire
        url: "#"
        css: "btn btn-outline-primary px-5 d-block d-lg-inline"
    img: "/assets/images/jonas-leupe-426231-unsplash.jpg"
---

{% include hero.html %}

<main>
<div  class="container my-3 my-md-5 ">
    <section class="my-3 my-lg-5">
      {% for block in page.blocks %}
        {% capture alt %}{% cycle "odd","even" %}{%endcapture%}
        {% include components/text-block.html alt=alt source=block %}
      {%endfor%}
    </section>
    <section class="my-3 my-md-5">
      {% include components/grid-posts.html %}
    </section>
    <section class="my-3 my-md-5">
      {% include components/dashboard.html %}
    </section>
    </div>
</main>
<div class="py-3"></div>
<section id="newsletter" class="section-newsletter" >
        <div class="container py-3 py-lg-5">
          <div class="row">
            <div class="col-12 col-lg-8 offset-lg-2">
                {% include pages/home/home-newsletter-box.html %}
            </div>
          </div>
        </div>
</section>
