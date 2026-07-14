<script setup lang="ts">
import { funnelImages } from '@/config/funnelContent'

const galleryImages = funnelImages.slice(3, 9)
</script>

<template>
  <section class="authority section-pad">
    <div class="funnel-container authority__inner">
      <div class="authority__heading">
        <p class="eyebrow eyebrow--light"><span></span> EXPERIENCIA REAL</p>
        <h2>No somos gurús. Somos una agencia que tuvo que resolver este problema primero.</h2>
        <p>El Método Bakano nació al dejar de perseguir likes y comenzar a construir tuberías: tráfico, conversión, filtro y seguimiento.</p>
      </div>
      <div class="authority__gallery">
        <figure v-for="(image, index) in galleryImages" :key="image" :class="{ 'authority__photo--wide': index === 0 || index === 5 }" class="authority__photo">
          <img :src="image" :alt="`Experiencia y equipo Bakano ${index + 1}`" loading="lazy">
        </figure>
      </div>
      <div class="authority__statement">
        <strong>La meta no es que trabajes más.</strong>
        <span>Es que tu sistema trabaje incluso cuando tú no estás publicando.</span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.authority {
  background: $primary-dark;
  color: $white;

  &__inner { flex-direction: column; gap: 2.5rem; }
  &__heading { display: flex; flex-direction: column; width: 100%; max-width: 58rem; gap: 1rem; }
  &__heading h2 { color: $white; }
  &__heading p:last-child { width: 100%; max-width: 46rem; color: rgba($white, 0.65); font-size: 1.05rem; line-height: 1.7; }
  &__gallery { display: flex; flex-wrap: wrap; width: 100%; gap: 0.8rem; }
  &__photo {
    display: flex;
    flex: 1 1 14rem;
    width: 100%;
    min-height: 18rem;
    overflow: hidden;
    border-radius: 0.8rem;
    background: rgba($white, 0.05);
    transition: transform 0.3s ease, opacity 0.3s ease;
    &:hover { transform: translateY(-0.4rem); opacity: 0.82; }
    img { width: 100%; height: 100%; object-fit: cover; }
  }
  &__photo--wide { flex-grow: 1.5; }
  &__statement {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 1rem;
    padding: 1.5rem;
    border-left: 0.3rem solid $primary;
    background: rgba($white, 0.04);
    strong { width: 100%; max-width: 20rem; color: $primary; font-size: 1.2rem; }
    span { width: 100%; color: rgba($white, 0.7); }
  }
}

@media (max-width: 650px) {
  .authority {
    &__gallery { flex-direction: column; }
    &__photo { flex-basis: auto; min-height: 22rem; }
    &__statement { flex-direction: column; align-items: flex-start; }
  }
}
</style>
