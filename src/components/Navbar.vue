<template>
  <nav ref="navRef" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="scrolled
    ? 'bg-white/80 backdrop-blur-xl border-b border-apple-gray-border/50'
    : 'bg-white border-b border-transparent'
    ">
    <!-- Overlay mobile -->
    <div v-if="menuOpen" class="fixed inset-0 z-40 bg-black/20 md:hidden" @click="closeMenu"></div>

    <div class="max-w-[980px] mx-auto flex items-center justify-between h-11 md:h-12 px-5">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-1.5 no-underline group relative z-[60]" @click="closeMenu">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M14.738 5.435a4.167 4.167 0 00-1.971-3.474A4.228 4.228 0 009.006 2.98a4.228 4.228 0 00-3.76-1.019A4.167 4.167 0 003.276 5.435C2.425 8.076 4.09 12.245 6.6 13.1c.737.252 1.27.025 1.708-.176.396-.181.764-.347 1.35-.347s.954.166 1.35.347c.438.2.971.428 1.707.176 2.512-.855 4.177-5.024 3.325-7.665h-.002z"
            fill="currentColor" />
          <path
            d="M10.08 1.591a3.877 3.877 0 01.89-.99A3.902 3.902 0 009.067 0c-.193.627-.104 1.29.264 1.835.16.24.365.447.603.606a3.634 3.634 0 01.146-.85z"
            fill="currentColor" />
        </svg>

        <span class="text-[14px] font-semibold text-apple-text tracking-tight">
          iPhones.com
        </span>
      </router-link>

      <!-- Menu -->
      <!-- <div ref="menuRef" class="
          flex items-center gap-1
          max-md:fixed max-md:top-0 max-md:right-0 max-md:z-50
          max-md:w-[280px] max-md:h-screen max-md:bg-white
          max-md:flex-col max-md:pt-20 max-md:px-8
          max-md:shadow-xl max-md:transition-transform max-md:duration-300
          max-md:border-l max-md:border-apple-gray-border
        " :class="menuOpen ? 'max-md:translate-x-0' : 'max-md:translate-x-full'" @click.stop>
        <router-link v-for="link in links" :key="link.to" :to="link.to" class="
            text-[12px] text-apple-gray no-underline font-medium tracking-wide
            hover:text-apple-text transition-colors duration-200
            px-3 py-1.5 rounded-full
            max-md:w-full max-md:py-3 max-md:px-4 max-md:text-sm
            max-md:text-center
          " :class="{ 'text-apple-text bg-apple-gray-light/50': isActive(link.to) }" @click="closeMenu">
          {{ link.label }}
        </router-link>

        <div class="flex items-center gap-2 ml-2 max-md:mt-6 max-md:w-full max-md:flex-col max-md:gap-3">
          <a :href="instagramUrl" target="_blank"
            class="text-apple-gray hover:text-apple-text transition-colors duration-200 p-1.5" aria-label="Instagram"
            @click="closeMenu">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>

          <a :href="whatsappUrl" target="_blank"
            class="text-apple-gray hover:text-apple-text transition-colors duration-200 p-1.5" aria-label="WhatsApp"
            @click="closeMenu">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>

        </div>
        <div
          class="hidden max-md:flex mt-auto w-full flex-col items-center justify-center pb-[calc(2rem+env(safe-area-inset-bottom))]">
          <div
            class="w-full border-t border-apple-gray-border/40 pt-5 flex flex-col items-center gap-2 text-[11px] text-apple-gray/60">
            <span>Desenvolvido por</span>

            <a href="https://devlabdigital.com.br" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center justify-center no-underline transition-opacity duration-200 hover:opacity-80"
              @click="menuOpen = false">
              <img src="https://www.devlabdigital.com.br/assets/logo/devlabdigital-bg-bl.png" alt="DevLab Digital"
                class="h-7 w-auto brightness-0 opacity-80" />
            </a>
          </div>
        </div>
      </div> -->

      <div ref="menuRef" class="
    flex items-center gap-1
    max-md:fixed max-md:top-0 max-md:right-0 max-md:z-50
    max-md:w-[280px] max-md:h-screen max-md:bg-white
    max-md:flex-col max-md:pt-20 max-md:px-8
    max-md:shadow-xl max-md:transition-transform max-md:duration-300
    max-md:border-l max-md:border-apple-gray-border
  " :class="menuOpen ? 'max-md:translate-x-0' : 'max-md:translate-x-full'" @click.stop>
        <router-link v-for="link in links" :key="link.to" :to="link.to" class="
      text-[12px] text-apple-gray no-underline font-medium tracking-wide
      hover:text-apple-text transition-colors duration-200
      px-3 py-1.5 rounded-full
      max-md:w-full max-md:py-3 max-md:px-4 max-md:text-sm
      max-md:text-center
    " :class="{ 'text-apple-text bg-apple-gray-light/50': isActive(link.to) }" @click="menuOpen = false">
          {{ link.label }}
        </router-link>

        <div class="flex items-center gap-2 ml-2 max-md:mt-6 max-md:w-full max-md:flex-col max-md:gap-4">
          <!-- Instagram -->
          <a :href="instagramUrl" target="_blank" rel="noopener noreferrer"
            class="text-apple-gray hover:text-apple-text transition-colors duration-200 p-1.5 flex items-center justify-center"
            aria-label="Instagram" @click="menuOpen = false">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>

          <!-- WhatsApp -->
          <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer"
            class="text-apple-gray hover:text-apple-text transition-colors duration-200 p-1.5 flex items-center justify-center"
            aria-label="WhatsApp" @click="menuOpen = false">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>

        <!-- Desenvolvido por DevLab no menu mobile -->
        <div
          class="hidden max-md:flex mt-auto w-full flex-col items-center justify-center pb-[calc(2rem+env(safe-area-inset-bottom))]">
          <div
            class="w-full border-t border-apple-gray-border/40 pt-5 flex flex-col items-center gap-2 text-[11px] text-apple-gray/60">
            <span>Desenvolvido por</span>

            <a href="https://devlabdigital.com.br" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center justify-center no-underline transition-opacity duration-200 hover:opacity-80"
              @click="menuOpen = false">
              <img src="https://www.devlabdigital.com.br/assets/logo/devlabdigital-bg-bl.png" alt="DevLab Digital"
                class="h-7 w-auto brightness-0 opacity-80" />
            </a>
          </div>
        </div>
      </div>

      <!-- Botão sanduíche / X -->
      <button type="button"
        class="hidden max-md:flex flex-col gap-[5px] bg-transparent border-none p-2 cursor-pointer relative z-[60]"
        aria-label="Menu" :aria-expanded="menuOpen" @click.stop="toggleMenu">
        <span class="block w-[18px] h-[1.5px] bg-[#1d1d1f] rounded transition-all duration-300"
          :class="menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''" />

        <span class="block w-[18px] h-[1.5px] bg-[#1d1d1f] rounded transition-all duration-300"
          :class="menuOpen ? 'opacity-0' : ''" />

        <span class="block w-[18px] h-[1.5px] bg-[#1d1d1f] rounded transition-all duration-300"
          :class="menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''" />
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { social } from '@/data/products'

const route = useRoute()
const { whatsappUrl, instagramUrl } = social

const links = [
  { to: '/macbook', label: 'MacBook' },
  { to: '/iphone', label: 'iPhone' },
  { to: '/ipad', label: 'iPad' },
  { to: '/airpods', label: 'AirPods' },
]

const scrolled = ref(false)
const menuOpen = ref(false)
const navRef = ref(null)
const menuRef = ref(null)

function isActive(path) {
  return route.path === path
}

function handleScroll() {
  scrolled.value = window.scrollY > 10
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

function handleKeydown(event) {
  if (event.key === 'Escape') {
    closeMenu()
  }
}

watch(
  () => route.fullPath,
  () => {
    closeMenu()
  }
)

watch(menuOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>