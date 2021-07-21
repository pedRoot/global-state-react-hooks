import { UserProvider } from "./contexts/UserContext";
import { MoviesProvider } from "./contexts/MoviesContext";

import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div>
      <UserProvider>
        <MoviesProvider>
          <Navbar />
          <MovieList />
        </MoviesProvider>
      </UserProvider>
    </div>
  );
}

export default App;
