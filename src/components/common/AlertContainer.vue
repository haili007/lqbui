<style>

</style>

<template>
    <div v-cloak class="lqbui-alert-container" v-if="ifShowAlert">
        <!-- <div class="lqbui-mask" @click="ifShowAlert = false"></div>
            <div class="lqbui-alert-modal">
                <p class="lqbui-alert-text"></p>
                <button class="lqbui-alert-btn" @click="ifShowAlert">确定</button>
            </div>
        </div> -->
        <div v-cloak v-if="ifShowToast" class="lqbui-toast-container">
            <div class="lqbui-toast-mask" @click="ifShowToast = false"></div>
            <div class="lqbui-toast">{{ toastText }}</div>
        </div>
</template>

<script>
export default {
  computed: {
    ifShowAlert() {
      return this.space ? this.space : "10";
    },
    curentTheme() {
      return this.theme ? this.theme : "default";
    }
  },
  props: ["alertText", "ifShowAlert","ifShowToast","toastText"]
};
</script>