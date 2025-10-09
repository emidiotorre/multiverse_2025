import React from "react";
import { fetcher } from "@/app/apollo";
import { GET_WORK_BY_SLUG } from "@/app/apollo/queries";
import Project from "@/app/components/Project";

export default async function Work({ params }: { params: any }) {
  //@ts-ignore
  const { work } = await fetcher({
    query: GET_WORK_BY_SLUG,
    variables: {
      slug: params.slug,
    },
  });

  return <Project work={work[0]} />;
}
