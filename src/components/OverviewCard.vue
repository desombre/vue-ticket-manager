<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">
          {{overviewElement.title}}
          </h5>
      <p class="card-text">
        {{overviewElement.description}}
      </p>
      <a v-bind:href="'/#'+overviewElement.href" class="btn btn-primary">
          {{overviewElement.navigationText}}
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "OverviewCard",
  props: ["overviewElement"]
};
</script>

<style scoped>
 .card{
     margin: 5px;
     flex-direction: row !important;
 }
</style>