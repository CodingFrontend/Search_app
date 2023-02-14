import axios from "axios";
import type { AddressTypes } from "../types/Address";
import type { AddressApiParams } from "../types/AddressApi";

const BASE_URL = "https://nominatim.openstreetmap.org/";

const searchApi = axios.create({
  baseURL: BASE_URL,
});

export const getAddressList = async (
  params: AddressApiParams
): Promise<AddressTypes[]> => {
  const response = await searchApi.get("search", {
    params,
  });
  return response.data;
};
