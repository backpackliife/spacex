<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/search">Search</router-link>
    </nav>
    <main>
      <router-view />
    </main>
    <footer>© Xspace 2021</footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: floralwhite;
  background-image: url("./assets/moon.jpg");
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}

main {
  min-height: 100vh;
  padding: 25px;
}

footer {
  padding: 20px;
}

#nav {
  padding: 30px;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: left;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 10px;

    &.router-link-exact-active {
      color: #f2f2f2;
      padding: 10px;
    }
  }
}
</style>
