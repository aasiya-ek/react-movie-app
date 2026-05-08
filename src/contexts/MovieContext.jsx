import { createContext, useState, useContext, useEffect
 } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
const [favorites, setfavorites] = useState([])

useEffect(() => {
    const storedFavs = localStorage.getItem("favorites")
    if(storedFavs) setfavorites(JSON.parse(storedFavs))
}, [])


    return <MovieContext.Provider>
        {children}
    </MovieContext.Provider>
}