<template>
  <div class="home">
    <h1>Xspace</h1>
    <h2>Upcoming launches</h2>
    <p>
      “You want to wake up in the morning and think the future is going to be
      great - and that’s what being a spacefaring civilization is all about.
      <br />
      It’s about believing in the future and thinking that the future will be
      better than the past. And I can’t think of anything more exciting than
      going out there and being among the stars.” <br />
      -Elon Musk.
    </p>
    <p>These are the upcoming planned launches during 2020.</p>

    <launch-list :launches="upcomingLaunches"></launch-list>

    <h2>Past launches</h2>
    <p>Here is a list over the previous launches that has been made.</p>
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

<style scoped lang="scss">
.home {
  h1 {
    font-family: "Monoton", cursive;
    font-size: 100px;
    padding: 20px;
  }
}
</style>
