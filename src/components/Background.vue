<template>
  <div id="galaxy">
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
  </div>
</template>

<script>
export default {}
</script>

<style>
@keyframes tail {
  0% {
    width: 0;
  }
  30% {
    width: 100px;
  }
  100% {
    width: 0;
  }
}

@keyframes falling {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(500px);
  }
}

#galaxy {
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  position: absolute;
  background: radial-gradient(ellipse at bottom, #211521, #111);
  overflow: hidden;
  z-index: -1;
}

.star {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 4px;
  width: 100px;
  background: linear-gradient(-45deg, #935e92, rgba(0, 0, 255, 0));
  border-radius: 999px;
  filter: drop-shadow(0 0 6px #af7dff);
  animation: tail 4s ease-in-out infinite, falling 4s ease-in-out infinite;
  animation-fill-mode: backwards;
}

.star:nth-child(1) {
  top: calc(50% - 100px);
  left: calc(50% - 250px);
  animation-delay: 1s;
}

.star:nth-child(2) {
  top: calc(50% - 50px);
  left: calc(50% - 200px);
  animation-delay: 1.6s;
}

.star:nth-child(3) {
  top: calc(50% - 0px);
  left: calc(50% - 150px);
  animation-delay: 1.4s;
}

.star:nth-child(4) {
  top: calc(50% - -50px);
  left: calc(50% - 200px);
  animation-delay: 2.4s;
}

.star:nth-child(5) {
  top: calc(50% - -100px);
  left: calc(50% - 250px);
  animation-delay: 2s;
}
</style>
