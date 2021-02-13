<template>
  <div id="galaxy">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
  </div>
</template>

<script>
export default {}
</script>

<style>
@import '../assets/css/stars.css';

#galaxy {
  height: 100%;
  width: 100%;
  display: grid;
  position: absolute;
  background: radial-gradient(ellipse at bottom, #211521, #111);
  overflow: hidden;
  z-index: -1;
}
</style>
