<template>
  <div class="back-container">
    <button class="back" @click="goBack">
      <img src="../assets/images/back.svg" alt="Voltar" />
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      const depth = this.$store.getters.$depth
      this.$store.dispatch('setDepth', depth - 1)
      this.$store.dispatch('setTransition', 'right')
    }
  }
}
</script>

<style scoped>
.back-container {
  width: 37px;
  height: 30px;
  display: grid;
  place-items: center;
}

.back {
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  border-radius: 10px;
  background: none;
  transition: background 0.3s;
  cursor: pointer;
  display: grid;
  place-items: center;
}

.back:hover {
  background: #111111cc;
}

.back img {
  width: 20px;
  height: 20px;
}
</style>
