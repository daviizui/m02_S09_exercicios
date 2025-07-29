import "./PostsList.css";
import Post from "../Post/Post";
import { useEffect, useState } from "react";

export default function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <section className="posts-list">
      <h2>Lista de Posts</h2>
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <Post
            key={index}
            category={post.category}
            title={post.title}
            description={post.description}
            date={post.date}
            image={post.image}
          />
        ))
      ) : (
        <p>Nenhum post encontrado</p>
      )}
    </section>
  );
}
