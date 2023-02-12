import { Movie } from "../interfaces";
import { MovieCard } from "./MovieCard";
import "../styles/content.scss";
import { Header } from "./Header";

type ContentProps = {
    movies: Movie[];
    category: string;
};
export function Content({ movies, category }: ContentProps) {
    return (
        <div className="container">
            <Header category={category} />
            <main>
                <div className="movies-list">
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.imdbID}
                            title={movie.Title}
                            poster={movie.Poster}
                            runtime={movie.Runtime}
                            rating={movie.Ratings[0].Value}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}
