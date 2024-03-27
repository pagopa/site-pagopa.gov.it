---
layout: default
title: Home
hero_title: Paga come vuoi,<br>quando vuoi!
hero_description: pagoPA è la piattaforma digitale che ti permette di effettuare pagamenti verso la Pubblica Amministrazione e non solo, in maniera trasparente e intuitiva.
lang: it
ref: homepage
redirect_from:
  - /it/pagopa/
order: 1
js:
  -
    url: /assets/dashboard/_next/static/chunks/pages/widget.js
blocks:
  - title: Un sistema semplice e trasparente per i tuoi pagamenti verso le PA
    label: Per i cittadini
    body: "pagoPA è la piattaforma nazionale che ti permette di scegliere, secondo le tue abitudini e preferenze, come pagare tributi, imposte o rette verso la Pubblica Amministrazione e altri soggetti aderenti che forniscono servizi al cittadino."
    buttons:
      - label: Scopri di più
        url: "/it/cittadini/vantaggi/"
        css: "btn  btn-primary px-5 d-block d-lg-inline mr-lg-3 mb-2"
      - label: Dove pagare
        url: "/it/cittadini/dove-pagare/"
        css: "btn btn-outline-primary px-5 d-block d-lg-inline"
    img: "/assets/images/home/home-1.jpg"
  - title: Un modo più semplice per gestire e rendicontare i pagamenti
    label: Per le Pubbliche Amministrazioni
    body: "pagoPA permette alle Pubbliche Amministrazioni di gestire gli incassi in modo centralizzato, offrendo servizi automatici di rendicontazione e riconciliazione con un significativo risparmio nei costi di gestione."
    buttons:
      - label: Scopri di più
        url: "/it/pubbliche-amministrazioni/vantaggi/"
        css: "btn  btn-primary px-5 d-block d-lg-inline mr-lg-3 mb-2"
      - label: Come aderire
        url: "/it/pubbliche-amministrazioni/come-aderire/"
        css: "btn btn-outline-primary px-5 d-block d-lg-inline"
    img: "/assets/images/home/home-2.jpg"
  - title: Milioni di cittadini e imprese da raggiungere con i tuoi servizi
    label: Per i PSP
    body: "Con pagoPA, hai un accesso diretto al settore dei pagamenti per i servizi pubblici e puoi promuovere la tua offerta multicanale da un'unica piattaforma, portando valore aggiunto a una vasta platea di nuovi utenti."
    buttons:
      - label: Scopri di più
        url: "/it/prestatori-servizi-di-pagamento/vantaggi/"
        css: "btn  btn-primary px-5 d-block d-lg-inline mr-lg-3 mb-2"
      - label: Come aderire
        url: "/it/prestatori-servizi-di-pagamento/come-aderire/"
        css: "btn btn-outline-primary px-5 d-block d-lg-inline"
    img: "/assets/images/home/home-3.jpg"
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
