import { defineStore, createPinia, setActivePinia } from "pinia";

setActivePinia(createPinia());

import { getAddressList } from "../api/searchApi";

import type { AddressApiParams } from "../types/AddressApi";
import type { AddressTypes } from "../types/Address";

export type AddressListState = {
  searchResult: AddressTypes[] | [];
  loading: boolean;
  errors: any;
};

export const useAddressListStore = defineStore("address", {
  state: () =>
    ({
      searchResult: [],
      loading: false,
      errors: null,
    } as AddressListState),

  actions: {
    async searchAddress(params: AddressApiParams) {
      this.searchResult = [];
      this.loading = true;

      try {
        this.searchResult = await getAddressList(params);
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
