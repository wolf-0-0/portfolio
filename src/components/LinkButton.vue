<template>
  <router-link :to="link">
    <button>{{ title }}</button>
  </router-link>
</template>

<script>
export default {
  props: {
    title: String,
    link: String
  }
}
</script>

<style scoped>
button {
  width: fit-content;
  padding: 0.3rem 0.2rem;
  background-color: #068488;
  color: #7ED183;
  border-radius: 0.4rem;
  border: 4px solid #068488;
  font-size: 1.1rem;
  transition: background-color 0.3s ease, color 0.3s ease;
}

button:hover {
  cursor: pointer;
  color: #068488;
  background-color: #7ED183;
}
</style>
