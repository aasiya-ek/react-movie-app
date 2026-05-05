import "./App.css";
import MovieCard from "./components/MovieCard";

const App = () => {
  return (
    <>
      <MovieCard movie={{ title: "Thor", release_date: "2024" }} />
      <MovieCard movie={{ title: "Iron Man", release_date: "2008" }} />
    </>
  );
};

export default App;
