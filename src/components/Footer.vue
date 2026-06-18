<template>
  <footer class="bg-apple-gray-light border-t border-apple-gray-border/50 pt-8 pb-6 px-5">
    <div class="max-w-[980px] mx-auto">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
        <div>
          <h4 class="text-[11px] font-semibold uppercase tracking-[1px] text-apple-text/60 mb-3">Produtos</h4>
          <router-link
            v-for="p in products"
            :key="p.to"
            :to="p.to"
            class="block text-[12px] text-apple-gray no-underline mb-[5px] transition-colors duration-200 hover:text-apple-text"
          >
            {{ p.label }}
          </router-link>
        </div>
        <div>
          <h4 class="text-[11px] font-semibold uppercase tracking-[1px] text-apple-text/60 mb-3">Redes</h4>
          <a :href="whatsappUrl" target="_blank" class="block text-[12px] text-apple-gray no-underline mb-[5px] transition-colors duration-200 hover:text-apple-text">WhatsApp</a>
          <a :href="instagramUrl" target="_blank" class="block text-[12px] text-apple-gray no-underline mb-[5px] transition-colors duration-200 hover:text-apple-text">Instagram</a>
          <a href="mailto:contato@iphones.com" class="block text-[12px] text-apple-gray no-underline mb-[5px] transition-colors duration-200 hover:text-apple-text">E-mail</a>
        </div>
        <div>
          <h4 class="text-[11px] font-semibold uppercase tracking-[1px] text-apple-text/60 mb-3">Horários</h4>
          <p class="text-[12px] text-apple-gray mb-[5px]">Seg–Sex: 9h–19h</p>
          <p class="text-[12px] text-apple-gray mb-[5px]">Sáb: 9h–17h</p>
          <p class="text-[12px] text-apple-gray">Dom: Fechado</p>
        </div>
        <div>
          <h4 class="text-[11px] font-semibold uppercase tracking-[1px] text-apple-text/60 mb-3">Sobre</h4>
          <p class="text-[12px] text-apple-gray leading-relaxed">Sua loja especializada Apple em Fortaleza. Produtos originais com garantia.</p>
        </div>
      </div>

      <div class="pt-5 border-t border-apple-gray-border/40 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-apple-gray/60">
        <span>&copy; 2026 iPhones.com — Todos os direitos reservados.</span>
        <div class="flex items-center gap-1.5">
          <span>Desenvolvido por</span>
          <a href="https://devlabdigital.com.br" target="_blank" rel="noopener" class="inline-flex items-center gap-1 text-apple-gray no-underline transition-colors duration-200 hover:text-apple-text">
            <img src="https://www.devlabdigital.com.br/assets/logo/devlabdigital-bg-bl.png" alt="devlab" class="h-3.5 w-auto brightness-0 opacity-40 hover:opacity-70 transition-opacity" />
            <span class="font-medium">devlabdigital.com.br</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { social } from '@/data/products'

const { whatsappUrl, instagramUrl } = social

const products = [
  { to: '/iphone', label: 'iPhone' },
  { to: '/macbook', label: 'MacBook' },
  { to: '/ipad', label: 'iPad' },
  { to: '/airpods', label: 'AirPods' },
]
</script>
