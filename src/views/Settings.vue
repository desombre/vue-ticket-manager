<template>
  <div class="about">
    <h1>This is an settings page</h1>
    <SettingsEdit />
  </div>
</template>

<script>
import SettingsEdit from '../components/SettingsEdit'

export default {
  name: "Settings",
  components: {
    SettingsEdit
  }
};
</script>
