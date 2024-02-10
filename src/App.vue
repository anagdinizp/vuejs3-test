<template>
  <div>
    <nav class="header">
      <router-link to="/"><p>Today</p></router-link>
      <router-link to="/done"><p>Done</p></router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.header {
  background: #f6f7f9;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 45px;
  justify-content: flex-start;
  align-items: baseline;
  display: flex;
  justify-items: baseline;
}

nav a {
  background: transparent;
  color: #262626;
  font-size: 14px;
  border: 0;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  margin-left: 20px;
  text-decoration: none;
  justify-items: baseline;
}

nav a.router-link-exact-active {
  color: #24a19c;
  text-decoration: none;
  border-bottom: 2px solid #24a19c;
}
</style>
