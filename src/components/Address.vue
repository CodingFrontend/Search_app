<template>
  <div class="address-item">
    <div class="address-item__index">{{ index + 1 }}.</div>
    <div class="address-item__name">{{ address.display_name }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { AddressTypes } from "../types/Address";

export default defineComponent({
  props: {
    address: {
      type: Object as PropType<AddressTypes>,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.address-item {
  display: flex;
}
.address-item__name {
  padding-left: 5px;
}
</style>
