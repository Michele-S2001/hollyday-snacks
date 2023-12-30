<script>

export default {
  props: ['timeLeft', 'joke'],

  methods: {
    generateAnotherJoke() {
      this.$emit('generateJoke');
    }
  },

  computed: {
    days() {
      return Math.round(this.timeLeft.days);
    }
  }
}

</script>

<template>
  <main class="main-content">
    <!-- days left counter -->
    <section class="section time-left">
      <div class="container">
        <div class="time-left__inner text-center">
          <h3>Christmas is in</h3>
          <span class="days">{{ days }} days</span>
        </div>
      </div>
    </section>
    <!-- generate a joke -->
    <section class="section joke">
      <div class="container">
        <div class="joke__inner">
          <div 
          @click="generateAnotherJoke"
          class="joke-generator text-center">
            <h4>Click me</h4>
            <span>Get a christmas joke!</span>
          </div>
          <div class="joke-text">
            <p class="question">
              {{ joke.question }}
            </p>
            <p class="answer">
              {{ joke.answer }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.main-content {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    filter: blur(5px);
    z-index: -1;
    background-image: url(../../public/img/mariana-rascao-S4GOLEDaKw4-unsplash.jpg);
    background-size: cover;
  }

  .time-left {
    color: $white;
    padding: 30px 10px;
  
    &__inner {
      font-size: 30px;
      padding: 30px;
      background-color: $green;
      border-radius: 30px;
      box-shadow: 2px 2px 10px $black;
  
      h3 {
        font-family: 'Mountains of Christmas', serif;
        margin-bottom: 20px;
      }
  
      .days {
        font-size: 37px;
        font-weight: 700;
        color: $white;
      }
    }
  }

  .joke {
    padding: 50px 10px;

    &__inner {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;

      .joke-generator {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        font-size: 24px;
        border: 2px solid $black;
        border-radius: 20px;
      }

      .joke-text {
        background-color: $white;
        border-radius: 20px;
        padding: 15px;
      }
    }
  }
}

</style>