import { defineStore, createPinia, setActivePinia } from "pinia";

setActivePinia(createPinia());

import { getAddressList } from "@/api/searchApi";

import type { AddressApiParams } from "@/types/AddressApi";
import type { AddressTypes } from "@/types/Address";

export interface AddressListState {
  searchResult: AddressTypes[] | [];
  loading: boolean;
}

export const useAddressListStore = defineStore("address", {
  state: (): AddressListState => ({
    searchResult: [],
    loading: false,
    errors: null,
  }),

  actions: {
    async searchAddress(params: AddressApiParams) {
      this.searchResult = [];
      this.loading = true;

      try {
        this.searchResult = await getAddressList(params);
      } catch (error) {
        console.log(errors);
      } finally {
        this.loading = false;
      }
    },

    clearSearchResult() {
      this.searchResult = [];
    },
  },
});
