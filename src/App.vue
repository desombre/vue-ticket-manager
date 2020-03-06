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

.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>