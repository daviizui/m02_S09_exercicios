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

  const categories = ["tutorial", "artigo", "noticia", "entrevista"];

  return (
    <section className="posts-list">
      <h2>Lista de Posts</h2>
      <div className="posts-count">
        <h3>
          Atualmente, você tem {posts.length > 0 ? posts.length : "0"} posts
          cadastrados
        </h3>
        {posts.length > 0 ? (
          categories.map((category) => (
            <p key={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}:{" "}
              {posts.filter((post) => post.category === category).length}
            </p>
          ))
        ) : (
          <p>Nenhum post encontrado</p>
        )}
      </div>

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
