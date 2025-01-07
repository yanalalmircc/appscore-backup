"use server";
import { GET_MOBILE_APPS } from "@app/graphql/queries";

export async function getApps(category?: string) {
  const apiKey = process.env.GRAPHQL_API_KEY;
  if (!apiKey) {
    throw new Error("GRAPHQL_API_KEY environment variable is not set");
  }
  try {
    const res = await fetch(
      "http://k8s-beportal-portalsc-81434b138f-489009210.us-east-1.elb.amazonaws.com/api/graphql",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          query: GET_MOBILE_APPS,
          variables: { category },
        }),
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching apps:", error);
    throw error;
  }
}
