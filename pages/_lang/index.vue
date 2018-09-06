<template>
  <div>
    <Header :title="this.locale[this.$language].tricks"/>    
    <div class="cards-container" v-for="trick in tricks" :key="trick.level">
      <div class="seperator">{{trick.levelName}}</div>
      <TrickCard v-for="trick in trick.tricks" :key="trick.id" :trick="trick" />
    </div>
    <Footer/>
  </div>
</template>

<script>
var locale = require('~/js/locale.js');

import TrickCard from "~/components/TrickCard.vue";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  data() {
    return {
      locale: locale
    };
  },
  components: {
    TrickCard,
    Header,
    Footer
  },
  props: ["tricks"]
};
</script>

<style scoped>
</style>