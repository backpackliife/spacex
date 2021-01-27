<template>
  <div class="search">
    <h1>Xspace</h1>
    <h2>Search launches</h2>
    <p>
      SpaceX has contracted more than 100 launches since 2012, take a closer
      look and explore them here.
    </p>
    <div class="preset-container">
      <b-button
        @click="search(preset)"
        v-for="preset in searchPresets"
        :key="preset"
        pill
        variant="outline-light"
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
      //console.log(data);
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
  padding: 20px;

  .btn {
    margin: 0 1em;
    padding: 20px;
    border-style: solid;
  }
}

input {
  width: 40%;
  padding: 15px;
  color: white;
  font-size: 20px;

  appearance: none;
  border-style: solid;
  outline: none;
  background: white;

  background-color: rgba(255, 255, 255, 0.214);
  border-radius: 0px 16px 0px 16px;
}

h1 {
  font-family: "Monoton", cursive;
  font-size: 100px;
  padding: 20px;
}
</style>
