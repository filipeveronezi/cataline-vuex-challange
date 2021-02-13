<template>
  <div id="card">
    <button
      class="back"
      v-if="currentComponent != 'FirstLevel'"
      @click="goBack"
    >
      <img src="../assets/images/back.svg" alt="Voltar" />
    </button>
    <component :is="currentComponent" />
  </div>
</template>

<script>
import FirstLevel from './FirstLevel'
import SecondLevel from './SecondLevel'
import ThirdLevel from './ThirdLevel'
export default {
  components: {
    FirstLevel,
    SecondLevel,
    ThirdLevel
  },
  computed: {
    currentComponent() {
      const depth = this.$store.getters.$depth
      if (depth == 1) return 'FirstLevel'
      else if (depth == 2) return 'SecondLevel'
      else if (depth == 3) return 'ThirdLevel'
      else return ''
    }
  },
  methods: {
    goBack() {
      const depth = this.$store.getters.$depth
      if (depth == 2) this.$store.dispatch('setDepth', 1)
      else if (depth == 3) this.$store.dispatch('setDepth', 2)
    }
  }
}
</script>

<style>
#card {
  height: 457px;
  width: 315px;
  box-shadow: 0 0 1rem 0rem rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  background: linear-gradient(180deg, #5d668134, #3f445226);
  backdrop-filter: blur(4px);
  padding: 10px 5px;
  position: relative;
}

.back {
  width: 37px;
  height: 30px;
  outline: none;
  border: none;
  border-radius: 10px;
  background: none;
  position: fixed;
  margin: 18px 0 0 10px;
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
