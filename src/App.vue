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

<style>
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


.dot{
  display:inline-block;
  border-radius: 50%;
  border: 0px;
  margin: 0 auto;
  padding: 0;
  width: 15px;
  height: 15px;
}

.v-spacer{
  margin-top: 1px;
  margin-bottom: 1px;  
}

.padding-sm{
  padding: .25rem;
}
</style>