import { RouterOutputs, api } from "@/utils/api";
import { signIn, signOut } from "next-auth/react";
import { useState } from "react";

import { Button } from "@company-name/ui";

const PostCard: React.FC<{
  post: RouterOutputs["post"]["all"][number];
  onPostDelete?: () => void;
}> = ({ post, onPostDelete }) => {
  return (
    <div className="flex flex-row rounded-lg bg-white/10 p-4 transition-all hover:scale-[101%]">
      <div className="flex-grow">
        <h2 className="text-2xl font-bold text-blue-800">{post.title}</h2>
        <p className="mt-2 text-sm">{post.content}</p>
      </div>
      <div>
        <span className="cursor-pointer text-sm font-bold uppercase text-blue-600" onClick={onPostDelete}>
          Delete
        </span>
      </div>
    </div>
  );
};

const CreatePostForm: React.FC = () => {
  const utils = api.useContext();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { mutate, error } = api.post.create.useMutation({
    async onSuccess() {
      setTitle("");
      setContent("");
      await utils.post.all.invalidate();
    },
  });

  return (
    <div className="flex w-full max-w-2xl flex-col p-4">
      <input
        className="mb-2 rounded bg-white/10 p-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />

      <input
        className="mb-2 rounded bg-white/10 p-2"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      />

      <button
        className="rounded bg-pink-400 p-2 font-bold"
        onClick={() => {
          mutate({
            title,
            content,
          });
        }}>
        Create
      </button>
    </div>
  );
};

const AuthShowcase: React.FC = () => {
  const { data: session } = api.auth.getSession.useQuery();

  const { data: secretMessage } = api.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: !!session?.user }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {session?.user && (
        <p className="text-center text-2xl ">
          {session && <span>Logged in as {session?.user?.name}</span>}
          {secretMessage && <span> - {secretMessage}</span>}
        </p>
      )}
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
        onClick={session ? () => void signOut() : () => void signIn()}>
        {session ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};

export default function Home() {
  const postQuery = api.post.all.useQuery();

  const deletePostMutation = api.post.delete.useMutation({
    onSettled: () => postQuery.refetch(),
  });

  return (
    <>
      <Button />
      <AuthShowcase />
      <CreatePostForm />

      {postQuery.data ? (
        <div className="w-full max-w-2xl">
          {postQuery.data?.length === 0 ? (
            <span>There are no posts!</span>
          ) : (
            <div className="flex h-[40vh] justify-center overflow-y-scroll px-4 text-2xl">
              <div className="flex w-full flex-col gap-4">
                {postQuery.data?.map((p) => {
                  return (
                    <PostCard key={p.id} post={p} onPostDelete={() => deletePostMutation.mutate(p.id)} />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
