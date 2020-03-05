<template>
  <div class="card">
    <div class="card-body form-group">
      <h5 class="card-title">
        <label for="title">Title:</label>
        <input id="title" type="text" v-model="ticket.title" class="form-control" />
      </h5>
      <div class="card-text form-group">
        <label for="description">Description:</label>
        <textarea id="description" type="textarea" v-model="ticket.description" class="form-control" />
      </div>

      <button class="btn btn-success" v-on:click="saveTicket">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TicketEdit",
  props: ["ticket"],
  methods:{
    saveTicket() {
      alert(JSON.stringify(this.ticket));
    }
  }
};
</script>