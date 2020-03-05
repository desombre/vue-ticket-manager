<template>
  <div class="about">
    <h1>This is an tickets page</h1>
    <TicketView v-bind:ticket="ticket"/>
  </div>
</template>
<script>
import TicketView from '../components/TicketView'
import data from "../mock/data.json"

export default {
  name: "Ticket",
  components: {
    TicketView
  },
   data(){
    return {
      ticket: {

      }
    }
  },
  created: function() {
    this.ticket = data.tickets[this.$route.query.id]
  }
}
</script>