<script setup lang="ts">
import { funnelImages } from '@/config/funnelContent'
</script>

<template>
  <section class="future section-pad">
    <div class="funnel-container future__inner">
      <div class="future__copy">
        <p class="eyebrow eyebrow--light"><span></span> IMAGINA TU NUEVA RUTINA</p>
        <h2>Te miras al espejo y reconoces una mujer más fuerte, firme y vital.</h2>
        <p>Imagina entrenar con energía, saber exactamente qué hacer y sentir el respaldo de mujeres que avanzan contigo.</p>
        <a class="primary-button" href="#oferta">QUIERO EMPEZAR MI CAMBIO <span>↑</span></a>
      </div>
      <div class="future__photos">
        <img :src="funnelImages[10]" alt="Mujer activa entrenando con Vital 360" loading="lazy">
        <img :src="funnelImages[11]" alt="Transformación física con Luisa Pita Bejarano" loading="lazy">
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.future {
  background: $LPB-GREEN-D;
  color: $white;

  &__inner { justify-content: center; align-items: center; gap: clamp(2rem, 6vw, 6rem); }
  &__copy, &__photos { display: flex; flex: 1 1 0; flex-direction: column; width: 100%; }
  &__copy { align-items: center; gap: 1.4rem; text-align: center; }
  &__copy h2 { color: $white; }
  &__copy > p:not(.eyebrow) { width: 100%; color: rgba($white, 0.75); font-size: 1.05rem; line-height: 1.7; text-align: center; }
  &__photos { flex-direction: row; justify-content: center; align-items: center; max-width: 34rem; gap: 0.8rem; }
  &__photos img { width: 100%; min-width: 0; height: 29rem; object-fit: cover; border: 0.3rem solid rgba($white, 0.2); border-radius: 1rem; }
  &__photos img:last-child { transform: translateY(2rem); }
}

@media (max-width: 800px) {
  .future {
    &__inner { flex-direction: column; }
    &__photos { max-width: none; }
    &__photos img { height: 22rem; }
  }
}
</style>
