import "./App.css";
import MovieCard from "./components/MovieCard";

const App = () => {  
  return (
    <>
    <MovieCard movie={{title: "Thor", release_date:"2024" }} />
    </>
  )
}

export default App