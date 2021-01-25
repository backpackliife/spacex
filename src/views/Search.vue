<template>
  <div class="search">
    <h1>Search launches</h1>
    <div class="preset-container">
      <b-button
        @click="search(preset)"
        v-for="preset in searchPresets"
        :key="preset"
        pill
        variant="outline-secondary"
      >
        {{ preset }}
      </b-button>
    </div>
    <input type="text" v-model="searchInput" placeholder="Search..." />
    <launch-list :launches="searchResults"></launch-list>
  </div>
</template>

<script>
import axios from "axios";
import LaunchList from "@/components/LaunchList";

export default {
  name: "Search",
  components: { LaunchList },
  data() {
    return {
      launches: [],
      searchInput: "",
      searchPresets: ["Falcon Heavy", "Falcon 9", "Falcon 1"],
    };
  },
  created() {
    this.fetchLaunches();
  },
  computed: {
    searchResults() {
      const search = this.searchInput.toLowerCase();
      return this.launches.filter((launch) => {
        const { mission_name, rocket } = launch;

        return (
          mission_name.toLowerCase().includes(search) ||
          rocket.rocket_name.toLowerCase().includes(search)
        );
      });
    },
  },
  methods: {
    async fetchLaunches() {
      const { data } = await axios.get(
        "https://api.spacexdata.com/v3/launches"
      );
      this.launches = data;
    },
    search(value) {
      this.searchInput = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.preset-container {
  margin: 20px;

  .btn {
    margin: 0 2em;
  }
}
</style>
