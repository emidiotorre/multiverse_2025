import React from "react";
import { fetcher } from "@/app/apollo";
import { GET_WORKS_IMG } from "../apollo/queries";
import WorksGrid from "../components/WorkGrid";

export default async function Work() {
  const { works } = await fetcher({ query: GET_WORKS_IMG, variables: null });

  return <WorksGrid blocks={works.blocks} />;
}
