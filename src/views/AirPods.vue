<template>
  <div>
    <section class="bg-apple-gray-light pt-20 pb-14 md:pb-20 text-center px-5">
      <div class="max-w-[980px] mx-auto">
        <h1 class="section-title mb-3">AirPods</h1>
        <p class="section-subtitle">Som que envolve. Liberdade que conecta.</p>
      </div>
    </section>

    <section class="apple-section">
      <div class="max-w-[980px] mx-auto">
        <div class="bg-white rounded-2xl p-8 md:p-16 text-center border border-apple-gray-border/40 max-w-2xl mx-auto">
          <span class="badge-default">
            {{ airpods.tag }}
          </span>

          <!-- Imagem real dos AirPods -->
          <div class="my-8 flex items-center justify-center">
            <img :src="airpods.image" :alt="airpods.name"
              class="w-full max-w-[320px] md:max-w-[420px] object-contain mx-auto rounded-3xl" />
          </div>

          <h2 class="text-xl md:text-3xl font-bold mb-2 text-apple-text">
            {{ airpods.name }}
          </h2>

          <p class="text-apple-gray text-sm md:text-base max-w-md mx-auto mb-6">
            {{ airpods.description }}
          </p>

          <div class="flex flex-wrap gap-1.5 justify-center mb-6">
            <span v-for="s in airpods.specs" :key="s"
              class="text-[10px] md:text-xs text-apple-gray bg-apple-gray-light px-2.5 py-1 rounded-full">
              {{ s }}
            </span>
          </div>

          <a :href="wpp + '?text=' + airpods.whatsapp" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-2 bg-[#25D366] text-white no-underline px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-[#20bd5a] hover:shadow-[0_4px_14px_rgba(37,211,102,0.35)]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>

            Comprar via WhatsApp
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-3xl mx-auto">
          <div v-for="tip in tips" :key="tip.title"
            class="rounded-2xl p-6 text-center border border-apple-gray-border/40 bg-white hover:shadow-[0_2px_16px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-0.5">
            <div class="text-2xl mb-3">
              {{ tip.icon }}
            </div>

            <h3 class="text-sm font-semibold mb-1 text-apple-text">
              {{ tip.title }}
            </h3>

            <p class="text-apple-gray text-xs">
              {{ tip.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { airpods, social } from '@/data/products'

const { whatsappUrl: wpp } = social

const tips = [
  {
    icon: '🎵',
    title: 'Áudio Adaptativo',
    desc: 'O AirPods Pro 2 se adapta ao ambiente, ajustando cancelamento e transparência em tempo real.',
  },
  {
    icon: '🔇',
    title: 'Cancelamento 2x melhor',
    desc: 'O chip H2 proporciona cancelamento de ruído ativo duas vezes mais eficiente.',
  },
  {
    icon: '🫶',
    title: 'Conforto Total',
    desc: 'Design ergonômico com quatro tamanhos de pontas de silicone para um ajuste perfeito.',
  },
]
</script>