import { getPostData } from "@/app/api/service";
import MarkdownViewer from "@/app/components/MarkdownViewer";
import React from "react";
type Props = {
  params: {
    slug: string;
  };
};
export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  return (
    <>
      <h1>{post.title}</h1>
      <MarkdownViewer content={post.content} />
    </>
  );
}
