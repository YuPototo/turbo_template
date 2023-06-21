import { Button } from "@company-name/ui";

export default function Home() {
  const fetchPost = async () => {
    const response = await fetch("/api/hello");
    const data = await response.json();

    console.log(data);
  };

  fetchPost();

  return (
    <>
      <Button />
      <div className="bg-blue-500 p-2">abc</div>
    </>
  );
}
