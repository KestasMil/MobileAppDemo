<!-- template for the modal component -->
<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" @click="checkIfOutOfBounds($event)">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              {{ title }}
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <ul>
                  <li class="li-container" @click="chageLanguage('lt')">
                      <i class="lang-icon" id="lt"></i>
                      <div class="lang-name-container">Lietuvių</div>
                  </li>
                  <li class="li-container" @click="chageLanguage('en-US')">
                      <i class="lang-icon" id="en-US"></i>
                      <div class="lang-name-container">English</div>
                  </li>
                  <li class="li-container" @click="chageLanguage('de')">
                      <i class="lang-icon" id="de"></i>
                      <div class="lang-name-container">Deutsch</div>
                  </li>
                  <li class="li-container" @click="chageLanguage('es')">
                      <i class="lang-icon" id="es"></i>
                      <div class="lang-name-container">Español</div>
                  </li>
                  <li class="li-container" @click="chageLanguage('fr')">
                      <i class="lang-icon" id="fr"></i>
                      <div class="lang-name-container">Français</div>
                  </li>
                  <li class="li-container" @click="chageLanguage('pt')">
                      <i class="lang-icon" id="pt"></i>
                      <div class="lang-name-container">Português</div>
                  </li>
                  <li class="li-container" @click="chageLanguage('ru')">
                      <i class="lang-icon" id="ru"></i>
                      <div class="lang-name-container">Русский</div>
                  </li>
              </ul>
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="$emit('close')">
                X
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {};
  },
  methods: {
    chageLanguage(lang) {
      this.$emit("close");
      this.$route.params.lang = lang;
      this.$router.push({ name: this.$route.name, params: this.$route.params });
    },
    checkIfOutOfBounds(event) {
        if(event.path.findIndex(element => {
            return element.className == "modal-container";
        }) == -1) {
            this.$emit('close');
        }
    }
  }
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

/*
 * Languages list styles.
 */

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
.li-container {
  display: flex;
  border-bottom: 1px solid #e4e4e4;
  padding: 5px;
}
.lang-icon {
  width: 24px;
  height: 24px;
  background: no-repeat center;
  background-size: contain, cover;
}
.lang-name-container {
  margin: auto 5px;
}
</style>