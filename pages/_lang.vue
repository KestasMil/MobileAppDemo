<template>
  <section class="container">
    <nuxt-child :tricks="dataObj"/>
  </section>
</template>

<script>
//Importing Vue to set global variable $language
import Vue from "vue";

import btn from "~/components/btn.vue";

import axios from "axios";
import dogoConfig from "../dogo-config.js";

function myFetchMethod(lang) {
  return axios
    .get(dogoConfig.hostName + "/data/" + lang + "-data.json")
    .then(res => {
      return { dataObj: res.data };
    });
}

export default {
  data() {
    return {
      dataObj: [],
      lang: "en-US"
    };
  },
  components: {
    btn: btn
  },
  asyncData({ req, params, isServer }) {
    var lang = params.lang || "en-US";
    var dataDir = dogoConfig.hostName + "/data/";
    return axios.get(dataDir + lang + "-data.json").then(res => {
      return { dataObj: res.data };
    });
  },
  validate({ params }) {
    if (!params.lang) return true;
    return dogoConfig.validLanguages.indexOf(params.lang) > -1;
  },
  created() {
    Vue.prototype.$language = this.$route.params.lang || "en-US";
  },
  mounted() {

  }
};
</script>

<style>
</style>
