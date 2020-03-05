<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">
         <input type="text" v-model="ticket.title"> 
          </h5>
      <p class="card-text">
          <input type="textarea" v-model="ticket.description" />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TicketEdit",
  props: ["ticket"]
};
</script>