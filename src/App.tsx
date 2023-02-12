import { useEffect, useState } from "react";

import { Content } from "./components/Content";
import { SideBar } from "./components/SideBar";
import { Genre, Movie } from "./interfaces";
import { api } from "./services/api";

import "./styles/global.scss";

export function App() {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [movies, setMovies] = useState<Movie[]>([]);
    const [selectedGenre, setSelectedGenre] = useState<Genre>({} as Genre);

    useEffect(() => {
        api.get<Genre[]>("genres").then((response) => {
            setGenres(response.data);
            setSelectedGenre(response.data[0]);
        });
    }, []);

    useEffect(() => {
        if (!selectedGenre.id) return;
        api.get<Movie[]>(`movies/?Genre_id=${selectedGenre.id}`).then(
            (response) => {
                setMovies(response.data);
            }
        );
    }, [selectedGenre.id]);

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <SideBar
                onSelectedGenreChanged={(genre) => setSelectedGenre(genre)}
                selectedGenre={selectedGenre}
                genres={genres}
            />

            <Content movies={movies} category={selectedGenre.title} />
        </div>
    );
}
