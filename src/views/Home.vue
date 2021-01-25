<template>
  <div class="home">
    <h1>Upcoming launches</h1>
    <launch-list :launches="upcomingLaunches"></launch-list>

    <h1>Past launches</h1>
    <launch-list :launches="pastLaunches"></launch-list>
  </div>
</template>

<script>
import axios from "axios";
import LaunchList from "@/components/LaunchList";

export default {
  name: "Home",
  components: { LaunchList },
  data() {
    return {
      limit: 10,
      pastLaunches: [],
      upcomingLaunches: [],
    };
  },
  created() {
    this.fetchPastLaunches();
    this.fetchUpcomingLaunches();
  },
  methods: {
    async fetchPastLaunches() {
      const { data } = await axios.get(
        `https://api.spacexdata.com/v3/launches/past?limit=${this.limit}`
      );
      this.pastLaunches = data;
    },
    async fetchUpcomingLaunches() {
      const { data } = await axios.get(
        `https://api.spacexdata.com/v3/launches/upcoming?limit=${this.limit}`
      );
      this.upcomingLaunches = data;
    },
  },
};
</script>
