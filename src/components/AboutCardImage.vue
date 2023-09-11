<template>
  <div class="card-right">
    <div class="img-container">
      <img alt="Profile picture" src="@/assets/images/portfolio-final.png">
    </div>
    <LinksBar />
  </div>
</template>

<script>
import LinksBar from '../components/LinksBar.vue'

export default {
  components: {
    LinksBar
  }
}
</script>

<style scoped>
.card-right {
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
}

.img-container {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  background-image: url("../assets/images/pexels-laura-tancredi.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0rem 13.40019rem;
}

.img-container::before {
  content: "";
  height: 100%;
  width: 100%;
  border-radius: 0rem 13.40019rem;
  position: absolute;
  bottom: -5%;
  left: -5%;
  border: 3px solid black;
  z-index: -1;
}

img {
  width: 100%;
  height: auto;
  border-radius: 0rem 13.40019rem;
}

@media only screen and (min-width:450px) {
  .card-right {
    max-width: 30rem;
  }
}

@media only screen and (min-width:1200px) {
  .card-right {
    max-width: 35rem;
    min-width: 470px;
  }
  .img {
    min-width: 470px;
  }
}
</style>
