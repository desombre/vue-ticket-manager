<template>
  <div class="about">
    <h1>This is an overview page</h1>
  <div v-bind:key="ticket.id" v-for="ticket in allTickets">
     <TicketListItem v-bind:ticket="ticket" />

  </div>
  <!--
    <TicketView v-bind:ticket="tickets[0]" />
   <TicketEdit v-bind:ticket="tickets[0]" />
   -->
  </div>
</template>

<script>
import TicketListItem from '../components/TicketListItem'

import {mapGetters, mapActions} from "vuex"

export default {
  name: "Overiew",
  methods: {
    ...mapActions(['fetchTickets'])
  },
  components: {
    TicketListItem
    },
  computed: mapGetters(['allTickets']),
  created(){
    this.fetchTickets();
  }
 
};
</script>