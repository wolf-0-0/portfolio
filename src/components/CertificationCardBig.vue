<template>
  <div class="card flex flex-col w-96 h-fit">
    <div class="mx-auto w-fit my-1">
      <svg class=" w-20" width="65" height="62" viewBox="0 0 65 62" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </div>
    <div class="header">
      <h2 class="text-center py-1">Full-Stack Developer</h2>
    </div>
    <div class="paragraph">
      <p class="text-center p-1  text-sm">
        Some text about how informative and great this formation was, in fact so great it changed my life completely. Or
        maybe not! Or maybe not!
      </p>
    </div>
    <div class="flex flex-wrap justify-center gap-2  p-2">
      <TagComponent v-for="(tag, index) in tags" :key="index" :tag="tag" />
    </div>
  </div>
</template>

<script>
import TagComponent from './TagComponent.vue'

export default {
  components: {
    TagComponent
  },
  props: {
    tags: Array
  }
}

</script>

<style scoped>
/* * {
  border: 1px solid black;
} */

.card {
  background-color: #47759C;
  border-radius: 6px;
  border: 1px solid #408BC5;
  box-shadow: 0px 0px 13px 4px rgba(57, 160, 237, 0.25);
}

.header {
  background-color: #408BC5;
}

.paragraph {
  border-bottom: 3px solid #408BC5;
}

</style>
