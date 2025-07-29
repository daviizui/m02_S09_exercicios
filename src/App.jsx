import { useEffect, useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  function savePost(event) {
    event.preventDefault();
    if (!title) {
      toast.error("Título é obrigatório!");
      return;
    }
    if (!description) {
      toast.error("Descrição é obrigatória!");
      return;
    }
    if (
      !image ||
      (!image.startsWith("https://") && !image.startsWith("http://"))
    ) {
      toast.error(
        "A URL da imagem de capa é obrigatória e deve começar com 'http://' ou 'https://'!"
      );
      return;
    }
    const today = new Date().toISOString().split("T")[0];
    if (!date) {
      toast.error("Data de publicação é obrigatória!");
      return;
    }
    if (date < today) {
      toast.error(
        "A data de publicação deve ser uma data no presente ou futuro."
      );
      return;
    }
    if (!category) {
      toast.error("Tipo do post é obrigatório!");
      return;
    } else {
      const post = {
        title,
        description,
        image,
        date,
        category,
      };
      setPosts((prevPosts) => {
        const updatedPosts = [...prevPosts, post];
        localStorage.setItem("posts", JSON.stringify(updatedPosts));
        return updatedPosts;
      });
      toast.success("Post salvo com sucesso!");
      setTitle("");
      setDescription("");
      setImage("");
      setDate("");
      setCategory("");
    }
  }

  return (
    <>
      <section className="container">
        <div>
          <p>Total de posts:</p>
          {posts.length > 0 ? (
            <p>{posts.length}</p>
          ) : (
            <p>Nenhum post encontrado</p>
          )}
        </div>
        <h2>Novo Post</h2>
        <form className="form" onSubmit={savePost}>
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            name="description"
            required
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <label htmlFor="image">URL da imagem de capa</label>
          <input
            type="url"
            id="image"
            name="image"
            required
            placeholder="URL da imagem de capa"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <label htmlFor="date">Data de publicação</label>
          <input
            type="date"
            id="date"
            name="date"
            required
            placeholder="Data de publicação"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label htmlFor="category">Tipo do post</label>
          <select
            id="category"
            name="category"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Selecione uma categoria</option>
            <option value="artigo">Artigo</option>
            <option value="noticia">Notícia</option>
            <option value="tutorial">Tutorial</option>
            <option value="entrevista">Entrevista</option>
          </select>
          <button type="submit">Salvar</button>
          <ToastContainer />
        </form>
      </section>
    </>
  );
}

export default App;
