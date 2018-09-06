<template>
<nuxt-link :to="{ name: 'lang-trickId', params: { trickId: this.trick.id, lang: this.$language } }">
    <div class="card">
        <div class="image-container" :style="setBackgroundImage"></div>
        <div class="text-right-side">
            <div class="name">{{ trick.name }}</div>
            <div class="level"> {{ trick.level }}</div>
        </div>
          <div class="arrow"></div>
    </div>
</nuxt-link>
</template>

<script>
export default {
  name: "TrickCard",
  props: ["trick"],
  computed: {
    setBackgroundImage() {
      var styleStr = "background-image: url(" + this.trick.imageUrl + ")";
      return styleStr;
    }
  }
};
</script>

<style scoped>
.card {
  background-color: #fafafa;
  border: 1px solid #ffffff;
  padding: 10px;
  transition: background-color 0.3s;
  display: flex;
}
.card:hover {
  background-color: #ffffff;
}
.card .image-container {
  min-width: 100px;
  height: 100px;
  background: no-repeat center;
  background-size: contain, cover;
  margin-right: 10px;
}
.card .name {
  font-weight: bold;
  min-width: 150px;
}

.card .text-right-side {
  margin: auto 0px;
}

.card .arrow {
  width: 100%;
  background-image: url(../assets/arrow_img.png);
  background-repeat: no-repeat;
  background-position: right;
  background-size: 1em;
}

a {
  color: #2e2e2e;
  text-decoration: none;
}
</style>