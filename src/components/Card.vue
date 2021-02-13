<template>
  <div id="card">
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

#content {
  height: 100%;
  width: 100%;
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
