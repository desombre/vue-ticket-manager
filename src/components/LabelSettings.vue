<template>
  <div>
    <h2>Label Settings</h2>

    <div v-bind:key="label" v-for="(color, label) in labelSettings.colors">
      <ColorSetting v-bind:colorSetting="{'step': label, 'color': color}"></ColorSetting>
    </div>
  </div>
</template>

<script>
import ColorSetting from "./ColorSetting";

export default {
  name: "LabelSettings",
  props: ["labelSettings"],
  components: {
    ColorSetting
  }
};
</script>