<template>
    <div>
        <Header :title="'Faq'" />
        <nuxt-link v-for="faq in faqs" :key="faq.id" :to="{ name: 'lang-faq-faqId', params: { faqId: faq.id, lang: $language } }">
          <div class="faq-list-item">
            {{ faq.title }}
          </div>
        </nuxt-link>
        <Footer />
    </div>
</template>

<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";

import axios from "axios";
import dogoConfig from "~/dogo-config.js";

export default {
  props: [],
  data() {
    return {
      faqs: []
    };
  },
  asyncData({ req, params, isServer }) {
    var lang = params.lang || "en-US";
    var dataDir = dogoConfig.hostName + "/data/";
    return axios.get(dataDir + lang + "-faq.json").then(res => {
      return { faqs: res.data };
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
.faq-list-item {
  padding: 10px 10px 10px 10px;
  margin: 0 5px 0px 5px;
  border-bottom: 1px #d6d6d6 solid;
}
</style>