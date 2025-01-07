import { AppCard, YouMightLike } from "@app/components";
import { getApp } from "@app/api";

export const runtime = "edge";
export default async function AppPage({
  params,
}: {
  params: { appLink: string };
}) {
  const appName = decodeURIComponent(params.appLink);

  try {
    const data = await getApp(appName);

    return (
      <div className="content">
        <div className="container">
          {data && <AppCard app={data?.data?.mobileApp} />}
          <YouMightLike />
        </div>
      </div>
    );
  } catch (error) {
    return <div>Error: {(error as Error).message}</div>;
  }
}
