<script setup lang="ts">
import { funnelImages } from '@/config/funnelContent'

const galleryImages = funnelImages.slice(3, 9)
</script>

<template>
  <section class="authority section-pad">
    <div class="funnel-container authority__inner">
      <div class="authority__heading">
        <p class="eyebrow eyebrow--light"><span></span> ENTRENA CON LUISA</p>
        <h2>Una coach certificada que entiende la vida real de una mujer ocupada.</h2>
        <p>Soy Luisa Pita Bejarano, Functional Trainer, Personal Trainer certificada e instructora de TRX y Tae Bo. Creé Vital 360 para ayudarte a recuperar tu fuerza, confianza y salud.</p>
      </div>
      <div class="authority__gallery">
        <figure v-for="(image, index) in galleryImages" :key="image" :class="{ 'authority__photo--wide': index === 0 || index === 5 }" class="authority__photo">
          <img :src="image" :alt="`Luisa Pita Bejarano, coach de Vital 360 ${index + 1}`" loading="lazy">
        </figure>
      </div>
      <div class="authority__statement">
        <strong>No entrenas para castigarte.</strong>
        <span>Entrenas porque amas tu cuerpo y quieres descubrir todo lo que es capaz de hacer.</span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.authority {
  background: $primary-dark;
  color: $white;

  &__inner { flex-direction: column; justify-content: center; align-items: center; gap: 2.5rem; }
  &__heading { display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 58rem; gap: 1rem; text-align: center; }
  &__heading h2 { color: $white; }
  &__heading p:last-child { width: 100%; max-width: 46rem; color: rgba($white, 0.65); font-size: 1.05rem; line-height: 1.7; }
  &__heading p:last-child { margin: 0 auto; }
  &__gallery { display: flex; justify-content: center; align-items: stretch; flex-wrap: wrap; width: 100%; gap: 0.8rem; }
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
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    padding: 1.5rem;
    border-left: 0.3rem solid $primary;
    background: rgba($white, 0.04);
    text-align: center;
    strong { width: 100%; max-width: 20rem; color: $primary; font-size: 1.2rem; }
    span { width: 100%; color: rgba($white, 0.7); }
  }
}

@media (max-width: 650px) {
  .authority {
    &__gallery { flex-direction: column; }
    &__photo { flex-basis: auto; min-height: 22rem; }
    &__statement { flex-direction: column; align-items: center; }
  }
}
</style>
