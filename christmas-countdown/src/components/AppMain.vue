<script>

export default {
  props: ['timeLeft', 'joke', 'weekday'],

  methods: {
    generateAnotherJoke() {
      this.$emit('generateJoke');
    }
  },

  computed: {
    days() {
      return Math.round(this.timeLeft.days);
    },
    hours() {
      return Math.round(this.timeLeft.hours);
    },
    minutes() {
      return Math.round(this.timeLeft.minutes);
    },
    seconds() {
      return Math.round(this.timeLeft.seconds);
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
              <strong><mark>over me to fint out!</mark></strong>
            </p>
            <p class="answer">
              {{ joke.answer }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- time left extended -->
    <section class="section clock">
      <div class="container">
        <div class="timer">
          <div class="hours">
            <p>Hours</p>
            {{ hours }}
          </div>
          <div class="minutes">
            <p>Minutes</p>
            {{ minutes }}
          </div>
          <div class="seconds">
            <p>Seconds</p>
            {{ seconds }}
          </div>
        </div>
      </div>
    </section>
    <!-- weekday of christmas this year -->
    <section class="section weekday text-center">
      <div class="container">
        <div class="weekday__inner">
          <p>This year the christmas weekday will be on...</p>
          <span>{{ weekday }}</span>
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
        transition: transform 0.3s ease-in-out;

        &:hover {
          background-color: $black;
          color: $white;
          transform: scale(1.03);
        }
      }

      .joke-text {
        background-color: $white;
        border-radius: 20px;
        padding: 15px;
        text-align: start;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        font-size: 22px;
        user-select: none;

        &:hover {
          background-color: $orange;

          .question {
            opacity: 0;
          }

          .answer {
            opacity: 1;
          }
        }
        * {
          grid-column: 1 / -1;
          grid-row: 1;
        }

        .answer {
          opacity: 0;
          font-weight: bold;
        }

      }
    }
  }

  .clock {
    padding: 50px 10px;
    .timer {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      place-items: center;
      font-size: 32px;

      p {
        font-weight: bold;
      }

      & > * {
        background-color: rgba($lightGreen, $alpha: 0.3);
        backdrop-filter: blur(10px);
        border: 5px solid $lightGreen;
        padding: 10px 30px;
        border-radius: 10px;
        text-align: center;
      }
    }
  }

  .weekday {
    padding: 80px 10px;
    display: flex;
    color: $white;
    font-size: 30px;

    &__inner {
      padding: 40px;
      background-color: $orange;
      border-radius: 20px;
      box-shadow: 2px 2px 10px $black;

      *:first-child {
        margin-bottom: 35px;
      }
    }
  }
}

</style>