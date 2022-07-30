import { apiCalls } from "lib/api";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useRecoilValue, useRecoilState } from "recoil";
import useSWRImmutable from "swr/immutable";
import { paginationState, queryState, tokenState, userData } from "./atoms";
import { useEffect, useState } from "react";

export function usePagination() {
  const [pagination, setPagination] = useRecoilState(paginationState);
  const next = () => {
    if (!(pagination.offset + pagination.limit >= pagination.total)) {
      setPagination({
        offset: pagination.offset + pagination.limit,
        limit: pagination.limit,
        total: pagination.total,
      });
    } else {
      setPagination({
        offset: 0,
        limit: 0,
        total: pagination.total,
      });
    }
  };
  const prev = () => {
    if (!(pagination.offset - pagination.limit <= 0)) {
      setPagination({
        offset: pagination.offset - pagination.limit,
        limit: pagination.limit,
        total: pagination.total,
      });
    } else {
      setPagination({
        offset: 0,
        limit: 0,
        total: pagination.total,
      });
    }
  };

  return [pagination, setPagination, next, prev] as const;
}

export function useProductsQuery() {
  const [pagination, setPagination] = useRecoilState(paginationState);
  const [query, setQuery] = useRecoilState(queryState);
  const router = useRouter();
  const q = router.query.q as string;

  if (q) setQuery(q);
  const { offset, limit } = pagination;

  const { data, error } = useSWRImmutable(
    [query, offset, limit],

    apiCalls.product.searchByQuery
  );
  useEffect(() => {
    if (data) setPagination(data.pagination);
  }, [data]);
  return data;
}

export function useToken(): [string, any] {
  const [token, setToken] = useRecoilState(tokenState);

  const login = async (email: string, code: number): Promise<boolean> => {
    const returnedToken = await apiCalls.auth.token(email, code);
    setToken(returnedToken);
    if (returnedToken) {
      return true;
    }
    return false;
  };
  return [token, login];
}

export function useTokenValue(): string {
  return useRecoilValue(tokenState);
}

export function useUserData() {
  const [data, setData] = useRecoilState(userData);
  const token = useTokenValue();

  const fetchData = async () => {
    const me = await apiCalls.me.get(token);
    setData(me);
  };

  useEffect(() => {
    fetchData();
  }, [token]);

  const update = async (data: any): Promise<boolean> => {
    const returnedData = await apiCalls.me.update(token, data);
    setData(returnedData);
    if (returnedData) return true;
    return false;
  };

  return [data, update];
}

export function useLogout() {
  const [userDataState, setUserDataState] = useRecoilState(userData);
  const [token, setToken] = useRecoilState(tokenState);
  const router = useRouter();

  const useLogout = () => {
    setUserDataState({});
    setToken("");
    router.replace("/signin");
  };

  return useLogout;
}
export function useMe() {
  const [userDataState, setUserDataState] = useRecoilState(userData);
  const [token, setToken] = useToken();
  const router = useRouter();

  const useLogin = async (email: string, code: number) => {
    const isSuccess = await setToken(email, code);
    return isSuccess;
  };

  const useUpdate = async (data: any) => {
    const returnedData = await apiCalls.me.update(token, data);
    setUserDataState(returnedData);
  };

  const useLogout = () => {
    setUserDataState({});
    setToken("");
    router.replace("/signin");
  };

  return [userDataState, useUpdate, useLogin, useLogout];
}
