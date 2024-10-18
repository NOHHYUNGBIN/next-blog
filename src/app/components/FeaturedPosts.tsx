import React from "react";
import PostsGrid from "./PostsGrid";
import { getAllPosts } from "../api/service";

export default async function FeaturedPosts() {
  const posts = await getAllPosts();
  return (
    <section>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
