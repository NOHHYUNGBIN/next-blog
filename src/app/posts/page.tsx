import React from "react";
import { getAllPosts } from "../api/service";
import FilterablePosts from "../components/FilterablePosts";

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return <FilterablePosts posts={posts} categories={categories} />;
}
