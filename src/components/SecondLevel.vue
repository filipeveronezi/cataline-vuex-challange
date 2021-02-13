<template>
  <div id="second-level">
    <header class="container">
      <div class="titles">
        <h1>{{ $faqCategorie.title }}</h1>
        <h2>Selecione uma pergunta</h2>
      </div>
      <img class="icon" :src="getIcon()" alt="Ícone" />
    </header>
    <hr />
    <ul class="questions">
      <li
        class="btn"
        v-for="question in $faqCategorie.questions"
        :key="question.id"
        @click="nextDepth(question.id)"
      >
        {{ question.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    $faqCategorie() {
      return this.$store.getters.$allFaqs[0]
    }
  },
  methods: {
    getIcon() {
      return require(`../assets/images/${this.$faqCategorie.icon}`)
    },
    nextDepth(faqId) {
      this.$store.dispatch('fetchFaq', faqId)
      this.$store.dispatch('setDepth', 3)
    }
  }
}
</script>

<style scoped>
#second-level {
  height: 100%;
  width: 100%;
  display: grid;
  grid: auto auto 1fr / 1fr;
  align-content: center;
  justify-content: center;
  padding: 20px 0 0 0;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 45px 0 60px;
}

.titles {
  height: 100%;
  width: 100%;
  font-family: Lato;
  color: #f5f6f8;
}

.titles h1 {
  font-size: 20px;
  font-weight: 400;
}

.titles h2 {
  font-size: 13px;
  font-weight: 300;
  margin-top: 10px;
}

.icon {
  width: 25px;
  height: 25px;
}

hr {
  background: #3f4452b3;
  border: none;
  height: 1px;
  margin: 30px 0 15px 0;
}

.questions {
  display: grid;
  grid: 1fr 1fr 1fr 1fr 1fr 1fr / 1fr;
}

.btn {
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-family: Lato;
  font-size: 16px;
  color: #f5f6f8;
  font-weight: 300;
  cursor: pointer;
  height: 100%;
  width: 100%;
}

.btn:hover {
  box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
}
</style>
