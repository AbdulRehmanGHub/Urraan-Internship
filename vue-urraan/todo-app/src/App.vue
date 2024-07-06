<template>
  <div id="app">
      <HeroList />
  </div>
</template>

<script>
import HeroList from './components/HeroList.vue';

export default {
  name: 'App',
  components: {
      HeroList
  }
};
</script>

<style>
@import './assets/todo.css';
</style>
