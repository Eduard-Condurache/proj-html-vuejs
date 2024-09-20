<script>

import AppHeader from './components/AppHeader/AppHeader.vue';
import AppMain from './components/AppMain/AppMain.vue';
import AppFooter from './components/AppFooter/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter
  }
}
</script>

<template>
  <div>
    <AppHeader/>
    
    <AppMain/>

    <AppFooter/>
  </div>
</template>

<style lang="scss">
@use 'assets/scss/main' as *;
@import "bootstrap/scss/bootstrap";
</style>
