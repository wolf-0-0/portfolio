<template>
  <div class="container">
    <div class="card-left">
      <h2 class="title">Cedric <span class="bg-box">Sousa</span> <br> Full-Stack <span class="text-color">Developer</span>
      </h2>
      <p class="content">
        I have a strong desire to learn and to
        grow my skills.
        I'm committed in creating quality work and have a passion for problem solving.
      </p>
      <div class="buttons">
        <button>Talk to me</button>
        <button>Download C.V</button>
      </div>
    </div>
    <div class="card-right">
      <div class="img-container">
        <img alt="Vue logo" src="../assets/images/portfolio-final.png">
      </div>
      <div class="links-bar">
        <div class="horizontal-line"></div>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-square-github"></i>
        <div class="horizontal-line"></div>
      </div>
    </div>
  </div>
</template>

<style>
html {
  overflow-x: hidden;
}

.container {
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(108deg, #7ED183 26.21%, #068488 123.39%);
  padding-inline: 3rem;
  gap: 2rem;
  overflow: auto;
  /* flex: 50% 50%; */
}

/*#region LEFT*/
.card-left {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  gap: 1rem;
}

.content {
  width: 82%;
  font-size: 0.9rem;
}

.bg-box {
  position: absolute;
  background-color: #068488;
  width: 100%;
  color: #7ED183;
  margin-left: 0.4rem;
  border-radius: 0.4rem 0 0 0.4rem;
  padding-left: 0.4rem;
}

.text-color {
  color: #068488;
  z-index: 2;
  margin-right: 2.5rem;
}

button {
  width: fit-content;
  padding: 0.3rem 0.2rem;
  background-color: #068488;
  color: #7ED183;
  border-radius: 0.4rem;
  border: 4px solid #068488;
  font-size: 0.9rem;
}

button:last-child {
  margin-left: 1rem;
  background-color: transparent;
  color: #068488;
}

/*#endregion*/

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

.fa-linkedin,
.fa-square-github {
  font-size: 2rem;
}

.links-bar {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 5%;
}

.horizontal-line {
  border: 1px solid black;
  width: 100%;
  height: 0;
}

@media only screen and (min-width:450px) {

  .content {
    width: 82%;
    font-size: 1rem;
  }

  .title {
    font-size: 2rem;
  }

  .card-left {
    max-width: 28rem;
  }

  .card-right {
    max-width: 28rem;
  }
}

@media only screen and (min-width:610px) {
  .container {
    padding: 3rem;
  }
}

@media only screen and (min-width:960px) {
  .container {
    margin-left: 10vw;
    height: 100vh;
    width: 100%;
  }
  .content {
    width: 100%;
    font-size: 1.2rem;
  }

  .title {
    font-size: 2.2rem;
  }

  .button {
    font-size: 1.2rem;
  }

  .card-left {
    max-width: 30rem;
  }

  .card-right {
    max-width: 30rem;
  }
}

@media only screen and (min-width:1200px) {
  .container {
    flex-direction: unset;
    padding-block: 10rem;
  }

  .card-left {
    gap: 3rem;
    max-width: 35rem;
  }

  .card-right {
    max-width: 35rem;
  }

  .bg-box {
  width: 35rem;
  }
}

</style>

<script>

</script>
