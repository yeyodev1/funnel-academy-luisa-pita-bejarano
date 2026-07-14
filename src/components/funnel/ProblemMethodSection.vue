<script setup lang="ts">
import { funnelImages, methodSteps } from '@/config/funnelContent'

const painPoints = [
  'Entrenas durante horas, pero tu composición corporal sigue estancada.',
  'Saltas de una dieta a otra y recuperas rápidamente lo que habías perdido.',
  'Sigues rutinas aleatorias que te frustran o ponen en riesgo tus articulaciones.',
] as const
</script>

<template>
  <section class="problem section-pad">
    <div class="funnel-container problem__inner">
      <div class="problem__intro">
        <div class="problem__copy">
          <p class="eyebrow"><span></span> NO ES TU CULPA</p>
          <h2>No necesitas más castigo. Necesitas una estructura que trabaje contigo.</h2>
          <p class="section-lead">Si eres una mujer ocupada, tu entrenamiento debe adaptarse a tu vida y ayudarte a sentirte fuerte, activa y constante.</p>
          <div class="problem__pains">
            <div v-for="pain in painPoints" :key="pain" class="problem__pain">
              <span>×</span><p>{{ pain }}</p>
            </div>
          </div>
        </div>
        <div class="problem__image">
          <img :src="funnelImages[2]" alt="Luisa Pita Bejarano entrenando con Vital 360" loading="lazy">
        </div>
      </div>

      <div class="method">
        <div class="method__heading">
          <p class="eyebrow"><span></span> LOS 3 PILARES DE VITAL 360</p>
          <h2>Una transformación integral, no otra rutina aislada.</h2>
        </div>
        <div class="method__steps">
          <article v-for="step in methodSteps" :key="step.number" class="method__card">
            <span class="method__number">{{ step.number }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </article>
        </div>
        <div class="method__flow">
          <strong>ENTRENA</strong><span>→</span><strong>ALIMÉNTATE</strong><span>→</span><strong>ACOMPÁÑATE</strong><span>→</span><strong>EVOLUCIONA</strong>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.problem {
  background: $white;

  &__inner { flex-direction: column; justify-content: center; align-items: center; gap: 7rem; }
  &__intro { display: flex; justify-content: center; align-items: center; width: 100%; gap: clamp(2rem, 6vw, 6rem); }
  &__copy, &__image { display: flex; flex: 1 1 0; flex-direction: column; width: 100%; }
  &__copy { align-items: center; justify-content: center; gap: 1.4rem; text-align: center; }
  &__image { max-width: 32rem; overflow: hidden; border-radius: 1.5rem; background: $LPB-LIGHT; }
  &__image img { width: 100%; height: 100%; min-height: 32rem; object-fit: cover; }
  &__pains { display: flex; flex-direction: column; width: 100%; gap: 0.75rem; margin-top: 0.5rem; }
  &__pain {
    display: flex;
    justify-content: center;
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
    p { width: 100%; text-align: left; }
  }
}

.method {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2rem;

  &__heading { display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 44rem; gap: 0.8rem; text-align: center; }
  &__steps { display: flex; justify-content: center; align-items: stretch; flex-wrap: wrap; width: 100%; gap: 1rem; }
  &__card {
    display: flex;
    flex: 1 1 14rem;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 1rem;
    padding: 1.6rem;
    border-radius: 1rem;
    background: $primary-dark;
    color: $white;
    text-align: center;
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
