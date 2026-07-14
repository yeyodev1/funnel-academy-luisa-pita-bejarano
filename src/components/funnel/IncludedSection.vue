<script setup lang="ts">
import { funnelImages, includedItems } from '@/config/funnelContent'
</script>

<template>
  <section class="included section-pad">
    <div class="funnel-container included__inner">
      <div class="included__visual">
        <img :src="funnelImages[9]" alt="Bakanology, formación para captar clientes" loading="lazy">
        <div class="included__seal"><strong>100%</strong><span>APLICABLE</span></div>
      </div>
      <div class="included__copy">
        <p class="eyebrow"><span></span> DENTRO DE BAKANOLOGY</p>
        <h2>No necesitas otra biblioteca de videos. Necesitas un mapa.</h2>
        <p class="section-lead">Accede al sistema, los recursos y el acompañamiento para instalar una máquina de captación adaptada a tu negocio.</p>
        <div class="included__list">
          <div v-for="item in includedItems" :key="item" class="included__item">
            <span>✓</span><p>{{ item }}</p>
          </div>
        </div>
        <a href="#oferta" class="primary-button">VER LA OFERTA COMPLETA <span>↓</span></a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.included {
  background: $LPB-SURFACE;

  &__inner { flex-direction: row; align-items: center; gap: clamp(2.5rem, 7vw, 7rem); }
  &__visual, &__copy { display: flex; flex: 1 1 0; flex-direction: column; width: 100%; }
  &__visual { position: relative; max-width: 31rem; overflow: hidden; border-radius: 1.5rem; }
  &__visual img { width: 100%; height: auto; aspect-ratio: 4 / 5; object-fit: cover; }
  &__copy { align-items: flex-start; gap: 1.4rem; }
  &__seal {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 7rem;
    height: 7rem;
    justify-content: center;
    border-radius: 50%;
    background: $primary;
    color: $primary-dark;
    transform: rotate(-7deg);
    strong { width: 100%; text-align: center; font-size: 1.5rem; }
    span { width: 100%; text-align: center; font-size: 0.62rem; font-weight: 900; }
  }
  &__list { display: flex; flex-direction: column; width: 100%; gap: 0.65rem; }
  &__item {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 0.8rem;
    p { width: 100%; color: $primary-dark; font-weight: 650; }
    span { display: flex; justify-content: center; align-items: center; width: 100%; max-width: 1.6rem; height: 1.6rem; flex-shrink: 0; border-radius: 50%; background: $primary; font-weight: 900; }
  }
}

@media (max-width: 800px) {
  .included {
    &__inner { flex-direction: column; }
    &__visual { max-width: 30rem; }
  }
}
</style>
