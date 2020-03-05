<template>
  <div class="about">
    <h1>This is a create page</h1>
    <TicketEdit v-bind:ticket="ticket" />
  </div>
</template>

<script>
import TicketEdit from '../components/TicketEdit'

export default {
  name: "CreateTask",
  components: {
    TicketEdit
  },
  data(){
    return {
      ticket: {
        id: new Date().getMilliseconds()
      }
    }
  }
};
</script>
