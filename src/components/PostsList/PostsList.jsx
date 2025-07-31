import "./PostsList.css";
import Post from "../Post/Post";
import { useEffect, useState } from "react";

export default function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  function handleDelete(id) {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  }

  return (
    <section className="posts-list">
      <h2>Lista de Posts</h2>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Post key={post.id} post={post} handleDelete={handleDelete} />
        ))
      ) : (
        <p>Nenhum post encontrado</p>
      )}
    </section>
  );
}
