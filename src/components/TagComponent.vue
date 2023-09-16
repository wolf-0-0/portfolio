<template>
  <span class="text-xs px-3  text-">
    {{ tag }}
  </span>
</template>

<script>
export default {
  props: {
    tag: String
  }
}
</script>

<style scoped>
span {
  border-radius: 16px;
  background-color: #408BC5;
}

@media only screen and (max-width: 640px) {
  span {
    font-size: 0.65rem;
  }
}
</style>
