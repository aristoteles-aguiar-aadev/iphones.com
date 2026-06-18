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
          <router-link to="/macbook" class="apple-btn">Ver todos os modelos de MacBook →</router-link>
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
          <router-link to="/iphone" class="apple-btn">Ver todos os modelos de iPhone →</router-link>
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
          <router-link to="/ipad" class="apple-btn">Ver todos os modelos de iPad →</router-link>
        </div>
      </div>
    </section>

    <section class="apple-section-alt">
      <div class="max-w-[980px] mx-auto">
        <div class="text-center mb-12 fade-section">
          <h2 class="section-title mb-2">AirPods</h2>
          <p class="section-subtitle">Som que envolve. Liberdade que conecta.</p>
        </div>

        <div class="bg-white rounded-2xl p-8 md:p-14 text-center border border-apple-gray-border/40 max-w-2xl mx-auto">
          <span class="badge-default">{{ airpods.tag }}</span>

          <div class="my-8 flex items-center justify-center">
            <img :src="airpods.image" :alt="airpods.name"
              class="w-full max-w-[320px] md:max-w-[420px] object-contain mx-auto rounded-3xl" />
          </div>

          <h3 class="text-xl md:text-3xl font-bold mb-2 text-apple-text">
            {{ airpods.name }}
          </h3>

          <p class="text-apple-gray text-sm md:text-base max-w-md mx-auto mb-6">
            {{ airpods.description }}
          </p>

          <div class="flex flex-wrap gap-1.5 justify-center mb-6">
            <span v-for="s in airpods.specs" :key="s"
              class="text-[10px] md:text-xs text-apple-gray bg-apple-gray-light px-2.5 py-1 rounded-full">
              {{ s }}
            </span>
          </div>

          <a :href="whatsappUrl + '?text=' + airpods.whatsapp" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-2 bg-[#25D366] text-white no-underline px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-[#20bd5a] hover:shadow-[0_4px_14px_rgba(37,211,102,0.35)]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>

            Comprar via WhatsApp
          </a>
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

}
</style>
