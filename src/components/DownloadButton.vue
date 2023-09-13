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
  color: #068488;
  border-radius: 0.4rem;
  border: 4px solid #068488;
  font-size: 1.1rem;
  margin-left: 1rem;
  transition: background-color 0.3s ease, color 0.3s ease;
}

button:hover {
  cursor: pointer;
  color: azure;
  background-color: #068488;
}
</style>
