<template>
    <div>
      <Header :title="TrickName"/>
      <div class="dots-container"></div>
      <div class="step-counter">Step 1</div>
      <div class="slick-container">
        <div class="steps-container" v-for="(step, index) in TrickSteps" :key="index">
          <div class="image" :style="setBackgroundImage(step.stepImage)"></div>
          <div class="description">{{step.description}}</div>
        </div>
      </div>
      <Footer/>
    </div>
</template>

<script>
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  name: "TrickSteps",
  props: ["tricks"],
  components: {
    Header,
    Footer
  },
  data() {
    return {
      TrickSteps: [],
      TrickName: ""
    };
  },
  methods: {
    initSlickCarousel() {
      if (this.tricks.length > 0) {
        $(".slick-container").slick({
          dots: true,
          appendDots: $(".dots-container"),
          dotsClass: "slick-dots",
          arrows: false,
          fade: true,
          focusOnSelect: true
        });
      }
    },
    setBackgroundImage(img) {
      var styleStr = "background-image: url(" + img + ")";
      return styleStr;
    },
    getTrickById(id) {
      var result = {};
      this.tricks.forEach(element => {
        element.tricks.forEach(trick => {
          if (id == trick.id) {
            result = trick.trickSteps;
            this.TrickName = trick.name;
          }
        });
      });
      return result;
    }
  },
  watch: {
    tricks(newVal, oldVal) {
      //required in case remote data (contentful) was loaded after this component was created.
      this.TrickSteps = this.getTrickById(this.$route.params.trickId);
    }
  },
  created() {
    this.TrickSteps = this.getTrickById(this.$route.params.trickId);
  },
  mounted() {
    this.initSlickCarousel();
    $(".slick-container").on("swipe", function(event, slick, direction) {
      $(".step-counter").text("Step " + (slick.currentSlide + 1));
    });
    $(".slick-slide").on("click", function() {
      $(".slick-container").slick("slickNext");
      $(".step-counter").text("Step " + ($(".slick-container")[0].slick.currentSlide + 1));      
    });
  },
  updated() {
    console.log("Executed - updated() in TrickSteps.vue");
    //required in case remote data (contentful) was loaded after this component was created.
    this.initSlickCarousel();
  }
};
</script>

<style scoped>
.your-class {
  width: 200px;
}
.steps-container .image {
  min-width: 200px;
  height: 200px;
  background: no-repeat center;
  background-size: contain, cover;
  margin-right: 10px;
}

.steps-container .description {
  text-align: center;
  font-size: 1em;
  min-width: 200px;
  padding: 30px 10%;
}

.step-counter {
  text-align: center;
  margin-bottom: 30px;
  color: #3edc9f;
}
</style>