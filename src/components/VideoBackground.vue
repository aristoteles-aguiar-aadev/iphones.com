<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <video
      ref="videoRef"
      autoplay
      muted
      loop
      playsinline
      class="absolute inset-0 w-full h-full object-cover opacity-0 scale-110 transition-opacity duration-700"
      :class="{ 'opacity-[0.08]': loaded && !videoFailed }"
      @loadeddata="loaded = true"
      @error="videoFailed = true"
    >
      <source :src="src" type="video/mp4" />
    </video>

    <div v-if="!loaded || videoFailed" class="absolute inset-0 flex items-center justify-center">
      <div class="relative w-full h-full flex items-center justify-center">
        <div class="macbook-fallback">
          <div class="fallback-lid">
            <div class="fallback-screen" />
          </div>
          <div class="fallback-base" />
        </div>
      </div>
    </div>

    <div class="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  src: { type: String, default: '' }
})

const loaded = ref(false)
const videoFailed = ref(false)
</script>

<style scoped>
.macbook-fallback {
  width: 60%;
  max-width: 500px;
  aspect-ratio: 1.6;
  position: relative;
  transform-style: preserve-3d;
  animation: macbookFloat 4s ease-in-out infinite;
}

.fallback-lid {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.02) 100%);
  border-radius: 12px 12px 0 0;
  transform-origin: bottom center;
  animation: lidOpen 2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  border: 1px solid rgba(0,0,0,0.06);
}

.fallback-screen {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 72%;
  height: 78%;
  background: linear-gradient(135deg, rgba(0,113,227,0.08), rgba(41,151,255,0.03));
  border-radius: 6px;
  border: 1px solid rgba(0,0,0,0.04);
}

.fallback-base {
  position: absolute;
  bottom: 0;
  left: -6%;
  right: -6%;
  height: 22%;
  background: linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.01) 100%);
  border-radius: 0 0 14px 14px;
  border: 1px solid rgba(0,0,0,0.04);
  border-top: none;
}

.fallback-base::before {
  content: '';
  position: absolute;
  top: 25%;
  left: 24%;
  right: 24%;
  height: 30%;
  background: rgba(0,0,0,0.02);
  border-radius: 3px;
}

@keyframes lidOpen {
  0% { transform: rotateX(-80deg); }
  60% { transform: rotateX(5deg); }
  80% { transform: rotateX(-2deg); }
  100% { transform: rotateX(0deg); }
}

@keyframes macbookFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
</style>
