<script setup lang="ts">
import { useCountdown } from '@/composables/useCountdown'

const { hours, minutes, seconds, isActive, price } = useCountdown()
</script>

<template>
  <div class="countdown" role="timer" aria-live="polite">
    <p class="countdown__label">
      {{ isActive ? `Congela tu precio en $${price} al mes` : 'La preventa terminó: precio regular $47' }}
    </p>
    <div class="countdown__time" aria-label="Tiempo restante">
      <span>{{ hours }}</span><b>:</b><span>{{ minutes }}</span><b>:</b><span>{{ seconds }}</span>
    </div>
    <p class="countdown__caption">HORAS&nbsp;&nbsp;&nbsp; MINUTOS&nbsp;&nbsp;&nbsp; SEGUNDOS</p>
  </div>
</template>

<style lang="scss" scoped>
.countdown {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 0.35rem;
  padding: 1rem;
  border: 1px solid rgba($primary, 0.4);
  border-radius: 1rem;
  background: rgba($primary-dark, 0.82);

  &__label {
    width: 100%;
    color: $primary;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-align: center;
    text-transform: uppercase;
  }

  &__time {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 0.5rem;
    color: $white;
    font-size: clamp(1.8rem, 6vw, 3.1rem);
    font-weight: 900;
    line-height: 1;

    span {
      display: flex;
      justify-content: center;
      width: 100%;
      max-width: 5rem;
    }

    b { color: $primary; }
  }

  &__caption {
    width: 100%;
    color: rgba($white, 0.55);
    font-size: 0.55rem;
    text-align: center;
  }
}
</style>
