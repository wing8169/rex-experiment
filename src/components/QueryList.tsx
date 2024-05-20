"use client";

import { useQuery } from "@tanstack/react-query";

export const QueryList = () => {
  // Queries
  const { data } = useQuery({
    queryKey: [],
    queryFn: async (): Promise<any[]> => {
      const data = await fetch("https://dummyjson.com/products");
      return (await data.json())?.products ?? [];
    },
  });

  return (
    <>
      {data?.map((d, index) => (
        <p key={index}>{JSON.stringify(d)}</p>
      ))}
    </>
  );

  // Mutations
  //   const mutation = useMutation({
  //     mutationFn: postTodo,
  //     onSuccess: () => {
  //       // Invalidate and refetch
  //       queryClient.invalidateQueries({ queryKey: ["todos"] });
  //     },
  //   });
};
