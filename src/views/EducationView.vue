<template>
  <ViewMainCard>
    <div class="grid-container w-full h-full">
      <DiplomasCard class="grid-item item-big" />
      <CertificationCardBig class="grid-item item-medium" :tags="tags" />
      <CertificationCardSmall class="grid-item item-small" v-for="(cert, index) in certs" :key="index" :cert="cert"
        :index="index" />
    </div>
  </ViewMainCard>
</template>

<script>
import DiplomasCard from '../components/DiplomasCard.vue'
import CertificationCardBig from '../components/CertificationCardBig.vue'
import CertificationCardSmall from '../components/CertificationCardSmall.vue'
import ViewMainCard from '../components/ViewMainCard.vue'

export default {
  components: {
    ViewMainCard,
    DiplomasCard,
    CertificationCardBig,
    CertificationCardSmall
  },
  data () {
    return {
      tags: Array(18).fill('JavaScript'), // Initialize with 18 items 16
      certs: Array(14).fill({
        title: 'Linux Tools for Software Developement',
        company: 'EDX 2022'
      })
    }
  }
}
</script>

<style scoped >

.grid-container {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(auto-fill, auto);
  gap: 0.8rem;
}

.grid-item {
  margin: auto;
}

.item-medium,
.item-small {
  min-width: 304px;
  width: auto;
  max-width: 384px;
}

.item-small {
  max-width: 323px;
}

@media only screen and (min-width: 640px) {
  .item-medium {
    width: 384px;
  }
}

@media only screen and (min-width: 1180px) {
  .grid-container {
    grid-template-columns: auto auto;
  }

  .item-big {
    grid-column: 1;
    grid-row: 1/span 8;
  }

  .item-medium {
    grid-row: 1/span 4;
  }
}

@media only screen and (min-width:1536px) {
  .grid-container {
    grid-template-columns: auto auto auto;
  }

}</style>
