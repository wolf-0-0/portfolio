<template>
  <div class="container">
    <AboutCardText :title1="title1" :title-box="titleBox" :title2="title2" :titleColor="titleColor" :content="content"/>
    <AboutCardImage :imagePath="imagePath"/>
  </div>
</template>

<script>

import AboutCardText from '../components/AboutCardText.vue'
import AboutCardImage from '../components/AboutCardImage.vue'

export default {
  components: {
    AboutCardText,
    AboutCardImage
  },
  data () {
    return {
      title1: 'Cedric',
      titleBox: 'Sousa',
      title2: 'Full-Stack',
      titleColor: 'Web Developer',
      content: `I have a Bachelor's degree in Telecommunications, with certificates in Python, HTML,
                Javascript and Linux. I have a strong desire to learn and
                grow my skills, and have showcased my knowledge of programming languages through various personal
                projects. I'm committed in creating quality work and have a passion for problem solving.
                Currently based in Luxembourg, and available for freelance and contract work.`
    }
  }
}
</script>

<style>
.container {
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(108deg, #7ED183 26.21%, #068488 123.39%);
  /* padding-inline: 3rem; */
  gap: 2rem;
  overflow: auto;
}

@media only screen and (min-width:610px) and (max-width: 959px) {
  .container {
    /* padding: 3rem; */
  }
}

@media only screen and (min-width:960px) {
  .container {
    margin-left: 10vw;
    min-height: 100vh;
    height: fit-content;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
}

@media only screen and (min-width:1200px) {
  .container {
    flex-direction: unset;
    padding-block: 10rem;
  }
}
</style>
