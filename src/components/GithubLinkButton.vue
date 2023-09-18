<template>
  <a href="https://github.com/wolf-0-0/online_shop_intention_project">
    <button>
      <svg width="40" height="40" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M60 10C32.375 10 10 32.375 10 60C10 82.125 24.3125 100.812 44.1875 107.437C46.6875 107.875 47.625 106.375 47.625 105.063C47.625 103.875 47.5625 99.9375 47.5625 95.75C35 98.0625 31.75 92.6875 30.75 89.875C30.1875 88.4375 27.75 84 25.625 82.8125C23.875 81.875 21.375 79.5625 25.5625 79.5C29.5 79.4375 32.3125 83.125 33.25 84.625C37.75 92.1875 44.9375 90.0625 47.8125 88.75C48.25 85.5 49.5625 83.3125 51 82.0625C39.875 80.8125 28.25 76.5 28.25 57.375C28.25 51.9375 30.1875 47.4375 33.375 43.9375C32.875 42.6875 31.125 37.5625 33.875 30.6875C33.875 30.6875 38.0625 29.375 47.625 35.8125C51.625 34.6875 55.875 34.125 60.125 34.125C64.375 34.125 68.625 34.6875 72.625 35.8125C82.1875 29.3125 86.375 30.6875 86.375 30.6875C89.125 37.5625 87.375 42.6875 86.875 43.9375C90.0625 47.4375 92 51.875 92 57.375C92 76.5625 80.3125 80.8125 69.1875 82.0625C71 83.625 72.5625 86.625 72.5625 91.3125C72.5625 98 72.5 103.375 72.5 105.063C72.5 106.375 73.4375 107.937 75.9375 107.437C85.8635 104.086 94.4885 97.7075 100.599 89.1975C106.71 80.688 109.997 70.4765 110 60C110 32.375 87.625 10 60 10Z"
          stroke="black" stroke-width="5" stroke-linejoin="round" />
      </svg>
      <span>GitHub</span>
    </button>
  </a>
</template>

<script>

</script>

<style scoped>
button {
  width: fit-content;
  background-color: #47759C;
  color: #39A0ED;
  border-radius: 0.4rem;
  /* border: 4px solid #39A0ED; */
  font-size: 1.4rem;
  margin-left: 1rem;
  transition: background-color 0.3s ease, color 0.3s ease;
  box-shadow: 0px 0px 13px 4px rgba(57, 160, 237, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 7.4rem;
  height: 2.5rem;
}

svg path {
  stroke: #39A0ED;
  transition: stroke 0.3s ease, color 0.3s ease;
}

button:hover {
  cursor: pointer;
  color: #47759C;
  background-color: #39A0ED;
}

button:hover svg path {
  stroke: #47759C;
}
</style>
