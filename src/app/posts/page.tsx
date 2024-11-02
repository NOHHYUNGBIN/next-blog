import React from "react";
import { getAllPosts } from "../../service/posts";
import FilterablePosts from "../components/FilterablePosts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Posts",
  description: "Article on Full Stack Development",
};

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return <FilterablePosts posts={posts} categories={categories} />;
}
