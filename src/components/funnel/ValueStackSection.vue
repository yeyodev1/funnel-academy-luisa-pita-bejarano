<script setup lang="ts">
import { computed } from 'vue'
import { useCountdown } from '@/composables/useCountdown'

const { price, isActive } = useCountdown()
const vipCheckoutUrl = import.meta.env.VITE_VIP_CHECKOUT_URL || import.meta.env.VITE_CHECKOUT_URL || '#faq'
const vipUpgradePrice = Number(import.meta.env.VITE_VIP_UPGRADE_PRICE) || 15
const regularAnnualValue = 47 * 12
const annualPrice = computed(() => isActive.value ? 297 : 400)
const annualSavings = computed(() => regularAnnualValue - annualPrice.value)

const valueItems = [
  { number: '01', title: 'Plan de entrenamiento anual', text: 'Rutinas funcionales progresivas, organizadas para avanzar mes a mes.' },
  { number: '02', title: 'Guías de nutrición', text: 'Orientación práctica para alimentarte antes y después de entrenar.' },
  { number: '03', title: 'Sesiones y retos nuevos', text: 'Transmisiones, actualizaciones y desafíos durante tu periodo de acceso.' },
  { number: '04', title: 'Comunidad Vital 360', text: 'Un espacio de acompañamiento para compartir avances y mantenerte enfocada.' },
] as const

const vipFeatures = [
  'Círculo privado de mujeres comprometidas con su transformación',
  'Encuentro grupal VIP mensual con Luisa',
  'Retos privados y seguimiento de objetivos',
  'Prioridad para resolver dudas dentro de la comunidad',
] as const
</script>

