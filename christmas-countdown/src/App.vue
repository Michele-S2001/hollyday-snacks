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
      currentJoke: {}
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
    }
  },

  created() {
    this.fetchTimeLeft();
    this.fetchJoke();
  }
}
</script>

<template>
  <AppHeader/>
  <AppMain @generateJoke="fetchJoke" :timeLeft="timeLeftData" :joke="currentJoke"/>
</template>

<style lang="scss">
  @use './styles/global.scss';
</style>
