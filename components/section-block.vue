<template lang="pug">
.section-block
  .section-header
    h2
      font-awesome-icon(icon="terminal", class="title-icon")
      slot(name="title")
  .content
    slot
</template>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({
});
</script>

<style lang="scss" scoped>
@include section-block('.content');
</style>
