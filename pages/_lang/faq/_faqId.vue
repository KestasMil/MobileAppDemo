<template>
    <div>
        <Header :title="locale[this.$language].help" />
        <div class="title">{{this.faq.title}}</div>
        <div class="text">{{this.faq.text}}</div>
        <Footer />
    </div>
</template>

<script>
var locale = require('~/js/locale.js');

import Header from "~/components/Header";
import Footer from "~/components/Footer";

import axios from "axios";
import dogoConfig from "~/dogo-config.js";

export default {
  props: [],
  data() {
    return {
      faq: "",
      locale: locale
    };
  },
  asyncData({ req, params, isServer }) {
    var lang = params.lang || "en-US";
    var dataDir = dogoConfig.hostName + "/data/";
    return axios.get(dataDir + lang + "-faq.json").then(res => {
        var result = res.data.find(faqItem => {
            return params.faqId == faqItem.id;
        });
      return { faq: result };
    });
  },
  components: {
    Header,
    Footer
  },
  created() {
    
  },
  mounted() {
    
  }
};
</script>

<style scoped>
.title {
    text-align: center;
    margin: 30px;
    font-weight: bold;
}
.text {
    margin: 20px;
    max-width: 450px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 20px 0 20px;
}
</style>