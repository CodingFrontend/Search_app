<template>
  <div class="container">
    <SearchLocation />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchLocation from "../components/SearchLocation.vue";

export default defineComponent({
  name: "App",
  components: { SearchLocation },
});
</script>
<style lang="scss" scoped>
.container {
  max-width: 1920px;
  padding: 0 20px;
}
</style>
