const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
import axios, { AxiosInstance } from "axios";

const fetcher: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiCalls = {
  auth: {
    post: async (email: string) => {
      return await (
        await fetcher.post("/auth", { email })
      ).data;
    },

    token: async (email: string, code: number) => {
      return await (
        await fetcher.post("/auth/token", { email, code })
      ).data.token;
    },
  },
  me: {
    get: async (token: string) => {
      fetcher.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return await (
        await fetcher.get("/me")
      ).data;
    },

    update: async (token: string, content: any) => {
      fetcher.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return await (
        await fetcher.patch("/me", content)
      ).data;
    },

    address: async (token: string, address: string, newValue: any) => {
      fetcher.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return await (
        await fetcher.patch("/me/address", { address, newValue })
      ).data;
    },
  },
  product: {
    searchByQuery: async (query: string, offset: number, limit: number) => {
      return await (
        await fetcher.get(
          `/search?q=${query}${offset ? "&offset=" + offset : ""}${
            limit ? "&limit=" + limit : ""
          }`
        )
      ).data;
    },

    searchById: async (productId: string) => {
      return await (
        await fetcher.get(`/products/${productId}`)
      ).data;
    },

    featured: async () => {
      return await (
        await fetcher.get(`/products/featured`)
      ).data;
    },
  },
  order: {
    create: async (details: any, token: string, productId: string) => {
      fetcher.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return await (
        await fetcher.post(`/order?productId=${productId}`, { details })
      ).data;
    },
    get: async (token: string, orderId: string) => {
      fetcher.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return await (
        await fetcher.get(`/order/${orderId}`)
      ).data;
    },
  },
  test: async () => {
    return await (
      await fetcher.get("/test")
    ).data;
  },
};
