<template>
  <div class="container">
    <div class="page-header text-secondary">
      <h1 class="display-4">
        <a class="text-" href="#/">
           <font-awesome-icon icon="tasks" />
          Ticket Manager!
        </a>
      </h1>
      <hr/>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped>
.container {
  padding-top: 15px;
}

a:link, a:active, a:visited {
    color: #545b62;

  text-decoration: none;
}
 a:hover{
  color: #34495e;

 }

</style>