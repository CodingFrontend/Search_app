<template>
  <div class="search-location">
    <h2 class="search-location__title">Search location</h2>

    <SearchInput
      class="search-location__field"
      v-model="searchText"
      @keyup="searchAddress"
    />
    <div class="search-location__result">
      <div v-if="addressList.length" class="search-location__result-list">
        <Address
          v-for="(address, index) in addressList"
          :key="address.place_id"
          :address="address"
          :index="index"
          class="search-location__result-item"
        />
      </div>
      <div v-else-if="addressStore.loading">Loading data... Please, wait</div>
      <div v-else-if="addressStore.errors">{{ addressStore.errors }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import Address from "../components/Address.vue";
import SearchInput from "./SearchInput.vue";

import { useAddressListStore } from "../stores/addressList";

export default defineComponent({
  name: "App",
  components: {
    Address,
    SearchInput,
  },
  setup() {
    const addressStore = useAddressListStore();

    const searchText = ref("");

    const addressList = computed(() => addressStore.searchResult);

    const searchAddress = () => {
      addressStore.searchAddress({
        q: searchText.value,
        format: "json",
        limit: 10,
      });
    };

    return {
      addressStore,
      addressList,
      searchAddress,
      searchText,
    };
  },
});
</script>
<style lang="scss" scoped>
.search-location {
  display: flex;
  flex-direction: column;

  padding: 50px 0 50px 100px;
}

.search-location__title {
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 30px;
}

.search-location__field {
  margin-bottom: 25px;
}

.search-location__result-item {
  margin-bottom: 10px;
}
.search-location__result {
  max-width: 600px;
  display: flex;
}
</style>
