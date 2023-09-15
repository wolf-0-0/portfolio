<template>
  <a :href="pdfPath" download>
    <button>{{ title }}</button>
  </a>
</template>

<script>
export default {
  props: {
    title: String
  },
  data () {
    return {
      pdfPath: process.env.BASE_URL + 'pdf/sousa_cedric_cv.pdf'
    }
  }
}
</script>

<style scoped>
button {
  width: fit-content;
  padding: 0.3rem 0.2rem;
  background-color: transparent;
  color: #39A0ED;
  border-radius: 0.4rem;
  border: 4px solid #39A0ED;
  font-size: 1.1rem;
  margin-left: 1rem;
  transition: background-color 0.3s ease, color 0.3s ease;
  box-shadow: 0px 0px 13px 4px rgba(57, 160, 237, 0.25);
}

button:hover {
  cursor: pointer;
  color: #47759C;
  background-color: #39A0ED;
}
</style>
