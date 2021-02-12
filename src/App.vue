<template>
  <div id="container">
    <Background />
    <Card />
  </div>
</template>

<script>
import Background from './components/Background'
import Card from './components/Card'
export default {
  name: 'App',
  components: {
    Background,
    Card
  },
  created() {},
  data() {
    return {}
  }
}
</script>

<style>
@import './assets/css/reset.css';
@import './assets/css/main.css';

#app {
  height: 100vh;
  width: 100%;
}

#container {
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
}
</style>
