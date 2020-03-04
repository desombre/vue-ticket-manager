<template>
  <div class="home-container">
    <div v-bind:key="element.id" v-for="element in overviewElements">
      
      <OverviewCard v-bind:overviewElement="element" />
    </div>
  </div>
</template>

<script>
import OverviewCard from "../components/OverviewCard";
import data from "../mock/data.json"

export default {
  name: "Home",
  components: {
    OverviewCard
  },
  data() {
    return {
      overviewElements: data.overviewElements
    };
  }
};
</script>

<style scoped>
.home-container{
  display: flex;
  flex-direction: row;
   flex-wrap: wrap;
   justify-content: space-evenly;
}
</style>