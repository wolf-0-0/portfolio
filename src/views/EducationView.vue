<template>
  <div class="flex p-4 items-center min-h-screen overflow-y-scroll overflow-x-hidden sm:ml-48 ">
    <div class="card flex h-full w-full">
      <div class="flex w-1/2 items-center">
        <h1 class="text-8xl font-bold flex-shrink">DIPLOMAS</h1>
        <div id="accordion-flush" data-accordion="collapse" data-active-classes="" data-inactive-classes=""
          class="mx-auto w-full">
          <div class="flex justify-center" >
            <h2 id="accordion-flush-heading-1">
              <button type="button" class="flex items-center justify-between w-full py-5 font-medium text-left"
                data-accordion-target="#accordion-flush-body-1" aria-expanded="true"
                aria-controls="accordion-flush-body-1">
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 5 5 1 1 5" />
                </svg>
                <p class="w-full">Bachelor in Telecomunications</p>
              </button>
            </h2>
          </div>
          <div id="accordion-flush-body-1" class="hidden" aria-labelledby="accordion-flush-heading-1">
            <div class="py-5 flex justify-center">
              <img src="@/assets/images/diplomas-1.png" width="250px" height="400px">
            </div>
          </div>
          <h2 id="accordion-flush-heading-2">
            <button type="button"
              class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
              data-accordion-target="#accordion-flush-body-2" aria-expanded="false"
              aria-controls="accordion-flush-body-2">
              <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 5 5 1 1 5" />
              </svg>
              <p class="w-full">Bachelor in Telecomunications</p>
            </button>
          </h2>
          <div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-2">
            <div class="py-5 flex justify-center">
              <img src="@/assets/images/diplomas-1.png" width="250px" height="400px">
            </div>
          </div>
          <h2 id="accordion-flush-heading-3">
            <button type="button"
              class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
              data-accordion-target="#accordion-flush-body-3" aria-expanded="false"
              aria-controls="accordion-flush-body-3">
              <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 5 5 1 1 5" />
              </svg>
              <p class="w-full">Bachelor in Telecomunications</p>
            </button>
          </h2>
          <div id="accordion-flush-body-3" class="hidden" aria-labelledby="accordion-flush-heading-3">
            <div class="py-5 flex justify-center">
              <img src="@/assets/images/diplomas-1.png" width="250px" height="400px">
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-1/2 items-center">
        <h1>CERTIFICATES</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

export default {
  setup () {
    // Initialize components based on data attribute selectors
    onMounted(() => {
      initFlowbite()
    })

    // You can return any data or methods you need here
    return {}
  }
}
</script>

<style scoped >
* {
  border: 1px solid black;
}

h1 {
  writing-mode: vertical-rl;
  text-orientation: upright;
  color: #7ED183;
}

.card {
  background-color: #068488;
}
</style>
