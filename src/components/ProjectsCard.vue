<template>
  <div class="card">
    <div class="head">
      <h3>Projects Card</h3>
    </div>
    <div class="image-container">
    </div>
    <div class="content">
      <p>
        This project aims to understand customers' buying behavior by analyzing factors that influence their purchase
        decisions using data analysis techniques such as distributions, associations, hypothesis, and correlation to
        predict the likelihood of a customer making a purchase.
      </p>
    </div>
    <div class="buttons">
      <GithubLinkButton />
    </div>
  </div>
</template>

<script>
import GithubLinkButton from './GithubLinkButton.vue'

export default {
  components: {
    GithubLinkButton
  }
}

</script>

<style scoped>
.card {
  max-width: 24.62594rem;
  height: 45.5rem;
  background-color: #47759C;
  border-radius: 6px;
  border: 2px solid #39A0ED;
  box-shadow: 0px 0px 13px 4px rgba(57, 160, 237, 0.25);
  display: flex;
  flex-direction: column;
}

.head {
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #408BC5;
  /* border-radius: 6px; */
  border-bottom: 2px solid #39A0ED;
}

.image-container {
  height: 30%;
  width: auto;
  background: url('../assets/images/thesis_intro-1.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 1rem;
}

.content {
  border-top: 2px solid #39A0ED;
  flex-grow: 1;
  display: flex;
  align-items: center;
  text-align: center;
}

.buttons {
  height: 10%;
  border-top: 2px solid #39A0ED;
  display: flex;
  justify-content:flex-end;
  align-items: center;
  padding-right: 1rem;
  background-color: #408BC5;
}
</style>
