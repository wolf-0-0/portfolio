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
  background-color: #39A0ED;
  color: #4E5F74;
  border-radius: 0.4rem;
  border: 4px solid #39A0ED;
  font-size: 1.1rem;
  transition: background-color 0.3s ease, color 0.3s ease;
  box-shadow: 0px 0px 13px 4px rgba(57, 160, 237, 0.25);

}

button:hover {
  cursor: pointer;
  color: #39A0ED;
  background-color: #4E5F74;
}
</style>
