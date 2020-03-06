<template>
  <div>
    <h2>Lifecycle Settings</h2>

    <div v-bind:key="step" v-for="(color, step) in lifecycleSettings.colors">
      <ColorSetting v-bind:colorSetting="{'step': step, 'color': color}" />
      </div>

    <div
      v-bind:key="stepStart"
      v-for="(stepGoals, stepStart) in lifecycleSettings.steps"
    >{{stepStart}} -> {{stepGoals}}</div>
  </div>
</template>

<script>
import ColorSetting from "./ColorSetting";

export default {
  name: "LifecycleSettings",
  props: ["lifecycleSettings"],
  components: {
    ColorSetting
  },
  data() {
    return {
      test: "#ff0080"
    };
  }
};
</script>