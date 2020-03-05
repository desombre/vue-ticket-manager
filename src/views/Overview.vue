<template>
  <div class="about">
    <h1>This is an overview page</h1>
  <div v-bind:key="ticket.id" v-for="ticket in tickets">
     <TicketListItem v-bind:ticket="ticket" />

  </div>
    <TicketView v-bind:ticket="tickets[0]" />
   <TicketEdit v-bind:ticket="tickets[0]" />
  </div>
</template>

<script>
import TicketEdit from '../components/TicketEdit'
import TicketView from '../components/TicketView'
import TicketListItem from '../components/TicketListItem'

import data from "../mock/data.json"

export default {
  name: "Overiew",
  components: {
    TicketView, TicketEdit, TicketListItem
    },
  data() {
    return {
      tickets: data.tickets
    }
  }
};
</script>