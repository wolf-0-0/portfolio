<template>
  <div v-for="(item, index) in items" :key="index">
    <button class="pl-2 flex items-center" @click="toggleAccordion(index)">
      <svg class="w-8 h-8" :class="{ 'rotate': !item.isOpen }" width="43" height="41" viewBox="0 0 43 41" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M25.1373 36.6427C23.404 39.7745 18.8878 39.7358 17.2047 36.5747L2.36957 8.71164C0.760994 5.69044 2.96728 2.04993 6.38904 2.07927L36.5018 2.33744C39.9235 2.36677 42.0714 6.04462 40.4149 9.03783L25.1373 36.6427Z"
          stroke-width="3.00884" />
      </svg>
      <p class="pl-4 text-xs font-bold md:text-lg ">
        {{ item.title }}
      </p>
    </button>
    <div class="w-full relative z-0 pt-4">
      <hr class="absolute left-5" v-if="item.isOpen">
      <div class="inside-border mx-auto">
        <img :src="item.imagePath" class="w-32 md:w-64 h-0" :class="{ 'open': item.isOpen }">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          isOpen: true,
          title: 'Bachelor in Telecommunication',
          imagePath: require('@/assets/images/diplomas-1.png')
        },
        {
          isOpen: false,
          title: 'Technician in Telecommunication',
          imagePath: require('@/assets/images/diplomas-9.png')
        },
        {
          isOpen: false,
          title: 'Bachelor in Telecommunication',
          imagePath: require('@/assets/images/diplomas-10.png')
        }
      ]
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

<style scoped>
p {
  color: black;
}

svg {
  transition: transform 1.5s;
  stroke: #39A0ED;
}

.rotate {
  transform: rotate(-90deg);
}

hr {
  height: 80%;
  border: 1px solid #39A0ED;
  top: 54%;
  transform: translateY(-50%);
  z-index: -1;
}

img {
  transition: 1.5s;
  border-radius: 12px;
}

.inside-border {
  height: fit-content;
  width: fit-content;
  outline: solid 9px white;
  outline-offset: -9px;
  border-radius: 12px;
}

.open {
  height: 22.4rem;
}

@media (max-width: 768px) {
  .open {
  height: 11.2rem;
}
}
</style>
