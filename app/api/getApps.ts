"use server";
import axios from "axios";
import { GET_MOBILE_APPS } from "@app/graphql/queries";

export async function getApps(category?: string) {
  try {
    const response = await axios.post(
      "http://k8s-beportal-portalsc-81434b138f-489009210.us-east-1.elb.amazonaws.com/api/graphql",
      {
        query: GET_MOBILE_APPS,
        variables: {
          category: category || null,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GRAPHQL_API_KEY}`,
        },
      }
    );

    if (response.data.errors) {
      throw new Error(response.data.errors[0].message);
    }

    return response.data.data.mobileApps;
  } catch (error) {
    console.error("Error fetching apps:", error);
    throw error;
  }
}
