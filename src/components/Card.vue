<template>
  <div id="card">
    <FirstLevel />
  </div>
</template>

<script>
import FirstLevel from './FirstLevel'
export default {
  components: {
    FirstLevel
  }
}
</script>

<style>
#card {
  height: 60%;
  min-height: 457px;
  width: 22%;
  min-width: 305px;
  box-shadow: 0 0 1rem 0rem rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  background: linear-gradient(180deg, #5d668134, #3f445226);
  backdrop-filter: blur(5px);
  padding: 10px 5px;
  position: relative;
}
</style>
