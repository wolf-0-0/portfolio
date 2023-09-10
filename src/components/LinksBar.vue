<template>
  <div class="links-bar">
    <div class="horizontal-line"></div>
    <a href="https://linkedin.com/in/sousa-cedric"><i class="fa-brands fa-linkedin"></i></a>
    <a href="https://github.com/wolf-0-0"><i class="fa-brands fa-square-github"></i></a>
    <div class="horizontal-line"></div>
  </div>
</template>

<script>
</script>

<style scoped>
.fa-linkedin,
.fa-square-github {
  font-size: 2rem;
  transition: scale 0.1s ease;

}

.fa-linkedin:hover,
.fa-square-github:hover {
  scale: 1.1;
  cursor: pointer;
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
</style>
