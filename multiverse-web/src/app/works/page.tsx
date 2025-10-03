import React from "react";
import { fetcher } from "@/app/apollo";
import { GET_WORKS_IMG } from "../apollo/queries";
import WorksGridShuffle from "../components/WorkGridShuffle";

export default async function Work() {
  //@ts-ignore
  const { works } = await fetcher({ query: GET_WORKS_IMG, variables: null });

  return <WorksGridShuffle blocks={works.blocks} />;
}
