import { QUERY_KEYS } from "@/shared/model/queryKeys";
import { RootState } from "@/shared/types/rootState";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { getInfoMe } from "../api/getInfoMe";
import { useEffect } from "react";

export const useGetInfoMe = () => {
  // const token = useSelector((state: RootState) => state.user.token);
  // const dispatch = useDispatch();

  // const { isError, ...infoMe } = useQuery({
  //   queryKey: [QUERY_KEYS.infoMe],
  //   queryFn: () => getInfoMe(),
  // });

  // useEffect(() => {
  //   if (isError || !token) {
  //     dispatch(clearSliceUser());
  //   }
  // }, [isError, dispatch, token]);

  return useQuery({
    queryKey: [QUERY_KEYS.infoMe],
    queryFn: () => getInfoMe(),
  });
};