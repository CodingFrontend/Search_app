<template>
  <div class="address-item">
    <div class="address-item__index">{{ index + 1 }}.</div>
    <div class="address-item__name">{{ address.display_name }}</div>
  </div>
</template>

<script lang="ts" setup>
import type { AddressTypes } from "@/types/Address";

interface Props {
  address: AddressTypes;
  index: Number;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.address-item {
  display: flex;
}
.address-item__name {
  padding-left: 5px;
}
</style>
