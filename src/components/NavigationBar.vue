<template>
  <nav class="navbar">
    <router-link class="router-link" v-for="(item, index) in navItems" :key="index" :to="item.to">
      <svg :class="{ 'active': isActive(item.to) }" @mouseenter="onMouseEnter(item.to)" @mouseleave="onMouseLeave()"
        width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- svgPath here -->
        <path id="icon" :d="item.svgData" />
      </svg>
      <!-- v-if="isActive(item.to)" :class="{ 'active': isActive(item.to) }"-->
      <span :class="{ 'active': true }" v-if="true" class="tooltip">{{ item.text }}</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      navItems: [
        {
          text: 'About',
          svgData: 'M53.9152 90H39.6441C39.0918 90 38.6441 89.5523 38.6441 89L38.6441 60.2437C38.6441 59.6914 38.1963 59.2437 37.6441 59.2437H32.4585C31.5614 59.2437 31.1181 58.1538 31.7605 57.5276L59.302 30.6804C59.6903 30.3019 60.3097 30.3019 60.698 30.6804L88.2395 57.5276C88.8819 58.1538 88.4386 59.2437 87.5415 59.2437H82.3559C81.8037 59.2437 81.3559 59.6914 81.3559 60.2437L81.3559 89C81.3559 89.5523 80.9082 90 80.3559 90H66.0848C65.5325 90 65.0848 89.5523 65.0848 89L65.0848 72.8487C65.0848 72.2965 64.637 71.8487 64.0848 71.8487H60H55.9152C55.363 71.8487 54.9152 72.2965 54.9152 72.8487L54.9152 89C54.9152 89.5523 54.4675 90 53.9152 90Z',
          to: '/'
        },
        {
          text: 'Education',
          svgData: 'M53.9152 90H39.6441C39.0918 90 38.6441 89.5523 38.6441 89L38.6441 60.2437C38.6441 59.6914 38.1963 59.2437 37.6441 59.2437H32.4585C31.5614 59.2437 31.1181 58.1538 31.7605 57.5276L59.302 30.6804C59.6903 30.3019 60.3097 30.3019 60.698 30.6804L88.2395 57.5276C88.8819 58.1538 88.4386 59.2437 87.5415 59.2437H82.3559C81.8037 59.2437 81.3559 59.6914 81.3559 60.2437L81.3559 89C81.3559 89.5523 80.9082 90 80.3559 90H66.0848C65.5325 90 65.0848 89.5523 65.0848 89L65.0848 72.8487C65.0848 72.2965 64.637 71.8487 64.0848 71.8487H60H55.9152C55.363 71.8487 54.9152 72.2965 54.9152 72.8487L54.9152 89C54.9152 89.5523 54.4675 90 53.9152 90Z',
          to: '/education'
        },
        {
          text: 'Skills',
          svgData: 'M53.9152 90H39.6441C39.0918 90 38.6441 89.5523 38.6441 89L38.6441 60.2437C38.6441 59.6914 38.1963 59.2437 37.6441 59.2437H32.4585C31.5614 59.2437 31.1181 58.1538 31.7605 57.5276L59.302 30.6804C59.6903 30.3019 60.3097 30.3019 60.698 30.6804L88.2395 57.5276C88.8819 58.1538 88.4386 59.2437 87.5415 59.2437H82.3559C81.8037 59.2437 81.3559 59.6914 81.3559 60.2437L81.3559 89C81.3559 89.5523 80.9082 90 80.3559 90H66.0848C65.5325 90 65.0848 89.5523 65.0848 89L65.0848 72.8487C65.0848 72.2965 64.637 71.8487 64.0848 71.8487H60H55.9152C55.363 71.8487 54.9152 72.2965 54.9152 72.8487L54.9152 89C54.9152 89.5523 54.4675 90 53.9152 90Z',
          to: '/skills'
        },
        {
          text: 'Projects',
          svgData: 'M53.9152 90H39.6441C39.0918 90 38.6441 89.5523 38.6441 89L38.6441 60.2437C38.6441 59.6914 38.1963 59.2437 37.6441 59.2437H32.4585C31.5614 59.2437 31.1181 58.1538 31.7605 57.5276L59.302 30.6804C59.6903 30.3019 60.3097 30.3019 60.698 30.6804L88.2395 57.5276C88.8819 58.1538 88.4386 59.2437 87.5415 59.2437H82.3559C81.8037 59.2437 81.3559 59.6914 81.3559 60.2437L81.3559 89C81.3559 89.5523 80.9082 90 80.3559 90H66.0848C65.5325 90 65.0848 89.5523 65.0848 89L65.0848 72.8487C65.0848 72.2965 64.637 71.8487 64.0848 71.8487H60H55.9152C55.363 71.8487 54.9152 72.2965 54.9152 72.8487L54.9152 89C54.9152 89.5523 54.4675 90 53.9152 90Z',
          to: '/projects'
        },
        {
          text: 'Contact',
          svgData: 'M53.9152 90H39.6441C39.0918 90 38.6441 89.5523 38.6441 89L38.6441 60.2437C38.6441 59.6914 38.1963 59.2437 37.6441 59.2437H32.4585C31.5614 59.2437 31.1181 58.1538 31.7605 57.5276L59.302 30.6804C59.6903 30.3019 60.3097 30.3019 60.698 30.6804L88.2395 57.5276C88.8819 58.1538 88.4386 59.2437 87.5415 59.2437H82.3559C81.8037 59.2437 81.3559 59.6914 81.3559 60.2437L81.3559 89C81.3559 89.5523 80.9082 90 80.3559 90H66.0848C65.5325 90 65.0848 89.5523 65.0848 89L65.0848 72.8487C65.0848 72.2965 64.637 71.8487 64.0848 71.8487H60H55.9152C55.363 71.8487 54.9152 72.2965 54.9152 72.8487L54.9152 89C54.9152 89.5523 54.4675 90 53.9152 90Z',
          to: '/contact'
        }
        // Add more items as needed
      ],
      activeRoute: null
    }
  },
  methods: {
    isActive (route) {
      return route === this.activeRoute
    },
    onMouseEnter (route) {
      this.activeRoute = route
    },
    onMouseLeave () {
      this.activeRoute = null
    }
  }
}
</script>

<style scoped>
/* CSS styles specific to this component */
.navbar {
  display: flex;
  justify-content: space-between;
  height: 10vh;
  width: 100%;
  bottom: 0;
  position: absolute;
  align-items: center;
  background-color: #068488;
}

svg {
  /* position: absolute; */
  background-color: #068488;
  width: 3rem;
  height: auto;
  border-radius: 50%;
  transition: 0.25s;
  z-index: 1;
}

svg.active {
  /* position: absolute; */
  transform: translateX(0vw);
  filter: drop-shadow(0px 0px 4px #EEE8A9);
}

#icon {
  fill: #068488;
  stroke: #EEE8A9;
  stroke-width: 3;
}

.router-link {
  position: relative;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.25s;
}

.router-link:hover #icon {
  stroke: #EEE8A9;
  stroke-width: 3;
  filter: drop-shadow(0px 0px 4px #EEE8A9);
}

#icon.active {
  stroke: #EEE8A9;
  stroke-width: 3;
  filter: drop-shadow(0px 0px 4px #EEE8A9);
}

span {
  position: absolute;
  background: transparent;
  color: #EEE8A9;
  font-weight: bold;
  font-size: 0.8rem;
  letter-spacing: 0.05rem;
  transition: 0.5s;
  opacity: 0;
}

span.active {
  background: transparent;
  transform: translateY(-1.8rem);
  opacity: 1;
}
</style>
