import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
          <button type="submit">Salvar</button>
        </form>
      </section>
    </>
  );
}

export default App;
