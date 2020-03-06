<template>
  <div>
    {{colorSetting.step}} :
    <input type="color" class="dot" v-model="scopedColor" />
  </div>
</template>

<script>
export default {
  name: "ColorSetting",
  props: ["colorSetting"],

  data() {
    return {
      scopedColor: this.colorSetting.color
    };
  }
};
</script>


<style scoped>
input[type="color"] {
  cursor: pointer;
  border: none;
  padding: 0px;
  border-radius: 50%;
}
</style>