<template>
  <div class="background flex p-4 items-center min-h-screen overflow-y-scroll overflow-x-hidden sm:ml-48 ">
    <div class="flex flex-col lg:flex-row w-full items-center justify-center gap-4">
      <div class="card flex w-2/5 h-fit items-center">
        <h1 class="text-8xl font-bold flex-shrink p-4">DIPLOMAS</h1>
        <div class="flex flex-col gap-4 mx-auto">
          <div v-for="(item, index) in items" :key="index">
            <div class="flex items-center" @click="toggleAccordion(index)">
              <svg :class="{ 'rotate': !item.isOpen }" width="43" height="41" viewBox="0 0 43 41" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M25.1373 36.6427C23.404 39.7745 18.8878 39.7358 17.2047 36.5747L2.36957 8.71164C0.760994 5.69044 2.96728 2.04993 6.38904 2.07927L36.5018 2.33744C39.9235 2.36677 42.0714 6.04462 40.4149 9.03783L25.1373 36.6427Z"
                  stroke="#E4FEFF" stroke-width="3.00884" />
              </svg>
              <p class="pl-4 text-3xl font-bold">
                Bachelor in Telecommunication
              </p>
            </div>
            <div class="w-full border-white relative pt-4">
              <hr class="absolute" v-if="item.isOpen">
              <img src="@/assets/images/diplomas-1.png" class="mx-auto w-80 h-0" :class="{ 'open': item.isOpen }">
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-3/5  h-fit items-center">
        <h1 class="cert text-7xl font-bold  w-96 h-fit flex items-center justify-center">CERTIFICATES</h1>
        <div class="cert-list h-full w-full">
          <div class="flex cert w-11/12 mx-auto">
            <svg class=" w-40" width="65" height="62" viewBox="0 0 65 62" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_177_186)">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M16.25 46.5C16.25 42.2199 19.8877 38.75 24.375 38.75H32.5V46.5C32.5 50.7801 28.8622 54.25 24.375 54.25C19.8877 54.25 16.25 50.7801 16.25 46.5Z"
                  fill="#0ACF83" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M32.5 31C32.5 26.7199 36.1378 23.25 40.625 23.25C45.1122 23.25 48.75 26.7199 48.75 31C48.75 35.2801 45.1122 38.75 40.625 38.75C36.1378 38.75 32.5 35.2801 32.5 31Z"
                  fill="#1ABCFE" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M16.25 31C16.25 35.2801 19.8877 38.75 24.375 38.75H32.5V23.25H24.375C19.8877 23.25 16.25 26.7199 16.25 31Z"
                  fill="#A259FF" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M32.5 7.75V23.25H40.625C45.1122 23.25 48.75 19.7801 48.75 15.5C48.75 11.2198 45.1122 7.75 40.625 7.75H32.5Z"
                  fill="#FF7262" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M16.25 15.5C16.25 19.7801 19.8877 23.25 24.375 23.25H32.5V7.75H24.375C19.8877 7.75 16.25 11.2198 16.25 15.5Z"
                  fill="#F24E1E" />
              </g>
              <defs>
                <clipPath id="clip0_177_186">
                  <rect width="65" height="62" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div>
              <h2>Full-Stack Developer</h2>
              <p class="cap4lab">Cap4Lab 2023</p>
              <div class="flex flex-wrap">
                <span v-for="(tag, index) in tags" :key="index">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
          <div>
            <div class="certs">
              <div class="cert flex items-center" v-for="(cert, index) in certs" :key="index">
                <svg class=" w-8" width="65" height="62" viewBox="0 0 65 62" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_177_186)">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M16.25 46.5C16.25 42.2199 19.8877 38.75 24.375 38.75H32.5V46.5C32.5 50.7801 28.8622 54.25 24.375 54.25C19.8877 54.25 16.25 50.7801 16.25 46.5Z"
                      fill="#0ACF83" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M32.5 31C32.5 26.7199 36.1378 23.25 40.625 23.25C45.1122 23.25 48.75 26.7199 48.75 31C48.75 35.2801 45.1122 38.75 40.625 38.75C36.1378 38.75 32.5 35.2801 32.5 31Z"
                      fill="#1ABCFE" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M16.25 31C16.25 35.2801 19.8877 38.75 24.375 38.75H32.5V23.25H24.375C19.8877 23.25 16.25 26.7199 16.25 31Z"
                      fill="#A259FF" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M32.5 7.75V23.25H40.625C45.1122 23.25 48.75 19.7801 48.75 15.5C48.75 11.2198 45.1122 7.75 40.625 7.75H32.5Z"
                      fill="#FF7262" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M16.25 15.5C16.25 19.7801 19.8877 23.25 24.375 23.25H32.5V7.75H24.375C19.8877 7.75 16.25 11.2198 16.25 15.5Z"
                      fill="#F24E1E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_177_186">
                      <rect width="65" height="62" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div>
                  <h2 class="title">{{ cert.title }}</h2>
                  <p class="cap4lab">{{ cert.company }}</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: Array(3).fill().map(() => ({ isOpen: false })), // Initialize with 3 items
      tags: Array(18).fill('JavaScript'), // Initialize with 18 items 16
      certs: Array(16).fill({
        title: 'Linux Tools for Software Developement',
        company: 'EDX 2022'
      })
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
<style scoped >
/* * {
  border: 1px solid black;
} */

.title {
  padding: 0 0.4rem;
  border-radius: 16px;
  background-color: #1ABCFE;
}
.cert {
  border-bottom: 3px solid azure;
  border-radius: 12px;
}

.certs {
  padding: 0.6rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.6rem;
}

.cap4lab {
  color: black;
  font-size: small;
}

span {
  margin-block: 0.2rem;
  margin-right: 0.2rem;
  padding: 0 0.4rem;
  border-radius: 16px;
  background-color: #1ABCFE;
}

.background {
  background: linear-gradient(270deg, #068488 0%, #FFF 100%);
}

h1 {
  writing-mode: vertical-rl;
  text-orientation: upright;
  color: azure;
  border-right: 2px solid azure;
}

p {
  color: azure;
}

svg {
  transition: transform 1.5s;
}

.rotate {
  transform: rotate(-90deg);
}

hr {
  height: 90%;
  border: 1px solid azure;
  top: 50%;
  left: 18px;
  transform: translateY(-50%);
}

img {
  transition: 1.5s;
  border-radius: 6px;
}

.open {
  height: 28.2rem;
}

.card {
  background-color: #068488;
  border-radius: 12px;
}
</style>
