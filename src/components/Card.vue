<template>
  <div id="card">
    <button
      class="back"
      v-if="currentComponent != 'FirstLevel'"
      @click="goBack"
    >
      <img src="../assets/images/back.svg" alt="Voltar" />
    </button>
    <transition :name="$transition" mode="out-in">
      <component :is="currentComponent" />
    </transition>
  </div>
</template>

<script>
import FaqCategories from './FaqCategories'
import Questions from './Questions'
import Answer from './Answer'
export default {
  components: {
    FaqCategories,
    Questions,
    Answer
  },
  computed: {
    currentComponent() {
      const depth = this.$store.getters.$depth
      if (depth == 1) return 'FaqCategories'
      else if (depth == 2) return 'Questions'
      else if (depth == 3) return 'Answer'
      else return ''
    },
    $transition() {
      return this.$store.getters.$transition
    }
  },
  methods: {
    goBack() {
      const depth = this.$store.getters.$depth
      if (depth == 2) this.$store.dispatch('setDepth', 1)
      else if (depth == 3) this.$store.dispatch('setDepth', 2)
      this.$store.dispatch('setTransition', 'right')
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

/* Transitions */
.left-enter-from,
.right-enter-from {
  opacity: 0;
}

.left-enter-active,
.right-enter-active,
.left-leave-active,
.right-leave-active {
  transition: 0.2s;
}

.left-enter-to,
.right-enter-to {
  opacity: 1;
}

.left-leave-from,
.right-leave-from {
  opacity: 1;
}

.left-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.right-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
