<template>
  <div class="search-input">
    <input
      type="text"
      v-model="value"
      @input="$emit('update:modelValue', $event.target.value)"
      @keyup="$emit('searchAddress')"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref("");
</script>
<style lang="scss" scoped>
.search-input {
  input {
    border-radius: 5px;
    height: 30px;
    width: 300px;
    font-size: 16px;
  }
}
</style>
