<template>
    <div>
        <Header :title="'Clicker'" />
        <Clicker />
        <Footer />
    </div>
</template>

<script>
import Clicker from "~/components/Clicker.vue";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default {
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