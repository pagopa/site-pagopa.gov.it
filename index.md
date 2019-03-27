---
layout: default
title: Home
description: Questo è un esempio di homepage con utilizzo del componente "hero"
lang: it
ref: homepage
order: 1
---

{% include hero.html %}

<main>
<div  class="container my-5">
    <div class="row">
        <div class="col-12">
            {% include pages/home/home-video.html %}
        </div>
    </div>
    <div class="row">
            <div class="col-12 col-lg-8 offset-lg-2">
                {% include pages/home/home-newsletter-box.html %}
            </div>
        </div>
    <div class="row">
        {% include pages/home/home-sections.html %}
    </div>
    </div>
</main>

<div class="col-12">
  <div class="section section-muted">
    <div class="section-content">
      <!-- contenuto di esempio START -->
      <h4 class="mb-4">Morbi fermentum amet</h4>
      <div class="card-deck">
        <div class="card shadow border-0 mg-md-4">
          <div class="card-body">
            <p class="card-text">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus. Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. </p>
          </div>
        </div>
        <div class="card shadow border-0 mg-md-4">
          <div class="card-body">
            <p class="card-text">Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus. Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus elementum sagittis.</p>
          </div>
        </div>
      </div>
      <!-- contenuto di esempio END -->
    </div>
  </div>
</div>
