<template>
  <ViewMainCard>
    <div class="p-4 flex flex-col lg:flex-row justify-center items-center gap-4">
      <div class="lg:w-1/2">
        <AboutCardText :title1="title1" :title-box="titleBox" :title2="title2" :titleColor="titleColor"
          :content="content" />
      </div>
      <div class="lg:w-1/2">
        <AboutCardImage :imagePath="imagePath" />
      </div>
    </div>
  </ViewMainCard>
</template>

<script>
import AboutCardText from '../components/AboutCardText.vue'
import AboutCardImage from '../components/AboutCardImage.vue'
import ViewMainCard from '../components/ViewMainCard.vue'

export default {
  components: {
    ViewMainCard,
    AboutCardText,
    AboutCardImage
  },
  data () {
    return {
      title1: 'Cedric',
      titleBox: 'Sousa',
      title2: 'Full-Stack',
      titleColor: 'Developer',
      content: `I have a Bachelor's degree in Telecommunications, with certificates in Python, HTML,
                Javascript and Linux. I have a strong desire to learn and
                grow my skills, and have showcased my knowledge of programming languages through various personal
                projects. I'm committed in creating quality work and have a passion for problem solving.
                Currently based in Luxembourg, and available for freelance and contract work.`
    }
  }
}
</script>
