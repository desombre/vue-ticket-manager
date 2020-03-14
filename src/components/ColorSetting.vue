<template>
  <div>
    {{colorSetting.step}} :
    <input type="color" class="dot" v-model="colorSetting.color" />
  </div>
</template>

<script>
export default {
  name: "ColorSetting",
  props: ["colorSetting"]
  
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