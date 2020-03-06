<template>
  <div class="card v-spacer">
    <a :href="'#/ticket?id=' +ticket.id">
      <div class="card-body padding-sm">
        <p>
          {{ticket.title}}

          <ColorDot v-tooltip="ticket.lifecycle"  v-bind:color="settings.lifecycle.colors[ticket.lifecycle]"/>


          <span class="badge" v-bind:style="{ backgroundColor: settings.labels.colors[ticket.label]}">
            {{ticket.label}}
            </span>

        </p>
      </div>
    </a>
  </div>
</template>

<script>
import ColorDot from './ColorDot'
import data from '../mock/data'

export default {
  name: "TicketListItem",
  props: ["ticket"],
  components:{
    ColorDot
  }, data() {
    return{
      settings: data.settings
    }
  }
};
</script>

