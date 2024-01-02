<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';

export default {
  components: {
    AppMain,
    AppHeader
  },

  data() {
    return {
      timeLeftData: {},
      currentJoke: {},
      currentWeekday: ''
    }
  },

  methods: {
    fetchTimeLeft() {
      axios
        .get('https://christmascountdown.live/api/timeleft/', {
          params: {
            timezone: 'Europe/London'
          }
        }).then((par) => {
          this.timeLeftData = par.data;
        })
    },
    
    fetchJoke() {
      axios
      .get('https://christmascountdown.live/api/joke', {
          params: {
            timezone: 'Europe/London'
          }
        }).then((par) => {
          this.currentJoke = par.data;
        })
    },

    fetchWeekday() {
      axios
      .get('https://christmascountdown.live/api/weekday', {
          params: {
            timezone: 'Europe/London'
          }
        }).then((par) => {
          this.currentWeekday = par.data;
        })
    }
  },

  mounted() {
    this.fetchTimeLeft();
    this.timer = setInterval(this.fetchTimeLeft, 1000);
  },

  created() {
    this.fetchJoke();
    this.fetchWeekday();
  }
}
</script>

<template>
  <AppHeader/>
  <AppMain @generateJoke="fetchJoke" :timeLeft="timeLeftData" :joke="currentJoke" :weekday="currentWeekday"/>
</template>

<style lang="scss">
  @use './styles/global.scss';
</style>
