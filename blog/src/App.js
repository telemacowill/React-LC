import Header from "./components/Header";
import Post from "./components/Post"
import Footer from "./components/Footer";

function App() {
  const name = "Angelo Telêmaco";
  // ...

  return (
    <>
      <Header />

      <main>
          <Post title="Meu Primeiro Post" readingTime={1}>
            <p>Introdução...</p>
            <p>Desenvolvimento da Ideia...</p>
            <p>Conclusão...</p>
          </Post>

          <Post title="Meu Segundo Post" readingTime={1}>
            <p>
              <em>Texto em Italico</em>
            </p>          
          </Post>
      </main>

      <Footer />
    </>
  );  
}

export default App;
