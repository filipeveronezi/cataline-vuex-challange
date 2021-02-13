<template>
  <div id="first-level">
    <img
      id="astronaut"
      src="../assets/images/astronaut.svg"
      alt="Desenho de astronauta"
    />
    <section class="titles">
      <h1>Perguntas frequentes</h1>
      <h2>Escolha a categoria desejada</h2>
    </section>
    <ul class="options">
      <li
        class="btn"
        v-for="faqCategorie in $allFaqCategories"
        :key="faqCategorie.id"
        @click="nextDepth(faqCategorie.id)"
      >
        <img :src="getIcon(faqCategorie)" class="icon" />
        {{ faqCategorie.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    $allFaqCategories() {
      return this.$store.getters.$allFaqCategories
    }
  },
  methods: {
    getIcon(item) {
      return require(`../assets/images/${item.icon}`)
    },
    nextDepth(faqCategorieId) {
      this.$store.dispatch('fetchFaqs', faqCategorieId)
      this.$store.dispatch('setDepth', 2)
    }
  }
}
</script>

<style scoped>
#first-level {
  height: 100%;
  width: 100%;
  display: grid;
  grid: auto 80px 1fr / 1fr;
  align-content: center;
  justify-content: center;
}

#astronaut {
  height: 112px;
  width: 242px;
  padding: 5px;
  justify-self: center;
}

.titles {
  height: 100%;
  width: 100%;
  font-family: Lato;
  color: #f5f6f8;
  padding: 15px 40px;
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

.options {
  display: grid;
  grid: 1fr 1fr 1fr 1fr / 1fr;
}

.btn {
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  transition: box-shadow 0.3s;
  color: #f5f6f8;
  font-family: Lato;
  font-weight: 300;
  font-size: 16px;

  display: flex;
  align-items: center;
}

.btn:hover {
  box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
}

.icon {
  width: 22px;
  height: 22px;
  margin: 0 40px;
}
</style>
