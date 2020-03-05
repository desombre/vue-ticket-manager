<template>
  <div class="card v-spacer">
    <a :href="'#/ticket?id=' +ticket.id">
      <div class="card-body padding-sm">
        <p>
          {{ticket.title}}
          <span class="badge">{{ticket.label}}</span>

          <ColorDot v-bind:color="'#20bffb'"/>
        </p>
      </div>
    </a>
  </div>
</template>

<script>
import ColorDot from './ColorDot'

export default {
  name: "TicketListItem",
  props: ["ticket"],
  components:{
    ColorDot
  }
};
</script>

