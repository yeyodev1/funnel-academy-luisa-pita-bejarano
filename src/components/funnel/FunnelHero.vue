<script setup lang="ts">
import CountdownTimer from './CountdownTimer.vue'
import { funnelImages } from '@/config/funnelContent'
</script>

<template>
  <section class="hero">
    <div class="hero__glow"></div>
    <div class="hero__inner funnel-container">
      <div class="hero__copy">
        <p class="eyebrow"><span></span> MÉTODO BAKANO</p>
        <h1>Deja de rogar por clientes. Construye un sistema que los atraiga <em>cada día.</em></h1>
        <p class="hero__lead">
          Descubre el método que ya ayudó a decenas de negocios a construir un flujo predecible de prospectos,
          sin publicar contenido que nadie ve.
        </p>
        <a class="primary-button" href="#oferta">QUIERO CONOCER EL MÉTODO <span>→</span></a>
        <div class="hero__proof">
          <strong>+50</strong>
          <span>negocios han implementado<br>nuestros sistemas</span>
        </div>
      </div>
      <div class="hero__visual">
        <div class="hero__image-wrap">
          <img :src="funnelImages[0]" alt="Luisa Pita presentando el Método Bakano" fetchpriority="high">
          <div class="hero__badge"><strong>BAKANO</strong><span>Captación predecible</span></div>
        </div>
        <CountdownTimer />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  display: flex;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: $primary-dark;

  &__glow {
    position: absolute;
    right: -15%;
    bottom: -30%;
    width: 100%;
    max-width: 55rem;
    height: 80%;
    border-radius: 50%;
    background: rgba($primary, 0.14);
    filter: blur(80px);
  }

  &__inner {
    position: relative;
    flex-direction: row;
    align-items: center;
    gap: clamp(2rem, 6vw, 6rem);
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  &__copy, &__visual {
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    width: 100%;
  }

  &__copy { align-items: flex-start; gap: 1.6rem; }
  &__visual { gap: 1rem; max-width: 34rem; }

  h1 {
    width: 100%;
    color: $white;
    font-size: clamp(2.7rem, 5.8vw, 5.6rem);
    line-height: 0.98;
    letter-spacing: -0.055em;

    em { color: $primary; font-style: normal; }
  }

  &__lead {
    width: 100%;
    max-width: 42rem;
    color: rgba($white, 0.7);
    font-size: clamp(1rem, 1.8vw, 1.2rem);
    line-height: 1.65;
  }

  &__proof {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 0.8rem;
    color: rgba($white, 0.66);
    font-size: 0.78rem;
    line-height: 1.35;

    strong { color: $primary; font-size: 1.8rem; }
  }

  &__image-wrap {
    position: relative;
    display: flex;
    width: 100%;
    overflow: hidden;
    border: 1px solid rgba($white, 0.14);
    border-radius: 1.5rem;

    img { width: 100%; height: auto; aspect-ratio: 4 / 5; object-fit: cover; }
  }

  &__badge {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 13rem;
    padding: 0.9rem;
    border-radius: 0.8rem;
    background: rgba($primary-dark, 0.86);
    color: $white;
    backdrop-filter: blur(8px);

    strong { color: $primary; letter-spacing: 0.12em; }
    span { font-size: 0.72rem; }
  }
}

@media (max-width: 800px) {
  .hero {
    &__inner { flex-direction: column; padding-top: 2.5rem; }
    &__copy { align-items: center; text-align: center; }
    &__visual { max-width: 30rem; }
    &__proof { justify-content: center; }
  }
}
</style>
