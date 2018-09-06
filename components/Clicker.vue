<template>
    <div>
      <Header :title="this.title[this.$language]"/>
      <div id="clicker-background"></div>
      <audio>
        <source src="/click_sound_1.wav" type="audio/wav">
	        Your browser does not support audio.
      </audio>
        <div id="clicker-container">
          <div id="state-on"></div>
          <div id="state-off"></div>
          <div id="waves"></div>
        </div>
    </div>
</template>

<script>
//<source src="~/assets/clicker/click_sound_1.wav" type="audio/wav">
        
export default {
  name: "Clicker",
  methods: {},
  components: {

  },
  data() {
    return {
      title: {
        "en-US": "Clicker",
        de: "Clicker",
        lt: "Klikeris",
        es: "Clicker",
        ru: "Кликер",
        fr: "Clicker",
        pt: "Clicador"
      }
    };
  },
  mounted() {
    $("#clicker-container").click(clickEventHandler);
    $("#clicker-background").click(clickEventHandler);

    function clickEventHandler() {
      //audio logic
      $("audio")[0].pause();
      $("audio")[0].currentTime = 0;
      $("audio")[0].play();
      //button press animation logic
      $("#state-off")[0].style.visibility = "hidden";
      setTimeout(function() {
        console.log("timeout motherfuckers");
        $("#state-off")[0].style = "";
      }, 100);
      //sound wave animation logic
      $("#waves").stop();
      $("#waves")[0].style = "";
      $("#waves")[0].style.opacity = 1;
      $("#waves").animate(
        {
          opacity: 0,
          left: "-=25",
          width: "+=50px",
          height: "+=50px"
        },
        700,
        function() {
          //animation completed, reset state
          $("#waves")[0].style = "";
        }
      );
    }

  }
};
</script>

<style scoped>
#clicker-container {
  display: block;
  height: 50%;
  width: 50%;
  position: fixed;
  top: 35%;
  left: 25%;
}
#state-on {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("../assets/clicker/clicker_on.png");
  width: 100%;
  height: 100%;
  position: absolute;
}
#state-off {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("../assets/clicker/clicker_off.png");
  width: 100%;
  height: 100%;
  position: absolute;
}
#waves {
  opacity: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("../assets/clicker/clicker_sound_waves.png");
  width: 100%;
  height: 100%;
  position: absolute;
}
#clicker-background {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: #00ffbf;
}
</style>