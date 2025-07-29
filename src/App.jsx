import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");

  function savePost(event) {
    event.preventDefault();
    console.log(title, description);
  }

  return (
    <>
      <section className="container">
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
          <button type="submit">Salvar</button>
        </form>
      </section>
    </>
  );
}

export default App;
