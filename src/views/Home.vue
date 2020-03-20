<template>
  <div class="home">
    <div class="background"></div>

    <div class="content">
      <div class="content-container">
        <h1>Collwyn Bevan</h1>
        <p>Web developer - IBM</p>
      </div>
      <div class="content-container">
        <div class="buttons">
          <div
            class="button"
            :class="{ active: about }"
            @click="() => {about = !about; showcase = false}"
          >About</div>
          <div
            class="button"
            :class="{ active: showcase }"
            @click="() => {showcase = !showcase; about = false}"
          >Showcase</div>
        </div>
        <about-me class="transition" :class="{ hidden: !about }"></about-me>
        <showcase class="transition" :class="{ hidden: !showcase }"></showcase>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutMe from "../components/About.vue";
import Showcase from "../components/Showcase.vue";
export default {
  components: {
    AboutMe,
    Showcase
  },
  data() {
    return {
      about: false,
      showcase: false
    };
  }
};
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}

.hidden {
  height: 0px;
  overflow: hidden;
  opacity: 0;
}

.transition {
  transition: 0.2s;
}

.content {
  margin-top: 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  font-family: "Raleway", sans-serif;
  color: rgb(255, 255, 255);
  font-weight: lighter;
  overflow: auto;
}

.content-container {
  margin: 32px;
  background: rgba(0, 0, 0, 0.15);
  height: min-content;
  padding: 16px;
  -webkit-box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  text-align: center;
  max-width: 50vw;
  @media screen and (max-width: 768px) {
    max-width: 90vw;
  }
}

.content-container > h1 {
  font-size: 7vw;
  margin-bottom: 8px;
}

.buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
}

.button {
  padding: 8px;
  font-weight: bold;
  border: 1px dashed white;
  margin: 0 16px;
  font-size: 2vw;
  transition: 0.2s;
  cursor: pointer;
  width: 15vw;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    font-size: 5vw;
    width: 40vw;
    margin: 8px 0;
  }
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}

.button:hover,
.active {
  border: 1px solid white;
  background-color: rgba(0, 0, 0, 0.295);
}

.background {
  position: absolute;
  top: 0;
  z-index: -10;
  min-width: 100vw;
  min-height: 100vh;
  filter: blur(8px);
  background-image: url("../assets/background.jpg");
  background-position: center;
  background-position: cover;
  background-repeat: no-repeat;
  /* background-size: 100%; */
  transform: scale(1.1);
}
</style>