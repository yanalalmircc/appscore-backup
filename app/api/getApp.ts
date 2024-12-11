"use server";
import axios from "axios";
import { GET_SINGLE_MOBILE_APP } from "@app/graphql/queries";

export async function getApp(appName?: string) {
  try {
    const response = await axios.post(
      "http://k8s-beportal-portalsc-81434b138f-489009210.us-east-1.elb.amazonaws.com/api/graphql",
      {
        query: GET_SINGLE_MOBILE_APP,
        variables: {
          name: appName || null,
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

    return response.data.data.mobileApp;
  } catch (error) {
    console.error("Error fetching app:", error);
    throw error;
  }
}
