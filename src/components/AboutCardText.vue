<template>
  <div class="card-left">
    <h2 class="title">{{title1}} <span class="bg-box">{{titleBox}}</span> <br> {{ title2 }} <span class="text-color">{{titleColor}}</span>
    </h2>
    <p class="content">
      {{content}}
    </p>
    <div class="buttons">
      <LinkButton :title="linkTitle" :link="linkPath" />
      <DownloadButton :title="downloadTitle" />
    </div>
  </div>
</template>

<script>
import DownloadButton from '../components/DownloadButton.vue'
import LinkButton from '../components/LinkButton.vue'

export default {
  components: {
    DownloadButton,
    LinkButton
  },
  props: {
    title1: String,
    title2: String,
    titleBox: String,
    titleColor: String,
    content: String
  },
  data () {
    return {
      downloadTitle: 'Download C.V',
      linkTitle: 'Contact Me',
      linkPath: '/contact'
    }
  }
}
</script>

<style scoped>
.card-left {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  gap: 1.5rem;
  position: relative;
}

.content {
  font-size: 0.9rem;
}

.title {
    font-size: 1.9rem;
  }

.bg-box {
  position: absolute;
  background-color: #47759C;
  border: 1px solid #39A0ED;
  box-shadow: 0px 0px 13px 4px rgba(57, 160, 237, 0.25);
  width: 100%;
  color: #39A0ED;
  margin-left: 0.4rem;
  border-radius: 0.4rem 0 0 0.4rem;
  padding-left: 0.4rem;
  z-index: -1
}

.text-color {
  color: #39A0ED;
  z-index: 2;
  margin-right: 2.5rem;
}

@media only screen and (min-width:450px) {

  .content {
    font-size: 0.9rem;
  }

  .title {
    font-size: 1.9rem;
  }

  .card-left {
    max-width: 28rem;
  }
  .bg-box {
    width: 120%;
  }

}

@media only screen and (min-width:1200px) {

  .card-left {
    gap: 3rem;
    max-width: 35rem;
    max-height: 410px;
  }

  .bg-box {
    width: 150%;
  }
}
</style>
