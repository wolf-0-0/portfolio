<template>
  <div class="card flex w-72 sm:w-fit h-fit items-center">
        <h1 class="text-5xl md:text-7xl font-bold flex-shrink p-4">DIPLOMAS</h1>
        <div class="flex flex-col gap-4 mx-auto w-64 md:w-96">
          <DiplomasAccordion/>
        </div>
      </div>
</template>

<script>
import DiplomasAccordion from './DiplomasAccordion.vue'

export default {
  components: {
    DiplomasAccordion
  }
}
</script>

<style scoped>
h1 {
  writing-mode: vertical-rl;
  text-orientation: upright;
  color: black;
  border-right: 2px solid #39A0ED;
}

.card {
  background-color: #47759C;
  border-radius: 12px;
  min-width: 31rem;
}

@media (max-width: 768px) {
    .card {
        min-width: 24rem;
    }
}

@media (max-width: 640px) {
    .card{
        min-width: 19rem;
    }
}
</style>
