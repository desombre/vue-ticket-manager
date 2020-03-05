<template>
    <span v-bind:style="{ backgroundColor: color }"  class="dot"></span>

</template>

<script>
export default {
    name: 'ColorDot',
    props: ['color']
}
</script>

