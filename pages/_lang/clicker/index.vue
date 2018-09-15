<template>
    <div>
        <Header :title="this.locale[this.$language].clicker" />
        <Clicker />
        <Footer />
    </div>
</template>


<script>
var locale = require('~/js/locale.js');

import Clicker from "~/components/Clicker.vue";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default {
  data() {
    return {
      locale: locale
    }
  },
  props: [],
  components: {
    Clicker,
    Header,
    Footer
  },
  created() {
  }
};
</script>

<style scoped>
</style>