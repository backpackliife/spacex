<template>
  <div class="launch-list-item">
    <h3>{{ launch.rocket.rocket_name }} - {{ launch.mission_name }}</h3>
    <p>
      <span v-if="launch.details">{{ launch.details }}</span>
      <span v-else>No launch description.</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "LaunchListItem",
  props: {
    launch: {
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">
.launch-list-item {
  margin: 2em 2em;
  padding: 1em;
  background-color: white;
  border-radius: 12px;
}
</style>
