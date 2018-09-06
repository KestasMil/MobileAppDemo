<template>
    <div>
        <div class="footer">
            <nuxt-link :to="{ name: 'lang-clicker', params: { lang: this.$language } }">
            <div class="btn">
                <div id="clicker-img" class="img-container"></div>
                <div class="btn-caption">{{this.locale[this.$language].clicker}}</div>
            </div>
            </nuxt-link>
            <nuxt-link :to="{ name: 'lang', params: { lang: this.$language } }">
            <div class="btn">
                <div id="tricks-img" class="img-container"></div>
                <div class="btn-caption">{{this.locale[this.$language].tricks}}</div>
            </div>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
var locale = require("~/js/locale.js");

export default {
  name: "Header",
  data() {
    return {
      locale: locale
    };
  }
};
</script>

<style scoped>
.footer {
  text-align: center;
  line-height: 3em;
  font-size: 1em;
  padding: 10px;
  position: fixed;
  bottom: 0ex;
  width: 100vw;
  border-top: 1px solid rgb(235, 235, 235);
  background-color: rgb(255, 255, 255);
  display: flex;
}
.btn {
  /*border: 1px solid #ebebeb;*/
  margin: 0px 20px;
  padding: 5px;
}
.btn-caption {
  font-size: 1em;
  height: 1.2em;
  line-height: 1.2em;
}
#clicker-img {
  background-image: url("../assets/Clicker_Icon.png");
}
#tricks-img {
  background-image: url("../assets/Trick_Icon.png");
}
.img-container {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 30px;
  min-width: 30px;
}
.nuxt-link-exact-active {
  color: #3edc9f;
}
.nuxt-link-exact-active #clicker-img {
  background-image: url("../assets/Clicker_Icon_Active.png");
}
.nuxt-link-exact-active #tricks-img {
  background-image: url("../assets/Trick_Icon_Active.png");
}
</style>