<template>
  <div>
    <LabelSettings v-bind:labelSettings="settings.labels" />
    <LifecycleSettings v-bind:lifecycleSettings="settings.lifecycle" />
    <div>
      <button class="btn btn-success">Save</button>
    </div>
    {{settings}}
  </div>
</template>

<script>
import data from "../mock/data.json";
import LabelSettings from "./LabelSettings";
import LifecycleSettings from "./LifecycleSettings";

export default {
  name: "SettingsEdit",
  components: {
    LabelSettings,
    LifecycleSettings
  },
  data() {
    return {
      settings: data.settings
    };
  }
};
</script>