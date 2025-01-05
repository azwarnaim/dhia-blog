
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

