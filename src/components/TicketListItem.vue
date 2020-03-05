<template>
  <div class="card  v-spacer">
    <a :href="'#/ticket?id=' +ticket.id">
      <div class="card-body padding-sm">
        <p>
          {{ticket.title}}
          <span>{{ticket.label}}</span>

          <span class="dot bg-primary"></span>
        </p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "TicketView",
  props: ["ticket"]
};
</script>

