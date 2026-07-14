<script setup lang="ts">
import { funnelImages, methodSteps } from '@/config/funnelContent'

const painPoints = [
  'Publicas todos los días, pero las conversaciones no llegan.',
  'Escribes en frío y terminas persiguiendo a personas sin intención de compra.',
  'Inviertes en marketing sin poder conectarlo con ventas reales.',
] as const
</script>

<template>
  <section class="problem section-pad">
    <div class="funnel-container problem__inner">
      <div class="problem__intro">
        <div class="problem__copy">
          <p class="eyebrow"><span></span> NO ES TU CULPA</p>
          <h2>Te enseñaron a buscar atención, no a construir un sistema.</h2>
          <p class="section-lead">Un dueño de negocio no necesita convertirse en influencer. Necesita saber de dónde vendrá la próxima conversación de venta.</p>
          <div class="problem__pains">
            <div v-for="pain in painPoints" :key="pain" class="problem__pain">
              <span>×</span><p>{{ pain }}</p>
            </div>
          </div>
        </div>
        <div class="problem__image">
          <img :src="funnelImages[2]" alt="Emprendedora trabajando en su sistema comercial" loading="lazy">
        </div>
      </div>

      <div class="method">
        <div class="method__heading">
          <p class="eyebrow"><span></span> EL MÉTODO BAKANO</p>
          <h2>Cuatro movimientos. Un sistema predecible.</h2>
        </div>
        <div class="method__steps">
          <article v-for="step in methodSteps" :key="step.number" class="method__card">
            <span class="method__number">{{ step.number }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </article>
        </div>
        <div class="method__flow">
          <strong>ANUNCIO</strong><span>→</span><strong>LANDING / WHATSAPP</strong><span>→</span><strong>FILTRO</strong><span>→</span><strong>VENTA</strong>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.problem {
  background: $white;

  &__inner { flex-direction: column; gap: 7rem; }
  &__intro { display: flex; align-items: stretch; width: 100%; gap: clamp(2rem, 6vw, 6rem); }
  &__copy, &__image { display: flex; flex: 1 1 0; flex-direction: column; width: 100%; }
  &__copy { align-items: flex-start; justify-content: center; gap: 1.4rem; }
  &__image { max-width: 32rem; overflow: hidden; border-radius: 1.5rem; background: $LPB-LIGHT; }
  &__image img { width: 100%; height: 100%; min-height: 32rem; object-fit: cover; }
  &__pains { display: flex; flex-direction: column; width: 100%; gap: 0.75rem; margin-top: 0.5rem; }
  &__pain {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 0.8rem;
    padding: 1rem;
    border: 1px solid rgba($primary-dark, 0.08);
    border-radius: 0.7rem;
    color: $text-secondary;
    transition: border-color 0.25s ease, transform 0.25s ease;
    &:hover { transform: translateX(0.3rem); border-color: $primary; }
    span { color: $primary; font-size: 1.5rem; font-weight: 800; }
    p { width: 100%; }
  }
}

.method {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;

  &__heading { display: flex; flex-direction: column; width: 100%; max-width: 44rem; gap: 0.8rem; }
  &__steps { display: flex; flex-wrap: wrap; width: 100%; gap: 1rem; }
  &__card {
    display: flex;
    flex: 1 1 14rem;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    padding: 1.6rem;
    border-radius: 1rem;
    background: $primary-dark;
    color: $white;
    transition: transform 0.25s ease, background 0.25s ease;
    &:hover { transform: translateY(-0.35rem); background: $LPB-GREEN-D; }
    h3 { width: 100%; font-size: 1.35rem; }
    p { width: 100%; color: rgba($white, 0.68); line-height: 1.55; }
  }
  &__number { width: 100%; color: $primary; font-size: 0.8rem; font-weight: 900; letter-spacing: 0.1em; }
  &__flow {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    gap: 0.9rem;
    padding: 1.4rem;
    border-radius: 1rem;
    background: $LPB-LIGHT;
    color: $primary-dark;
    font-size: 0.8rem;
    letter-spacing: 0.05em;
    span { color: $primary; font-size: 1.3rem; }
  }
}

@media (max-width: 800px) {
  .problem {
    &__inner { gap: 4rem; }
    &__intro { flex-direction: column; }
    &__image { max-width: none; }
    &__image img { min-height: 0; height: auto; }
  }
}
</style>
