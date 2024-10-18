import "./App.css";
import AboutDeveloper from "./components/AboutDeveloper";
import MovieSearch from "./components/MovieSearch";

function App() {
  return (
    <div className="App">
      <MovieSearch />
      <AboutDeveloper />
    </div>
  );
}

export default App;
