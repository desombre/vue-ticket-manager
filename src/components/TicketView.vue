<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">
          {{ticket.title}}
          </h5>
      <p class="card-text">
        {{ticket.description}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TicketView",
  props: ["ticket"]
};
</script>