<script setup lang="ts">
import { computed } from 'vue'
import { useCountdown } from '@/composables/useCountdown'
import CountdownTimer from './CountdownTimer.vue'
import PlanCard from './PlanCard.vue'

const { price } = useCountdown()
const checkoutUrl = import.meta.env.VITE_CHECKOUT_URL || '#faq'
const monthlyFeatures = ['Cursos de WhatsApp y landing pages', 'Guiones y mapas paso a paso', 'Sesiones semanales con expertos', 'Acceso a la comunidad Bakanology'] as const
const lifetimeFeatures = ['Acceso permanente al contenido actual', 'Todos los cursos principales', 'Recursos y guiones descargables', 'Sin mensualidades'] as const
const monthlyDescription = computed(() => price.value === 27 ? 'Precio de acción rápida para tu primer mes.' : 'Acceso mensual al sistema completo de captación.')
</script>

<template>
  <section id="oferta" class="pricing section-pad">
    <div class="funnel-container pricing__inner">
      <div class="pricing__heading">
        <p class="eyebrow"><span></span> ELIGE TU ACCESO</p>
        <h2>Un solo cliente puede cambiar el retorno de esta decisión.</h2>
        <p class="section-lead">Todo el Método Bakano, sin una inversión de agencia y con un camino claro para comenzar.</p>
      </div>
      <div class="pricing__value">
        <span>Valor de los recursos por separado</span><del>Más de $1.000</del><strong>Desde ${{ price }}</strong>
      </div>
      <CountdownTimer />
      <div class="pricing__plans">
        <PlanCard name="Bakanology mensual" :price="price" suffix="primer mes" :description="monthlyDescription" :features="monthlyFeatures" featured button-text="EMPEZAR AHORA" :button-href="checkoutUrl" />
        <PlanCard name="Acceso vitalicio" :price="297" suffix="pago único" description="Para quienes prefieren avanzar sin una suscripción mensual." :features="lifetimeFeatures" button-text="ELEGIR ACCESO VITALICIO" :button-href="checkoutUrl" />
      </div>
      <div class="pricing__upgrades">
        <div><span>+</span><p><strong>CRM para tu operación</strong>Agrega la herramienta de seguimiento desde $15.</p></div>
        <div><span>+</span><p><strong>Comunidad VIP de Telegram</strong>Conecta con otros dueños de negocio desde $15.</p></div>
      </div>
      <p class="pricing__terms">Los precios, renovaciones, upgrades y alcance final deben coincidir con las condiciones mostradas en el checkout.</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.pricing {
  background: $LPB-LIGHT;

  &__inner { flex-direction: column; align-items: center; gap: 2rem; }
  &__heading { display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 52rem; gap: 0.9rem; text-align: center; }
  &__value { display: flex; justify-content: center; align-items: center; flex-wrap: wrap; width: 100%; gap: 0.8rem; color: $text-secondary; }
  &__value del { color: $alert-error; font-weight: 800; }
  &__value strong { padding: 0.55rem 0.8rem; border-radius: 0.4rem; background: $primary; color: $primary-dark; }
  :deep(.countdown) { max-width: 34rem; }
  &__plans { display: flex; align-items: stretch; width: 100%; gap: 1.2rem; }
  &__upgrades { display: flex; width: 100%; gap: 1rem; }
  &__upgrades > div { display: flex; flex: 1 1 0; align-items: center; width: 100%; gap: 1rem; padding: 1.3rem; border: 1px solid rgba($primary-dark, 0.1); border-radius: 0.8rem; background: $white; }
  &__upgrades > div > span { display: flex; justify-content: center; align-items: center; width: 100%; max-width: 2.5rem; height: 2.5rem; flex-shrink: 0; border-radius: 50%; background: $primary; font-size: 1.5rem; font-weight: 900; }
  &__upgrades p { display: flex; flex-direction: column; width: 100%; color: $text-secondary; font-size: 0.82rem; }
  &__upgrades strong { width: 100%; color: $primary-dark; font-size: 1rem; }
  &__terms { width: 100%; max-width: 48rem; color: $text-secondary; font-size: 0.72rem; text-align: center; }
}

@media (max-width: 750px) {
  .pricing {
    &__plans, &__upgrades { flex-direction: column; }
  }
}
</style>