<template>
  <section class="value-stack section-pad">
    <div class="funnel-container value-stack__inner">
      <div class="value-stack__heading">
        <p class="eyebrow"><span></span> TODO LO QUE RECIBES</p>
        <h2>No estás comprando rutinas sueltas. Estás entrando a un ecosistema completo.</h2>
        <p class="section-lead">Vital 360 reúne la estructura, la orientación y el acompañamiento que necesitas para sostener tu proceso.</p>
      </div>

      <div class="value-stack__items">
        <article v-for="item in valueItems" :key="item.number" class="value-stack__item">
          <span>{{ item.number }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
          <strong>INCLUIDO</strong>
        </article>
      </div>

      <div class="value-stack__summary">
        <p>VALOR REGULAR DE 12 MESES</p>
        <del>${{ regularAnnualValue }}</del>
        <div class="value-stack__prices">
          <span><small>EMPIEZA DESDE</small><strong>${{ price }}/mes</strong></span>
          <b>O</b>
          <span><small>PLAN ANUAL</small><strong>${{ annualPrice }}</strong></span>
        </div>
        <p v-if="isActive" class="value-stack__saving">Con el plan anual de preventa ahorras ${{ annualSavings }} frente al valor mensual regular.</p>
      </div>

      <div class="vip-upgrade">
        <div class="vip-upgrade__copy">
          <p class="eyebrow eyebrow--light"><span></span> UPGRADE EXCLUSIVO</p>
          <h2>Círculo VIP de Mujeres Vitales</h2>
          <p>Para quienes no solo quieren comenzar, sino rodearse de mujeres decididas a elevar su cuerpo, energía y confianza.</p>
          <div class="vip-upgrade__features">
            <p v-for="feature in vipFeatures" :key="feature"><span>✓</span>{{ feature }}</p>
          </div>
        </div>
        <div class="vip-upgrade__offer">
          <span>AGREGA EL NIVEL VIP POR</span>
          <div><sup>+$</sup><strong>{{ vipUpgradePrice }}</strong><small>/ mes</small></div>
          <p>Se suma a la membresía Vital 360 seleccionada.</p>
          <a :href="vipCheckoutUrl">QUIERO SER VIP <span>→</span></a>
          <small>Confirma periodicidad y condiciones en el checkout.</small>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.value-stack {
  background: $white;

  &__inner { flex-direction: column; justify-content: center; align-items: center; gap: 2.5rem; }
  &__heading { display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 54rem; gap: 1rem; text-align: center; }
  &__items { display: flex; justify-content: center; align-items: stretch; flex-wrap: wrap; width: 100%; gap: 1rem; }
  &__item { display: flex; flex: 1 1 15rem; flex-direction: column; align-items: center; width: 100%; gap: 0.8rem; padding: 1.5rem; border: 1px solid rgba($primary-dark, 0.1); border-radius: 1rem; background: $LPB-SURFACE; text-align: center; transition: transform 0.25s ease, border-color 0.25s ease; }
  &__item:hover { transform: translateY(-0.35rem); border-color: $primary; }
  &__item > span { width: 100%; color: $primary; font-size: 0.75rem; font-weight: 900; letter-spacing: 0.1em; }
  &__item h3 { width: 100%; color: $primary-dark; font-size: 1.15rem; }
  &__item p { width: 100%; color: $text-secondary; line-height: 1.55; }
  &__item strong { width: 100%; margin-top: auto; color: $LPB-GREEN-D; font-size: 0.68rem; letter-spacing: 0.1em; }
  &__summary { display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100%; gap: 0.8rem; padding: clamp(1.5rem, 4vw, 2.5rem); border-radius: 1.2rem; background: $primary-dark; color: $white; text-align: center; }
  &__summary > p:first-child { width: 100%; color: $primary; font-size: 0.72rem; font-weight: 900; letter-spacing: 0.12em; }
  &__summary > del { width: 100%; color: rgba($white, 0.55); font-size: 1.4rem; font-weight: 800; }
  &__prices { display: flex; justify-content: center; align-items: center; width: 100%; gap: clamp(1rem, 4vw, 3rem); }
  &__prices > span { display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 16rem; }
  &__prices small { width: 100%; color: rgba($white, 0.55); font-size: 0.62rem; }
  &__prices strong { width: 100%; color: $primary; font-size: clamp(2rem, 6vw, 3.5rem); }
  &__prices b { color: rgba($white, 0.45); font-size: 0.75rem; }
  &__saving { width: 100%; color: rgba($white, 0.72); font-size: 0.8rem; }
}

.vip-upgrade {
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  overflow: hidden;
  border-radius: 1.3rem;
  background: $LPB-GREEN-D;
  color: $white;

  &__copy, &__offer { display: flex; flex: 1 1 0; flex-direction: column; align-items: center; width: 100%; gap: 1rem; padding: clamp(1.5rem, 5vw, 3rem); text-align: center; }
  &__copy h2 { color: $white; }
  &__copy > p:not(.eyebrow) { width: 100%; color: rgba($white, 0.75); line-height: 1.65; }
  &__features { display: flex; flex-direction: column; width: 100%; gap: 0.65rem; }
  &__features p { display: flex; justify-content: center; width: 100%; gap: 0.55rem; color: $white; text-align: left; }
  &__features span { color: $primary-dark; font-weight: 900; }
  &__offer { justify-content: center; background: $LPB-LIGHT; color: $primary-dark; }
  &__offer > span { width: 100%; color: $LPB-GREEN-D; font-size: 0.7rem; font-weight: 900; letter-spacing: 0.1em; }
  &__offer > div { display: flex; justify-content: center; align-items: flex-end; width: 100%; }
  &__offer sup { align-self: flex-start; padding-top: 0.7rem; color: $LPB-GREEN-D; font-size: 1.4rem; font-weight: 900; }
  &__offer strong { font-size: clamp(4rem, 10vw, 6rem); line-height: 0.9; letter-spacing: -0.08em; }
  &__offer small { color: $text-secondary; }
  &__offer > p { width: 100%; color: $text-secondary; }
  &__offer a { display: flex; justify-content: center; align-items: center; width: 100%; max-width: 22rem; gap: 0.6rem; padding: 1rem; border-radius: 0.6rem; background: $primary-dark; color: $white; font-weight: 900; text-decoration: none; transition: background 0.25s ease, transform 0.25s ease; }
  &__offer a:hover { transform: translateY(-0.2rem); background: $LPB-GREEN-D; }
  &__offer > small { width: 100%; font-size: 0.65rem; }
}

@media (max-width: 760px) {
  .value-stack__prices, .vip-upgrade { flex-direction: column; }
  .value-stack__prices { gap: 0.5rem; }
}
</style>
