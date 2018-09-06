<template>
    <div>
        <trick-steps :tricks="this.tricks" />
    </div>
</template>

<script>
import TrickSteps from "~/components/TrickSteps.vue";

export default {
  props: ["tricks"],
  components: {
    "trick-steps" : TrickSteps
  },
  created() {
  }
};
</script>

<style scoped>
</style>