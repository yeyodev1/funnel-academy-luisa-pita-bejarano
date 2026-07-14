<script setup lang="ts">
import { funnelImages } from '@/config/funnelContent'
</script>

<template>
  <section class="vsl section-pad">
    <div class="funnel-container vsl__inner">
      <p class="eyebrow"><span></span> MIRA ESTO PRIMERO</p>
      <h2>El sistema que cambia la incertidumbre por una agenda llena.</h2>
      <p class="section-lead">Dale play y descubre por qué publicar más no necesariamente significa vender más.</p>
      <div class="vsl__player">
        <img :src="funnelImages[1]" alt="Presentación del Método Bakano" loading="lazy">
        <button type="button" aria-label="Video próximamente" disabled><span>▶</span></button>
        <div class="vsl__status">VIDEO DE ENTRENAMIENTO · PRÓXIMAMENTE</div>
      </div>
      <p class="vsl__note">Reserva unos minutos sin distracciones. Esta idea puede cambiar cómo consigues clientes.</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.vsl {
  background: $LPB-LIGHT;

  &__inner { flex-direction: column; align-items: center; gap: 1rem; text-align: center; }
  h2 { max-width: 55rem; }

  &__player {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 58rem;
    margin-top: 1.5rem;
    overflow: hidden;
    border: 0.6rem solid $white;
    border-radius: 1.5rem;
    box-shadow: 0 25px 70px rgba($primary-dark, 0.16);
    background: $primary-dark;

    img { width: 100%; height: auto; max-height: 35rem; object-fit: cover; opacity: 0.6; }
    button {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 5rem;
      height: 5rem;
      border: 0;
      border-radius: 50%;
      background: $primary;
      color: $primary-dark;
      cursor: not-allowed;
      transition: transform 0.25s ease, background 0.25s ease;
      &:hover { background: $white; }
      span { margin-left: 0.25rem; font-size: 1.5rem; }
    }
  }

  &__status {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0.8rem;
    background: rgba($primary-dark, 0.88);
    color: $white;
    font-size: 0.7rem;
    font-weight: 800;
    letter-spacing: 0.09em;
  }

  &__note { width: 100%; color: $text-secondary; font-size: 0.82rem; }
}
</style>
