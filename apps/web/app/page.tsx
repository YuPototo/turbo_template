import { PrismaClient } from "@company-name/database";
import { Button } from "@company-name/ui";

const client = new PrismaClient();

async function getPosts() {
  await client.post.create({
    data: {
      title: "Prisma makes databases easy",
      content: "You wouldn't believe how much Prisma rocks",
    },
  });
  const res = await client.post.findMany();
  console.log(res);
}

getPosts();

export default function Page() {
  return (
    <>
      <Button />
      <div className="bg-blue-500 p-2">abc</div>
    </>
  );
}
