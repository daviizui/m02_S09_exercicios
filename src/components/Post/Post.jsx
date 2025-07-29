import "./Post.css";

export default function Post({ category, title, description, date, image }) {
  const postDate = new Date(date);
  const formattedDate = postDate.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <article className="post">
      <img src={image} alt={`Imagem de capa do post: ${title}`} />
      <div className="post-info">
        <span>{category}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="post-footer">
          <p>Publicadoem: {formattedDate}</p>
          <button>Excluir</button>
        </div>
      </div>
    </article>
  );
}
