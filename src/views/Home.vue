<template>
  <div>
    <HeroSection title="iPhones.com"
      subtitle="Sua loja especializada Apple em Fortaleza. Produtos originais com garantia."
      badge="iPhone, MacBook Air e Pro, iPad, AirPods já disponíveis" ctaText="Fale Conosco no WhatsApp"
      :ctaLink="whatsappUrl" />

    <section class="apple-section">
      <div class="max-w-[980px] mx-auto">
        <div class="text-center mb-12 fade-section">
          <h2 class="section-title mb-2 ">MacBook</h2>
          <p class="section-subtitle">Potência que redefine o possível.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <ProductCard v-for="p in macbooks" :key="p.id" :product="p" />
        </div>
        <div class="text-center mt-10">
          <router-link to="/macbook" class="apple-btn">Ver mais detalhes de MacBook →</router-link>
        </div>
      </div>
    </section>

    <section class="apple-section-alt">
      <div class="max-w-[980px] mx-auto">
        <div class="text-center mb-12 fade-section">
          <h2 class="section-title mb-2">iPhone</h2>
          <p class="section-subtitle">O melhor da Apple em cada detalhe.</p>
        </div>
        <div class="product-grid">
          <ProductCard v-for="p in iphones" :key="p.id" :product="p" />
        </div>
        <div class="text-center mt-10">
          <router-link to="/iphone" class="apple-btn">Ver mais detalhes de iPhone →</router-link>
        </div>
      </div>
    </section>

    <section class="apple-section">
      <div class="max-w-[980px] mx-auto">
        <div class="text-center mb-12 fade-section">
          <h2 class="section-title mb-2">iPad</h2>
          <p class="section-subtitle">Versatilidade para criar, estudar e trabalhar.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          <ProductCard v-for="p in ipads" :key="p.id" :product="p" />
        </div>
        <div class="text-center mt-10">
          <router-link to="/ipad" class="apple-btn">Ver mais detalhes de iPad →</router-link>
        </div>
      </div>
    </section>

    <!-- <section class="apple-section-alt">
      <div class="max-w-[980px] mx-auto">
        <div class="text-center mb-12 fade-section">
          <h2 class="section-title mb-2">AirPods</h2>
          <p class="section-subtitle">Som que envolve. Liberdade que conecta.</p>
        </div>

        <div class="max-w-2xl mx-auto">
          <ProductCard :product="airpods" />
        </div>

        <div class="text-center mt-10">
          <router-link to="/airpods" class="apple-btn">
            Ver mais detalhes de AirPods →
          </router-link>
        </div>
      </div>
    </section> -->
    <section class="apple-section-alt">
      <div class="max-w-[980px] mx-auto">
        <div class="text-center mb-12 fade-section">
          <h2 class="section-title mb-2">AirPods</h2>
          <p class="section-subtitle">Som que envolve. Liberdade que conecta.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-3xl mx-auto">
          <ProductCard v-for="p in airpods" :key="p.id" :product="p" />
        </div>

        <div class="text-center mt-10">
          <router-link to="/airpods" class="apple-btn">
            Ver mais detalhes de AirPods →
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import "../style.css"
import HeroSection from '@/components/HeroSection.vue'
import ProductCard from '@/components/ProductCard.vue'
import { macbooks, iphones, ipads, airpods, social } from '@/data/products'

const { whatsappUrl } = social
</script>

<style scoped>
.mb-12 {
  margin-bottom: 3rem;
  display: contents;
}

.section-title {
  color: #0470E6;
}

.apple-section {
  padding-top: 0rem;
  padding-bottom: 7rem;
}

@media (min-width: 768px) {
  .section-title.display {
    font-size: 3rem;
    display: block;
  }


  .mb-12 {
    margin-bottom: 3rem;
    display: contents;
  }

  .section-title {
    color: #0470E6;
  }

  .apple-section {
    padding-top: 2rem;
    padding-bottom: 7rem;
  }

  .apple-section-alt {
    padding-top: 2rem;
    padding-bottom: 7rem;
  }

}
</style>
