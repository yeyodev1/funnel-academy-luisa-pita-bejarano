<script setup lang="ts">
import { computed } from 'vue'
import { useCountdown } from '@/composables/useCountdown'
import CountdownTimer from './CountdownTimer.vue'
import PlanCard from './PlanCard.vue'

const { price, isActive } = useCountdown()
const checkoutUrl = import.meta.env.VITE_CHECKOUT_URL || '#faq'
const monthlyFeatures = ['Programa de entrenamiento progresivo', 'Guías de nutrición de rendimiento', 'Transmisiones y acompañamiento', 'Comunidad privada Vital 360'] as const
const annualFeatures = ['12 meses completos de Vital 360', 'Todos los programas y guías', 'Nuevos retos y actualizaciones', 'Un único pago, sin mensualidades'] as const
const annualPrice = computed(() => isActive.value ? 297 : 400)
const annualSavings = computed(() => 47 * 12 - annualPrice.value)
const monthlyDescription = computed(() => isActive.value
  ? 'Entra hoy y congela tu mensualidad en $27 mientras permanezcas activa.'
  : 'Acceso mensual al precio regular de Vital 360.')
</script>

<template>
  <section id="oferta" class="pricing section-pad">
    <div class="funnel-container pricing__inner">
      <div class="pricing__heading">
        <p class="eyebrow"><span></span> PREVENTA VITAL 360</p>
        <h2>Empieza por $27 o asegura tu año completo.</h2>
        <p class="section-lead">Elige la opción que mejor se adapta a tu compromiso y comienza a entrenar con Luisa.</p>
      </div>
      <div class="pricing__value">
        <span>Precio mensual regular</span><del v-if="isActive">$47 al mes</del><strong>{{ isActive ? `Hoy $${price} al mes` : `$${price} al mes` }}</strong>
      </div>
      <CountdownTimer />
      <div class="pricing__plans">
        <PlanCard name="Membresía mensual" :price="price" suffix="al mes" :description="monthlyDescription" :features="monthlyFeatures" featured button-text="CONGELAR MI PRECIO" :button-href="checkoutUrl" />
        <PlanCard name="Upgrade anual" :price="annualPrice" suffix="por 12 meses" description="Asegura un año completo de estructura, acompañamiento y comunidad." :features="annualFeatures" button-text="QUIERO EL PLAN ANUAL" :button-href="checkoutUrl" />
      </div>
      <div class="pricing__upgrades">
        <div><span>✓</span><p><strong>Precio mensual congelado</strong>Entra durante la preventa y conserva los $27 mientras tu membresía siga activa.</p></div>
        <div><span>↑</span><p><strong>Upgrade anual: ahorra ${{ annualSavings }}</strong>Compara el pago anual con 12 mensualidades al precio regular de $47.</p></div>
      </div>
      <p class="pricing__terms">La membresía mensual se renueva automáticamente. El precio congelado y el acceso anual están sujetos a las condiciones definitivas mostradas en el checkout.</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.pricing {
  background: $LPB-LIGHT;

  &__inner { flex-direction: column; justify-content: center; align-items: center; gap: 2rem; }
  &__heading { display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 52rem; gap: 0.9rem; text-align: center; }
  &__value { display: flex; justify-content: center; align-items: center; flex-wrap: wrap; width: 100%; gap: 0.8rem; color: $text-secondary; }
  &__value del { color: $alert-error; font-weight: 800; }
  &__value strong { padding: 0.55rem 0.8rem; border-radius: 0.4rem; background: $primary; color: $primary-dark; }
  :deep(.countdown) { max-width: 34rem; }
  &__plans { display: flex; justify-content: center; align-items: stretch; width: 100%; gap: 1.2rem; }
  &__upgrades { display: flex; justify-content: center; align-items: stretch; width: 100%; gap: 1rem; }
  &__upgrades > div { display: flex; flex: 1 1 0; justify-content: center; align-items: center; width: 100%; gap: 1rem; padding: 1.3rem; border: 1px solid rgba($primary-dark, 0.1); border-radius: 0.8rem; background: $white; }
  &__upgrades > div > span { display: flex; justify-content: center; align-items: center; width: 100%; max-width: 2.5rem; height: 2.5rem; flex-shrink: 0; border-radius: 50%; background: $primary; font-size: 1.5rem; font-weight: 900; }
  &__upgrades p { display: flex; flex-direction: column; align-items: center; width: 100%; color: $text-secondary; font-size: 0.82rem; text-align: center; }
  &__upgrades strong { width: 100%; color: $primary-dark; font-size: 1rem; }
  &__terms { width: 100%; max-width: 48rem; color: $text-secondary; font-size: 0.72rem; text-align: center; }
}

@media (max-width: 750px) {
  .pricing {
    &__plans, &__upgrades { flex-direction: column; }
  }
}
</style>
