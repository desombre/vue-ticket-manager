<template>
  <div>
      {{settings}}

  </div>
</template>

<script>


import data from "../mock/data.json"

export default {
  name: "SettingsEdit",
  data() {
    return {
      settings: data.settings
    };
  }
};
</script>