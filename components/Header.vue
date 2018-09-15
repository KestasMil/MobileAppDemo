<template>
    <div>
        
        <div class="header">
            {{ title }}
            <i @click="displayLangSelect()" class="lang-icon"></i>
        </div>
        <div class="spacer"></div>
        <LangSelect v-if="showLangSelect" @close="showLangSelect = false" :title="locale[this.$language].changeLanguage"/>
    </div>
</template>

<script>
var locale = require("~/js/locale.js");
import LangSelect from "~/components/LangSelect.vue";

export default {
  name: "Header",
  props: ["title"],
  data() {
    return {
        locale,
        showLangSelect: false
    };
  },
  components: {
    LangSelect
  },
  created() {

  },
  mounted() {
    $(".lang-icon")[0].id = this.$language;
  },
  methods: {
    displayLangSelect() {
      this.showLangSelect = !this.showLangSelect;
    }
  }
};
</script>

<style scoped>
.header {
  height: 2.2em;
  text-align: center;
  line-height: 1em;
  font-size: 1em;
  padding: 10px;
  margin-bottom: 2px;
  position: fixed;
  width: 100vw;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 2px 5px 0px rgba(184, 184, 184, 1);
}
.spacer {
  height: 2.2em;
}
.lang-icon {
  position: fixed;
  z-index: 10;
  width: 1.7em;
  height: 1.7em;
  right: 15px;
  top: 0.25em;
  background-size: contain, cover;
}
#lt {
  background-image: url("~/assets/flags/lt.png");
}
#en-US {
  background-image: url("~/assets/flags/en-US.png");
}
#pt {
  background-image: url("~/assets/flags/pt.png");
}
#ru {
  background-image: url("~/assets/flags/ru.png");
}
#es {
  background-image: url("~/assets/flags/es.png");
}
#fr {
  background-image: url("~/assets/flags/fr.png");
}
#de {
  background-image: url("~/assets/flags/de.png");
}
</style>