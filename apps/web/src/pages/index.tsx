import { api } from "@/utils/api";

import { Button } from "@company-name/ui";

export default function Home() {
  const dumbQuery = api.post.dumbEndpoint.useQuery();

  return (
    <>
      <Button />
      <div className="bg-blue-500 p-2">abc</div>

      {dumbQuery.data ? <div>{dumbQuery.data}</div> : null}
    </>
  );
}
