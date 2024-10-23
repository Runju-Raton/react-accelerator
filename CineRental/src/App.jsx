import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import MovieList from "./cine/MovieList.jsx";

function App() {
  return (
      <>
          <Header></Header>
          <main>
              <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                <Sidebar></Sidebar>
                  <MovieList></MovieList>
              </div>
          </main>
      </>
  )
}

export default App
