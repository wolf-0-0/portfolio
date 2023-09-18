<template>
  <ViewMainCard>
    <ProjectsCard />
  </ViewMainCard>
</template>

<script>
import ViewMainCard from '../components/ViewMainCard.vue'
import ProjectsCard from '../components/ProjectsCard.vue'

export default {
  components: {
    ViewMainCard,
    ProjectsCard
  }

}
</script>

<style scoped>
* {
  border: 1px solid black;
}
</style>
