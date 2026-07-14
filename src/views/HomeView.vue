<script setup lang="ts">
import AuthorityGallery from '@/components/funnel/AuthorityGallery.vue'
import FaqSection from '@/components/funnel/FaqSection.vue'
import FunnelHero from '@/components/funnel/FunnelHero.vue'
import FutureSection from '@/components/funnel/FutureSection.vue'
import IncludedSection from '@/components/funnel/IncludedSection.vue'
import PricingSection from '@/components/funnel/PricingSection.vue'
import ProblemMethodSection from '@/components/funnel/ProblemMethodSection.vue'
import StickyCta from '@/components/funnel/StickyCta.vue'
import VslSection from '@/components/funnel/VslSection.vue'
</script>

<template>
  <main class="home-view">
    <FunnelHero />
    <VslSection />
    <ProblemMethodSection />
    <AuthorityGallery />
    <IncludedSection />
    <PricingSection />
    <FutureSection />
    <FaqSection />
    <StickyCta />
  </main>
</template>

<style lang="scss" scoped>
.home-view {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  padding-bottom: 4.7rem;
}
</style>
