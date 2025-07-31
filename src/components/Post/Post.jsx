import "./Post.css";

export default function Post({ post, handleDelete }) {
  const postDate = new Date(post.date);
  const formattedDate = postDate.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <article className="post">
      <img src={post.image} alt={`Imagem de capa do post: ${post.title}`} />
      <div className="post-info">
        <span>{post.category}</span>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <div className="post-footer">
          <p>Publicadoem: {formattedDate}</p>
          <button onClick={() => handleDelete(post.id)}>Excluir</button>
        </div>
      </div>
    </article>
  );
}
