// import HomePage from "./home";
// import { getAllPosts } from "@/lib/sanity/client";

// export default async function IndexPage() {
//   const posts = await getAllPosts();
//   return <HomePage posts={posts} />;
// }

// export const revalidate = 60;
"use client"
import { useEffect, useState } from "react";
import HomePage from "./home";
import { getAllPosts } from "@/lib/sanity/client";

export default function IndexPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const latestPosts = await getAllPosts();
      setPosts(latestPosts);
    };

    fetchData();
  }, []);

  return <HomePage posts={posts} />;
}

