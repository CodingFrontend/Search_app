<template>
  <div class="search-location">
    <h2 class="search-location__title">Search location</h2>

    <SearchInput
      class="search-location__field"
      v-model.trim="searchText"
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
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Address from "@/components/Address.vue";
import SearchInput from "@/components/SearchInput.vue";

import _debounce from "lodash/debounce";

import { useAddressListStore } from "@/stores/addressList";
import { storeToRefs } from "pinia";

const addressStore = useAddressListStore();

const searchText = ref("");

const { searchResult: addressList } = storeToRefs(addressStore);

const searchAddress = _debounce(() => {
  if (!searchText.value) return addressStore.clearSearchResult();

  addressStore.searchAddress({
    q: searchText.value,
    format: "json",
    limit: 10,
  });
}, 500);
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
