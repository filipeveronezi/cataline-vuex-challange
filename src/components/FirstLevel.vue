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
    <div class="buttons">
      <button class="btn">
        <img
          class="icon"
          src="../assets/images/rocket.svg"
          alt="Ícone de foguete"
        />
        Basecamp
      </button>
      <button class="btn">
        <img
          class="icon"
          src="../assets/images/astronaut-helmet.svg"
          alt="Ícone de capacete de astronauta"
        />
        Bootcamp
      </button>
      <button class="btn">
        <img
          class="icon"
          src="../assets/images/student-hat.svg"
          alt="Ícone de chapéu de estudante"
        />
        Cataline
      </button>
      <button class="btn">
        <img
          class="icon"
          src="../assets/images/partnership.svg"
          alt="Ícone de parcerias'"
        />
        Parcerias
      </button>
    </div>
  </div>
</template>

<script>
export default {}
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

.buttons {
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
