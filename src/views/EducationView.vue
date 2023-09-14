<template>
  <div class="flex p-4 items-center min-h-screen overflow-y-scroll overflow-x-hidden sm:ml-48 ">
    <div class="card flex h-full w-full">
      <div class="flex w-1/2 items-center">
        <h1 class="text-8xl font-bold flex-shrink">DIPLOMAS</h1>
        <div class="flex flex-col border-red-600">
          <div v-for="(item, index) in items" :key="index">
            <div class="flex items-center" @click="toggleAccordion(index)">
              <svg width="40" height="40" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="arrow-big"
                  d="M56.6512 85.9635L32.3296 39.9903C29.4248 34.33 29.4248 34.33 31.2923 31.0578C33.2227 29.2573 33.2457 29.3025 36.053 34.8183L36.1556 35.0201C38.1093 38.8583 48.5456 58.9824 53.5248 68.4163M63.3488 85.9635L87.6704 39.9903C90.5752 34.33 90.5752 34.33 88.7077 31.0578C86.7773 29.2573 86.7543 29.3025 83.947 34.8183L83.8444 35.0201C81.8907 38.8583 71.4544 58.9824 66.4752 68.4163M55.8356 84.9057C60.0365 91.6981 60.0365 91.6981 63.9143 84.9057M52.9273 67.3585L55.8356 73.0189C60.0365 79.8113 60.0365 79.8113 63.9143 73.0189L66.8226 67.3585"
                  stroke="black" stroke-width="1.15094" />
                <path id="arrow-small"
                  d="M58.4372 64.1836L47.0871 43.4957C45.7316 40.9485 45.7316 40.9485 46.6031 39.476C47.5039 38.6658 47.5147 38.6861 48.8247 41.1683L48.8726 41.259C49.7844 42.9862 54.6546 52.0421 56.9782 56.2873M61.5628 64.1836L72.9129 43.4957C74.2684 40.9485 74.2684 40.9485 73.3969 39.476C72.4961 38.6658 72.4853 38.6861 71.1753 41.1683L71.1274 41.259C70.2156 42.9862 65.3454 52.0421 63.0218 56.2873M58.0566 63.7075C60.017 66.7642 60.017 66.7642 61.8267 63.7075M56.6994 55.8113L58.0566 58.3585C60.017 61.4151 60.017 61.4151 61.8267 58.3585L63.1839 55.8113"
                  stroke="black" stroke-width="1.15094" />
              </svg>
              <p>
                The University of Luxembourg
                Bachelor in Telecommunication Engineering
              </p>
            </div>
            <img src="@/assets/images/diplomas-1.png" class="mx-auto w-64 h-0" :class="{ 'open': item.isOpen }">
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
export default {
  data () {
    return {
      items: Array(3).fill().map(() => ({ isOpen: false }))
    }
  },
  methods: {
    toggleAccordion (index) {
      // Close all items first
      this.items.forEach((item, i) => {
        if (i !== index) {
          item.isOpen = false
        }
      })
      // Toggle the clicked item
      this.items[index].isOpen = !this.items[index].isOpen
    }
  }
}
</script>

<style style scoped >
* {
  border: 1px solid black;
}

img {
  transition: 1.5s;
}

.open {
  height: 24rem;
}

h1 {
  writing-mode: vertical-rl;
  text-orientation: upright;
  color: azure;
}

.card {
  background-color: #068488;
}
</style>
