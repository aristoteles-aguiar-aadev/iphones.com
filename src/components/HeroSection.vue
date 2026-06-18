<template>
  <section
    class="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 pb-10 bg-white overflow-hidden">
    <div v-if="bgImage" class="absolute inset-0 pointer-events-none flex items-center justify-center">
      <img :src="bgImage" alt="" class="w-full h-full object-cover opacity-[0.15]" />
    </div>


    <section class="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      <!-- Vídeo de background -->
      <video class="absolute inset-0 w-[110%] h-[80%] object-cover z-0 rounded-[32px]" autoplay muted loop playsinline
        preload="auto">
        <source src="../assets/iphone-mac-video.mov" type="video/mp4" />
      </video>

      <!-- Overlay escuro para melhorar leitura -->
      <div class="absolute inset-0 bg-black/1 z-[1]"></div>

      <!-- Conteúdo centralizado -->
      <div class="relative z-10 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center">
        <span v-if="badge" class="badge-new">
          {{ badge }}
        </span>

        <h1 class="text-[42px] md:text-[62px] lg:text-[72px] font-bold tracking-tight leading-[1.05] text-white mb-4">
          {{ title }}
        </h1>

        <p v-if="subtitle" class="text-[19px] md:text-[24px] text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          {{ subtitle }}
        </p>

        <div class="flex items-center justify-center gap-6 flex-wrap">
          <a :href="ctaLink" target="_blank" class="apple-btn-outline">
            {{ ctaText }}
          </a>
        </div>
      </div>
    </section>

  </section>
</template>

<script setup>
defineProps({
  title: { type: String, default: 'iPhones.com' },
  subtitle: { type: String, default: '' },
  badge: { type: String, default: '' },
  ctaText: { type: String, default: 'Fale Conosco' },
  ctaLink: { type: String, default: '#' },
  bgImage: { type: String, default: '' }
})
</script>
