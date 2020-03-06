<template>
  <div class="card v-spacer">
    <a :href="'#/ticket?id=' + ticket.id">
      <div class="card-body padding-sm">
        <div class="flex-container">
          <div class="item">
            {{ticket.title}}
              <ColorDot v-bind:color="settings.lifecycle.colors[ticket.lifecycle]" />
              <span class="tooltiptext">{{ticket.lifecycle}}</span>
          </div>

          <span
            class="badge item"
            v-bind:style="{ backgroundColor: settings.labels.colors[ticket.label]}"
          >{{ticket.label}}</span>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import ColorDot from "./ColorDot";
import data from "../mock/data";

export default {
  name: "TicketListItem",
  props: ["ticket"],
  components: {
    ColorDot
  },
  data() {
    return {
      settings: data.settings
    };
  }
};
</script>

<style scoped>
.flex-container {
  width: 100%;
  display: inline-flex;

  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.item {
  display: inline-flex;

  flex: none;

  align-self: auto;
}
</style>
