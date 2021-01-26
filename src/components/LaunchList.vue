<template>
  <div class="launch-list">
    <launch-list-item
      v-for="(launch, index) in launches"
      :key="index"
      v-bind="{ launch }"
    ></launch-list-item>
  </div>
</template>

<script>
import LaunchListItem from "@/components/LaunchListItem";

export default {
  name: "LaunchList",
  components: { LaunchListItem },
  props: {
    launches: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped lang="scss">
.launch-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
